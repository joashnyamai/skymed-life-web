
import type { FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";

const Contact = () => {
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = `${formData.get("firstName")} ${formData.get("lastName")}`.trim();
    const subject = String(formData.get("subject") || "General Inquiry");
    const body = [
      `Name: ${name}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      "",
      String(formData.get("message")),
    ].join("\n");
    if (subject === "appointment") {
      const appointmentMessage = [
        "Hello, I would like to request an appointment at SkyLife Medical Clinic.",
        `Name: ${name}`,
        `Email: ${formData.get("email")}`,
        `Phone: ${formData.get("phone") || "Not provided"}`,
        "",
        String(formData.get("message")),
      ].join("\n");
      window.open(getWhatsAppUrl(appointmentMessage), "_blank", "noopener,noreferrer");
      return;
    }

    const mailto = new URL(`mailto:info@skylifemedicalclinic.com`);
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", body);
    window.location.href = mailto.toString();
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+254 101 517 171",
      description: "Chat with us to request an appointment",
      action: WHATSAPP_BOOKING_URL
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@skylifemedicalclinic.com",
      description: "Send us your queries or concerns",
      action: "mailto:info@skylifemedicalclinic.com"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "P.O. Box 61413-00200-Nbi, Nairobi, Kenya",
      description: "Our mailing address",
      action: null
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: "Monday - Sunday: 8:00 AM - 9:00 PM",
      description: "We're open every day of the week",
      action: null
    }
  ];

  const insuranceProviders = [
    "SHA (Social Health Authority)",
    "Jubilee Insurance",
    "APA Insurance", 
    "Britam Health",
    "Madison Insurance",
    "UAP Insurance",
    "CIC Insurance Group",
    "ICEA LION Insurance"
  ];

  const services = [
    "General Consultation",
    "Family Planning",
    "Diabetes Clinic",
    "Pediatrics",
    "Laboratory Services",
    "Telemedicine",
    "Immunizations",
    "Health Screenings"
  ];

  return (
    <div className="min-h-screen py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-lightBlue dark:bg-medical-blue/20 text-medical-blue dark:text-sky-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 border border-medical-blue/20 shadow-xs">
            Direct Clinical Desk
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Connect With Our Healthcare Team
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a question, need to schedule a clinical consultation, or require telemedicine guidance? We are available 7 days a week.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="rounded-3xl border border-border/80 bg-card hover:border-medical-blue/30 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-between p-6">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-medical-lightBlue dark:bg-medical-blue/20 text-medical-blue mx-auto mb-4 flex items-center justify-center shadow-xs border border-medical-blue/20">
                  <item.icon className="h-7 w-7" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h2>
                <div className="text-sm font-extrabold text-medical-blue dark:text-sky-400 mb-2">
                  {item.details}
                </div>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {item.action && (
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="w-full rounded-xl border-medical-blue/30 text-medical-blue hover:bg-medical-lightBlue font-semibold text-xs py-4"
                >
                  <a href={item.action} target={item.title === "WhatsApp" ? "_blank" : undefined} rel={item.title === "WhatsApp" ? "noopener noreferrer" : undefined}>
                    {item.title === "WhatsApp" ? "Book on WhatsApp" : "Send Email"}
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="rounded-3xl border border-border/80 shadow-card p-6 sm:p-8 bg-card">
            <CardHeader className="p-0 pb-6">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-medical-orange mb-1">Send an inquiry</div>
              <CardTitle className="text-2xl font-bold text-foreground tracking-tight">
                Send Us a Message
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Leave your details below and our team will get in touch promptly.
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue transition-all"
                      placeholder="e.g. Joy"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue transition-all"
                      placeholder="e.g. Achieng"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue transition-all"
                      placeholder="+254 7xx xxx xxx"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue transition-all"
                  >
                    <option value="">Select subject category</option>
                    <option value="appointment">Appointment Request (Direct WhatsApp)</option>
                    <option value="services">Clinical Services Inquiry</option>
                    <option value="insurance">Insurance Coverage & SHA Inquiries</option>
                    <option value="telemedicine">Telemedicine & Remote Consultation</option>
                    <option value="general">General Clinic Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue transition-all"
                    placeholder="Briefly describe your inquiry or health concern..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-medical-lightOrange hover:bg-medical-orange/20 text-medical-orange font-bold rounded-2xl py-6 text-base border border-medical-orange/30 shadow-sm transition-all"
                >
                  Send Message
                </Button>
                <p className="text-[11px] text-muted-foreground text-center" role="note">
                  Appointment inquiries connect directly via WhatsApp. All other messages open your preferred email client.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Services & Insurance */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Services */}
            <Card className="rounded-3xl border border-border/80 shadow-sm p-6 sm:p-7 bg-card">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center text-lg font-bold text-medical-blue">
                  <CheckCircle className="h-5 w-5 mr-2.5 text-medical-blue" />
                  Available Specialties
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-2.5 rounded-xl bg-muted/40 border border-border/40 text-xs sm:text-sm font-medium text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-medical-blue mr-2.5 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card className="rounded-3xl border border-border/80 shadow-sm p-6 sm:p-7 bg-card">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center text-lg font-bold text-medical-orange">
                  <Shield className="h-5 w-5 mr-2.5 text-medical-orange" />
                  Recognized Insurance Cover
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {insuranceProviders.map((provider, index) => (
                    <div key={index} className="flex items-center text-xs text-foreground/80 font-medium">
                      <CheckCircle className="h-3.5 w-3.5 text-medical-orange mr-2 shrink-0" />
                      <span className="truncate">{provider}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3.5 bg-medical-lightOrange/60 border border-medical-orange/20 rounded-2xl">
                  <p className="text-xs text-medical-orange leading-relaxed">
                    <strong>Notice:</strong> SHA (Social Health Authority) and private insurance cards are honored at our registration desk.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency & Quick Contact */}
        <div className="rounded-3xl bg-gradient-to-r from-medical-lightBlue/80 via-sky-50 to-medical-lightOrange/50 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-950 p-8 md:p-12 text-center border border-border/80 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            Urgent Attention
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 tracking-tight">
            Need Immediate Clinical Care?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            For urgent health inquiries or sudden symptoms, contact our medical line right away or visit our clinic.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-medical-lightOrange hover:bg-medical-orange/20 text-medical-orange font-bold px-8 py-6 text-base rounded-2xl shadow-sm border border-medical-orange/30"
            >
              <a href="tel:+254101517171" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Call Helpline: +254 101 517 171</span>
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-lightBlue dark:hover:bg-medical-blue/15 font-bold px-8 py-6 text-base rounded-2xl"
            >
              <a href="mailto:info@skylifemedicalclinic.com" className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Email Clinical Desk</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
