import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";
import bnpLogo from "@/assets/bnp-logo.webp";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={bnpLogo} alt="BNP Logo" className="h-14 w-auto" />
              <div>
                <p className="font-bold text-lg">বাংলাদেশ জাতীয়তাবাদী দল</p>
                <p className="text-sm text-background/70">
                  Bangladesh Nationalist Party
                </p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-4 max-w-md">
              আসাদুল হাবিব দুলু - লালমনিরহাট সদর-৩ আসনে বিএনপির প্রার্থী।
              জনগণের সেবায় নিবেদিত, উন্নয়নের প্রতিশ্রুতি নিয়ে ২০২৬ সালের
              নির্বাচনে অংশ নিচ্ছেন।
            </p>
           
          </motion.div>

          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/60 text-sm">
            © ২০২৬ আসাদুল হাবিব দুলু | বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)
          </p>
          <p className="text-accent font-bold mt-2 text-lg">
            লালমনিরহাট সদর-৩ আসনে ধানের শীষে ভোট দিন 🌾
          </p>
        </div>
      </div>
    </footer>
  );
};
