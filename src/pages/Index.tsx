import { ArrowRight, Phone, Users, Award, Clock, CheckCircle, Heart, Stethoscope, Baby, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Consultation",
      description: "Comprehensive health assessments and medical consultations for all ages."
    },
    {
      icon: Users,
      title: "Family Planning",
      description: "Professional family planning services and reproductive health guidance."
    },
    {
      icon: Heart,
      title: "Diabetes Clinic",
      description: "Specialized diabetes management and monitoring services."
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Child health services from infancy through adolescence."
    },
    {
      icon: FlaskConical,
      title: "Laboratory Services",
      description: "Complete diagnostic testing and laboratory analysis."
    },
    {
      icon: Phone,
      title: "Telemedicine",
      description: "Remote consultation services for your convenience."
    }
  ];

  const stats = [
    { icon: Users, number: "5000+", label: "Patients Served" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Clock, number: "13", label: "Hours Daily" },
    { icon: CheckCircle, number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightOrange py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Empowering Health, 
                <span className="text-medical-blue block">Enriching Lives</span>
              </h1>
              <p className="text-xl text-medical-gray mb-8 leading-relaxed">
                Your trusted healthcare partner in Kisumu. We provide comprehensive medical services 
                with compassionate care, modern facilities, and experienced professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-medical-orange hover:bg-medical-orange/90 text-white px-8 py-6 text-lg"
                >
                  <a href="tel:+254101517171" className="flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Book Appointment</span>
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-6 text-lg"
                >
                  <Link to="/services" className="flex items-center justify-center space-x-2">
                    <span>Our Services</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-in">
              <div className="relative">
                <div className="bg-medical-blue rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-medical-lightBlue rounded-full p-2">
                          <Heart className="h-6 w-6 text-medical-blue" />
                        </div>
                        <div>
                          <div className="font-semibold">SkyLife Medical</div>
                          <div className="text-sm text-gray-500">Healthcare Excellence</div>
                        </div>
                      </div>
                      <div className="text-green-500 text-sm font-medium">● Available</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm font-medium">Operating Hours</div>
                        <div className="text-sm text-gray-600">Monday - Sunday: 8AM - 9PM</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm font-medium">Emergency Contact</div>
                        <div className="text-sm text-medical-blue font-medium">+254 101 517 171</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-medical-lightBlue rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-medical-blue" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-medical-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-medical-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Comprehensive healthcare services delivered with expertise, compassion, and state-of-the-art facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="bg-medical-lightBlue rounded-full p-4 w-16 h-16 mb-6 group-hover:bg-medical-blue transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-medical-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-medical-gray leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-medical-blue hover:bg-medical-blue/90 text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience quality healthcare that puts your wellbeing first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-medical-orange hover:bg-medical-orange/90 text-white px-8 py-6 text-lg"
            >
              <a href="tel:+254101517171" className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now: +254 101 517 171</span>
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-medical-blue px-8 py-6 text-lg"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
