import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Target, TrendingUp, Sparkles } from "lucide-react";

const achievements = [
  "শিক্ষা প্রতিষ্ঠানে অবকাঠামো উন্নয়ন",
  "দরিদ্র পরিবারে খাদ্য সহায়তা বিতরণ",
  "রাস্তা ও ব্রিজ নির্মাণে অবদান",
  "যুব কর্মসংস্থান কর্মসূচি",
  "স্বাস্থ্যসেবা ক্যাম্প আয়োজন",
  "কৃষকদের সার ও বীজ বিতরণ",
];

const promises = [
  {
    title: "১০০% বিদ্যুতায়ন",
    description: "প্রতিটি গ্রামে নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ",
  },
  {
    title: "আধুনিক হাসপাতাল",
    description: "উপজেলায় ১০০ শয্যা বিশিষ্ট আধুনিক হাসপাতাল",
  },
  {
    title: "কৃষি বিপ্লব",
    description: "কৃষকদের জন্য সহজ ঋণ ও প্রশিক্ষণ",
  },
  {
    title: "যুব কর্মসংস্থান",
    description: "৫০০০+ নতুন কর্মসংস্থান সৃষ্টি",
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            উন্নয়ন পরিকল্পনা
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            আমাদের প্রতিশ্রুতি
            <span className="block text-secondary mt-2">আপনার উন্নয়ন</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary rounded-xl text-secondary-foreground">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                অতীত সাফল্য
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    {achievement}
                  </span>
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
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-xl text-primary-foreground">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                ভবিষ্যৎ প্রতিশ্রুতি
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group p-6 bg-gradient-to-br from-card to-muted rounded-2xl border border-border hover:border-primary/30 transition-all shadow-sm hover:shadow-card"
                >
                  <Sparkles className="w-5 h-5 text-accent mb-3" />
                  <h4 className="font-bold text-foreground text-lg mb-2">
                    {promise.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {promise.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-primary via-primary to-secondary rounded-3xl text-white text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              একসাথে গড়ব উন্নত লালমনিরহাট
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              আপনার একটি ভোট পরিবর্তন আনতে পারে। ধানের শীষে ভোট দিয়ে উন্নয়নের
              পথে এগিয়ে যান।
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-bold text-lg shadow-xl">
              <span>ধানের শীষ</span>
              <span className="text-2xl">🌾</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
