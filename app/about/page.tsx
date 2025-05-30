"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Enhanced animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleInRotate = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { 
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    } 
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

// Expandable text component
function ExpandableText({ children }: { children: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <p
      className={`text-muted-foreground leading-relaxed ${
        !expanded ? "line-clamp-3 md:line-clamp-none" : ""
      } transition-all duration-300`}
    >
      {children}
      <button
        onClick={() => setExpanded(!expanded)}
        className="ml-2 text-blue-600 dark:text-blue-400 font-semibold text-sm md:hidden hover:underline transition-colors"
        aria-expanded={expanded}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}

export default function About() {
  const cards = [
    {
      title: "Placement Guarantee",
      desc: "We are committed to delivering a 100% placement guarantee, ensuring that every candidate finds the perfect job match swiftly and securely.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Placement Guarantee",
      icon: "🎯",
      link: "/placement-guarantee", // Add your custom link here
    },
    {
      title: "Personalized Support",
      desc: "Our expert team provides personalized coaching, interview prep, and career guidance to help you excel every step of the way.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Personalized Support",
      icon: "🤝",
      link: "/personalized-support", // Add your custom link here
    },
    {
      title: "Trusted Network",
      desc: "We collaborate with leading companies and industries to offer you exclusive access to the best job opportunities available.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Trusted Network",
      icon: "🌐",
      link: "/trusted-network", // Add your custom link here
    },
  ];

  const steps = [
    {
      title: "Sign Up",
      description: "Create your free EzylyHired account in just a few clicks.",
      icon: "✨",
    },
    {
      title: "Upload Resume",
      description: "Add your resume and complete your profile to stand out.",
      icon: "📄",
    },
    {
      title: "Get Matched",
      description: "We connect you to jobs tailored to your skills and goals.",
      icon: "🔍",
    },
    {
      title: "Get Hired",
      description: "Interview, land the job, and start your career journey.",
      icon: "🚀",
    },
  ];

  const values = [
    { title: "Integrity", desc: "We maintain transparency and honesty in all our dealings.", icon: "⚖️" },
    { title: "Empathy", desc: "Understanding and supporting our candidates every step of the way.", icon: "❤️" },
    { title: "Innovation", desc: "Leveraging technology to improve recruitment experiences.", icon: "💡" },
    { title: "Excellence", desc: "Committed to providing top-notch services and outcomes.", icon: "🏆" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400/30 rounded-full"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-purple-400/30 rounded-full"
        />
      </div>

      <div className="relative z-10 px-6 md:px-16 py-16 max-w-7xl mx-auto flex flex-col">
        {/* Header */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-md bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              About <span className="text-blue-600 dark:text-blue-400">EzylyHired</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground font-medium"
          >
            Your trusted partner for effortless job placement and career success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
          </motion.div>
        </motion.section>

        {/* Our Mission */}
        <motion.section
          className="mb-20 md:flex md:items-center md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0" 
            variants={slideInLeft}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Mission"
                className="relative w-full h-80 rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
              >
                🎯
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="md:w-1/2 space-y-6" variants={slideInRight}>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <ExpandableText>
              At EzylyHired, our mission is to empower job seekers by providing a seamless and effective platform that guarantees placement. We aim to eliminate the stress of job hunting by offering end-to-end support and personalized job matching, ensuring success for every individual.
            </ExpandableText>
          </motion.div>
        </motion.section>

        {/* What We Do */}
        <motion.section
          className="mb-20 md:flex md:items-center md:gap-16 md:flex-row-reverse"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0" 
            variants={slideInRight}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="What We Do"
                className="relative w-full h-80 rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
              >
                💼
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="md:w-1/2 space-y-6" variants={slideInLeft}>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What We Do
            </h2>
            <ExpandableText>
              We offer comprehensive recruitment solutions, including tailored job matching, resume building, interview preparation, and direct connections to top companies. Our platform is designed to simplify and accelerate the job search process for candidates and employers alike.
            </ExpandableText>
          </motion.div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          className="mb-24 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h2>
          <div className="relative">
            {/* Animated connecting line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
            />
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeUp} 
                  className="relative flex items-start gap-8"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-xl"
                  >
                    <span className="text-2xl">{step.icon}</span>
                  </motion.div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {cards.map(({ title, desc, image, alt, icon, link }, idx) => (
              <motion.div
                key={idx}
                variants={scaleInRotate}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-0 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={image}
                      alt={alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: idx * 0.2, type: "spring", stiffness: 200 }}
                      className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                    >
                      <span className="text-2xl">{icon}</span>
                    </motion.div>
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                    <CardDescription className="leading-relaxed flex-grow mb-6 text-base">
                      {desc}
                    </CardDescription>
                    <Button
                      variant="outline"
                      className="self-start border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                      onClick={() => window.location.href = "/services/individual"}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          className="mb-24 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg"
                    >
                      {value.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="relative overflow-hidden rounded-3xl p-12 text-center text-white shadow-2xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800" />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl"
          />
          <div className="relative z-10">
            <motion.h2 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              className="text-5xl font-extrabold mb-6"
            >
              Ready to get started?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-10 max-w-xl mx-auto text-xl font-medium"
            >
              Join thousands of satisfied candidates and employers who trust EzylyHired.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 px-12 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                onClick={() => window.location.href = "/contact"} // Add your custom link here
              >
                Get Started
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="border-t border-border py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">EzylyHired</h3>
              <p className="text-muted-foreground">© 2025 EzylyHired, Inc. All rights reserved.</p>
            </motion.div>
            <motion.nav 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-8 text-muted-foreground"
            >
              {[
                { name: "About", link: "/about" },
                { name: "Privacy", link: "/privacy" },
                { name: "Terms", link: "/terms" },
                { name: "Contact", link: "/contact" }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.link} // Add your custom links here
                  className="hover:underline hover:text-foreground transition-colors text-lg"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.nav>
          </div>
        </footer>
      </div>
    </main>
  );
}
