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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-medical-tealLight dark:bg-medical-teal/20 text-medical-teal dark:text-medical-teal text-sm font-medium mb-6 border border-medical-teal/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" aria-hidden="true" />
                <span>Open Today · 8 AM – 9 PM</span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.12] mb-5 text-balance"
              >
                Empowering Health,
                <span className="block text-medical-teal mt-1">
                  Enriching Lives
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Your trusted healthcare partner in Kisumu County. We provide comprehensive
                medical services with compassionate care, modern facilities, and experienced
                professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-medical-lightBlue hover:bg-medical-blue/10 text-medical-blue font-semibold px-7 py-6 text-base shadow-md hover:shadow-lg transition-all duration-200 rounded-xl"
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
                  className="border-2 border-medical-teal text-medical-teal hover:bg-medical-tealLight dark:hover:bg-medical-teal/10 font-semibold px-7 py-6 text-base rounded-xl transition-all duration-200"
                >
                  <Link to="/services" className="flex items-center justify-center gap-2">
                    <span>Our Services</span>
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Licensed Healthcare Provider", "SHA Accepted", "Open 7 Days"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-medical-teal flex-shrink-0" aria-hidden="true" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Clinic Info Card */}
            <div className="animate-slide-in flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Main card */}
                <div className="bg-white dark:bg-card rounded-3xl shadow-card-hover p-6 border border-border">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-medical-lightBlue flex items-center justify-center flex-shrink-0">
                        <Heart className="h-5 w-5 text-medical-blue" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-foreground">SkyLife Medical</div>
                        <div className="text-xs text-muted-foreground">Healthcare Excellence</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 dark:bg-green-950/40 rounded-full border border-green-200 dark:border-green-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
                      <span className="text-xs font-semibold text-green-700 dark:text-green-400">Open Now</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-muted/60 dark:bg-muted/30 rounded-xl p-3.5">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-medical-teal" aria-hidden="true" />
                        <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Operating Hours</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Monday – Sunday</div>
                      <div className="text-sm font-bold text-medical-teal">8:00 AM – 9:00 PM</div>
                    </div>

                    <div className="bg-muted/60 dark:bg-muted/30 rounded-xl p-3.5">
                      <div className="flex items-center gap-2 mb-1">
                        <Phone className="h-4 w-4 text-medical-teal" aria-hidden="true" />
                        <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Clinic Contact</span>
                      </div>
                      <a
                        href="tel:+254101517171"
                        className="text-sm font-bold text-medical-teal hover:underline"
                        aria-label="Call clinic: +254 101 517 171"
                      >
                        +254 101 517 171
                      </a>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-medical-lightBlue hover:bg-medical-blue/10 text-medical-blue rounded-xl mt-1 font-medium"
                    >
                      <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" aria-label="Book an appointment on WhatsApp">
                        <MessageCircle className="h-4 w-4 mr-2" aria-hidden="true" />
                        Book on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== STATS ====================== */}
      <section className="py-14 bg-white dark:bg-card border-y border-border" aria-label="Clinic statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-medical-tealLight dark:bg-medical-teal/15 mb-3 mx-auto">
                  <stat.icon className="h-7 w-7 text-medical-teal" aria-hidden="true" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground tabular-nums mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== SERVICES ====================== */}
      <section
        className="py-14 md:py-16 bg-muted/30 dark:bg-background/50"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-medical-tealLight dark:bg-medical-teal/15 text-medical-teal text-sm font-semibold mb-4">
              What We Offer
            </div>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Our Medical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services delivered with expertise, compassion, and
              state-of-the-art facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group bg-white dark:bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${service.color} transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-medical-teal hover:text-medical-tealDark transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-medical-teal text-medical-teal hover:bg-medical-tealLight dark:hover:bg-medical-teal/10 font-semibold px-8 rounded-xl transition-all duration-200"
            >
              <Link to="/services" className="flex items-center gap-2">
                <Shield className="h-5 w-5" aria-hidden="true" />
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <section
        className="relative overflow-hidden py-14 md:py-16 bg-medical-lightBlue"
        aria-labelledby="cta-heading"
      >
        {/* Decorative */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_50%)]" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5"
          >
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-lg text-medical-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule your appointment today and experience quality healthcare that puts your
            wellbeing first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-medical-lightOrange hover:bg-medical-orange/15 text-medical-orange font-bold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
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
              className="border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-lightBlue font-semibold px-8 py-6 text-base rounded-xl transition-all duration-200"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Quick info pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Open 7 days a week", "Mon–Sun 8AM–9PM", "SHA Accepted"].map((info) => (
              <div
                key={info}
                className="px-4 py-2 rounded-full bg-white/80 border border-medical-blue/15 text-sm text-medical-blue font-medium"
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
