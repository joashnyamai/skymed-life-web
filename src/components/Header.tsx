
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-medical-blue rounded-full p-2">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-medical-blue">SkyLife</div>
              <div className="text-xs text-medical-gray -mt-1">Medical Clinic</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-medical-blue ${
                  isActive(item.href)
                    ? "text-medical-blue border-b-2 border-medical-blue pb-1"
                    : "text-medical-gray"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
            >
              <Link to="/auth">Admin</Link>
            </Button>
            <Button
              asChild
              className="bg-medical-orange hover:bg-medical-orange/90 text-white"
            >
              <a href="tel:+254101517171" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Book Now</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-medical-blue hover:bg-medical-lightBlue rounded-md ${
                    isActive(item.href)
                      ? "text-medical-blue bg-medical-lightBlue"
                      : "text-medical-gray"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <Link to="/auth">Admin</Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-medical-orange hover:bg-medical-orange/90 text-white"
                >
                  <a href="tel:+254101517171" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Book Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
