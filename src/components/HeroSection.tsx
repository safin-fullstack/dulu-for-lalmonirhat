import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, Heart, Award, Users, Trophy } from "lucide-react";
import candidatePhoto from "@/assets/candidate-photo.jpg";
import bnpLogo from "@/assets/bnp-logo.webp";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(135deg, #006A4E 0%, #008B5E 50%, #F42A41 100%)'
      }}
    >
      {/* Victory Celebration Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -20 
            }}
            animate={{ 
              y: window.innerHeight + 20,
              x: Math.random() * window.innerWidth
            }}
            transition={{ 
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Victory ribbons */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/40 rounded-full" />
        <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-yellow-400/40 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-400/20 rotate-45" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left order-2 lg:order-1"
          >
            {/* Victory Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-full mb-6"
            >
              <Trophy className="w-5 h-5" />
              <span className="font-bold">বিজয়ী ২০২৬</span>
            </motion.div>

           

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-2 leading-tight"
            >
              অধ্যক্ষ আসাদুল
              <br />
              <span className="text-yellow-300">হাবিব দুলু</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 mb-4"
            >
              Asadul Habib Dulu
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              জনগণের আস্থা, জনগণের বিজয়
              <br />
              <span className="text-yellow-300 font-semibold text-2xl">
                "আলোকিত লালমনিরহাট গড়ার অঙ্গীকার"
              </span>
            </motion.p>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#advice">
                <Button variant="hero" size="xl" className="group">
                  <MessageCircle className="group-hover:animate-pulse" />
                  পরামর্শ দিন
                </Button>
              </a>
              <a href="#vision">
                <Button variant="heroOutline" size="xl">
                  
                  আলোকিত লালমনিরহাট
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center lg:justify-start my-4"
            >
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-2xl font-bold text-yellow-300">140000 +</p>
                <p className="text-xs text-white/80">ভোট </p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-2xl font-bold text-yellow-300">৪০+</p>
                <p className="text-xs text-white/80">বছরের অভিজ্ঞতা</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-2xl font-bold text-yellow-300">১৫০+</p>
                <p className="text-xs text-white/80">উন্নয়ন প্রকল্প</p>
              </div>
              
            </motion.div>
          </motion.div>

          {/* Candidate Image with Victory Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Victory rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-12 border-4 border-yellow-400/30 rounded-full border-t-yellow-400 border-r-transparent border-b-transparent border-l-transparent"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-8 border-4 border-white/30 rounded-full border-b-white border-l-transparent border-r-transparent border-t-transparent"
              />

              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-yellow-400 shadow-2xl">
                <img
                  src={candidatePhoto}
                  alt="আসাদুল হাবিব দুলু"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Victory badges */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-green-900 px-6 py-3 rounded-full font-bold text-lg shadow-xl flex items-center gap-2"
              >
                <Trophy className="w-5 h-5" />
                বিজয়ী
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white text-green-900 px-4 py-2 rounded-full font-bold shadow-xl"
              >
                ধানের শীষ 🌾
              </motion.div>

              {/* Floating celebration elements */}
              {['🎉', '🎊', '🌾', '✨'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="absolute text-2xl"
                  initial={{ 
                    x: 0, 
                    y: 0,
                    opacity: 0 
                  }}
                  animate={{ 
                    x: [0, (index % 2 === 0 ? 50 : -50)],
                    y: [-50, -100],
                    opacity: [1, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  style={{
                    left: `${50 + (index * 20)}%`,
                    top: '50%'
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-white/60 hover:text-white transition-colors">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>

     
    </section>
  );
};