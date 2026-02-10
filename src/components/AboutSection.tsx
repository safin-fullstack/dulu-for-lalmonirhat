import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Users, Shield, BookOpen, Users2, User, UserCheck } from "lucide-react";
import candidatePhoto from "@/assets/candidate-photo.jpg";

const qualities = [
  {
    icon: Shield,
    title: "রাজনীতির সূচনা",
    description: "১৯৭৬ সালে বিপ্লবী ছাত্র মৈত্রীতে যুক্ত হয়ে তাঁর রাজনীতিতে পদার্পণ",
  },
  {
    icon: Heart,
    title: "শিক্ষাজীবন",
    description: "আমবাড়ী সরকারি প্রাথমিক বিদ্যালয় থেকে শুরু করে রাজশাহী বিশ্ববিদ্যালয় থেকে স্নাতকোত্তর ডিগ্রি অর্জনের মাধ্যমে তিনি শিক্ষাজীবন সম্পন্ন করেন",
  },
  {
    icon: Users,
    title: "দলীয় অন্তর্ভুক্তি",
    description: "বেগম খালেদা জিয়ার অনুপ্রেরণায় তিনি বাংলাদেশ জাতীয়তাবাদী দলে যুক্ত হয়ে সক্রিয় রাজনীতিতে আত্মনিয়োগ করেন",
  },
  {
    icon: Award,
    title: "সংসদীয় জীবন",
    description: "১৯৯৬ ও ২০০১ সালে জাতীয় সংসদ সদস্য নির্বাচিত হয়ে তিনি মন্ত্রিত্বসহ গুরুত্বপূর্ণ রাষ্ট্রীয় দায়িত্ব পালন করেন",
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
                <p className="text-4xl font-bold">40+</p>
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

        {/* New Responsive Div - Added after existing content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Book Section */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">লেখনী</h3>
              </div>
              
              <div className="p-6 rounded-2xl bg-card card-gradient shadow-card">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://github.com/cyclicit/safin/blob/main/ddd.jpeg?raw=true" 
                      alt="জাগো বাহে তিস্তা বাঁচাই"
                      className="w-64 h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      জাগো বাহে তিস্তা বাঁচাই
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      তিস্তা নদী রক্ষায় লেখা তাঁর গ্রন্থ, যা লালমনিরহাটের পরিবেশ 
                      ও জীববৈচিত্র্য সংরক্ষণের প্রতি তাঁর অঙ্গীকারের প্রতিফলন। 
                      এই বইয়ে তিনি তিস্তা নদীর ঐতিহাসিক গুরুত্ব, বর্তমান অবস্থা 
                      এবং ভবিষ্যৎ রক্ষার উপায় নিয়ে গভীর আলোচনা করেছেন।
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        পরিবেশ সংরক্ষণ
                      </span>
                      <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                        নদী রক্ষা
                      </span>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        স্থানীয় ইতিহাস
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Voter Information */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <Users2 className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  লালমনিরহাট সদর-৩ আসনের ভোটার তথ্য
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Male Voters */}
                <div className="text-center p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-card hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-700 mb-2">
                    ১,৫৪,১৬৭
                  </div>
                  <div className="text-lg font-semibold text-blue-800">
                    পুরুষ ভোটার
                  </div>
                </div>
                
                {/* Female Voters */}
                <div className="text-center p-5 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 shadow-card hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-3">
                    <UserCheck className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="text-3xl font-bold text-pink-700 mb-2">
                    ১,৫৩,৮০১
                  </div>
                  <div className="text-lg font-semibold text-pink-800">
                    মহিলা ভোটার
                  </div>
                </div>
                
                {/* Total Voters */}
                <div className="text-center p-5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-card hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3">
                    <Users2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    ৩,০৭,৯৭০
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    মোট ভোটার
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <p className="text-center text-muted-foreground">
                  <span className="font-semibold">সর্বশেষ হালনাগাদ:</span> নির্বাচন কমিশন কর্তৃক প্রকাশিত সর্বশেষ ভোটার তালিকা অনুযায়ী
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};