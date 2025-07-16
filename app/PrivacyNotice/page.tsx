"use client";
import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const PrivacyNotice = () => {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Ezyly Hired is committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We may collect the following types of personal information:</p>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, mailing address, and job preferences.</li>
              <li><strong>Employment Information:</strong> Resume, work history, skills, certifications, education, references, and other job-related details you may submit to apply for positions.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use the Site, including your IP address, browser type, and browsing activity on our Site.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and similar tracking technologies to enhance your experience and collect data for analytics purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We use the information we collect for the following purposes:</p>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li><strong>To Provide Staffing Services:</strong> To match candidates with job opportunities and assist with the recruitment process.</li>
              <li><strong>To Communicate with You:</strong> To respond to inquiries, send you job opportunities, and update you on the status of your applications.</li>
              <li><strong>To Improve Our Services:</strong> To analyze and improve the performance of our Site, identify trends, and enhance user experience.</li>
              <li><strong>To Comply with Legal Requirements:</strong> To fulfill our legal obligations and protect our legal interests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Share Your Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We may share your information in the following circumstances:</p>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li><strong>With Employers:</strong> To match candidates with job opportunities, we may share your personal and professional details with prospective employers and clients.</li>
              <li><strong>Service Providers:</strong> We may share your data with third-party service providers who assist in delivering our services (e.g., website hosting, email delivery, recruitment tools).</li>
              <li><strong>Legal Compliance:</strong> We may disclose your information if required by law, regulation, or legal process, or to protect the rights, property, or safety of Ezyly Hired, our clients, or others.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              SMS opt-in or phone numbers for the purpose of SMS are not being shared with any third parties or affiliate company for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. If you wish to delete or update your information, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Depending on your location, you may have certain rights regarding your personal data, including:</p>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li><strong>Access:</strong> You may request access to the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You may update or correct your personal data.</li>
              <li><strong>Deletion:</strong> You may request the deletion of your personal data (subject to legal exceptions).</li>
              <li><strong>Opt-Out:</strong> You may choose not to receive marketing communications from us by following the unsubscribe instructions in our emails or by contacting us directly.</li>
              <li><strong>Data Portability:</strong> You may request a copy of your personal data in a structured, commonly used, and machine-readable format.</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              To exercise your rights, please contact us at info@ezylyhired.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance user experience, analyze trends, and gather information about Site usage. You can control the use of cookies through your browser settings. However, disabling cookies may affect the functionality of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Websites</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Site may contain links to third-party websites that are not operated by us. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at info@ezylyhired.com.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyNotice;
