
"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { CheckCircle, Star, Crown, Diamond } from 'lucide-react';
import Footer from '@/components/Footer';

const Services = () => {
  const router = useRouter();

  const plans = [
    {
      name: 'DIAMOND PLAN',
      price: '$$10000',
      description: 'Upfront (No Other Payments)',
      income: '8.12% of Annual Income (First Year Only)',
      duration: '2-month',
      guarantee: 'Job Guarantee',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-white',
      icon: Diamond,
      popular: true
    },
    {
      name: 'PLATINUM PLAN',
      price: '$$4000',
      description: 'Upfront (No Other Payments)',
      income: '6.14% of Annual Income (First Year Only)',
      duration: '2-month',
      guarantee: 'Job Guarantee',
      color: 'bg-gradient-to-br from-slate-600 to-slate-800',
      textColor: 'text-white',
      icon: Crown,
      popular: false
    },
    {
      name: 'GOLD PLAN',
      price: '$$3000',
      description: 'Upfront (No Other Payments)',
      income: '5.14% of Annual Income (First Year Only)',
      duration: '3-month',
      guarantee: 'Job Guarantee',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      textColor: 'text-black',
      icon: Star,
      popular: false
    },
    {
      name: 'SILVER PLAN',
      price: '$$2000',
      description: 'Upfront (No Other Payments)',
      income: '4.14% of Annual Income (First Year Only)',
      duration: '4-month',
      guarantee: 'Job Guarantee',
      color: 'bg-gradient-to-br from-gray-400 to-gray-600',
      textColor: 'text-white',
      icon: CheckCircle,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section with Enhanced Gradient */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-teal-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Plans & Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed">
              Industry leading Specialists in Talent Acquisition, Job Hunting, VMS and IT Recruitment
            </p>
            <p className="text-lg md:text-xl text-blue-200 font-medium">
              Explore our services & Plans
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
      </section>

      {/* Plans Grid with Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Success Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan that aligns with your career goals and timeline
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden border-0 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl ${plan.popular ? 'ring-4 ring-cyan-400 ring-opacity-50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                      POPULAR
                    </div>
                  )}
                  
                  <CardHeader className={`${plan.color} ${plan.textColor} text-center py-8 relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <IconComponent className="w-12 h-12 mx-auto mb-4" />
                      <CardTitle className="text-xl font-bold tracking-wide">{plan.name}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8 text-center bg-white relative">
                    <div className="mb-6">
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                        {plan.price.replace('$', '')}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {plan.description}
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-700 font-medium">
                          {plan.income}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-700 font-medium">
                          {plan.duration}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-700 font-medium">
                          {plan.guarantee}
                        </span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:shadow-xl"
                      onClick={() => router.push('/contact')}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Terms and Conditions */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                Terms & Conditions
              </h2>
              <p className="text-gray-600 text-lg">
                Please review our terms carefully before selecting your plan
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Payment Terms</h3>
                    <p className="text-sm">All payments are upfront with no additional charges. The specified percentage of annual income is calculated based on your first year salary only.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Job Guarantee</h3>
                    <p className="text-sm">We guarantee job placement within the specified timeframe for each plan. If we fail to secure a position within this period, you are eligible for a full refund.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Income Calculation</h3>
                    <p className="text-sm">The percentage of annual income is calculated on your gross annual salary from your first job placement through our services.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Service Scope</h3>
                    <p className="text-sm">Our services include resume optimization, interview preparation, skill assessment, personalized coaching, and direct employer connections.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Refund Policy</h3>
                    <p className="text-sm">Full refund available if job placement is not achieved within the guaranteed timeframe. No refunds after successful placement.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Client Responsibilities</h3>
                    <p className="text-sm">Clients must actively participate in the program, attend scheduled sessions, and follow through with interview opportunities provided.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Choose the plan that best fits your needs and let us help you secure your dream job with our proven track record of success.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
              onClick={() => router.push('/contact')}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
