import {
  Stethoscope, Users, Heart, Baby, FlaskConical, Monitor,
  Pill, Activity, Shield, Clock, CheckCircle, Phone, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Comprehensive health assessments, routine check-ups, and medical consultations for patients of all ages.",
    features: ["Health screenings", "Routine check-ups", "Medical consultations", "Preventive care"],
    accent: "text-blue-600 bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50",
    iconBg: "bg-blue-50 dark:bg-blue-950/40 text-blue-600",
  },
  {
    icon: Users,
    title: "Family Planning",
    description: "Professional family planning services, contraceptive counseling, and reproductive health guidance.",
    features: ["Contraceptive counseling", "Family planning education", "Reproductive health", "Pregnancy planning"],
    accent: "text-rose-600 bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900/50",
    iconBg: "bg-rose-50 dark:bg-rose-950/40 text-rose-600",
  },
  {
    icon: Heart,
    title: "Diabetes Clinic",
    description: "Specialized diabetes management, monitoring services, and lifestyle counseling for diabetic patients.",
    features: ["Blood glucose monitoring", "Diabetes education", "Lifestyle counseling", "Medication management"],
    accent: "text-amber-600 bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/50",
    iconBg: "bg-amber-50 dark:bg-amber-950/40 text-amber-600",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Comprehensive child health services from infancy through adolescence with specialized pediatric care.",
    features: ["Child immunizations", "Growth monitoring", "Developmental assessments", "Pediatric consultations"],
    accent: "text-purple-600 bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900/50",
    iconBg: "bg-purple-50 dark:bg-purple-950/40 text-purple-600",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "Complete diagnostic testing and laboratory analysis with accurate and timely results.",
    features: ["Blood tests", "Urine analysis", "Diagnostic testing", "Health screenings"],
    accent: "text-teal-600 bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900/50",
    iconBg: "bg-teal-50 dark:bg-teal-950/40 text-teal-600",
  },
  {
    icon: Monitor,
    title: "Telemedicine",
    description: "Remote consultation services for your convenience, offering healthcare from the comfort of your home.",
    features: ["Video consultations", "Remote monitoring", "Follow-up appointments", "Prescription refills"],
    accent: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900/50",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600",
  },
  {
    icon: Pill,
    title: "Chronic Disease Management",
    description: "Ongoing care and management for chronic conditions with personalized treatment plans.",
    features: ["Hypertension management", "Chronic disease monitoring", "Medication adherence", "Lifestyle modifications"],
    accent: "text-orange-600 bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50",
    iconBg: "bg-orange-50 dark:bg-orange-950/40 text-orange-600",
  },
  {
    icon: Activity,
    title: "Health Screenings",
    description: "Comprehensive health screenings and preventive care to detect health issues early.",
    features: ["Cancer screenings", "Cardiovascular assessments", "Wellness check-ups", "Health risk evaluations"],
    accent: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600",
  },
  {
    icon: Shield,
    title: "Immunizations",
    description: "Complete vaccination services for children and adults, including travel vaccinations.",
    features: ["Childhood vaccines", "Adult immunizations", "Travel vaccines", "Flu shots"],
    accent: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/30 border-cyan-100 dark:border-cyan-900/50",
    iconBg: "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600",
  },
];

const insuranceProviders = [
  "NHIF (National Hospital Insurance Fund)",
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
      <section className="gradient-hero dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 py-16 md:py-20 border-b border-border" aria-labelledby="services-h1">
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
      <section className="py-16 md:py-20 bg-muted/20" aria-label="Available services">
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
                  className="w-full mt-3 bg-medical-teal hover:bg-medical-tealDark text-white rounded-xl"
                >
                  <a href="tel:+254101517171" className="flex items-center justify-center gap-2" aria-label="Call clinic: +254 101 517 171">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call: +254 101 517 171
                  </a>
                </Button>
              </div>
            </div>

            {/* Insurance */}
            <div className="rounded-2xl border border-border bg-white dark:bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-blue-600" aria-hidden="true" />
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
      <section className="py-20 gradient-teal relative overflow-hidden" aria-labelledby="services-cta">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta" className="text-3xl md:text-4xl font-bold text-white mb-5">
            Book Your Appointment Today
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Experience quality healthcare with our professional team. We are here to take care of your health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-medical-teal font-bold px-8 py-6 text-base rounded-xl shadow-lg"
            >
              <a href="tel:+254101517171" className="flex items-center justify-center gap-2" aria-label="Call clinic: +254 101 517 171">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call: +254 101 517 171
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-xl"
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
