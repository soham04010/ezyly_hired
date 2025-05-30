"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

// Animation variants
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

// Expandable text component
function ExpandableText({ children }: { children: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <p
      className={`text-gray-700 dark:text-gray-300 leading-relaxed ${
        !expanded ? "line-clamp-3 md:line-clamp-none" : ""
      } transition-all duration-300`}
    >
      {children}
      <button
        onClick={() => setExpanded(!expanded)}
        className="ml-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm md:hidden"
        aria-expanded={expanded}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}

export default function AboutPage() {
  const cards = [
    {
      title: "Placement Guarantee",
      desc: "We are committed to delivering a 100% placement guarantee, ensuring that every candidate finds the perfect job match swiftly and securely.",
      image: "/hand.jpg",
      alt: "Placement Guarantee",
    },
    {
      title: "Personalized Support",
      desc: "Our expert team provides personalized coaching, interview prep, and career guidance to help you excel every step of the way.",
      image: "/ment.jpg",
      alt: "Personalized Support",
    },
    {
      title: "Trusted Network",
      desc: "We collaborate with leading companies and industries to offer you exclusive access to the best job opportunities available.",
      image: "/job.jpg",
      alt: "Trusted Network",
    },
  ];

  const steps = [
    {
      title: "Sign Up",
      description: "Create your free Ezyly Hired account in just a few clicks.",
    },
    {
      title: "Upload Resume",
      description: "Add your resume and complete your profile to stand out.",
    },
    {
      title: "Get Matched",
      description: "We connect you to jobs tailored to your skills and goals.",
    },
    {
      title: "Get Hired",
      description: "Interview, land the job, and start your career journey.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 px-6 md:px-16 py-16 max-w-7xl mx-auto flex flex-col">
      {/* Header */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
          About <span className="text-cyan-600 dark:text-cyan-400">Ezyly Hired</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium">
          Your trusted partner for effortless job placement and career success.
        </p>
      </motion.section>

      {/* Our Mission */}
      <motion.section
        className="mb-16 md:flex md:items-center md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={fadeUp}>
          <Image
            src="/mission.jpg"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-3xl shadow-lg object-cover"
            priority
          />
        </motion.div>
        <motion.div className="md:w-1/2 space-y-6" variants={fadeUp}>
          <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
          <ExpandableText>
            At Ezyly Hired, our mission is to empower job seekers by providing a seamless and effective platform that guarantees placement. We aim to eliminate the stress of job hunting by offering end-to-end support and personalized job matching, ensuring success for every individual.
          </ExpandableText>
        </motion.div>
      </motion.section>

      {/* What We Do */}
      <motion.section
        className="mb-16 md:flex md:items-center md:gap-12 md:flex-row-reverse"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={fadeUp}>
          <Image
            src="/do.jpg"
            alt="What We Do"
            width={600}
            height={400}
            className="rounded-3xl shadow-lg object-cover"
            priority
          />
        </motion.div>
        <motion.div className="md:w-1/2 space-y-6" variants={fadeUp}>
          <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
          <ExpandableText>
            We offer comprehensive recruitment solutions, including tailored job matching, resume building, interview preparation, and direct connections to top companies. Our platform is designed to simplify and accelerate the job search process for candidates and employers alike.
          </ExpandableText>
        </motion.div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="mb-20 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="relative border-l-4 border-cyan-500 dark:border-cyan-400 pl-6 space-y-12">
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUp} className="relative">
              <div className="absolute -left-[38px] top-0 w-8 h-8 rounded-full bg-cyan-500 dark:bg-cyan-400 flex items-center justify-center text-white font-bold shadow-md">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-400 mb-1">{step.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="mb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us?</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {cards.map(({ title, desc, image, alt }, idx) => (
            <motion.div
              key={idx}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-cyan-400/30 dark:border-cyan-600/40 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-400 cursor-pointer overflow-hidden flex flex-col"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-110"
                  priority
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-cyan-700 dark:text-cyan-400">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">{desc}</p>
                <button
                  aria-label={`Learn more about ${title}`}
                  className="mt-4 inline-block self-start px-5 py-2 rounded-full border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 font-semibold text-sm transition-colors hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="mb-20 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <ul className="space-y-6 list-disc list-inside text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          <li><strong>Integrity:</strong> We maintain transparency and honesty in all our dealings.</li>
          <li><strong>Empathy:</strong> Understanding and supporting our candidates every step of the way.</li>
          <li><strong>Innovation:</strong> Leveraging technology to improve recruitment experiences.</li>
          <li><strong>Excellence:</strong> Committed to providing top-notch services and outcomes.</li>
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-cyan-600 dark:bg-cyan-700 rounded-3xl p-12 text-center text-white shadow-lg mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold mb-4">Ready to get started?</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg font-medium">
          Join thousands of satisfied candidates and employers who trust Ezyly Hired.
        </p>
        <a
          href="/plans"
          className="inline-block px-14 py-4 bg-white text-cyan-700 rounded-full font-bold shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          Get Started
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-gray-300 dark:border-gray-700 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-400">Ezyly Hired</h3>
            <p className="text-gray-600 dark:text-gray-400">© 2025 Ezyly Hired, Inc. All rights reserved.</p>
          </div>
          <nav className="flex gap-6 text-gray-700 dark:text-gray-300 text-sm">
            <a href="/about" className="hover:underline">About</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
