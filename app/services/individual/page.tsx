
import React from 'react';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, User, DollarSign, CheckCircle } from 'lucide-react';

const IndividualServices = () => {
  const services = [
    {
      title: "Profile Enhancement & Marketing",
      duration: "3 Months",
      quantity: "1 Person",
      price: "$600/ Month",
      subtotal: "$1800.00",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Interview Support to Candidate",
      duration: "3 Months", 
      quantity: "1 Person",
      price: "$600/ Month",
      subtotal: "$2400.00",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Resume Making & Grooming",
      duration: "1 Time",
      quantity: "1 Person", 
      price: "$49 / Session",
      subtotal: "$49.00",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Resume Understanding",
      duration: "1 Time",
      quantity: "1 Person",
      price: "$49 / Session", 
      subtotal: "$49.00",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Training & Interview Preparation",
      duration: "15 Hours",
      quantity: "1 Person",
      price: "$450 / 15 Hours",
      subtotal: "$450.00",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Assessments Upto 4 Hours",
      duration: "4 Hrs",
      quantity: "1 Person",
      price: "$35 Per Assessment",
      subtotal: "$35.00",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Assessments More Than 4 Hours", 
      duration: "More Than 4hrs",
      quantity: "1 Person",
      price: "$45",
      subtotal: "$45.00",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Personal Career Counseling",
      duration: "1 Session",
      quantity: "1 Person",
      price: "$200 Per Session",
      subtotal: "$200.00",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Plans & Services</h1>
            <p className="text-xl md:text-2xl mb-4">
              Industry leading Specialists in Talent Acquisition, Job Hunting, VMS and IT Recruitment
            </p>
            <p className="text-lg opacity-90">
              Explore our services & Plans
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          Unit / Duration:
                        </span>
                        <span className="font-medium text-gray-900">{service.duration}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center text-gray-600">
                          <User className="w-4 h-4 mr-2" />
                          Quantity:
                        </span>
                        <span className="font-medium text-gray-900">{service.quantity}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center text-gray-600">
                          <DollarSign className="w-4 h-4 mr-2" />
                          Price:
                        </span>
                        <span className="font-medium text-gray-900">{service.price}</span>
                      </div>
                      
                      <div className="border-t pt-3">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">Subtotal:</span>
                          <span className="text-xl font-bold text-teal-600">{service.subtotal}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We are best at what we do...
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-0 shadow-lg overflow-hidden">
                {/* Hero Image for About Section */}
                <div className="relative h-64 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Just graduated and racing against the 90-day OPT clock?
                  </h3>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      We provide personalized job search support, OPT-compliant roles, and real interview prep to get you hired fast.
                    </p>
                    
                    <p className="text-lg">
                      Our programs are built to match your skills with sponsor-ready employers.
                    </p>
                    
                    <p className="text-lg">
                      Get 1:1 guidance, résumé fixes, and access to active job openings in your field.
                    </p>
                    
                    <p className="text-lg font-semibold text-teal-700">
                      Secure your future in the U.S. — we're with you, every step of the way.
                    </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center text-teal-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">OPT-Compliant Roles</span>
                    </div>
                    <div className="flex items-center text-teal-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">1:1 Guidance</span>
                    </div>
                    <div className="flex items-center text-teal-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">Résumé Fixes</span>
                    </div>
                    <div className="flex items-center text-teal-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">Active Job Openings</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndividualServices;
