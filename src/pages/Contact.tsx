
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
    <div className="min-h-screen py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto leading-relaxed">
            Get in touch with SkyLife Medical Clinic. We're here to answer your questions 
            and help you with your healthcare needs.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {contactInfo.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="bg-medical-lightBlue rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-medical-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-medical-blue font-semibold mb-2">
                  {item.details}
                </div>
                <p className="text-sm text-medical-gray mb-4">
                  {item.description}
                </p>
                {item.action && (
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="border-medical-blue/30 text-medical-blue hover:bg-medical-lightBlue"
                  >
                    <a href={item.action}>
                      {item.title === "WhatsApp" ? "Book on WhatsApp" : "Email Us"}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send Us a Message
              </CardTitle>
              <p className="text-medical-gray">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    placeholder="+254 xxx xxx xxx"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Booking</option>
                    <option value="services">Services Information</option>
                    <option value="insurance">Insurance Questions</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    placeholder="Please describe your inquiry or concern..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-medical-lightBlue hover:bg-medical-blue/10 text-medical-blue py-3 text-lg"
                >
                  Send Message
                </Button>
                <p className="text-xs text-medical-gray" role="note">
                  Appointment bookings open WhatsApp; other messages open your email app.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Services & Insurance */}
          <div className="space-y-6">
            {/* Services */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-medical-blue">
                  <CheckCircle className="h-6 w-6 mr-3" />
                  Our Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-medical-orange mr-2 flex-shrink-0" />
                      <span className="text-sm text-medical-gray">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-medical-orange">
                  <Shield className="h-6 w-6 mr-3" />
                  Accepted Insurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {insuranceProviders.map((provider, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-medical-orange mr-3 flex-shrink-0" />
                      <span className="text-sm text-medical-gray">{provider}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-medical-lightOrange rounded-lg">
                  <p className="text-sm text-medical-gray">
                    <strong>Note:</strong> Please contact us to verify your specific insurance coverage 
                    and benefits before your appointment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency & Quick Contact */}
        <div className="bg-medical-lightBlue rounded-2xl p-8 md:p-12 text-center text-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Care?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            For emergencies or urgent medical attention, don't hesitate to contact us immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-medical-lightOrange hover:bg-medical-orange/15 text-medical-orange px-8 py-6 text-lg"
            >
              <a href="tel:+254101517171" className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency: +254 101 517 171</span>
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-medical-blue/30 text-medical-blue hover:bg-white px-8 py-6 text-lg"
            >
              <a href="mailto:info@skylifemedicalclinic.com" className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
