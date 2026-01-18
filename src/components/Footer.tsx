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
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              {[
                { name: "হোম", href: "#home" },
                { name: "পরিচয়", href: "#about" },
                { name: "ভিশন", href: "#vision" },
                { name: "উন্নয়ন", href: "#development" },
                { name: "পরামর্শ", href: "#advice" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  লালমনিরহাট সদর-৩
                  <br />
                  লালমনিরহাট, বাংলাদেশ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+8801700000000"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@example.com"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  info@asadulhabibdulu.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/60 text-sm">
            © ২০২৬ আসাদুল হাবিব দুলু | বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)
          </p>
          <p className="text-accent font-bold mt-2 text-lg">
            ধানের শীষে ভোট দিন 🌾
          </p>
        </div>
      </div>
    </footer>
  );
};
