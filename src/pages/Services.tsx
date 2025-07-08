
import { Stethoscope, Users, Heart, Baby, FlaskConical, Phone, Monitor, Pill, Activity, Shield, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Consultation",
      description: "Comprehensive health assessments, routine check-ups, and medical consultations for patients of all ages.",
      features: ["Health screenings", "Routine check-ups", "Medical consultations", "Preventive care"]
    },
    {
      icon: Users,
      title: "Family Planning",
      description: "Professional family planning services, contraceptive counseling, and reproductive health guidance.",
      features: ["Contraceptive counseling", "Family planning education", "Reproductive health", "Pregnancy planning"]
    },
    {
      icon: Heart,
      title: "Diabetes Clinic",
      description: "Specialized diabetes management, monitoring services, and lifestyle counseling for diabetic patients.",
      features: ["Blood glucose monitoring", "Diabetes education", "Lifestyle counseling", "Medication management"]
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Comprehensive child health services from infancy through adolescence with specialized pediatric care.",
      features: ["Child immunizations", "Growth monitoring", "Developmental assessments", "Pediatric consultations"]
    },
    {
      icon: FlaskConical,
      title: "Laboratory Services",
      description: "Complete diagnostic testing and laboratory analysis with accurate and timely results.",
      features: ["Blood tests", "Urine analysis", "Diagnostic imaging", "Health screenings"]
    },
    {
      icon: Monitor,
      title: "Telemedicine",
      description: "Remote consultation services for your convenience, offering healthcare from the comfort of your home.",
      features: ["Video consultations", "Remote monitoring", "Follow-up appointments", "Prescription refills"]
    },
    {
      icon: Pill,
      title: "Chronic Disease Management",
      description: "Ongoing care and management for chronic conditions with personalized treatment plans.",
      features: ["Hypertension management", "Chronic disease monitoring", "Medication adherence", "Lifestyle modifications"]
    },
    {
      icon: Activity,
      title: "Health Screenings",
      description: "Comprehensive health screenings and preventive care to detect health issues early.",
      features: ["Cancer screenings", "Cardiovascular assessments", "Wellness check-ups", "Health risk evaluations"]
    },
    {
      icon: Shield,
      title: "Immunizations",
      description: "Complete vaccination services for children and adults, including travel vaccinations.",
      features: ["Childhood vaccines", "Adult immunizations", "Travel vaccines", "Flu shots"]
    }
  ];

  const insuranceProviders = [
    "NHIF (National Hospital Insurance Fund)",
    "Jubilee Insurance",
    "APA Insurance",
    "Britam Health",
    "Madison Insurance"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Medical Services
          </h1>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive healthcare services with experienced professionals, 
            modern equipment, and a commitment to your wellbeing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="bg-medical-lightBlue rounded-full p-4 w-16 h-16 mb-4 group-hover:bg-medical-blue transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-medical-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-medical-gray">
                      <CheckCircle className="h-4 w-4 text-medical-orange mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operating Hours & Insurance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Operating Hours */}
          <Card className="bg-medical-lightBlue border-medical-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center text-medical-blue">
                <Clock className="h-6 w-6 mr-3" />
                Operating Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Sunday</span>
                  <span className="text-medical-blue font-semibold">8:00 AM - 9:00 PM</span>
                </div>
                <div className="text-sm text-medical-gray">
                  We're open every day of the week to serve you better, including weekends and holidays.
                </div>
                <div className="pt-4">
                  <Button asChild className="w-full bg-medical-orange hover:bg-medical-orange/90">
                    <a href="tel:+254101517171" className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Emergency: +254 101 517 171</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Insurance */}
          <Card className="bg-medical-lightOrange border-medical-orange/20">
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
                    <span className="text-sm">{provider}</span>
                  </div>
                ))}
                <div className="text-sm text-medical-gray pt-2">
                  We accept most major insurance providers. Please contact us to verify your coverage.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue/90 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience quality healthcare with our professional team. We're here to take care of your health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-medical-orange hover:bg-medical-orange/90 text-white px-8 py-6 text-lg"
            >
              <a href="tel:+254101517171" className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call: +254 101 517 171</span>
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-medical-blue px-8 py-6 text-lg"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
