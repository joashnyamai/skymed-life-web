import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth';
import { doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, getFirebaseAuth, getFirebaseDb } from '@/integrations/firebase/client';

export const userHasAdminRole = async (user: User) => {
  try {
    const userSnapshot = await getDoc(doc(getFirebaseDb(), 'users', user.uid));
    return userSnapshot.exists() && userSnapshot.data().admin === true;
  } catch {
    return false;
  }
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
    let unsubscribeDoc: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!isActive) return;
      setUser(currentUser);

      if (unsubscribeDoc) {
        unsubscribeDoc();
        unsubscribeDoc = null;
      }

      if (!currentUser) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      // Real-time listener: detects the moment admin: true is set in Firestore
      try {
        const userDocRef = doc(getFirebaseDb(), 'users', currentUser.uid);
        unsubscribeDoc = onSnapshot(
          userDocRef,
          (snapshot) => {
            if (!isActive) return;
            const data = snapshot.data();
            const hasAdmin = Boolean(snapshot.exists() && data?.admin === true);
            setIsAdmin(hasAdmin);
            setLoading(false);
          },
          (error) => {
            console.error('Error listening to user admin status:', error);
            if (isActive) {
              setIsAdmin(false);
              setLoading(false);
            }
          }
        );
      } catch (err) {
        console.error('Error attaching user document listener:', err);
        if (isActive) {
          setIsAdmin(false);
          setLoading(false);
        }
      }
    });

    return () => {
      isActive = false;
      if (unsubscribeDoc) {
        unsubscribeDoc();
      }
      unsubscribeAuth();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const credential = await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      const isUserAdmin = await userHasAdminRole(credential.user);
      return { user: credential.user, isAdmin: isUserAdmin, error: null };
    } catch (error) {
      return { user: null, isAdmin: false, error: error as Error };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const credential = await createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
      await setDoc(doc(getFirebaseDb(), 'users', credential.user.uid), {
        email: credential.user.email,
        admin: false,
        createdAt: serverTimestamp(),
      });
      // User stays signed in so onSnapshot can detect when admin is granted in Firestore
      return { user: credential.user, error: null };
    } catch (error) {
      return {
        user: null,
        error: error instanceof Error ? error : new Error('Account registration failed.'),
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