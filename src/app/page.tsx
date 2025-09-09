'use client';

import NewsletterSignup from "@/components/NewsletterSignup";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Ultra Flat Pastel Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #fef7ff 0%, #f0f9ff 30%, #ecfdf5 60%, #f0f9ff 100%)",
            "linear-gradient(225deg, #f0f9ff 0%, #ecfdf5 30%, #fef7ff 60%, #ecfdf5 100%)",
            "linear-gradient(315deg, #ecfdf5 0%, #fef7ff 30%, #f0f9ff 60%, #fef7ff 100%)"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Soft Pastel Shapes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'w-4 h-4 bg-pink-200/30 rounded-full' :
              i % 3 === 1 ? 'w-3 h-3 bg-blue-200/25 rounded-full' :
              'w-5 h-5 bg-green-200/20 rounded-full'
            }`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7
            }}
          />
        ))}
        
        {/* Soft Pastel Orbs */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className={`absolute w-24 h-24 rounded-full blur-xl ${
              i === 0 ? 'bg-pink-100/40' :
              i === 1 ? 'bg-blue-100/35' :
              i === 2 ? 'bg-green-100/30' :
              'bg-purple-100/35'
            }`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${40 + i * 15}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
        
        {/* Soft Mouse Follower */}
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(219, 234, 254, 0.4) 0%, rgba(252, 231, 243, 0.3) 50%, transparent 100%)'
          }}
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 120 }}
        />
        
        {/* Subtle Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="relative z-10 px-8 py-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              <svg width="40" height="32" viewBox="0 0 40 32" className="text-slate-800 transition-all duration-300 group-hover:drop-shadow-lg">
                <defs>
                  <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path d="M5 26 Q10 6, 20 3 Q30 6, 35 26 Q20 23, 5 26" fill="url(#finGrad)" filter="url(#glow)" />
                <motion.path 
                  d="M3 28 Q12 26, 22 28 Q32 30, 37 28" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none" 
                  opacity="0.6"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M6 30 Q15 28, 25 30 Q35 32, 38 30" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.4"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>
            </motion.div>
            <div>
              <motion.h1 
                className="text-3xl font-extralight text-slate-800 tracking-tight hover:bg-gradient-to-r hover:from-slate-800 hover:via-blue-600 hover:to-slate-800 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                fin<span className="font-normal">Soar</span>
              </motion.h1>
              <p className="text-slate-500 text-sm font-light -mt-1">a sea of information</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center gap-8 text-slate-600"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {['About', 'Archive', 'Contact'].map((item, index) => (
              <motion.a 
                key={item}
                href="#" 
                className="relative font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <span className="relative z-10 transition-colors hover:text-slate-800">{item}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.main 
        className="relative z-10 px-8 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column - Main Content */}
            <motion.div 
              className="lg:col-span-7 space-y-8"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="space-y-8">
                <div className="overflow-hidden">
                  <motion.h2 
                    className="text-6xl lg:text-7xl font-extralight text-slate-900 leading-[0.9] tracking-tight"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      Navigate 
                    </motion.span>
                    <motion.span 
                      className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-slate-900 bg-clip-text font-light"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6, duration: 0.8 }}
                      whileHover={{ 
                        background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #1e293b, #3b82f6)",
                        backgroundSize: "300% 300%"
                      }}
                    >
                      market currents
                    </motion.span>
                    <motion.span 
                      className="block font-light"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      with precision
                    </motion.span>
                  </motion.h2>
                </div>
              </div>
              
              <motion.div 
                className="space-y-6 max-w-xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  A curated finance newsletter designed to cut through market noise and deliver 
                  actionable intelligence. Professional insights for the modern investor.
                </p>
                
                {/* Structured Data for SEO */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "WebSite",
                      "name": "Finsoar",
                      "description": "A curated finance newsletter designed to cut through market noise and deliver actionable intelligence. Professional insights for the modern investor.",
                      "url": "https://finsoar.com",
                      "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://finsoar.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                      }
                    })
                  }}
                />
                
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50/80 text-pink-600 rounded-full text-sm font-medium border border-pink-100/60"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-pink-400 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Coming Soon
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Coming Soon */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <motion.div 
                  className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-pink-100/40 shadow-sm"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ 
                    boxShadow: "0 10px 30px -5px rgba(236, 72, 153, 0.08)",
                    borderColor: "rgba(236, 72, 153, 0.2)"
                  }}
                >
                  <div className="text-center space-y-8">
                    <motion.div 
                      className="space-y-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl mb-4"
                        whileHover={{ scale: 1.02, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                        >
                          {/* Beautiful Minimalist Wave Icon */}
                          <motion.svg 
                            width="40" 
                            height="28" 
                            viewBox="0 0 60 40" 
                            className="text-pink-400"
                          >
                            <motion.path 
                              d="M8 24 Q20 12, 30 20 Q40 28, 52 16"
                              stroke="currentColor" 
                              strokeWidth="2.5" 
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 2, delay: 1.6 }}
                            />
                            <motion.path 
                              d="M8 30 Q20 18, 30 26 Q40 34, 52 22"
                              stroke="currentColor" 
                              strokeWidth="1.5" 
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              opacity="0.5"
                              className="text-blue-300"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 0.5 }}
                              transition={{ duration: 2, delay: 1.8 }}
                            />
                            <motion.circle
                              cx="30"
                              cy="20"
                              r="1.5"
                              fill="currentColor"
                              className="text-green-300"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 2.5, type: "spring" }}
                            />
                          </motion.svg>
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-3xl font-light text-slate-800 mb-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        Coming Soon
                      </motion.h3>
                      <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                        Something beautiful is on the way.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="pt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                    >
                      <motion.div 
                        className="text-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-2xl font-light text-pink-400 mb-1">Q1 2025</div>
                        <div className="text-xs text-slate-400 uppercase tracking-wide">Launch</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.main>

      {/* Footer */}
      <motion.footer 
        className="relative z-10 mt-auto px-8 py-8 border-t border-pink-100/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.svg 
                width="24" 
                height="18" 
                viewBox="0 0 40 32" 
                className="text-pink-300"
                whileHover={{ 
                  rotate: [0, -3, 3, 0],
                  scale: 1.05
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.path 
                  d="M5 26 Q10 6, 20 3 Q30 6, 35 26 Q20 23, 5 26" 
                  fill="currentColor"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  viewport={{ once: true }}
                />
                <motion.path 
                  d="M3 28 Q12 26, 22 28 Q32 30, 37 28" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.svg>
              <div className="text-center">
                <motion.div 
                  className="text-base font-light text-slate-700"
                  whileHover={{ 
                    color: "#ec4899"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Finsoar
                </motion.div>
                <motion.div 
                  className="text-xs text-slate-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  © 2025 • a sea of information
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
