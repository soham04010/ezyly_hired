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
      income: '8.12% of Annual Income (First Year Only)',
      duration: '2-month Job Guarantee',
      color: 'bg-cyan-500',
      textColor: 'text-white'
    },
    {
      name: 'PLATINUM PLAN',
      price: '$4000',
      income: '6.14% of Annual Income (First Year Only)',
      duration: '2-month Job Guarantee',
      color: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      name: 'GOLD PLAN',
      price: '$3000',
      income: '5.14% of Annual Income (First Year Only)',
      duration: '3-month Job Guarantee',
      color: 'bg-yellow-500',
      textColor: 'text-white'
    },
    {
      name: 'SILVER PLAN',
      price: '$2000',
      income: '4.14% of Annual Income (First Year Only)',
      duration: '4-month Job Guarantee',
      color: 'bg-gray-400',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            HighWages Placement Solutions
          </h1>
          <h2 className="text-3xl font-bold text-blue-600 underline mb-8">
            Compensation Plan
          </h2>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg">
                <CardHeader className={`${plan.color} ${plan.textColor} text-center py-4`}>
                  <CardTitle className="text-lg font-bold">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-4">{plan.price}</div>
                  <div className="text-sm text-gray-600 mb-2">
                    Upfront (No Other Payments)
                  </div>
                  <div className="text-sm text-gray-700 mb-4 font-medium">
                    {plan.income}
                  </div>
                  <div className="text-sm text-gray-600">
                    {plan.duration}
                  </div>
                  <div className="text-sm text-gray-600 mb-6">
                    Job Guarantee
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions:</h2>
          
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="text-gray-700 leading-relaxed space-y-4">
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
      <section className="py-16">
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
