"use client";
import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-16">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-6 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Terms & Conditions</h1>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Ezylyhired.com. These Terms and Conditions govern your use of our website and services.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Welcome to Ezylyhired.com ("Ezylyhired", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your use of our website (www.ezylyhired.com) and services provided to job seekers in the IT industry.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            By using our platform or services, you ("you", "candidate", or "user") agree to be bound by these Terms. Please read them carefully.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Our Role</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ezylyhired.com is a recruitment platform and service provider that helps IT professionals connect with job opportunities in the United States. Our services include:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• Resume screening and feedback</li>
              <li>• Interview preparation</li>
              <li>• Job matching and referrals</li>
              <li>• Direct connection to hiring employers or recruiters</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We charge candidates for placement. Our goal is to assist you in finding the right job opportunity based on your skills, preferences, and experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">You must be:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• At least 18 years old</li>
              <li>• Legally authorized to work in the United States or eligible for sponsorship (we may assist with relevant employer connections depending on your status)</li>
              <li>• Able to provide accurate, up-to-date information about your professional background</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Candidate Responsibilities</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">By using our services, you agree to:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• Provide accurate and complete information, including your resume, skills, work history, and contact details</li>
              <li>• Inform us if you are no longer seeking job opportunities</li>
              <li>• Act professionally in all interactions with potential employers introduced by us</li>
              <li>• Notify us if you receive a job offer or accept a position through our assistance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy. Any information you share with Ezylyhired.com will only be shared with potential employers or recruiters with your permission. You agree not to share any proprietary or confidential information you receive from employers without their consent.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Please refer to our Privacy Policy for detailed information on how we handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. No Guarantee of Employment</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">While we work diligently to support your job search, we cannot guarantee:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• Job placement</li>
              <li>• Specific salaries or job offers</li>
              <li>• Timeline for interviews or responses from employers</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Job search outcomes depend on several external factors including employer needs, market demand, and your qualifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on the Ezylyhired.com platform, including articles, guides, logos, and branding, are the property of Ezylyhired.com and may not be used or reproduced without our written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Ezylyhired.com is not liable for:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• Decisions made by hiring employers</li>
              <li>• Job offers that are withdrawn or employment terms that change</li>
              <li>• Any losses or damages arising from your use of the site or our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              You may stop using our services at any time. We reserve the right to suspend or terminate your access to our services if we believe you've violated these Terms, misrepresented your credentials, or engaged in unprofessional conduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms periodically. Changes will be posted on our website with an updated "Effective Date." By continuing to use our services after changes are posted, you agree to the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms or need assistance with your job search, contact us:
            </p>
            <div className="mt-4 text-gray-700 space-y-1">
              <p><strong>Ezylyhired.com</strong></p>
              <p><strong>Email:</strong> info@ezylyhired.com</p>
              <p><strong>Phone:</strong> +44 1200 480208</p>
              <p><strong>Address:</strong> Madison Ave New York, USA</p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfUse;
