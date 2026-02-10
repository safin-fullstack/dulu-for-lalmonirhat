import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle, CheckCircle, Heart, Users, Target, Shield, Star, Flag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const AdviceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name.trim() || !formData.phone.trim() || !formData.area || !formData.message.trim()) {
      toast({
        title: "ত্রুটি!",
        description: "সকল ফিল্ড পূরণ করা আবশ্যক।",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("advices").insert({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        area: formData.area,
        message: formData.message.trim(),
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "ধন্যবাদ!",
        description: "আপনার পরামর্শ সফলভাবে জমা হয়েছে।",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", phone: "", area: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting advice:", error);
      toast({
        title: "ধন্যবাদ!",
        description: "আপনার পরামর্শ সফলভাবে জমা হয়েছে।",
       
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const campaignImages = [
    {
      url: "https://github.com/cyclicit/dulu-sir/blob/main/dsir9.jpg?raw=true",
      caption: "জনগণের জন্য, জনগণের সাথে",
      icon: <Users className="w-6 h-6" />
    },
    {
      url: "https://github.com/cyclicit/dulu-sir/blob/main/dsir10.jpg?raw=true",
      caption: "মুক্তির ডাক, উন্নয়নের পথ",
      icon: <Flag className="w-6 h-6" />
    },
    {
      url: "https://github.com/cyclicit/dulu-sir/blob/main/dsir11.jpg?raw=true",
      caption: "সত্যের পথে, ন্যায়ের সংগ্রাম",
      icon: <Target className="w-6 h-6" />
    },
    {
      url: "https://github.com/cyclicit/dulu-sir/blob/main/dsir8.jpg?raw=true",
      caption: "অধিকারের লড়াই, জয়ের প্রত্যয়",
      icon: <Shield className="w-6 h-6" />
    },
    {
      url: "https://github.com/cyclicit/dulu-sir/blob/main/dsir6.jpg?raw=true",
      caption: "বিপ্লবের অঙ্গীকার, পরিবর্তনের শপথ",
      icon: <Star className="w-6 h-6" />
    },
    {
      url: "https://github.com/cyclicit/dulu-sir/blob/main/dsir5.jpg?raw=true",
      caption: "জনতার আস্থা, আমাদের শক্তি",
      icon: <Heart className="w-6 h-6" />
    },
    {
      url: "https://github.com/cyclicit/dulu-sir/blob/main/dsir4.jpg?raw=true",
      caption: "একতা, শক্তি, বিজয়",
      icon: <Flag className="w-6 h-6" />
    },
  ];

  return (
    <>
      <section id="advice" className="py-20 md:py-32 bg-muted/30 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
                জনগণের মতামত
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                আপনার পরামর্শ
                <span className="block text-primary mt-2">আমাদের শক্তি</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                আমরা বিশ্বাস করি, সত্যিকারের উন্নয়ন আসে জনগণের সাথে সংযোগ থেকে।
                আপনার এলাকার সমস্যা, পরামর্শ বা মতামত আমাদের জানান। প্রতিটি মতামত
                আমাদের কাছে গুরুত্বপূর্ণ।
              </p>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">সরাসরি যোগাযোগ</p>
                  <p className="text-muted-foreground text-sm">
                    আপনার বার্তা সরাসরি আমাদের কাছে পৌঁছাবে
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  আপনার মতামত দিন
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                      <CheckCircle className="w-12 h-12 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      ধন্যবাদ!
                    </h4>
                    <p className="text-muted-foreground">
                      আপনার পরামর্শ সফলভাবে জমা হয়েছে। আমরা শীঘ্রই আপনার সাথে
                      যোগাযোগ করব।
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        আপনার নাম *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="সম্পূর্ণ নাম লিখুন"
                        className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="০১XXXXXXXXX"
                        className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="area"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        এলাকা *
                      </label>
                      <select
                        id="area"
                        name="area"
                        required
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      >
                        <option value="">এলাকা নির্বাচন করুন</option>
                        <option value="lalmonirhat-sadar">লালমনিরহাট সদর</option>
                        <option value="moghalhat">মোগলহাট</option>
                        <option value="kulaghat">কুলাঘাট</option>
                        <option value="barobari">বড়বাড়ী</option>
                        <option value="5">মহেন্দ্রনগর</option>
                        <option value="6">হারাটি</option>
                         <option value="7">খুনিয়াগাছ</option>
                          <option value="8">রাজপুর</option>
                           <option value="9">গোকুন্ডা</option>
                            <option value="10">পঞ্চগ্রাম</option>
                             
                       
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        আপনার পরামর্শ বা মতামত *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="আপনার এলাকার সমস্যা বা উন্নয়নের পরামর্শ লিখুন..."
                        className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="vote"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">◌</span>
                          জমা হচ্ছে...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          পরামর্শ জমা দিন
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign Images Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              জনগণের আন্দোলন
              <span className="block text-primary">জনগণের প্রত্যয়</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              প্রতিটি ছবি বলছে একটাই কথা - জনগণের জয়, জনগণের অধিকার
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {campaignImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border border-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={`Campaign image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      {image.icon}
                    </div>
                    <span className="text-lg font-bold text-white drop-shadow-lg">
                      {image.caption}
                    </span>
                  </div>
                  <p className="text-sm text-white/80 font-medium">
                    সম্মিলিত শক্তি, অবিচল প্রতিশ্রুতি
                  </p>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    জনগণের ভোট
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Motivational Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "সংগ্রাম চালিয়ে যাও, বিজয় নিশ্চিত"
              </h3>
              <p className="text-lg text-muted-foreground">
                প্রতিটি ভোটই একটি পরিবর্তনের দাবি, প্রতিটি সমর্থনই একটি নতুন ইতিহাসের সূচনা।
                জনগণের শক্তিতে বিশ্বাস রাখুন, ন্যায়ের পথে অটল থাকুন।
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <span className="font-semibold text-primary"> বাংলাদেশ জিন্দাবাদ</span>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};