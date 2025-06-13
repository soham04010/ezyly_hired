"use client";
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Users, Target, Award, CheckCircle, Globe, Heart, Lightbulb, Shield } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-10 w-10 text-teal-600" />,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in all our interactions."
  },
  {
    icon: <Heart className="h-10 w-10 text-teal-600" />,
    title: "Passion",
    description: "We are passionate about connecting people and opportunities that make a difference."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-teal-600" />,
    title: "Innovation",
    description: "We embrace new ideas and technologies to deliver the best recruitment solutions."
  },
  {
    icon: <Shield className="h-10 w-10 text-teal-600" />,
    title: "Reliability",
    description: "Our clients and candidates trust us to deliver consistent, high-quality results."
  }
];

const achievements = [
  {
    number: "500+",
    label: "Placements",
    description: "Successful placements across multiple industries."
  },
  {
    number: "98%",
    label: "Satisfaction",
    description: "Client satisfaction rate with our recruitment process."
  },
  {
    number: "10+",
    label: "Years Experience",
    description: "A decade of expertise in talent acquisition."
  },
  {
    number: "100+",
    label: "Clients",
    description: "Trusted by over 100 companies and organizations."
  }
];

const services = [
  "Permanent & Contract Staffing",
  "Executive Search & Headhunting",
  "Talent Mapping & Market Insights",
  "Employer Branding Solutions",
  "Candidate Screening & Assessment",
  "Onboarding Support"
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="pt-0">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About EzylyHired</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Your trusted partner in connecting exceptional talent with outstanding opportunities across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#424242] mb-8">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At EzylyHired, we believe that finding the right talent should be easy, efficient, and effective. Our mission is to bridge the gap between exceptional professionals and organizations that value their skills, experience, and potential.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We specialize in placing top-tier talent across various industries, from finance and technology to marketing and legal services. Our comprehensive approach ensures perfect matches that drive success for both candidates and employers.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With years of industry expertise and a deep understanding of market trends, we've built a reputation as a reliable partner in the recruitment landscape.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8" />
                    <div>
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm opacity-90">Successful Placements</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#424242] mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape our relationships with clients and candidates.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-[#424242] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop" 
                  alt="Professional consultation"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#424242] mb-8">Our Services</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We offer comprehensive recruitment solutions tailored to meet the diverse needs of modern businesses and professionals.
                </p>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Track Record</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Numbers that speak to our commitment and success in the recruitment industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                  <div className="text-gray-200">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#424242] mb-6">Why Choose EzylyHired?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We go beyond traditional recruitment to deliver exceptional value to both employers and job seekers.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Globe className="h-12 w-12 text-teal-600 mb-6" />
                <h3 className="text-2xl font-bold text-[#424242] mb-4">Industry Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep knowledge across multiple industries including finance, technology, marketing, legal, and administrative sectors with specialized recruitment strategies for each.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Users className="h-12 w-12 text-teal-600 mb-6" />
                <h3 className="text-2xl font-bold text-[#424242] mb-4">Personalized Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every placement is unique. We take time to understand your specific needs, culture, and goals to ensure the perfect match between talent and opportunity.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Award className="h-12 w-12 text-teal-600 mb-6" />
                <h3 className="text-2xl font-bold text-[#424242] mb-4">Proven Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our track record speaks for itself - high client satisfaction rates, successful long-term placements, and strong relationships built on trust and results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-[#424242] mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for exceptional talent or seeking your next career opportunity, 
              we're here to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-colors cursor-pointer">
                  Hire Talent
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
