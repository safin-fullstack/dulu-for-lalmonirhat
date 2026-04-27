import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldAlert,
  Waves,
  HeartHandshake,
  Cpu,
  GraduationCap,
  Stethoscope,
  Wheat,
  Building2,
  Briefcase,
} from "lucide-react";

const visionItems = [
  {
    icon: ShieldAlert,
    title: "দুর্যোগ ব্যবস্থাপনা ও প্রস্তুতি",
    description:
      "জাতীয় দুর্যোগ সাড়াদান ব্যবস্থা শক্তিশালীকরণ, আগাম সতর্কীকরণ পদ্ধতি আধুনিকায়ন এবং ক্ষতিগ্রস্ত জনগোষ্ঠীর দ্রুত পুনর্বাসন।",
  },
  {
    icon: HeartHandshake,
    title: "ত্রাণ ও মানবিক সহায়তা",
    description:
      "স্বচ্ছ, জবাবদিহিমূলক ও সময়োপযোগী ত্রাণ বিতরণ এবং দুর্গত পরিবারের জন্য টেকসই পুনর্বাসন কর্মসূচি বাস্তবায়ন।",
  },
  {
    icon: Waves,
    title: "তিস্তা ও নদী ব্যবস্থাপনা",
    description:
      "তিস্তার পানির ন্যায্য হিস্যা আদায়, নদী খনন ও স্থায়ী বন্যা প্রতিরোধ অবকাঠামো নির্মাণ।",
  },
  {
    icon: Cpu,
    title: "প্রযুক্তিনির্ভর প্রশাসন",
    description:
      "ডিজিটাল সেবা সম্প্রসারণ, যুবকদের জন্য আইটি প্রশিক্ষণ এবং স্মার্ট গ্রাম ও স্মার্ট দুর্যোগ সাড়াদান প্রকল্প।",
  },
  {
    icon: Briefcase,
    title: "কর্মসংস্থান ও উদ্যোক্তা উন্নয়ন",
    description:
      "যুবসমাজের জন্য কর্মসংস্থান সৃষ্টি, ক্ষুদ্র উদ্যোক্তাদের সহজ ঋণ ও দক্ষতা উন্নয়ন কর্মসূচি।",
  },
  {
    icon: GraduationCap,
    title: "মানসম্মত শিক্ষা",
    description:
      "শিক্ষা প্রতিষ্ঠানের অবকাঠামো উন্নয়ন, শিক্ষক প্রশিক্ষণ ও মেধাবী শিক্ষার্থীদের জন্য বৃত্তি কর্মসূচি।",
  },
  {
    icon: Stethoscope,
    title: "স্বাস্থ্যসেবার সম্প্রসারণ",
    description:
      "প্রান্তিক জনগোষ্ঠীর জন্য সহজলভ্য স্বাস্থ্যসেবা, হাসপাতাল আধুনিকায়ন ও জরুরি চিকিৎসা সেবা।",
  },
  {
    icon: Wheat,
    title: "কৃষি ও খাদ্য নিরাপত্তা",
    description:
      "কৃষকের ন্যায্য মূল্য নিশ্চিত করা, আধুনিক প্রযুক্তি সম্প্রসারণ এবং খাদ্য নিরাপত্তা ব্যবস্থাপনা।",
  },
  {
    icon: Building2,
    title: "অবকাঠামো ও যোগাযোগ",
    description:
      "সড়ক, সেতু ও যোগাযোগ ব্যবস্থার আধুনিকায়ন; গ্রামীণ অঞ্চলে নাগরিক সুবিধা সম্প্রসারণ।",
  },
];

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-20 md:py-32 bg-muted/40">
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
            কর্মপরিকল্পনা
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            জাতীয় অগ্রাধিকার ও স্থানীয় প্রতিশ্রুতি
          </h2>
          <div className="w-16 h-0.5 bg-foreground mt-6 mb-6" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            একটি দুর্যোগ-সহনশীল, প্রযুক্তিনির্ভর ও সমৃদ্ধ বাংলাদেশ গড়ার লক্ষ্যে
            গৃহীত নীতিগত অগ্রাধিকার এবং লালমনিরহাট-৩ আসনের জন্য নির্ধারিত
            উন্নয়ন কর্মসূচি।
          </p>
        </motion.div>

        {/* Vision Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {visionItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="bg-background p-8 hover:bg-foreground hover:text-background transition-colors duration-300 group"
            >
              <item.icon className="w-7 h-7 mb-5 text-foreground group-hover:text-background transition-colors" />
              <h3 className="text-lg md:text-xl font-display font-bold mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/80 leading-relaxed transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
