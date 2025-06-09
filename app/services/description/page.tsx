"use client";
import React from 'react';
import { CheckCircle, Users, Clock, Target, Award, TrendingUp, BookOpen, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const ServiceDescription = () => {
  const router = useRouter();

  const services = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: 'Resume Making & Understanding',
      description: 'We refine your personal or business profile to showcase your unique strengths and value. Through targeted marketing, we elevate visibility and credibility across key digital platforms.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3 Months'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: 'Interview Support to Candidate',
      description: 'We provide personalized interview coaching, mock sessions, and feedback to boost confidence and performance. From strategy to storytelling, we prepare candidates to stand out and succeed.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3 Months'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: 'Resume Grooming',
      description: 'We craft ATS-optimized resumes that highlight your strengths and achievements with clarity and impact. Each session includes personalized grooming to align your profile with your target roles.',
      image: 'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '1 Time'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: 'Resume Understanding',
      description: 'We break down your current resume to uncover gaps, strengths, and alignment with industry standards. Gain actionable insights to position yourself more strategically in the job market.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2 Months'
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: 'Training & Interview Preparation',
      description: 'Intensive 1:1 training designed to sharpen your technical, behavioral, and strategic interview skills. We equip you with the tools, confidence, and practice to excel across interview stages.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Hours+'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Assessments Upto 4 Hours',
      description: 'We take online assessments on your behalf—be it job-related tests or academic evaluations. Our experts ensure accurate, timely completion to help you secure the outcome you need.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6 Months'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: 'Personal Career Counseling',
      description: 'One-on-one career counseling tailored to your goals, skills, and industry trends. We help you navigate key decisions, build clarity, and map out a strategic path to success.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '1 Hour'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: 'Assessments More Than 4 Hours',
      description: 'For lengthy or complex online assessments, we handle the entire process on your behalf with precision. Ideal for job tests, certifications, or academic exams requiring extended time and focus.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4+ Hours'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <section className="bg-gradient-to-r from-slate-800 via-blue-900 to-teal-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Service Detailed Description
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-4xl mx-auto">
            Industry leading Specialists in Talent Acquisition, Job Hunting, VMS and IT Recruitment
          </p>
          <p className="text-lg text-blue-200">
            Explore our comprehensive service offerings
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Further Service Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-300 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Further Service Information</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, a pellentesque nec, egestas non nisi.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
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

export default ServiceDescription;
