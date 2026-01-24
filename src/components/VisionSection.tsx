import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Stethoscope,
  Wheat,
  Building2,
  Droplets,
  Lightbulb,
  Waves,
  Laptop,
  Briefcase,
} from "lucide-react";

const visionItems = [
  {
    icon: Waves,
    title: "তিস্তা নদী বাঁচাও",
    titleEn: "Save Tista River",
    description:
      "তিস্তা নদীর পানির ন্যায্য হিস্যা আদায়, নদী খনন ও বন্যা নিয়ন্ত্রণ বাঁধ নির্মাণ। তিস্তা চুক্তি বাস্তবায়নে জোরালো আন্দোলন।",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Laptop,
    title: "ডিজিটাল লালমনিরহাট - প্রযুক্তি উন্নয়ন",
    titleEn: "Tech Development",
    description:
      "ডিজিটাল বাংলাদেশ গড়তে আইটি হাব স্থাপন, ফ্রিল্যান্সিং প্রশিক্ষণ ও স্মার্ট গ্রাম প্রকল্প বাস্তবায়ন।",
    color: "from-violet-600 to-purple-500",
  },
  {
    icon: Briefcase,
    title: "কর্মসংস্থান ও যুব উন্নয়ন",
    titleEn: "Employment",
    description:
      "যুবকদের জন্য কর্মসংস্থান সৃষ্টি, শিল্প-কারখানা স্থাপন ও ক্ষুদ্র উদ্যোক্তাদের ঋণ সুবিধা।",
    color: "from-emerald-600 to-green-500",
  },
  {
    icon: GraduationCap,
    title: "শিক্ষা ও ভবিষ্যত",
    titleEn: "Education",
    description:
      "প্রতিটি শিশুর জন্য মানসম্মত শিক্ষা নিশ্চিত করা। নতুন স্কুল, কলেজ ও বৃত্তি প্রোগ্রাম চালু করা হবে।",
    color: "from-primary to-primary/70",
  },
  {
    icon: Stethoscope,
    title: "স্বাস্থ্যসেবা ও চিকিৎসা",
    titleEn: "Healthcare",
    description:
      "গ্রাম ও শহরে স্বাস্থ্যসেবা সহজলভ্য করা। হাসপাতাল আধুনিকীকরণ ও বিনামূল্যে চিকিৎসা সেবা।",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Wheat,
    title: "কৃষক ও কৃষি অর্থনীতি",
    titleEn: "Agriculture",
    description:
      "কৃষকদের জন্য ভর্তুকি, আধুনিক প্রযুক্তি ও ন্যায্য মূল্য নিশ্চিত করা।",
    color: "from-accent to-amber-400",
  },
  {
    icon: Building2,
    title: "যোগাযোগ, বন্দর ও অর্থনৈতিক সম্ভাবনা",
    titleEn: "Infrastructure",
    description:
      "রাস্তা-ঘাট, ব্রিজ ও যোগাযোগ ব্যবস্থার উন্নয়ন। গ্রামীণ এলাকায় আধুনিক সুবিধা।",
    color: "from-primary to-secondary",
  },
  {
    icon: Droplets,
    title: "শহর-গ্রাম অবকাঠামো ও পরিকল্পিত নগরায়ন",
    titleEn: "",
    description:
      "প্রতিটি পরিবারে বিশুদ্ধ পানি সরবরাহ। টিউবওয়েল ও ফিল্টার প্লান্ট স্থাপন।",
    color: "from-blue-500 to-blue-400",
  },
  {
    icon: Lightbulb,
    title: "সুশাসন ও নাগরিক অধিকার",
    titleEn: "",
    description:
      "নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ। সৌর বিদ্যুৎ প্রকল্প ও নবায়নযোগ্য শক্তির ব্যবহার।",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: Lightbulb,
    title: "নারী ও সামাজিক নিরাপত্তা",
    titleEn: "women empowerment",
    description:
      "নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ। সৌর বিদ্যুৎ প্রকল্প ও নবায়নযোগ্য শক্তির ব্যবহার।",
    color: "from-amber-500 to-yellow-400",
  },
];

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="vision" 
      className="py-20 md:py-32 bg-muted/50 relative"
      style={{
        backgroundImage: "url('https://github.com/cyclicit/dulu-sir/blob/main/dsir4.jpg?raw=true')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4 backdrop-blur-sm bg-white/10">
            আলোকিত লালমনিরহাট
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            উন্নত লালমনিরহাট
            <span className="block text-primary/90 mt-2">সমৃদ্ধ বাংলাদেশ</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            আমাদের লক্ষ্য হলো প্রতিটি নাগরিকের জন্য সুন্দর ভবিষ্যৎ গড়ে তোলা।
            নিচে আমাদের প্রধান উন্নয়ন পরিকল্পনাগুলো দেখুন।
          </p>
        </motion.div>

        {/* Vision Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visionItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden hover:bg-white"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 shadow-lg`}
              >
                <item.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {item.titleEn}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};