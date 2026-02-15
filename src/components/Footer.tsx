import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";
import bnpLogo from "@/assets/bnp-logo.webp";

export const Footer = () => {
  return (
    <footer >
       <motion.div
     
        className=" left-0 right-0 bg-gradient-to-r from-green-900/90 via-yellow-400/90 to-red-600/90 backdrop-blur-sm py-2"
      >
        <div className="container mx-auto px-4">
          <p className="text-white text-center font-semibold">
             লালমনিরহাটবাসীকে ধন্যবাদ | গণমানুষের বিজয় | আলোকিত লালমনিরহাট গড়বেন অধ্যক্ষ আসাদুল হাবিব দুলু 
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
