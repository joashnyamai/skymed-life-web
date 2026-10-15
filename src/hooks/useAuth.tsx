import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth';
import { auth, configuredAdminUid, getFirebaseAuth } from '@/integrations/firebase/client';

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

      setIsAdmin(Boolean(configuredAdminUid) && currentUser.uid === configuredAdminUid);
      setLoading(false);
    });

    return () => {
      isActive = false;
      unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const credential = await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      if (!configuredAdminUid || credential.user.uid !== configuredAdminUid) {
        await firebaseSignOut(getFirebaseAuth());
        throw new Error('This account is not configured as the site admin. Set its Firebase user UID in VITE_FIREBASE_ADMIN_UID and firestore.rules.');
      }
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const credential = await createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
      await firebaseSignOut(getFirebaseAuth());

      return { error: null };
    } catch (error) {
      return { error: error as Error };
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