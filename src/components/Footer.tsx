
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-medical-blue rounded-full p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">SkyLife Medical Clinic</div>
                <div className="text-sm text-gray-400">Empowering Health, Enriching Lives</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Providing comprehensive healthcare services to the Nairobi community with 
              professional care, modern facilities, and a commitment to your wellbeing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Health Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-medical-orange" />
                <span className="text-gray-300">+254 101 517 171</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-medical-orange" />
                <span className="text-gray-300">info@skylifemedicalclinic.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-medical-orange mt-0.5" />
                <span className="text-gray-300">P.O. Box 61413-00200<br />Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-medical-orange" />
                <span className="text-gray-300">Mon-Sun: 8:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SkyLife Medical Clinic. All rights reserved. | 
            <span className="ml-1">Licensed Healthcare Provider</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
