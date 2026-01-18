import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Users, Shield } from "lucide-react";
import candidatePhoto from "@/assets/candidate-photo.jpg";

const qualities = [
  {
    icon: Shield,
    title: "সততা ও নিষ্ঠা",
    description: "রাজনৈতিক জীবনে সর্বদা সততার পথে চলেছেন",
  },
  {
    icon: Heart,
    title: "জনসেবা",
    description: "সাধারণ মানুষের সেবায় সর্বদা নিবেদিত",
  },
  {
    icon: Users,
    title: "জনগণের নেতা",
    description: "জনগণের কাছাকাছি থেকে কাজ করার অভিজ্ঞতা",
  },
  {
    icon: Award,
    title: "প্রমাণিত ট্র্যাক রেকর্ড",
    description: "সামাজিক উন্নয়নে অসংখ্য সফল কার্যক্রম",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background pattern-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <img
                  src={candidatePhoto}
                  alt="আসাদুল হাবিব দুলু"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <p className="text-white text-lg font-semibold">
                    জনগণের সেবায় নিবেদিত
                  </p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">30+</p>
                <p className="text-sm">বছরের অভিজ্ঞতা</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              পরিচয়
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              আসাদুল হাবিব দুলু
              <span className="block text-primary mt-2">
                জনগণের বিশ্বস্ত নেতা
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              আসাদুল হাবিব দুলু লালমনিরহাট সদর-৩ আসনে বাংলাদেশ জাতীয়তাবাদী দলের
              (বিএনপি) প্রার্থী। তিনি দীর্ঘ ৩০ বছরেরও বেশি সময় ধরে রাজনীতিতে
              সক্রিয় আছেন এবং জনগণের অধিকার আদায়ে সর্বদা সোচ্চার থেকেছেন।
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              তিনি বিশ্বাস করেন - একটি উন্নত, সমৃদ্ধ ও ন্যায়ভিত্তিক বাংলাদেশ
              গড়ে তোলা সম্ভব। তাঁর নেতৃত্বে লালমনিরহাট সদর-৩ এলাকার সার্বিক
              উন্নয়ন হবে।
            </p>

            {/* Qualities Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card card-gradient shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <quality.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {quality.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {quality.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
