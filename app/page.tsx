"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Modern Banner Section - Full Screen with Left-Aligned Content */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <Image
          src="/mission.jpg"
          alt="Banner"
          fill
          className="object-cover object-center opacity-70"
          priority
        />

        {/* Overlay Content aligned to the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
          <div className="px-6 md:px-12 lg:px-20 w-full max-w-4xl">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                Anything’s possible <br /> when you have the talent
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl drop-shadow-md">
                Find skilled candidates, in-demand jobs and the solutions you
                need to help you do your best work yet.
              </p>
              <div className="flex gap-4">
                <a
                  href="/find-jobs"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition shadow-md"
                >
                  Find Jobs
                </a>
                <a
                  href="/hire-talent"
                  className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-semibold transition shadow-md"
                >
                  Hire Talent
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hiring Trends */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Hiring trends and insights to help you win
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
            Stay informed with real-time workforce analytics, market trends, and
            industry insights tailored to your hiring and job searching needs.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Workforce Analytics",
              desc:
                "Analyze workforce data to make smarter hiring decisions and optimize team structure.",
              img: "/do.jpg",
            },
            {
              title: "Market Trends",
              desc:
                "Keep up with evolving industry demands and emerging job market shifts.",
              img: "/hand.jpg",
            },
            {
              title: "Industry Insights",
              desc:
                "Gain competitive advantage by understanding sector-specific hiring challenges and opportunities.",
              img: "/ment.jpg",
            },
          ].map(({ title, desc, img }, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="border rounded-lg p-6 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 flex flex-col"
            >
              <div className="w-full h-40 relative mb-5 rounded-lg overflow-hidden shadow-md">
                <Image src={img} alt={title} fill className="object-cover" />
              </div>
              <h3 className="font-extrabold text-2xl mb-2 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                {title} <span aria-hidden="true">✨</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 flex-grow leading-relaxed mb-4">
                {desc}
              </p>
              <blockquote className="italic text-gray-500 dark:text-gray-400 text-sm border-l-4 border-blue-600 dark:border-blue-400 pl-4">
                “This insight transformed how we hire and grow our teams.”
              </blockquote>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Find Your Next Hire */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Find your next hire
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-10 leading-relaxed">
            Preview recruiter-assessed and AI-matched candidates, book
            consultations with recruiters, and receive expert support every
            step of the way.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Recruiter-Assessed Candidates",
                img: "/mission.jpg",
                quote:
                  "Top-notch talent thoroughly vetted by our expert recruiters.",
              },
              {
                label: "AI-Matched Talent",
                img: "/do.jpg",
                quote:
                  "Smart AI matches to help you discover perfect-fit candidates.",
              },
              {
                label: "Consultations & Expert Support",
                img: "/hand.jpg",
                quote: "Get expert guidance throughout your hiring journey.",
              },
            ].map(({ label, img, quote }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 hover:shadow-xl cursor-pointer flex flex-col"
              >
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden shadow-md">
                  <Image src={img} alt={label} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  {label} <span aria-hidden="true">🚀</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 flex-grow leading-relaxed italic">
                  "{quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Solutions */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Consulting solutions to drive business impact
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-10 leading-relaxed">
          Develop clear visions and strategies, enhance business performance
          with critical technologies, and implement plans or manage operations
          with expert guidance.
        </p>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 max-w-2xl">
            <li>Develop clear visions and strategies</li>
            <li>
              Enhance business performance with critical technologies and
              processes
            </li>
            <li>Implement plans or manage operations</li>
          </ul>
          <div className="relative w-full md:w-[400px] h-60 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/recruitment.jpg"
              alt="Consulting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Specialized Talent */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          Add specialized talent across your organization
        </h2>
        <div className="grid md:grid-cols-5 gap-6 text-gray-700 dark:text-gray-300">
          {[
            {
              category: "Finance & Accounting",
              roles: "Accountants, CFOs, analysts, controllers",
              img: "/ment.jpg",
              icon: "💼",
            },
            {
              category: "Technology",
              roles: "Cybersecurity, developers, engineers",
              img: "/mission.jpg",
              icon: "💻",
            },
            {
              category: "Marketing & Creative",
              roles: "Copywriters, designers, managers",
              img: "/hand.jpg",
              icon: "🎨",
            },
            {
              category: "Legal",
              roles: "Lawyers, paralegals, assistants",
              img: "/job.jpg",
              icon: "⚖️",
            },
            {
              category: "Admin & Support",
              roles: "Office managers, exec assistants",
              img: "/ment.jpg",
              icon: "🗂️",
            },
          ].map(({ category, roles, img, icon }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border rounded-lg p-6 hover:shadow-xl cursor-pointer bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {icon}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{roles}</p>
              <div className="w-full h-32 relative mt-4 rounded-lg overflow-hidden shadow-md">
                <Image src={img} alt={category} fill className="object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
{/* About Us Section - Clean and Subtle */}
<section className="max-w-7xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-300">
  <h2 className="text-3xl font-semibold mb-6 text-center">
    About Us
  </h2>
  <p className="max-w-3xl mx-auto mb-8 leading-relaxed text-center text-gray-600 dark:text-gray-400">
    We are dedicated to connecting top talent with the right opportunities. Our mission is to empower both job seekers and employers to succeed through cutting-edge technology and personalized service.
  </p>
  <div className="text-center">
    <Link
      href="/about"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
    >
      Learn More About Us
    </Link>
  </div>
</section>

{/* Contact Us Section - Minimal & Theme Consistent */}
<section className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">
      Get in Touch
    </h2>
    <p className="mb-8 max-w-xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
      Have questions or need assistance? We're here to help. Reach out anytime.
    </p>
    <a
      href="/contact"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
    >
      Contact Us
    </a>
  </div>
</section>


{/* Footer - Consistent with Homepage Theme */}
<footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-sm text-center md:text-left">
      © {new Date().getFullYear()} Ezyly Hired. All rights reserved.
    </p>
    <div className="flex gap-4">
      <a href="/privacy-policy" className="hover:underline text-sm">
        Privacy Policy
      </a>
      <a href="/terms-of-service" className="hover:underline text-sm">
        Terms of Service
      </a>
    </div>
  </div>
</footer>

    </main>
  );
}
