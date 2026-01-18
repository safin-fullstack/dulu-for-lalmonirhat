import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
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
  };

  return (
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
                      <option value="barobari">বারোবাড়ী</option>
                      <option value="other">অন্যান্য</option>
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
  );
};
