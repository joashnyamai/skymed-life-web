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
      <section className="gradient-hero dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 py-12 md:py-16 border-b border-border" aria-labelledby="services-h1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-medical-tealLight dark:bg-medical-teal/15 text-medical-teal text-sm font-semibold mb-5">
            Comprehensive Care
          </div>
          <h1 id="services-h1" className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            Our Medical Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive healthcare services with experienced professionals,
            modern equipment, and a commitment to your wellbeing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-muted/20" aria-label="Available services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group bg-white dark:bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in flex flex-col"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="text-base font-bold text-foreground mb-2">{service.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2 mt-auto" role="list" aria-label={`${service.title} features`}>
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-medical-teal flex-shrink-0" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-14 bg-white dark:bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hours */}
            <div className="rounded-2xl border border-medical-teal/20 bg-medical-tealLight/50 dark:bg-medical-teal/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-medical-teal/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-medical-teal" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-bold text-foreground">Operating Hours</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-medical-teal/10">
                  <span className="font-medium text-foreground">Monday – Sunday</span>
                  <span className="text-medical-teal font-bold">8:00 AM – 9:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open every day of the week including weekends and public holidays.
                </p>
                <Button
                  asChild
                  className="w-full mt-3 bg-medical-lightBlue hover:bg-medical-blue/10 text-medical-blue rounded-xl"
                >
                  <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2" aria-label="Book an appointment on WhatsApp">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Book on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Insurance */}
            <div className="rounded-2xl border border-border bg-white dark:bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-medical-lightBlue dark:bg-medical-blue/15 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-medical-blue" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-bold text-foreground">Accepted Insurance</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4" role="list">
                {insuranceProviders.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-medical-teal flex-shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground border-t border-border pt-3">
                Please contact us to verify your specific insurance coverage and benefits before your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-medical-lightBlue relative overflow-hidden" aria-labelledby="services-cta">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.35),transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta" className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Book Your Appointment Today
          </h2>
          <p className="text-lg text-medical-gray mb-8 max-w-xl mx-auto">
            Experience quality healthcare with our professional team. We are here to take care of your health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-medical-lightOrange hover:bg-medical-orange/15 text-medical-orange font-bold px-8 py-6 text-base rounded-xl shadow-lg"
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
              className="border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-lightBlue font-semibold px-8 py-6 text-base rounded-xl"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                Contact Us
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
