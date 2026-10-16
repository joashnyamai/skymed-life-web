import { MessageCircle, Mail, MapPin, Clock, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/skylife-logo.png";
import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-gradient-to-b from-background via-medical-lightBlue/30 to-medical-lightBlue/60 dark:from-background dark:to-card/60 text-foreground transition-colors duration-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue rounded-lg">
              <img
                src={logo}
                alt="SkyLife Medical Clinic — Empowering Health, Enriching Lives"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Providing comprehensive, accessible healthcare services across Kenya with professional clinical care, modern diagnostic facilities, and an unwavering commitment to patient wellbeing.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-medical-lightBlue text-medical-blue border border-medical-blue/20">
                <ShieldCheck className="h-3.5 w-3.5 text-medical-blue" />
                Licensed Healthcare Provider
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-medical-lightOrange text-medical-orange border border-medical-orange/20">
                <Heart className="h-3.5 w-3.5 text-medical-orange" />
                SHA Accepted
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-medical-blue dark:text-sky-400 mb-4">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {[
                { label: "Home",        href: "/" },
                { label: "Our Services",href: "/services" },
                { label: "Health Blog", href: "/blog" },
                { label: "Contact Us",  href: "/contact" },
                { label: "Admin Portal",href: "/auth" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-muted-foreground hover:text-medical-blue dark:hover:text-sky-400 transition-colors duration-150 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-medical-orange/60 group-hover:bg-medical-orange group-hover:scale-125 transition-all" aria-hidden="true"/>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-medical-blue dark:text-sky-400 mb-4">Get In Touch</h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-medical-blue dark:hover:text-sky-400 transition-colors group"
                  aria-label="Book on WhatsApp: +254 101 517 171"
                >
                  <div className="w-7 h-7 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-4 w-4" aria-hidden="true"/>
                  </div>
                  <span className="font-medium">+254 101 517 171</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@skylifemedicalclinic.com"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-medical-blue dark:hover:text-sky-400 transition-colors group break-all"
                  aria-label="Email clinic"
                >
                  <div className="w-7 h-7 rounded-lg bg-medical-lightBlue text-medical-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-4 w-4" aria-hidden="true"/>
                  </div>
                  <span>info@skylifemedicalclinic.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <div className="w-7 h-7 rounded-lg bg-medical-lightOrange text-medical-orange flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" aria-hidden="true"/>
                  </div>
                  <span>P.O. Box 61413-00200-Nbi<br/>Nairobi, Kenya</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="w-7 h-7 rounded-lg bg-medical-lightBlue text-medical-blue flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4" aria-hidden="true"/>
                  </div>
                  <span>Mon – Sun: 8:00 AM – 9:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/80 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {year} SkyLife Medical Clinic. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Modern Healthcare in Kenya</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-medical-blue transition-colors">Emergency & Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
