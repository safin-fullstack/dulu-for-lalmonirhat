import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import ministerPortrait from "@/assets/minister-portrait.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 hero-gradient"
    >
      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-bg opacity-[0.05] pointer-events-none" />

      {/* Editorial corner marks */}
      <div className="absolute top-24 left-6 md:left-10 hidden md:block">
        <p className="text-[10px] tracking-wider-2 text-muted-foreground rotate-180" style={{writingMode:'vertical-rl'}}>
          MINISTRY · GOVT. OF BANGLADESH
        </p>
      </div>
      <div className="absolute top-24 right-6 md:right-10 hidden md:block">
        <p className="text-[10px] tracking-wider-2 text-muted-foreground" style={{writingMode:'vertical-rl'}}>
          EST. 2024 · DHAKA
        </p>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left order-2 lg:order-1 lg:col-span-7"
          >
            {/* Crest line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <span className="h-px w-10 bg-foreground/40" />
              <span className="text-[10px] md:text-xs font-sans-pro tracking-wider-2 text-foreground/70 uppercase">
                Government of the People's Republic of Bangladesh
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-base gold-accent font-sans-pro font-medium mb-4 tracking-[0.2em] uppercase"
            >
              Hon'ble Minister · মাননীয় মন্ত্রী
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-foreground mb-6 leading-[1.02]"
            >
              অধ্যক্ষ <span className="italic">আসাদুল</span>
              <br />
              হাবিব <span className="italic">দুলু</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="space-y-1.5 mb-8"
            >
              <p className="text-base md:text-lg text-foreground font-sans-pro font-medium">
                দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়
              </p>
              <p className="text-sm md:text-base text-muted-foreground font-sans-pro">
                Ministry of Disaster Management & Relief
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                <span className="h-px w-6 bg-accent" />
                <p className="text-xs md:text-sm text-muted-foreground tracking-wide">
                  সংসদ সদস্য · লালমনিরহাট-৩
                </p>
              </div>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="font-display text-xl md:text-2xl text-foreground/80 italic mb-10 max-w-xl mx-auto lg:mx-0 leading-snug"
            >
              <span className="gold-accent text-3xl leading-none align-top mr-1">“</span>
              জনগণের আস্থা, জাতির অগ্রগতি — দুর্যোগ-সহনশীল
              এক সমৃদ্ধ বাংলাদেশ গড়ার অঙ্গীকার।
              <span className="gold-accent text-3xl leading-none align-bottom ml-1">”</span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a href="#advice">
                <Button size="xl" className="group bg-foreground text-background hover:bg-foreground/90 font-sans-pro tracking-wide">
                  <MessageCircle className="w-4 h-4" />
                  মতামত পাঠান
                </Button>
              </a>
              <a href="#vision">
                <Button variant="outline" size="xl" className="border-foreground/40 text-foreground hover:bg-foreground hover:text-background group font-sans-pro tracking-wide">
                  কর্মপরিকল্পনা দেখুন
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl md:text-4xl text-foreground">৪০<span className="gold-accent">+</span></p>
                <p className="text-[11px] text-muted-foreground mt-1 tracking-wide font-sans-pro uppercase">বছরের জনসেবা</p>
              </div>
              <div className="text-center lg:text-left border-l border-r border-border/70 px-4">
                <p className="font-display text-3xl md:text-4xl text-foreground">১৫০<span className="gold-accent">+</span></p>
                <p className="text-[11px] text-muted-foreground mt-1 tracking-wide font-sans-pro uppercase">উন্নয়ন প্রকল্প</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl md:text-4xl text-foreground">৩.৭<span className="gold-accent text-2xl">L</span></p>
                <p className="text-[11px] text-muted-foreground mt-1 tracking-wide font-sans-pro uppercase">নাগরিক প্রতিনিধিত্ব</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Official Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2 lg:col-span-5"
          >
            <div className="relative">
              {/* Soft gold backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-2xl" />

              {/* Hairline frame */}
              <div className="absolute -top-2 -left-2 right-6 bottom-6 border border-foreground/15" />

              {/* Main portrait */}
              <div className="relative w-72 h-[22rem] md:w-80 md:h-[26rem] lg:w-[22rem] lg:h-[30rem] overflow-hidden bg-muted shadow-hero">
                <img
                  src={ministerPortrait}
                  alt="অধ্যক্ষ আসাদুল হাবিব দুলু — মাননীয় মন্ত্রী"
                  className="w-full h-full object-cover object-center transition-all duration-1000 hover:scale-[1.02]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

                {/* Bottom plaque */}
                <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm px-5 py-4 border-t border-accent/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider-2 text-muted-foreground font-sans-pro">Hon'ble Minister</p>
                      <p className="font-display text-base text-foreground">Asadul Habib Dulu</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-wider-2 gold-accent font-sans-pro">MP</p>
                      <p className="text-[10px] text-muted-foreground">Lalmonirhat-3</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption tag */}
              <div className="absolute -bottom-4 left-6 bg-foreground text-background px-3 py-1">
                <p className="text-[9px] tracking-wider-2 font-sans-pro uppercase">Official Portrait · 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ delay: 1.2, duration: 2.4, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-wider-2 text-muted-foreground font-sans-pro uppercase">Scroll</span>
          <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
