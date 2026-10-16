import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, getFirebaseAuth, getFirebaseDb } from '@/integrations/firebase/client';

const userHasAdminRole = async (user: User) => {
  const userSnapshot = await getDoc(doc(getFirebaseDb(), 'users', user.uid));
  return userSnapshot.exists() && userSnapshot.data().admin === true;
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    let isActive = true;
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!isActive) return;
      setUser(currentUser);

      if (!currentUser) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        setIsAdmin(await userHasAdminRole(currentUser));
      } catch {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    });

    return () => {
      isActive = false;
      unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const credential = await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      if (!(await userHasAdminRole(credential.user))) {
        await firebaseSignOut(getFirebaseAuth());
        throw new Error('This account does not have the admin role. Ask an existing admin to enable it in the users collection.');
      }
      return { error: null };
    } catch (error) {
      if (auth?.currentUser) {
        await firebaseSignOut(auth).catch(() => undefined);
      }
      return { error: error as Error };
    }
  };

  const signUp = async (email: string, password: string) => {
    let authAccountCreated = false;

    try {
      const credential = await createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
      authAccountCreated = true;
      await setDoc(doc(getFirebaseDb(), 'users', credential.user.uid), {
        email: credential.user.email,
        admin: false,
        createdAt: serverTimestamp(),
      });
      await firebaseSignOut(getFirebaseAuth());

      return { error: null };
    } catch (error) {
      if (authAccountCreated && auth?.currentUser) {
        await firebaseSignOut(auth).catch(() => undefined);
      }

      return {
        error: new Error(authAccountCreated
          ? 'Account created but profile setup failed.'
          : 'Account registration failed.'),
      };
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(getFirebaseAuth());
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  return { user, isAdmin, loading, signIn, signUp, signOut };
};