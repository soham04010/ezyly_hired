
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
      name: 'SILVER PLAN',
      price: '$2000',
      description: 'Upfront (No Other Payments)',
      color: 'bg-gradient-to-br from-gray-400 to-gray-600',
      textColor: 'text-white',
      icon: CheckCircle,
      popular: false,
      features: [
        'Resume Making',
        'Resume Understanding 1-hour session',
        'LinkedIn Makeover',
        'Cover letter',
        'Job Hunting',
        'Personal assistant till placement',
        'Salary negotiation help',
        'Filtering perfect opportunity'
      ]
    },
    {
      name: 'GOLD PLAN',
      price: '$3000',
      description: 'Upfront (No Other Payments)',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      textColor: 'text-[#424242]',
      icon: Star,
      popular: false,
      features: [
        '22 live Training sessions',
        'Resume Making',
        'Resume Understanding 1-hour session',
        'LinkedIn Makeover',
        'Cover letter',
        'Job Hunting',
        'Personal assistant till placement',
        'Salary negotiation help',
        'Filtering perfect opportunity'
      ]
    },
    {
      name: 'PLATINUM PLAN',
      price: '$4000',
      description: 'Coming Soon',
      color: 'bg-gradient-to-br from-slate-600 to-slate-800',
      textColor: 'text-white',
      icon: Crown,
      popular: false,
      features: [
        'Advanced Features',
        'Premium Support',
        'Enhanced Training',
        'Priority Placement',
        'Exclusive Opportunities',
        'Extended Assistance',
        'Premium Resources',
        'VIP Treatment'
      ]
    },
    {
      name: 'DIAMOND PLAN',
      price: '$10000',
      description: 'Upfront (No Other Payments)',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-white',
      icon: Diamond,
      popular: true,
      features: [
        'Resume Making',
        'Resume Understanding 1-hour session',
        '22 live Training sessions',
        'LinkedIn Makeover / LinkedIn Optimization',
        'Other job portal optimization',
        'Interview Generation',
        'Interview Preparation',
        'Cover letter',
        'Job Hunting',
        'Personal assistant till placement',
        'Salary negotiation help',
        'Filtering perfect opportunity'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-gilroy">
      {/* Hero Section with Enhanced Gradient */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-teal-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight font-gilroy">
              Plans & Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed font-gilroy">
              Industry leading Specialists in Talent Acquisition, Job Hunting, VMS and IT Recruitment
            </p>
            <p className="text-lg md:text-xl text-blue-200 font-medium font-gilroy">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#424242] mb-4 font-gilroy">
              Choose Your Success Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-gilroy">
              Select the perfect plan that aligns with your career goals and timeline
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden border-0 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl h-full flex flex-col ${plan.popular ? 'ring-4 ring-cyan-400 ring-opacity-50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg font-gilroy">
                      POPULAR
                    </div>
                  )}
                  
                  <CardHeader className={`${plan.color} ${plan.textColor} text-center py-8 relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <IconComponent className="w-12 h-12 mx-auto mb-4" />
                      <CardTitle className="text-xl font-bold tracking-wide font-gilroy">{plan.name}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8 text-center bg-white relative flex-grow flex flex-col">
                    <div className="mb-6">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 font-gilroy">
                        {plan.price}
                      </div>
                      <div className="text-sm text-gray-600 font-medium font-gilroy">
                        {plan.description}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2 text-left">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#424242] font-medium font-gilroy">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:shadow-xl font-gilroy"
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
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#424242] to-gray-600 bg-clip-text text-transparent mb-4 font-gilroy">
                Terms & Conditions
              </h2>
              <p className="text-gray-600 text-lg font-gilroy">
                Please review our terms carefully before selecting your plan
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm font-gilroy">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#424242] mb-2 font-gilroy">Payment Terms</h3>
                    <p className="text-sm font-gilroy">All payments are upfront with no additional charges. The specified percentage of annual income is calculated based on your first year salary only.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm font-gilroy">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#424242] mb-2 font-gilroy">Job Guarantee</h3>
                    <p className="text-sm font-gilroy">We guarantee job placement within the specified timeframe for each plan. If we fail to secure a position within this period, you are eligible for a full refund.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm font-gilroy">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#424242] mb-2 font-gilroy">Income Calculation</h3>
                    <p className="text-sm font-gilroy">The percentage of annual income is calculated on your gross annual salary from your first job placement through our services.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold text-sm font-gilroy">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#424242] mb-2 font-gilroy">Service Scope</h3>
                    <p className="text-sm font-gilroy">Our services include resume optimization, interview preparation, skill assessment, personalized coaching, and direct employer connections.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm font-gilroy">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#424242] mb-2 font-gilroy">Refund Policy</h3>
                    <p className="text-sm font-gilroy">Full refund available if job placement is not achieved within the guaranteed timeframe. No refunds after successful placement.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold text-sm font-gilroy">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#424242] mb-2 font-gilroy">Client Responsibilities</h3>
                    <p className="text-sm font-gilroy">Clients must actively participate in the program, attend scheduled sessions, and follow through with interview opportunities provided.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 font-gilroy">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-gilroy">
              Choose the plan that best fits your needs and let us help you secure your dream job with our proven track record of success.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl font-gilroy"
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
