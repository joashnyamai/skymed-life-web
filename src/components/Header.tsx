import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home",     href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog",     href: "/blog" },
    { name: "Contact",  href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue rounded-lg p-1"
            aria-label="SkyLife Medical Clinic — Home"
          >
            <div className="w-9 h-9 rounded-xl bg-medical-blue flex items-center justify-center shadow-sm group-hover:bg-medical-blue/90 transition-colors">
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                <rect x="9" y="3" width="2" height="7" rx="1" fill="currentColor"/>
                <rect x="6" y="6" width="8" height="2" rx="1" fill="currentColor"/>
                <path d="M3 11c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v6H3v-6z" fill="currentColor" opacity="0.2"/>
              </svg>
            </div>
            <div className="leading-none">
              <div className="font-bold text-[17px] text-medical-blue tracking-tight">SkyLife</div>
              <div className="text-[10px] font-medium text-medical-gray tracking-widest uppercase -mt-0.5">Medical Clinic</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-medical-blue bg-medical-lightBlue"
                    : "text-medical-gray hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-medical-blue rounded-full" aria-hidden="true"/>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm" className="text-medical-gray hover:text-gray-900 text-sm font-medium">
              <Link to="/auth">Admin</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-medical-orange hover:bg-medical-orange/90 text-white font-semibold px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <a href="tel:+254101517171" className="flex items-center gap-2" aria-label="Call to book: +254 101 517 171">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-1.5">
            <ThemeToggle />
            <Button asChild size="sm" className="bg-medical-orange hover:bg-medical-orange/90 text-white h-8 w-8 p-0 rounded-lg">
              <a href="tel:+254101517171" aria-label="Call clinic">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              variant="ghost" size="sm"
              className="h-9 w-9 p-0 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true"/> : <Menu className="h-5 w-5" aria-hidden="true"/>}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-border bg-background animate-fade-in"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2.5 text-[15px] font-medium rounded-xl transition-colors ${
                  isActive(item.href)
                    ? "text-medical-blue bg-medical-lightBlue"
                    : "text-medical-gray hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 pb-1 grid grid-cols-2 gap-2">
              <Button asChild variant="outline" className="w-full rounded-xl text-sm">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Admin</Link>
              </Button>
              <Button asChild className="w-full bg-medical-orange hover:bg-medical-orange/90 text-white rounded-xl text-sm">
                <a href="tel:+254101517171" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
