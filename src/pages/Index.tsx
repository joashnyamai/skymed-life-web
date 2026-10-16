import {
  ArrowRight, Phone, Users, Award, Clock, CheckCircle,
  Heart, Stethoscope, Baby, FlaskConical, Monitor,
  Shield, Star, MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Comprehensive health assessments and medical consultations for all ages.",
    color: "text-medical-blue bg-medical-lightBlue dark:bg-medical-blue/15",
  },
  {
    icon: Users,
    title: "Family Planning",
    description: "Professional family planning services and reproductive health guidance.",
    color: "text-medical-orange bg-medical-lightOrange dark:bg-medical-orange/15",
  },
  {
    icon: Heart,
    title: "Diabetes Clinic",
    description: "Specialized diabetes management and monitoring services.",
    color: "text-medical-blue bg-medical-lightBlue dark:bg-medical-blue/15",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Child health services from infancy through adolescence.",
    color: "text-medical-orange bg-medical-lightOrange dark:bg-medical-orange/15",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "Complete diagnostic testing and laboratory analysis.",
    color: "text-medical-blue bg-medical-lightBlue dark:bg-medical-blue/15",
  },
  {
    icon: Monitor,
    title: "Telemedicine",
    description: "Remote consultation services for your convenience.",
    color: "text-medical-orange bg-medical-lightOrange dark:bg-medical-orange/15",
  },
];

