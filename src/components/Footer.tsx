import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Identity */}
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-background/60 mb-3">
              মাননীয় মন্ত্রী
            </p>
            <h3 className="text-xl md:text-2xl font-display font-bold mb-2 leading-tight">
              অধ্যক্ষ আসাদুল হাবিব দুলু
            </h3>
            <p className="text-sm text-background/70 leading-relaxed">
              দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়
              <br />
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
            </p>
            <div className="w-12 h-px bg-background/40 mt-6" />
            <p className="text-xs text-background/50 mt-4">
              সংসদ সদস্য — লালমনিরহাট-৩
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/60 mb-5">
              দ্রুত পরিদর্শন
            </p>
            <ul className="space-y-3">
              {[
                { name: "পরিচয়", href: "#about" },
                { name: "কর্মপরিকল্পনা", href: "#vision" },
                { name: "উন্নয়ন", href: "#development" },
                { name: "মতামত পাঠান", href: "#advice" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/60 mb-5">
              যোগাযোগ
            </p>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়
                  <br />
                  বাংলাদেশ সচিবালয়, ঢাকা
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+8809678300300" className="hover:text-background transition-colors">
                  ০৯৬৭৮-৩০০৩০০
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:office@modmr.gov.bd"
                  className="hover:text-background transition-colors"
                >
                  office@modmr.gov.bd
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} অধ্যক্ষ আসাদুল হাবিব দুলু — দাপ্তরিক ওয়েবসাইট। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-xs text-background/50">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
          </p>
        </div>
      </div>
    </footer>
  );
};
