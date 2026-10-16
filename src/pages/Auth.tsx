
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
    <div className="min-h-screen bg-gradient-to-br from-medical-lightBlue/50 via-background to-medical-lightOrange/30 dark:from-slate-950 dark:via-background dark:to-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-medical-blue/15 dark:bg-medical-blue/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-medical-orange/15 dark:bg-medical-orange/10 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Branding / Trust Panel (Desktop) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-medical-blue/10 via-medical-lightBlue/40 to-transparent border border-medical-blue/20 backdrop-blur-md shadow-sm h-full min-h-[580px]">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-card/80 border border-medical-blue/20 text-medical-blue text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-medical-blue" />
              Clinical Administration
            </div>

            <h1 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
              Empowering Health, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-orange">
                Enriching Lives
              </span>
            </h1>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Welcome to the SkyLife Medical editorial and administration portal. Authorized clinical staff can publish healthcare guides, update clinic news, and manage wellness communications.
            </p>

            <div className="space-y-4">
              {[
                { title: "Real-time Access Dispatch", desc: "Automatic role recognition via Firestore security rules." },
                { title: "Clinical Journal CMS", desc: "Draft and publish medical articles for patients across Kenya." },
                { title: "Secure Authentication", desc: "Protected by Google Firebase enterprise authentication." },
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 dark:bg-card/70 border border-border/60 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-medical-lightBlue text-medical-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">{feat.title}</div>
                    <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-medical-blue/15 text-xs text-muted-foreground flex items-center justify-between">
            <span>SkyLife Medical Clinic</span>
            <span className="font-semibold text-medical-blue">Kenya</span>
          </div>
        </div>

        {/* Right Authentication Form Card */}
        <div className="lg:col-span-7 flex justify-center">
          <Card className="w-full max-w-lg rounded-3xl border border-border/80 bg-card/95 backdrop-blur-xl shadow-2xl p-6 sm:p-9 transition-all">
            <CardHeader className="text-center p-0 pb-6">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-medical-lightBlue to-sky-100 dark:from-medical-blue/20 dark:to-sky-900/30 flex items-center justify-center border border-medical-blue/20 shadow-xs">
                  <Heart className="h-7 w-7 text-medical-blue" />
                </div>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                SkyLife Clinical Portal
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
                Sign in or register an account to access blog publishing and administration.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0">
              {/* Waiting status card for signed-in non-admin */}
              {user && !isAdmin && (
                <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 space-y-3 animate-fade-in shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-700 dark:text-amber-400">
                    <Clock className="h-4 w-4 animate-spin shrink-0 text-amber-500" />
                    <span>Pending Administrator Access</span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Logged in as <strong className="text-foreground">{user.email}</strong>. In Firebase Console Firestore, set <code className="bg-background px-1.5 py-0.5 rounded font-mono text-foreground font-bold">admin: true</code> on document ID:
                  </p>
                  <div className="flex items-center gap-2">
                    <Input
                      readOnly
                      value={user.uid}
                      className="font-mono text-xs bg-background h-9 rounded-xl"
                    />
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={handleCopyUid}
                      className="h-9 px-3 shrink-0 text-xs font-semibold rounded-xl gap-1.5 border-amber-500/30 hover:bg-amber-500/10"
                    >
                      {copiedUid ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />}
                      {copiedUid ? "Copied" : "Copy UID"}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-amber-500/15 text-xs">
                    <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-[11px] font-medium">
                      <Sparkles className="h-3.5 w-3.5" />
                      Auto-redirects upon Firestore update
                    </span>
                    <button
                      type="button"
                      onClick={() => signOut()}
                      className="text-muted-foreground hover:text-foreground text-xs font-semibold inline-flex items-center gap-1 underline underline-offset-2"
                    >
                      <LogOut className="h-3 w-3" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}

              <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'signin' | 'signup')} className="w-full">
                <TabsList className="grid w-full grid-cols-2 p-1.5 rounded-2xl bg-muted/60 mb-6 border border-border/60">
                  <TabsTrigger value="signin" className="rounded-xl text-xs sm:text-sm font-bold py-2 data-[state=active]:bg-background data-[state=active]:shadow-xs transition-all">
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="rounded-xl text-xs sm:text-sm font-bold py-2 data-[state=active]:bg-background data-[state=active]:shadow-xs transition-all">
                    Register Account
                  </TabsTrigger>
                </TabsList>
                
                {/* Sign In Tab */}
                <TabsContent value="signin" className="mt-0 focus-visible:outline-none">
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Email Address</label>
                      <Input
                        type="email"
                        placeholder="doctor@skylifemedicalclinic.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setSignInError(''); }}
                        required
                        className="rounded-2xl h-12 bg-background border-input focus-visible:ring-medical-blue text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Password</label>
                      <div className="relative">
                        <Input
                          type={showSignInPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => { setPassword(e.target.value); setSignInError(''); }}
                          required
                          autoComplete="current-password"
                          className="pr-12 rounded-2xl h-12 bg-background border-input focus-visible:ring-medical-blue text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowSignInPassword((visible) => !visible)}
                          className="absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground hover:text-medical-blue"
                          aria-label={showSignInPassword ? 'Hide password' : 'Show password'}
                          aria-pressed={showSignInPassword}
                        >
                          {showSignInPassword ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
                        </button>
                      </div>
                    </div>

                    {signInError && (
                      <p className="rounded-2xl bg-medical-lightOrange border border-medical-orange/20 px-4 py-2.5 text-xs text-medical-orange font-medium" role="alert">
                        {signInError}
                      </p>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-medical-blue hover:bg-medical-blue/90 text-white font-bold rounded-2xl py-6 text-sm shadow-sm transition-all duration-200 mt-2"
                      disabled={loading}
                    >
                      {loading ? 'Authenticating...' : 'Sign In to Portal'}
                    </Button>
                  </form>
                </TabsContent>
                
                {/* Sign Up Tab */}
                <TabsContent value="signup" className="mt-0 focus-visible:outline-none">
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="rounded-2xl h-12 bg-background border-input focus-visible:ring-medical-blue text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Create Password</label>
                      <div className="relative">
                        <Input
                          type={showSignUpPassword ? 'text' : 'password'}
                          placeholder="Minimum 6 characters"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          minLength={6}
                          autoComplete="new-password"
                          className="pr-12 rounded-2xl h-12 bg-background border-input focus-visible:ring-medical-blue text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowSignUpPassword((visible) => !visible)}
                          className="absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground hover:text-medical-blue"
                          aria-label={showSignUpPassword ? 'Hide password' : 'Show password'}
                          aria-pressed={showSignUpPassword}
                        >
                          {showSignUpPassword ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Confirm Password</label>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Repeat password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          minLength={6}
                          autoComplete="new-password"
                          className="pr-12 rounded-2xl h-12 bg-background border-input focus-visible:ring-medical-blue text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword((visible) => !visible)}
                          className="absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground hover:text-medical-blue"
                          aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                          aria-pressed={showConfirmPassword}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
                        </button>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-medical-lightOrange hover:bg-medical-orange/20 text-medical-orange font-bold rounded-2xl py-6 text-sm border border-medical-orange/30 shadow-xs transition-all duration-200 mt-2"
                      disabled={loading}
                    >
                      {loading ? 'Registering Account...' : 'Create Account'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 pt-5 border-t border-border/60 text-center">
                <a
                  href="/"
                  className="text-xs font-medium text-muted-foreground hover:text-medical-blue transition-colors"
                >
                  ← Back to Public Website
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
