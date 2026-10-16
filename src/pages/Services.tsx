import {
  Stethoscope, Users, Heart, Baby, FlaskConical, Monitor,
  Pill, Activity, Shield, Clock, CheckCircle, ArrowRight, MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Comprehensive health assessments, routine check-ups, and medical consultations for patients of all ages.",
    features: ["Health screenings", "Routine check-ups", "Medical consultations", "Preventive care"],
    accent: "text-medical-blue bg-medical-lightBlue dark:bg-medical-blue/15 border-medical-blue/15",
    iconBg: "bg-medical-lightBlue dark:bg-medical-blue/15 text-medical-blue",
  },
  {
    icon: Users,
    title: "Family Planning",
    description: "Professional family planning services, contraceptive counseling, and reproductive health guidance.",
    features: ["Contraceptive counseling", "Family planning education", "Reproductive health", "Pregnancy planning"],
    accent: "text-medical-orange bg-medical-lightOrange dark:bg-medical-orange/15 border-medical-orange/20",
    iconBg: "bg-medical-lightOrange dark:bg-medical-orange/15 text-medical-orange",
  },
  {
    icon: Heart,
    title: "Diabetes Clinic",
    description: "Specialized diabetes management, monitoring services, and lifestyle counseling for diabetic patients.",
    features: ["Blood glucose monitoring", "Diabetes education", "Lifestyle counseling", "Medication management"],
    accent: "text-medical-blue bg-medical-lightBlue dark:bg-medical-blue/15 border-medical-blue/15",
    iconBg: "bg-medical-lightBlue dark:bg-medical-blue/15 text-medical-blue",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Comprehensive child health services from infancy through adolescence with specialized pediatric care.",
    features: ["Child immunizations", "Growth monitoring", "Developmental assessments", "Pediatric consultations"],
    accent: "text-medical-orange bg-medical-lightOrange dark:bg-medical-orange/15 border-medical-orange/20",
    iconBg: "bg-medical-lightOrange dark:bg-medical-orange/15 text-medical-orange",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "Complete diagnostic testing and laboratory analysis with accurate and timely results.",
    features: ["Blood tests", "Urine analysis", "Diagnostic testing", "Health screenings"],
    accent: "text-medical-blue bg-medical-lightBlue dark:bg-medical-blue/15 border-medical-blue/15",
    iconBg: "bg-medical-lightBlue dark:bg-medical-blue/15 text-medical-blue",
  },
  {
    icon: Monitor,
    title: "Telemedicine",
    description: "Remote consultation services for your convenience, offering healthcare from the comfort of your home.",
    features: ["Video consultations", "Remote monitoring", "Follow-up appointments", "Prescription refills"],
    accent: "text-medical-orange bg-medical-lightOrange dark:bg-medical-orange/15 border-medical-orange/20",
    iconBg: "bg-medical-lightOrange dark:bg-medical-orange/15 text-medical-orange",
  },
  {
    icon: Pill,
    title: "Chronic Disease Management",
    description: "Ongoing care and management for chronic conditions with personalized treatment plans.",
    features: ["Hypertension management", "Chronic disease monitoring", "Medication adherence", "Lifestyle modifications"],
    accent: "text-medical-blue bg-medical-lightBlue dark:bg-medical-blue/15 border-medical-blue/15",
    iconBg: "bg-medical-lightBlue dark:bg-medical-blue/15 text-medical-blue",
  },
  {
    icon: Activity,
    title: "Health Screenings",
    description: "Comprehensive health screenings and preventive care to detect health issues early.",
    features: ["Cancer screenings", "Cardiovascular assessments", "Wellness check-ups", "Health risk evaluations"],
    accent: "text-medical-orange bg-medical-lightOrange dark:bg-medical-orange/15 border-medical-orange/20",
    iconBg: "bg-medical-lightOrange dark:bg-medical-orange/15 text-medical-orange",
  },
  {
    icon: Shield,
    title: "Immunizations",
    description: "Complete vaccination services for children and adults, including travel vaccinations.",
    features: ["Childhood vaccines", "Adult immunizations", "Travel vaccines", "Flu shots"],
    accent: "text-medical-orange bg-medical-lightOrange dark:bg-medical-orange/15 border-medical-orange/20",
    iconBg: "bg-medical-lightOrange dark:bg-medical-orange/15 text-medical-orange",
  },
];

