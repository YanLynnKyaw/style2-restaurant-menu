"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface LandingPageProps {
  onShowMenu: () => void
}

export default function LandingPage({ onShowMenu }: LandingPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#131D4F] via-[#254D70] to-[#131D4F] flex items-center justify-center cursor-pointer relative overflow-hidden"
      onClick={onShowMenu}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#954C2E]/20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#254D70]/30 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#EFE4D2]/5 blur-3xl"></div>
        </div>
      </div>

      <div className="text-center z-10 px-6 max-w-md mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full flex items-center justify-center relative">
            {/* Modern circular border with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#954C2E] to-[#254D70] opacity-80 blur-sm"></div>

            {/* Inner circle with logo */}
            <div className="absolute inset-1 rounded-full bg-[#131D4F] flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Modern minimalist tree logo */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" />
                  <path
                    d="M50,20 L50,80 M30,40 L50,30 L70,40 M35,50 L50,40 L65,50 M40,60 L50,50 L60,60"
                    stroke="url(#gradient)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EFE4D2" />
                      <stop offset="50%" stopColor="#954C2E" />
                      <stop offset="100%" stopColor="#254D70" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Circular Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <svg className="w-full h-full animate-spin-slow" style={{ animationDuration: "30s" }}>
                <defs>
                  <path id="circle" d="M 144,144 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
                </defs>
                <text className="text-xs sm:text-sm font-light tracking-[0.3em] fill-[#EFE4D2]/70">
                  <textPath href="#circle" startOffset="0%">
                    CATALUNA • FINE DINING • CATALUNA • FINE DINING •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Restaurant Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#EFE4D2] mb-3 tracking-widest">CATALUNA</h1>

          {/* Subtitle with line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#954C2E]/70 to-transparent"></div>
            <p className="text-sm sm:text-base text-[#EFE4D2]/70 font-light tracking-widest">EST. 2023</p>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#954C2E]/70 to-transparent"></div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 mx-auto px-6 py-3 bg-[#954C2E]/20 hover:bg-[#954C2E]/30 backdrop-blur-sm rounded-full text-[#EFE4D2] text-sm transition-all duration-300 border border-[#954C2E]/30 hover:border-[#954C2E]/50"
          >
            <span>VIEW MENU</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
