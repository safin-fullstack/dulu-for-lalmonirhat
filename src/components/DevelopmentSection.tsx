import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const achievements = [
  "জাতীয় পর্যায়ে দুর্যোগ সাড়াদান কাঠামো শক্তিশালীকরণ",
  "ক্ষতিগ্রস্ত পরিবারে দ্রুত ও স্বচ্ছ ত্রাণ বিতরণ",
  "শিক্ষা প্রতিষ্ঠানে অবকাঠামো ও সুবিধা সম্প্রসারণ",
  "গ্রামীণ সড়ক, সেতু ও যোগাযোগ অবকাঠামো নির্মাণ",
  "যুবসমাজের জন্য কর্মসংস্থান ও দক্ষতা উন্নয়ন",
  "কৃষকের জন্য সার, বীজ ও আধুনিক প্রযুক্তি সহায়তা",
];

const promises = [
  {
    title: "দুর্যোগ-সহনশীল অবকাঠামো",
    description: "প্রতিটি ইউনিয়নে স্থায়ী আশ্রয়কেন্দ্র ও আগাম সতর্কীকরণ ব্যবস্থা।",
  },
  {
    title: "আধুনিক স্বাস্থ্যসেবা",
    description: "উপজেলা পর্যায়ে ১০০ শয্যার আধুনিক হাসপাতাল ও জরুরি সেবা।",
  },
  {
    title: "প্রযুক্তি ও কর্মসংস্থান",
    description: "তরুণদের জন্য আইটি প্রশিক্ষণ কেন্দ্র ও ৫,০০০+ কর্মসংস্থান।",
  },
  {
    title: "নিরবচ্ছিন্ন বিদ্যুৎ ও পানি",
    description: "প্রতিটি গ্রামে নিরবচ্ছিন্ন বিদ্যুৎ ও বিশুদ্ধ পানি সরবরাহ।",
  },
];

export const DevelopmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="development" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            উন্নয়ন
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            অর্জিত সাফল্য ও আগামীর প্রতিশ্রুতি
          </h2>
          <div className="w-16 h-0.5 bg-foreground mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-8 pb-4 border-b border-border">
              অর্জিত সাফল্য
            </h3>

            <div className="space-y-1">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-start gap-4 py-4 border-b border-border/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Promises */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-8 pb-4 border-b border-border">
              আগামীর প্রতিশ্রুতি
            </h3>

            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-background p-6 hover:bg-foreground hover:text-background transition-colors duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-display font-bold text-base md:text-lg leading-snug">
                      {promise.title}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-background/80 leading-relaxed transition-colors">
                    {promise.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 md:mt-24 bg-foreground text-background p-10 md:p-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-6">
            অঙ্গীকার
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-snug max-w-3xl mx-auto">
            "একটি দুর্যোগ-সহনশীল, প্রযুক্তিনির্ভর ও সমৃদ্ধ বাংলাদেশ গড়ে তোলাই
            আমাদের অভিন্ন লক্ষ্য।"
          </h3>
          <div className="w-12 h-px bg-background/40 mx-auto mt-8" />
          <p className="text-sm text-background/70 mt-6">
            অধ্যক্ষ আসাদুল হাবিব দুলু
          </p>
        </motion.div>
      </div>
    </section>
  );
};
