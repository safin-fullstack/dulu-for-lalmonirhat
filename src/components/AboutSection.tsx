import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, GraduationCap, Landmark, Users2, User, UserCheck, BookOpen } from "lucide-react";
import candidatePhoto from "@/assets/minister-portrait.jpg";

const milestones = [
  {
    icon: GraduationCap,
    title: "শিক্ষা",
    description: "রাজশাহী বিশ্ববিদ্যালয় থেকে স্নাতকোত্তর সম্পন্ন; শিক্ষকতা পেশায় দীর্ঘ অবদান।",
  },
  {
    icon: Landmark,
    title: "রাজনৈতিক জীবন",
    description: "১৯৭৬ সালে ছাত্ররাজনীতিতে যুক্ত; পরবর্তীতে বাংলাদেশ জাতীয়তাবাদী দলে সক্রিয় ভূমিকা।",
  },
  {
    icon: Briefcase,
    title: "সংসদীয় দায়িত্ব",
    description: "১৯৯৬ ও ২০০১ সালে জাতীয় সংসদ সদস্য নির্বাচিত; বিভিন্ন স্থায়ী কমিটির সদস্য হিসেবে দায়িত্ব পালন।",
  },
  {
    icon: Award,
    title: "মন্ত্রিত্ব",
    description: "দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়ের মাননীয় মন্ত্রী হিসেবে দায়িত্ব পালন।",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent" />
            <p className="text-[11px] uppercase tracking-wider-2 gold-accent font-sans-pro">পরিচিতি · Profile</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-[1.05]">
            একজন <span className="italic">রাষ্ট্রনায়কের</span> সংক্ষিপ্ত পরিচয়
          </h2>
          <div className="w-16 h-px bg-foreground/40 mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-accent/50" />
              <div className="relative overflow-hidden bg-muted shadow-card">
                <img
                  src={candidatePhoto}
                  alt="অধ্যক্ষ আসাদুল হাবিব দুলু"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-foreground text-background p-6 shadow-lg">
                <p className="text-3xl md:text-4xl font-display font-bold">৪০+</p>
                <p className="text-xs uppercase tracking-wider mt-1">বছরের জনসেবা</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 leading-snug">
              জনগণের প্রতিনিধি, জাতির সেবক
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                অধ্যক্ষ আসাদুল হাবিব দুলু গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের
                দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়ের মাননীয় মন্ত্রী এবং
                লালমনিরহাট-৩ আসন থেকে নির্বাচিত সংসদ সদস্য। শিক্ষকতা ও জনসেবায়
                কাটানো দীর্ঘ চার দশকে তিনি স্থানীয় থেকে জাতীয় পর্যায়ে
                নেতৃত্ব দিয়েছেন।
              </p>
              <p>
                জাতীয় দুর্যোগ মোকাবিলায় প্রস্তুতি, ত্রাণ ব্যবস্থাপনার আধুনিকায়ন,
                জলবায়ু-পরিবর্তনজনিত ঝুঁকি হ্রাস এবং প্রান্তিক জনগোষ্ঠীর
                পুনর্বাসন—এই অগ্রাধিকারগুলোকে সামনে রেখে তিনি কাজ করছেন।
              </p>
            </div>

            {/* Milestones */}
            <div className="grid sm:grid-cols-2 gap-4">
              {milestones.map((m, index) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="border border-border p-5 hover:border-foreground transition-colors group"
                >
                  <div className="mb-3">
                    <m.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{m.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Publication & Constituency Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-28 grid lg:grid-cols-2 gap-12"
        >
          {/* Publication */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-foreground" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">প্রকাশিত গ্রন্থ</p>
            </div>

            <div className="border border-border p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://github.com/cyclicit/safin/blob/main/ddd.jpeg?raw=true"
                  alt="জাগো বাহে তিস্তা বাঁচাই"
                  className="w-40 h-auto object-cover grayscale shadow-md"
                />
                <div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-3">
                    জাগো বাহে তিস্তা বাঁচাই
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    তিস্তা নদীর ঐতিহাসিক গুরুত্ব, বর্তমান সংকট ও ভবিষ্যৎ
                    সুরক্ষার রূপরেখা নিয়ে রচিত গ্রন্থ। উত্তরাঞ্চলের পরিবেশ ও
                    জনজীবনের প্রতি লেখকের দীর্ঘস্থায়ী অঙ্গীকারের নিদর্শন।
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 border border-border text-foreground">পরিবেশ</span>
                    <span className="text-xs px-3 py-1 border border-border text-foreground">নদী রক্ষা</span>
                    <span className="text-xs px-3 py-1 border border-border text-foreground">আঞ্চলিক উন্নয়ন</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Voter Information */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users2 className="w-5 h-5 text-foreground" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                লালমনিরহাট-৩ — ভোটার তথ্য
              </p>
            </div>

            <div className="border border-border">
              <div className="grid grid-cols-3 divide-x divide-border">
                <div className="p-5 text-center">
                  <User className="w-5 h-5 text-foreground mx-auto mb-3" />
                  <p className="text-xl md:text-2xl font-display font-bold text-foreground">১,৫৪,১৬৭</p>
                  <p className="text-xs text-muted-foreground mt-1">পুরুষ</p>
                </div>
                <div className="p-5 text-center">
                  <UserCheck className="w-5 h-5 text-foreground mx-auto mb-3" />
                  <p className="text-xl md:text-2xl font-display font-bold text-foreground">১,৫৩,৮০১</p>
                  <p className="text-xs text-muted-foreground mt-1">নারী</p>
                </div>
                <div className="p-5 text-center bg-foreground text-background">
                  <Users2 className="w-5 h-5 mx-auto mb-3" />
                  <p className="text-xl md:text-2xl font-display font-bold">৩,০৭,৯৭০</p>
                  <p className="text-xs opacity-80 mt-1">মোট</p>
                </div>
              </div>
              <div className="border-t border-border p-4 bg-muted/40">
                <p className="text-xs text-center text-muted-foreground">
                  সূত্র: নির্বাচন কমিশন কর্তৃক প্রকাশিত সর্বশেষ ভোটার তালিকা
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
