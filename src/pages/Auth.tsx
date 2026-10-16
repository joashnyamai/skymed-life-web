
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Heart, Clock, Copy, Check, LogOut, Sparkles } from 'lucide-react';
import { getFriendlyErrorMessage } from '@/lib/friendlyError';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signInError, setSignInError] = useState('');
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  const [copiedUid, setCopiedUid] = useState(false);
  const { user, signIn, signUp, signOut, isAdmin } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Automatically redirect as soon as admin access is detected in Firestore
  useEffect(() => {
    if (isAdmin) {
      toast({
        title: "Admin Access Granted",
        description: "Redirecting you to the Create Post page...",
      });
      navigate('/admin?create=true');
    }
  }, [isAdmin, navigate, toast]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn(email, password);
      if (result.error) {
        const message = getFriendlyErrorMessage(result.error, 'Please check your email and password, then try again.');
        setSignInError(message);
        toast({ title: "Sign in failed", description: message, variant: "destructive" });
      } else if (result.isAdmin) {
        setSignInError('');
        toast({
          title: "Welcome Admin!",
          description: "Taking you to create a blog post...",
        });
        navigate('/admin?create=true');
      } else {
        setSignInError('');
        toast({
          title: "Signed In",
          description: "Your account is active. Waiting for admin permissions in Firestore.",
        });
      }
    } catch {
      const message = 'We could not sign you in. Please check your details and try again.';
      setSignInError(message);
      toast({ title: "Sign in failed", description: message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Enter the same password in both password fields.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    const { error } = await signUp(email, password);
    
    if (error) {
      toast({
        title: "Sign up failed",
        description: getFriendlyErrorMessage(error, 'We could not create your account. Check your details and try again.'),
        variant: "destructive"
      });
    } else {
      setPassword('');
      setConfirmPassword('');
      toast({
        title: "Account Created!",
        description: "Set admin: true on your UID in Firestore. You will be redirected automatically once granted."
      });
    }
    
    setLoading(false);
  };

  const handleCopyUid = () => {
    if (!user?.uid) return;
    navigator.clipboard.writeText(user.uid);
    setCopiedUid(true);
    toast({ title: "Copied!", description: "UID copied to clipboard." });
    setTimeout(() => setCopiedUid(false), 2000);
  };

  return (
    <div className="min-h-screen bg-medical-lightBlue/40 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-medical-lightBlue rounded-full p-3">
              <Heart className="h-8 w-8 text-medical-blue" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-medical-blue">
            SkyLife Medical Admin
          </CardTitle>
          <CardDescription>
            Sign in or create an account to manage clinic blog posts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {user && !isAdmin && (
            <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 space-y-3">
              <div className="flex items-center gap-2 font-medium text-sm text-amber-700 dark:text-amber-400">
                <Clock className="h-4 w-4 animate-spin shrink-0" />
                <span>Waiting for Admin Access</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Logged in as <strong className="text-foreground">{user.email}</strong>. In Firebase Console Firestore, set <code className="bg-background px-1.5 py-0.5 rounded font-mono text-foreground font-semibold">admin: true</code> on document ID:
              </p>
              <div className="flex items-center gap-2">
                <Input
                  readOnly
                  value={user.uid}
                  className="font-mono text-xs bg-background h-8"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={handleCopyUid}
                  className="h-8 px-2.5 shrink-0 text-xs gap-1"
                >
                  {copiedUid ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedUid ? "Copied" : "Copy UID"}
                </Button>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-amber-500/15 text-xs">
                <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-[11px]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Auto-redirects upon Firestore update
                </span>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="text-muted-foreground hover:text-foreground text-xs inline-flex items-center gap-1 underline underline-offset-2"
                >
                  <LogOut className="h-3 w-3" />
                  Sign out
                </button>
              </div>
            </div>
          )}
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'signin' | 'signup')} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setSignInError(''); }}
                    required
                  />
                </div>
                <div className="relative">
                  <Input
                    type={showSignInPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setSignInError(''); }}
                    required
                    autoComplete="current-password"
                    className="pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignInPassword((visible) => !visible)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-medical-blue hover:text-medical-orange"
                    aria-label={showSignInPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showSignInPassword}
                  >
                    {showSignInPassword ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
                  </button>
                </div>
                {signInError && (
                  <p className="rounded-md bg-medical-lightOrange px-3 py-2 text-sm text-medical-orange" role="alert">
                    {signInError}
                  </p>
                )}
                <Button 
                  type="submit" 
                  className="w-full bg-medical-lightBlue hover:bg-medical-blue/10 text-medical-blue"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="relative">
                  <Input
                    type={showSignUpPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    autoComplete="new-password"
                    className="pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignUpPassword((visible) => !visible)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-medical-blue hover:text-medical-orange"
                    aria-label={showSignUpPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showSignUpPassword}
                  >
                    {showSignUpPassword ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
                  </button>
                </div>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                    autoComplete="new-password"
                    className="pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((visible) => !visible)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-medical-blue hover:text-medical-orange"
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showConfirmPassword}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
                  </button>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-medical-lightOrange hover:bg-medical-orange/15 text-medical-orange"
                  disabled={loading}
                >
                  {loading ? 'Creating account...' : 'Sign Up'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
