import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import candidatePhoto from "@/assets/candidate-photo.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 pattern-bg opacity-60" />

      {/* Soft top accent line */}
      <div className="absolute top-20 left-0 right-0 official-divider" />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Official designation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-foreground/20 px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
              <span className="text-xs md:text-sm font-medium text-foreground tracking-wide">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-base text-muted-foreground font-medium mb-3 tracking-wide uppercase"
            >
              মাননীয় মন্ত্রী
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-4 leading-[1.1]"
            >
              অধ্যক্ষ আসাদুল
              <br />
              হাবিব দুলু
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-1 mb-8"
            >
              <p className="text-base md:text-lg text-foreground/80 font-medium">
                দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                সংসদ সদস্য — লালমনিরহাট-৩ আসন
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-foreground/30 pl-4 italic"
            >
              "জনগণের সেবা, জাতির কল্যাণ এবং সর্বোপরি একটি দুর্যোগ-সহনশীল
              বাংলাদেশ গড়ার অঙ্গীকার।"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#advice">
                <Button variant="default" size="xl" className="group bg-foreground text-background hover:bg-foreground/90">
                  <MessageCircle className="w-4 h-4" />
                  মতামত পাঠান
                </Button>
              </a>
              <a href="#vision">
                <Button variant="outline" size="xl" className="border-foreground text-foreground hover:bg-foreground hover:text-background group">
                  কর্মপরিকল্পনা
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-display font-bold text-foreground">৪০+</p>
                <p className="text-xs text-muted-foreground mt-1">বছরের রাজনৈতিক অভিজ্ঞতা</p>
              </div>
              <div className="text-center lg:text-left border-l border-r border-border px-4">
                <p className="text-2xl md:text-3xl font-display font-bold text-foreground">১৫০+</p>
                <p className="text-xs text-muted-foreground mt-1">উন্নয়ন প্রকল্প</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-display font-bold text-foreground">৩.৭ লক্ষ</p>
                <p className="text-xs text-muted-foreground mt-1">নাগরিকের প্রতিনিধি</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Official Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Frame accent */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-foreground" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-foreground" />

              {/* Main image - portrait frame */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] overflow-hidden bg-muted shadow-hero">
                <img
                  src={candidatePhoto}
                  alt="অধ্যক্ষ আসাদুল হাবিব দুলু"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Bottom plaque */}
                <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background px-5 py-3">
                  <p className="text-xs uppercase tracking-widest text-background/70">Hon'ble Minister</p>
                  <p className="text-sm font-semibold">Asadul Habib Dulu</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronDown size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