const stats = [
  { icon: Users, number: "5,000+", label: "Patients Served" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Clock, number: "13 hrs", label: "Daily Service" },
  { icon: Star, number: "99%", label: "Satisfaction Rate" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* ====================== HERO ====================== */}
      <section
        className="relative overflow-hidden gradient-hero dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 py-10 md:py-16 lg:py-20"
        aria-labelledby="hero-heading"
      >
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-medical-teal/5 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-medical-blue/5 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-medical-lightBlue dark:bg-medical-blue/20 text-medical-blue dark:text-sky-300 text-xs sm:text-sm font-semibold mb-6 border border-medical-blue/20 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Open Today · 8:00 AM – 9:00 PM</span>
                <span className="text-muted-foreground/60">•</span>
                <span className="text-muted-foreground font-normal hidden sm:inline">Mon – Sun</span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.12] mb-5 tracking-tight text-balance"
              >
                Empowering Health,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-medical-blue via-sky-600 to-medical-orange mt-1">
                  Enriching Lives
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Your trusted healthcare partner across Kenya. We deliver patient-centered clinical excellence, modern laboratory diagnostics, and compassionate family care tailored to your wellbeing.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-medical-lightOrange hover:bg-medical-orange/20 text-medical-orange font-bold px-7 py-6 text-base shadow-sm hover:shadow-md transition-all duration-200 rounded-2xl border border-medical-orange/30 group"
                >
                  <a
                    href={WHATSAPP_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                    aria-label="Book an appointment on WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5 text-medical-orange group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <span>Book on WhatsApp</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-lightBlue dark:hover:bg-medical-blue/15 font-semibold px-7 py-6 text-base rounded-2xl transition-all duration-200 group"
                >
                  <Link to="/services" className="flex items-center justify-center gap-2">
                    <span>Explore Services</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-2">
                {[
                  "Licensed Healthcare Facility",
                  "SHA Accepted Provider",
                  "Telemedicine Consultations",
                  "Open 7 Days a Week"
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-medical-blue flex-shrink-0" aria-hidden="true" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Clinic Info Card */}
            <div className="animate-slide-in flex items-center justify-center">
              <div className="animate-slide-in flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Glow backdrop */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-medical-blue/20 to-medical-orange/20 rounded-[2rem] blur-xl opacity-70 pointer-events-none" aria-hidden="true" />

                  {/* Main card */}
                  <div className="relative bg-white/90 dark:bg-card/90 backdrop-blur-xl rounded-3xl shadow-card-hover p-6 sm:p-7 border border-border/80">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-medical-lightBlue to-sky-100 dark:from-medical-blue/20 dark:to-sky-900/30 flex items-center justify-center flex-shrink-0 shadow-sm border border-medical-blue/15">
                          <Heart className="h-6 w-6 text-medical-blue" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="font-bold text-base text-foreground tracking-tight">SkyLife Medical</div>
                          <div className="text-xs font-medium text-muted-foreground">Certified Healthcare Clinic</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                        <span>Open Now</span>
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      <div className="bg-muted/40 dark:bg-muted/20 hover:bg-muted/60 transition-colors rounded-2xl p-4 border border-border/40">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Clock className="h-4 w-4 text-medical-blue" aria-hidden="true" />
                          <span className="text-xs font-bold text-foreground uppercase tracking-wider">Operating Schedule</span>
                        </div>
                        <div className="flex items-baseline justify-between">
                          <span className="text-xs text-muted-foreground">Monday through Sunday</span>
                          <span className="text-sm font-extrabold text-medical-blue dark:text-sky-400">8:00 AM – 9:00 PM</span>
                        </div>
                      </div>

                      <div className="bg-muted/40 dark:bg-muted/20 hover:bg-muted/60 transition-colors rounded-2xl p-4 border border-border/40">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Phone className="h-4 w-4 text-medical-orange" aria-hidden="true" />
                          <span className="text-xs font-bold text-foreground uppercase tracking-wider">Direct Clinical Desk</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Call & Consultations</span>
                          <a
                            href="tel:+254101517171"
                            className="text-sm font-bold text-medical-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-orange rounded"
                            aria-label="Call clinic: +254 101 517 171"
                          >
                            +254 101 517 171
                          </a>
                        </div>
                      </div>

                      <Button
                        asChild
                        className="w-full bg-medical-lightBlue hover:bg-medical-blue/15 text-medical-blue font-bold rounded-2xl py-6 text-sm transition-all duration-200 border border-medical-blue/20 shadow-sm"
                      >
                        <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2" aria-label="Book an appointment on WhatsApp">
                          <MessageCircle className="h-4 w-4 text-medical-blue" aria-hidden="true" />
                          Instant WhatsApp Booking
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== STATS ====================== */}
      <section className="py-12 md:py-16 bg-card/60 backdrop-blur-md border-y border-border/80" aria-label="Clinic statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-3xl bg-background/60 hover:bg-background border border-border/60 hover:border-medical-blue/30 shadow-sm hover:shadow-card transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-medical-lightBlue dark:bg-medical-blue/15 mb-3 group-hover:scale-110 transition-transform duration-300 border border-medical-blue/15">
                  <stat.icon className="h-7 w-7 text-medical-blue" aria-hidden="true" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-foreground tabular-nums mb-1 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== SERVICES ====================== */}
      <section
        className="py-16 md:py-20 bg-muted/20 dark:bg-background/40"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-medical-lightBlue dark:bg-medical-blue/15 text-medical-blue text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 border border-medical-blue/20">
              Clinical Excellence
            </div>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight"
            >
              Our Medical Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive medical care delivered with certified expertise, modern diagnostics, and dedicated patient attention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group relative bg-card rounded-3xl p-7 border border-border/70 hover:border-medical-blue/40 shadow-sm hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 ${service.color} transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                    <service.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-medical-blue hover:text-medical-orange transition-colors pt-4 border-t border-border/40 group-hover:border-border"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-medical-blue/40 text-medical-blue hover:bg-medical-lightBlue dark:hover:bg-medical-blue/15 font-bold px-8 py-6 rounded-2xl text-base transition-all duration-200"
            >
              <Link to="/services" className="flex items-center gap-2">
                <Shield className="h-5 w-5" aria-hidden="true" />
                View All Medical Specialties
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <section
        className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-medical-lightBlue/90 via-sky-50 to-medical-lightOrange/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 border-t border-border/60"
        aria-labelledby="cta-heading"
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-medical-lightOrange text-medical-orange border border-medical-orange/30 text-xs font-bold uppercase tracking-wider mb-5">
            Book Today
          </div>
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance"
          >
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-9 max-w-2xl mx-auto leading-relaxed">
            Schedule your appointment today or connect with our clinical team for telemedicine and routine consultations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-medical-lightOrange hover:bg-medical-orange/20 text-medical-orange font-extrabold px-8 py-6 text-base rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-medical-orange/30"
            >
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
                aria-label="Book an appointment on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Book on WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-lightBlue dark:hover:bg-medical-blue/15 font-bold px-8 py-6 text-base rounded-2xl transition-all duration-200"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                <span>Contact Clinic</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Quick info pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {[
              "Open 7 Days a Week",
              "Mon–Sun: 8:00 AM – 9:00 PM",
              "SHA Insurance Accepted",
              "Fast Diagnostic Turnaround"
            ].map((info) => (
              <div
                key={info}
                className="px-4 py-2 rounded-full bg-white/80 dark:bg-card/80 backdrop-blur-sm border border-medical-blue/15 text-xs sm:text-sm text-foreground font-medium shadow-xs"
              >
                {info}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
