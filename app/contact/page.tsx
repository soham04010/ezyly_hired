
"use client";
import React from 'react';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Swal from "sweetalert2";

const Contact = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "aa8354b7-18d4-4419-91da-afd2af041e66");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thanks for contacting us.",
        icon: "success",
        background: "#09090b",
        color: "#e4e4e7",
        confirmButtonColor: "#16a34a",
      });
      event.currentTarget.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "Please try again.",
        icon: "error",
        background: "#09090b",
        color: "#e4e4e7",
        confirmButtonColor: "#ef4444",
      });
    }
  }

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact EzylyHired</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Ready to find your next opportunity or exceptional talent? Get in touch with our team today.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Content */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-[#424242] mb-8">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're here to help you connect with the right opportunities or find the perfect talent for your organization. Reach out to us through any of the following channels.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#424242]">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#424242]">Email</h3>
                      <p className="text-gray-600">info@ezylyhired.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#424242]">Address</h3>
                      <p className="text-gray-600">
                        123 Business Ave<br />
                        Suite 100<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-[#424242] mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                      <Linkedin className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                      <Twitter className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                      <Instagram className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                      <Facebook className="h-5 w-5 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-[#424242] mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input 
                        name="firstName" 
                        placeholder="Enter your first name" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input 
                        name="lastName" 
                        placeholder="Enter your last name" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input 
                        name="phone" 
                        placeholder="Enter your phone number" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      name="message" 
                      placeholder="What do you have in mind?" 
                      required 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none bg-white"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're looking for talent or opportunities, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium rounded-full">
                Hire Talent
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-medium rounded-full bg-transparent">
                Find Jobs
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