const insuranceProviders = [
  "SHA (Social Health Authority)",
  "Jubilee Insurance",
  "APA Insurance",
  "Britam Health",
  "Madison Insurance",
  "UAP Insurance",
  "CIC Insurance Group",
  "ICEA LION Insurance",
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 py-16 md:py-20 border-b border-border/80" aria-labelledby="services-h1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-lightBlue dark:bg-medical-blue/20 text-medical-blue dark:text-sky-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 border border-medical-blue/20 shadow-xs">
            Comprehensive Clinical Care
          </div>
          <h1 id="services-h1" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            Our Medical Specialties & Services
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Delivering accessible, evidence-based healthcare across Kenya with experienced clinical staff, modern diagnostic laboratories, and dedicated telemedicine options.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-muted/20" aria-label="Available services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group relative bg-card rounded-3xl p-7 border border-border/70 hover:border-medical-blue/40 shadow-sm hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 animate-fade-in flex flex-col justify-between"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 ${service.iconBg} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    <service.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2.5 tracking-tight">{service.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">Key Highlights</span>
                  <ul className="space-y-2.5" role="list" aria-label={`${service.title} features`}>
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                        <CheckCircle className="h-4 w-4 text-medical-blue shrink-0" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-card/60 backdrop-blur-md border-y border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hours */}
            <div className="rounded-3xl border border-medical-blue/20 bg-gradient-to-br from-medical-lightBlue/60 to-medical-lightBlue/20 dark:from-medical-blue/10 dark:to-transparent p-7 md:p-9 shadow-sm">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-medical-blue text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground tracking-tight">Operating Schedule</h2>
                  <p className="text-xs text-muted-foreground">Always ready to attend to you</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-medical-blue/15">
                  <span className="text-sm font-semibold text-foreground">Monday – Sunday</span>
                  <span className="text-base font-extrabold text-medical-blue dark:text-sky-400">8:00 AM – 9:00 PM</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Open every single day of the week, including weekends and public holidays, for emergency, walk-in, and scheduled appointments.
                </p>
                <Button
                  asChild
                  className="w-full mt-2 bg-medical-lightBlue hover:bg-medical-blue/15 text-medical-blue font-bold rounded-2xl py-6 text-sm border border-medical-blue/30 shadow-xs"
                >
                  <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2" aria-label="Book an appointment on WhatsApp">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Book on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Insurance */}
            <div className="rounded-3xl border border-border/80 bg-card p-7 md:p-9 shadow-sm">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-medical-lightOrange text-medical-orange flex items-center justify-center flex-shrink-0 shadow-sm border border-medical-orange/20">
                  <Shield className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground tracking-tight">Accepted Health Insurance</h2>
                  <p className="text-xs text-muted-foreground">Seamless coverage with leading providers</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5" role="list">
                {insuranceProviders.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80 font-medium p-2 rounded-xl bg-muted/40 border border-border/40">
                    <CheckCircle className="h-4 w-4 text-medical-orange shrink-0" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground border-t border-border/60 pt-4 leading-relaxed">
                Contact our desk at any time to verify specific coverages, pre-authorizations, and copay requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-medical-lightBlue/90 via-sky-50 to-medical-lightOrange/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 relative overflow-hidden" aria-labelledby="services-cta">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-medical-lightOrange text-medical-orange border border-medical-orange/30 text-xs font-bold uppercase tracking-wider mb-5">
            Get In Touch
          </div>
          <h2 id="services-cta" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance">
            Book Your Consultation Today
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-9 max-w-xl mx-auto leading-relaxed">
            Experience quality healthcare designed around your schedule and wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-medical-lightOrange hover:bg-medical-orange/20 text-medical-orange font-extrabold px-8 py-6 text-base rounded-2xl shadow-sm hover:shadow-md border border-medical-orange/30"
            >
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2" aria-label="Book an appointment on WhatsApp">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Book on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-lightBlue dark:hover:bg-medical-blue/15 font-bold px-8 py-6 text-base rounded-2xl"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                <span>Contact Clinic</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
