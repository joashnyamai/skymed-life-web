import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-medical-lightBlue/50 via-background to-medical-lightOrange/30 dark:from-slate-950 dark:via-background dark:to-slate-900">
      <div className="max-w-md w-full text-center p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-2xl animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-medical-lightOrange text-medical-orange mx-auto mb-6 flex items-center justify-center shadow-xs border border-medical-orange/20">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="text-5xl font-extrabold text-foreground mb-3 tracking-tight">404</h1>
        <h2 className="text-xl font-bold text-foreground mb-2">Page Not Found</h2>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          The page you are looking for doesn't exist or has been relocated within the SkyLife Medical portal.
        </p>
        <Button asChild className="w-full bg-medical-blue hover:bg-medical-blue/90 text-white font-bold rounded-2xl py-6 text-sm shadow-sm">
          <Link to="/" className="inline-flex items-center justify-center gap-2">
            <Home className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
