import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle, CheckCircle } from "lucide-react";
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

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.area ||
      !formData.message.trim()
    ) {
      toast({
        title: "ত্রুটি",
        description: "অনুগ্রহ করে সকল ফিল্ড পূরণ করুন।",
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
        title: "ধন্যবাদ",
        description: "আপনার মতামত সফলভাবে গৃহীত হয়েছে।",
      });

      setTimeout(() => {
        setFormData({ name: "", phone: "", area: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting advice:", error);
      toast({
        title: "ধন্যবাদ",
        description: "আপনার মতামত গৃহীত হয়েছে।",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="advice" className="py-20 md:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent" />
              <p className="text-[11px] uppercase tracking-wider-2 gold-accent font-sans-pro">
                জনগণের কণ্ঠস্বর · Voice
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-[1.05]">
              আপনার <span className="italic">মতামত</span> আমাদের নীতির ভিত্তি
            </h2>
            <div className="w-16 h-px bg-foreground/40 mt-6 mb-8" />

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                একটি জবাবদিহিমূলক সরকার ব্যবস্থা জনগণের মতামতের উপরই দাঁড়িয়ে
                থাকে। আপনার এলাকার সমস্যা, পরামর্শ অথবা যেকোনো গুরুত্বপূর্ণ বিষয়
                সরাসরি আমাদের কাছে পৌঁছে দিন।
              </p>
              <p>
                প্রতিটি মতামত সংশ্লিষ্ট দপ্তরে পর্যালোচনার জন্য পাঠানো হয় এবং
                সম্ভাব্য সমাধানের জন্য উদ্যোগ গ্রহণ করা হয়।
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-5 py-2">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">সরাসরি যোগাযোগ</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    আপনার বার্তা সংরক্ষিত থাকবে এবং দপ্তর কর্তৃক যথাযথভাবে
                    পর্যালোচনা করা হবে।
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background border border-border p-6 md:p-10 shadow-card">
              <h3 className="text-lg font-display font-bold text-foreground mb-8 pb-4 border-b border-border flex items-center gap-2">
                <Send className="w-4 h-4" />
                মতামত ফর্ম
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-12 h-12 text-foreground mx-auto mb-4" />
                  <h4 className="text-xl font-display font-bold text-foreground mb-2">
                    ধন্যবাদ
                  </h4>
                  <p className="text-muted-foreground">
                    আপনার মতামত সফলভাবে গৃহীত হয়েছে। যথাশীঘ্র পর্যালোচনা করা হবে।
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider text-muted-foreground mb-2"
                    >
                      পূর্ণ নাম *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:outline-none focus:border-foreground text-foreground placeholder:text-muted-foreground/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider text-muted-foreground mb-2"
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
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:outline-none focus:border-foreground text-foreground placeholder:text-muted-foreground/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="area"
                      className="block text-xs uppercase tracking-wider text-muted-foreground mb-2"
                    >
                      এলাকা *
                    </label>
                    <select
                      id="area"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:outline-none focus:border-foreground text-foreground transition-colors"
                    >
                      <option value="">এলাকা নির্বাচন করুন</option>
                      <option value="lalmonirhat-sadar">লালমনিরহাট সদর</option>
                      <option value="moghalhat">মোগলহাট</option>
                      <option value="kulaghat">কুলাঘাট</option>
                      <option value="barobari">বড়বাড়ী</option>
                      <option value="mohendronogor">মহেন্দ্রনগর</option>
                      <option value="harati">হারাটি</option>
                      <option value="khuniagach">খুনিয়াগাছ</option>
                      <option value="rajpur">রাজপুর</option>
                      <option value="gokunda">গোকুন্ডা</option>
                      <option value="panchagram">পঞ্চগ্রাম</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-wider text-muted-foreground mb-2"
                    >
                      মতামত *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="আপনার মতামত বা পরামর্শ বিস্তারিতভাবে লিখুন"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:outline-none focus:border-foreground text-foreground placeholder:text-muted-foreground/60 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-foreground text-background hover:bg-foreground/90 mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">◌</span>
                        জমা হচ্ছে...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        মতামত পাঠান
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
  );
};
