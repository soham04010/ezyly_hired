"use client";
import React from 'react';
import { CheckCircle, Users, Clock, Target, Award, TrendingUp, BookOpen, MessageCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ServiceDescription = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: 'Resume Making & Understanding',
      description: 'We refine your personal or business profile to showcase your unique strengths and value. Through targeted marketing, we elevate visibility and credibility across key digital platforms.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: 'Interview Support to Candidate',
      description: 'We provide personalized interview coaching, mock sessions, and feedback to boost confidence and performance. From strategy to storytelling, we prepare candidates to stand out and succeed.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Resume Grooming',
      description: 'We craft ATS-optimized resumes that highlight your strengths and achievements with clarity and impact. Each session includes personalized grooming to align your profile with your target roles.',
      image: 'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Resume Understanding',
      description: 'We break down your current resume to uncover gaps, strengths, and alignment with industry standards. Gain actionable insights to position yourself more strategically in the job market.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Training & Interview Preparation',
      description: 'Intensive 1:1 training designed to sharpen your technical, behavioral, and strategic interview skills. We equip you with the tools, confidence, and practice to excel across interview stages.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Assessments Upto 4 Hours',
      description: 'We take online assessments on your behalf—be it job-related tests or academic evaluations. Our experts ensure accurate, timely completion to help you secure the outcome you need.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Personal Career Counseling',
      description: 'One-on-one career counseling tailored to your goals, skills, and industry trends. We help you navigate key decisions, build clarity, and map out a strategic path to success.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Assessments More Than 4 Hours',
      description: 'For lengthy or complex online assessments, we handle the entire process on your behalf with precision. Ideal for job tests, certifications, or academic exams requiring extended time and focus.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 leading-tight text-white">
              Service Detailed Description
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Comprehensive career services designed to accelerate your professional growth and success. From resume optimization to interview mastery, we provide the expertise you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-semibold transition-colors text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded font-semibold transition-colors text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a complete suite of career services tailored to help you succeed at every stage of your professional journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Further Service Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Further Service Information
            </h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
              </p>
              <p className="mb-6">
                Our comprehensive approach ensures that every aspect of your career development is covered with precision and expertise. We understand that each professional journey is unique, which is why our services are tailored to meet your specific needs and goals.
              </p>
              <p>
                Whether you're looking to make a career transition, advance in your current field, or simply optimize your professional presence, our team of experts is here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600">
              We deliver results through proven methodologies and personalized attention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Professional career experts with years of industry experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Approach</h3>
              <p className="text-gray-600">Tailored solutions that match your unique career goals and aspirations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Track record of success helping professionals achieve their career objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Contact Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Madison Ave New York, USA</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+44 1200 480208</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit us</h3>
              <p className="text-gray-600">Schedule an appointment</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <span className="sr-only">Email</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-orange-100 leading-relaxed">
            Take the next step towards your professional success with our comprehensive career services. Let our experts guide you to achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-4 rounded font-semibold transition-colors text-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-10 py-4 rounded font-semibold transition-colors text-lg">
              View All Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDescription;
