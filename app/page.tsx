
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleInRotate = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  show: { 
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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
          <div className="px-4 sm:px-6 md:px-12 lg:px-20 w-full max-w-4xl">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-white"
            >
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 drop-shadow-lg"
              >
                Anything's possible <br className="hidden sm:block" />
                when you have the <br className="hidden sm:block" />
                <span className="text-blue-400 animate-pulse">talent</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl drop-shadow-md"
              >
                Find skilled candidates, in-demand jobs and the solutions you need to help you do your best work yet.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Find a job
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto bg-transparent"
                >
                  Hire talent
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Animation Elements - Hidden on mobile for performance */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-20 right-20 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden md:block absolute bottom-40 right-40 w-16 h-16 bg-red-500/20 rounded-full backdrop-blur-sm"
        />
      </section>

      {/* Hiring Trends Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground text-center sm:text-left">
            Hiring trends and insights to help you win
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg text-center sm:text-left">
            Stay informed with real-time workforce analytics, market trends, and
            industry insights tailored to your hiring and job searching needs.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {[
            {
              title: "Workforce Analytics",
              desc: "Analyze workforce data to make smarter hiring decisions and optimize team structure.",
              img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Market Trends",
              desc: "Keep up with evolving industry demands and emerging job market shifts.",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Industry Insights",
              desc: "Gain competitive advantage by understanding sector-specific hiring challenges and opportunities.",
              img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
          ].map(({ title, desc, img }, i) => (
            <motion.div
              key={i}
              variants={scaleInRotate}
              className="group"
            >
              <Card className="h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={img} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Floating icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm"
                  >
                    ✨
                  </motion.div>
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl text-blue-600 flex items-center gap-2">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="leading-relaxed text-sm sm:text-base">
                    {desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Find Your Next Hire Section */}
      <section className="bg-muted/50 py-12 sm:py-20 relative overflow-hidden">
        {/* Background decorative elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-10 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50" />
        <div className="hidden sm:block absolute bottom-10 right-10 w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground text-center sm:text-left">
              Find your next hire
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg text-center sm:text-left">
              Preview recruiter-assessed and AI-matched candidates, book
              consultations with recruiters, and receive expert support every
              step of the way.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                label: "Recruiter-Assessed Candidates",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                quote: "Top-notch talent thoroughly vetted by our expert recruiters.",
              },
              {
                label: "AI-Matched Talent",
                img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                quote: "Smart AI matches to help you discover perfect-fit candidates.",
              },
              {
                label: "Consultations & Expert Support",
                img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                quote: "Get expert guidance throughout your hiring journey.",
              },
            ].map(({ label, img, quote }, i) => (
              <motion.div
                key={i}
                variants={scaleInRotate}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: window.innerWidth > 768 ? 5 : 0,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl cursor-pointer relative overflow-hidden">
                  <div className="relative w-full h-32 sm:h-40 overflow-hidden">
                    <img 
                      src={img} 
                      alt={label} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Animated border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-t-lg transition-colors duration-300" />
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg text-blue-600 flex items-center gap-2">
                      {label} 
                      <motion.span 
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        aria-hidden="true"
                      >
                        🚀
                      </motion.span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <CardDescription className="leading-relaxed italic text-sm sm:text-base">
                      "{quote}"
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consulting Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground text-center sm:text-left">
            Consulting solutions to drive business impact
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg text-center sm:text-left">
            Develop clear visions and strategies, enhance business performance
            with critical technologies, and implement plans or manage operations
            with expert guidance.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-muted-foreground text-base sm:text-lg">
              <li>Develop clear visions and strategies</li>
              <li>Enhance business performance with critical technologies and processes</li>
              <li>Implement plans or manage operations</li>
            </ul>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-1 relative w-full h-60 sm:h-80 rounded-lg overflow-hidden shadow-lg order-1 lg:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Consulting"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </section>

      {/* Specialized Talent Section */}
      <section className="bg-muted/50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-foreground text-center">
              Add specialized talent across your organization
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                category: "Finance & Accounting",
                roles: "Accountants, CFOs, analysts, controllers",
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                icon: "💼",
              },
              {
                category: "Technology",
                roles: "Cybersecurity, developers, engineers",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                icon: "💻",
              },
              {
                category: "Marketing & Creative",
                roles: "Brand, content, communications, digital",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                icon: "🎨",
              },
              {
                category: "Operations & Supply Chain",
                roles: "Procurement, manufacturing, logistics",
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                icon: "📦",
              },
              {
                category: "Customer Experience",
                roles: "Customer success, support, training",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                icon: "🤝",
              },
            ].map(({ category, roles, img, icon }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="group"
              >
                <Card className="h-full cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-2 p-3 sm:p-6">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl sm:text-4xl mb-2"
                    >
                      {icon}
                    </motion.div>
                    <CardTitle className="text-sm sm:text-lg leading-tight">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-3 sm:p-6 pt-0">
                    <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4">{roles}</CardDescription>
                    <div className="relative w-full h-16 sm:h-20 rounded-md overflow-hidden">
                      <img 
                        src={img} 
                        alt={category} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Advice Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            Hiring advice, talent trends and career tips
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg">
            Access our latest research, webinars, blogs and events to stay
            updated and improve your hiring or job search.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Research & Reports",
              desc: "Insights on industry hiring trends and workforce data.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Webinars & Events",
              desc: "Interactive sessions featuring industry experts and thought leaders.",
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Blogs & Career Tips",
              desc: "Practical advice for job seekers and employers alike.",
              img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
          ].map(({ title, desc, img }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <Card className="h-full cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-t-lg">
                  <img 
                    src={img} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl text-blue-600 flex items-center gap-2">
                    {title} <span aria-hidden="true">📚</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="leading-relaxed text-sm sm:text-base">
                    {desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-white dark:text-gray-200 font-semibold text-lg mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">About Us</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Careers</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white dark:text-gray-200 font-semibold text-lg mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Find Jobs</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Hire Talent</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white dark:text-gray-200 font-semibold text-lg mb-3 sm:mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Blog</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Reports</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white dark:text-gray-200 font-semibold text-lg mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Contact</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Help Center</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 dark:border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} EzylyHired. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Privacy Policy</a>
              <a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Terms of Service</a>
              <a href="#" className="hover:text-white dark:hover:text-gray-200 transition text-sm sm:text-base">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
