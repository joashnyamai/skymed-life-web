import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-medical-navy text-white" role="contentinfo">
      {/* Location notice */}
      <div className="bg-amber-500/20 border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-300 mt-0.5 flex-shrink-0" aria-hidden="true"/>
          <p className="text-xs text-amber-200 leading-snug">
            <strong className="font-semibold">Location notice:</strong> The clinic serves Kisumu County. Postal address displayed is pending verification — please call{" "}
            <a href="tel:+254101517171" className="underline hover:text-white font-semibold">+254 101 517 171</a>{" "}
            to confirm your visit location before travelling.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src={logoAsset.url}
                alt="SkyLife Medical Clinic — Empowering Health, Enriching Lives"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Providing comprehensive healthcare services to the Kisumu County community with
              professional care, modern facilities, and a commitment to your wellbeing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/50 mb-4">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {[
                { label: "Home",        href: "/" },
                { label: "Our Services",href: "/services" },
                { label: "Health Blog", href: "/blog" },
                { label: "Contact Us",  href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-medical-orange/60 group-hover:bg-medical-orange transition-colors" aria-hidden="true"/>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/50 mb-4">Contact</h3>
            <ul className="space-y-3" role="list">
              <li>
                <a href="tel:+254101517171" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors group" aria-label="Call +254 101 517 171">
                  <Phone className="h-4 w-4 text-medical-orange/70 group-hover:text-medical-orange flex-shrink-0" aria-hidden="true"/>
                  +254 101 517 171
                </a>
              </li>
              <li>
                <a href="mailto:info@skylifemedicalclinic.com" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors group break-all" aria-label="Email clinic">
                  <Mail className="h-4 w-4 text-medical-orange/70 group-hover:text-medical-orange flex-shrink-0" aria-hidden="true"/>
                  info@skylifemedicalclinic.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-white/60">
                  <MapPin className="h-4 w-4 text-medical-orange/70 flex-shrink-0 mt-0.5" aria-hidden="true"/>
                  <span>P.O. Box 61413-00200<br/>Kisumu County, Kenya</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-sm text-white/60">
                  <Clock className="h-4 w-4 text-medical-orange/70 flex-shrink-0" aria-hidden="true"/>
                  Mon – Sun: 8:00 AM – 9:00 PM
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© {year} SkyLife Medical Clinic. All rights reserved.</p>
          <p className="text-xs text-white/40">Kisumu County, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
