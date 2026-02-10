import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, Eye } from "lucide-react";
import candidatePhoto from "@/assets/candidate-photo.jpg";
import bnpLogo from "@/assets/bnp-logo.webp";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rotate-45" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <img src={bnpLogo} alt="BNP" className="h-12 w-auto" />
              <span className="text-lg font-semibold text-white/90">
                বাংলাদেশ জাতীয়তাবাদী দল
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-accent font-bold text-lg md:text-xl mb-2"
            >
              লালমনিরহাট সদর-৩ আসনে
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 leading-tight"
            >
             অধ্যক্ষ আসাদুল হাবিব দুলু
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
              জনগণের জন্য লড়াই করেছেন, জনগণের পাশে থাকবেন সবসময়
              <br />
              <span className="text-accent font-semibold">
                ২০২৬ সালের নির্বাচনে আপনার ভোট চাই
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
                  <Eye />
                  আলোকিত লালমনিরহাট
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-8"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">40+</p>
                <p className="text-sm text-white/70">বছরের রাজনৈতিক অভিজ্ঞতা</p>
              </div>
              <div className="w-px h-12 bg-white/30" />
             
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">100+</p>
                <p className="text-sm text-white/70">সামাজিক কর্মসূচি</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Candidate Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-4 border-4 border-white/20 rounded-full animate-pulse-slow" />
              <div className="absolute inset-0 -m-8 border-2 border-accent/30 rounded-full" />

              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={candidatePhoto}
                  alt="আসাদুল হাবিব দুলু"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Vote badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-lg shadow-xl"
              >
                ধানের শীষ 🌾
              </motion.div>
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
