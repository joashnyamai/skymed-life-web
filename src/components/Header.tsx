import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/skylife-logo.png";
import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";

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
          ? "glass shadow-card border-b border-border/60"
          : "bg-background/80 backdrop-blur border-b border-transparent"
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
            <img
              src={logo}
              alt="SkyLife Medical Clinic — Empowering Health, Enriching Lives"
              className="h-11 w-auto object-contain md:h-14"
            />
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
                    : "text-medical-gray hover:text-medical-blue hover:bg-medical-lightBlue dark:hover:bg-medical-blue/10"
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
            <Button asChild variant="ghost" size="sm" className="text-medical-gray hover:text-medical-blue text-sm font-medium">
              <Link to="/auth">Admin</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-medical-lightOrange hover:bg-medical-orange/15 text-medical-orange font-semibold px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" aria-label="Book an appointment on WhatsApp">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Booking
              </a>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-1.5">
            <ThemeToggle />
            <Button asChild size="sm" className="bg-medical-lightOrange hover:bg-medical-orange/15 text-medical-orange h-8 w-8 p-0 rounded-lg">
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" aria-label="Book on WhatsApp">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
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
                    : "text-medical-gray hover:text-medical-blue hover:bg-medical-lightBlue dark:hover:bg-medical-blue/10"
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
              <Button asChild className="w-full bg-medical-lightOrange hover:bg-medical-orange/15 text-medical-orange rounded-xl text-sm">
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
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
