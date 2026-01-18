import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import bnpLogo from "@/assets/bnp-logo.webp";

const navLinks = [
  { name: "হোম", nameEn: "Home", href: "#home" },
  { name: "পরিচয়", nameEn: "About", href: "#about" },
  { name: "ভিশন", nameEn: "Vision", href: "#vision" },
  { name: "উন্নয়ন", nameEn: "Development", href: "#development" },
  { name: "পরামর্শ", nameEn: "Advice", href: "#advice" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={bnpLogo} alt="BNP Logo" className="h-10 md:h-12 w-auto" />
            <div>
              <p className="text-sm font-bold text-primary">বাংলাদেশ জাতীয়তাবাদী দল</p>
              <p className="text-xs text-muted-foreground">লালমনিরহাট সদর-৩</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 top-16 bg-white z-40"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-6 pb-20">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                    <span className="block text-sm font-normal text-muted-foreground">
                      {link.nameEn}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
