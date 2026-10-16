type CodedError = {
  code?: unknown;
  message?: unknown;
};

const friendlyMessages: Record<string, string> = {
  'app/admin-role-required': 'This account is not an administrator. Please contact the site administrator for access.',
  'auth/email-already-in-use': 'An account with this email already exists. Try signing in instead.',
  'auth/invalid-email': 'Enter a valid email address and try again.',
  'auth/weak-password': 'Choose a stronger password with at least 6 characters.',
  'auth/invalid-credential': 'Email or password is incorrect. Check your details and try again.',
  'auth/wrong-password': 'Email or password is incorrect. Check your details and try again.',
  'auth/user-not-found': 'Email or password is incorrect. Check your details and try again.',
  'auth/too-many-requests': 'Too many attempts. Please wait a little and try again.',
  'auth/network-request-failed': 'Could not connect to the service. Check your internet connection and try again.',
  'auth/operation-not-allowed': 'This sign-in method is currently unavailable. Please contact the site administrator.',
  'firestore/permission-denied': 'We could not access the required account data. Please try again or contact the site administrator.',
  'permission-denied': 'We could not access the required account data. Please try again or contact the site administrator.',
  'firestore/unavailable': 'The service is temporarily unavailable. Please try again shortly.',
  unavailable: 'The service is temporarily unavailable. Please try again shortly.',
  'firestore/not-found': 'The database service is not ready yet. Please contact the site administrator.',
  'not-found': 'The database service is not ready yet. Please contact the site administrator.',
  'firestore/failed-precondition': 'The service is not ready yet. Please contact the site administrator.',
  'failed-precondition': 'The service is not ready yet. Please contact the site administrator.',
};

export const getFriendlyErrorMessage = (error: unknown, fallback: string): string => {
  const codedError = error as CodedError | null;
  const code = codedError?.code;

  if (typeof codedError?.message === 'string'
    && codedError.message.toLowerCase().includes('firebase is not configured')) {
    return 'Sign-in is temporarily unavailable. Please try again later.';
  }

  return typeof code === 'string' ? friendlyMessages[code] ?? fallback : fallback;
};
