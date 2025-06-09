"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const Services = () => {
  const router = useRouter();

  const plans = [
    {
      name: 'DIAMOND PLAN',
      price: '$10000',
      description: 'Upfront (No Other Payments)',
      income: '8.12% of Annual Income (First Year Only)',
      duration: '2-month',
      guarantee: 'Job Guarantee',
      color: 'bg-cyan-500',
      textColor: 'text-white'
    },
    {
      name: 'PLATINUM PLAN',
      price: '$4000',
      description: 'Upfront (No Other Payments)',
      income: '6.14% of Annual Income (First Year Only)',
      duration: '2-month',
      guarantee: 'Job Guarantee',
      color: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      name: 'GOLD PLAN',
      price: '$3000',
      description: 'Upfront (No Other Payments)',
      income: '5.14% of Annual Income (First Year Only)',
      duration: '3-month',
      guarantee: 'Job Guarantee',
      color: 'bg-yellow-500',
      textColor: 'text-black'
    },
    {
      name: 'SILVER PLAN',
      price: '$2000',
      description: 'Upfront (No Other Payments)',
      income: '4.14% of Annual Income (First Year Only)',
      duration: '4-month',
      guarantee: 'Job Guarantee',
      color: 'bg-gray-400',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <section className="bg-gradient-to-r from-slate-800 via-blue-900 to-teal-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Plans & Services
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-4xl mx-auto">
            Industry leading Specialists in Talent Acquisition, Job Hunting, VMS and IT Recruitment
          </p>
          <p className="text-lg text-blue-200">
            Explore our services & Plans
          </p>
        </div>
      </section>

      {/* Compensation Plan Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-600 underline mb-4">
            HighWages Placement Solutions
          </h2>
          <h3 className="text-2xl font-bold text-blue-600 underline">
            Compensation Plan
          </h3>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {plans.map((plan, index) => (
              <Card key={index} className="border-2 border-gray-300 shadow-lg bg-white">
                <CardHeader className={`${plan.color} ${plan.textColor} text-center py-4`}>
                  <CardTitle className="text-lg font-bold">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center bg-white">
                  <div className="text-4xl font-bold text-black mb-2">{plan.price.replace('$', '')}</div>
                  <div className="text-sm text-gray-700 mb-4">
                    {plan.description}
                  </div>
                  <div className="text-sm text-gray-800 font-medium mb-4">
                    {plan.income}
                  </div>
                  <div className="text-sm text-gray-700 mb-2">
                    {plan.duration}
                  </div>
                  <div className="text-sm text-gray-700 mb-6">
                    {plan.guarantee}
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
                    onClick={() => router.push('/contact')}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 border border-gray-300 shadow-sm">
            <h2 className="text-2xl font-bold text-black mb-6">Terms and conditions:</h2>
            
            <div className="text-gray-800 leading-relaxed space-y-4">
              <p>
                <strong>1. Payment Terms:</strong> All payments are upfront with no additional charges. The specified percentage of annual income is calculated based on your first year salary only.
              </p>
              <p>
                <strong>2. Job Guarantee:</strong> We guarantee job placement within the specified timeframe for each plan. If we fail to secure a position within this period, you are eligible for a full refund.
              </p>
              <p>
                <strong>3. Income Calculation:</strong> The percentage of annual income is calculated on your gross annual salary from your first job placement through our services.
              </p>
              <p>
                <strong>4. Service Scope:</strong> Our services include resume optimization, interview preparation, skill assessment, personalized coaching, and direct employer connections.
              </p>
              <p>
                <strong>5. Refund Policy:</strong> Full refund available if job placement is not achieved within the guaranteed timeframe. No refunds after successful placement.
              </p>
              <p>
                <strong>6. Client Responsibilities:</strong> Clients must actively participate in the program, attend scheduled sessions, and follow through with interview opportunities provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that best fits your needs and let us help you secure your dream job.
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            onClick={() => router.push('/contact')}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
