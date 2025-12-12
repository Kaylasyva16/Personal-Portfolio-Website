import { ArrowDown, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import heroPhoto from "figma:asset/169b6a7f8ec7ba110b0ef4643a4c3aac9f55a17f.png";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#C9CFF8] rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F6DDEB] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-[#F6DDEB]/50 text-[#1D35BD] rounded-full text-sm backdrop-blur-sm">👋 Welcome to my portfolio</span>
            </div>

            <h1 className="text-5xl lg:text-6xl text-[#1D35BD]">
              Hi, I'm{" "}
              <span className="relative inline-block">
                Kayla Syva
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#C9CFF8" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-[#4A5568]">UI/UX Designer</h2>

            <p className="text-lg text-[#4A5568] leading-relaxed max-w-xl">I craft beautiful, user-centered digital experiences that blend aesthetic design with thoughtful solutions. Let's build something amazing together.</p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-8 py-3 bg-[#1D35BD] text-white rounded-full hover:shadow-soft-lg transition-smooth hover:scale-105 inline-flex items-center gap-2">
                View My Work
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-8 py-3 bg-white text-[#1D35BD] border-2 border-[#1D35BD] rounded-full hover:bg-[#1D35BD] hover:text-white transition-smooth hover:scale-105">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center text-[#1D35BD] hover:shadow-soft-lg transition-smooth hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.behance.net/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center text-[#1D35BD] hover:shadow-soft-lg transition-smooth hover:scale-110"
                aria-label="Behance"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Elements - Extra Cute! */}
              <motion.div animate={{ rotate: [12, 15, 12], y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-6 -right-6 w-28 h-28 bg-[#F6DDEB] rounded-3xl rotate-12 opacity-60 shadow-soft" />
              <motion.div
                animate={{ rotate: [-12, -15, -12], y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#C9CFF8] rounded-3xl -rotate-12 opacity-60 shadow-soft"
              />

              {/* Floating Elements */}
              <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 -left-8 text-4xl">
                ✨
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }} className="absolute top-20 -right-10 text-4xl">
                💫
              </motion.div>
              <motion.div animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1 }} className="absolute bottom-32 -right-6 text-3xl">
                🌟
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.3 }} className="absolute bottom-20 -left-8 text-3xl">
                ⭐
              </motion.div>

              {/* Main Card */}
              <motion.div whileHover={{ scale: 1.02, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }} className="relative bg-white rounded-3xl shadow-soft-lg p-6 backdrop-blur-sm overflow-hidden">
                {/* Cute Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 left-4 w-20 h-20 bg-[#C9CFF8] rounded-full" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#F6DDEB] rounded-full" />
                  <div className="absolute top-1/2 right-8 w-12 h-12 bg-[#C9CFF8] rounded-full" />
                </div>

                {/* Memoji Image */}
                <div className="relative bg-gradient-to-br from-[#C9CFF8]/30 via-[#F6DDEB]/30 to-[#C9CFF8]/30 rounded-3xl p-4 shadow-inner">
                  <motion.img
                    src={heroPhoto}
                    alt="Kayla Syva"
                    className="w-full h-auto relative z-10"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Cute Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent rounded-3xl" />
                </div>

                {/* Decorative Bottom Wave */}
                <div className="mt-4 flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: i * 0.1,
                      }}
                      className="w-2 h-2 bg-gradient-to-r from-[#C9CFF8] to-[#F6DDEB] rounded-full"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Cute Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-12 right-8 bg-white px-6 py-3 rounded-2xl shadow-soft text-sm text-[#1D35BD] whitespace-nowrap"
              >
                Let's create magic! ✨
                <div className="absolute -top-2 right-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-[#4A5568]">
          <span className="text-sm">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
