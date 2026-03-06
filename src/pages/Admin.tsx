import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, LogOut, Lock, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Advice = {
  id: string;
  name: string;
  phone: string;
  area: string;
  message: string;
  created_at: string;
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [advices, setAdvices] = useState<Advice[]>([]);
  const [searchPhone, setSearchPhone] = useState("");
  const [selectedAdvice, setSelectedAdvice] = useState<Advice | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      setLoading(false);
      if (session) fetchAdvices();
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
      setLoading(false);
      if (session) fetchAdvices();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchAdvices = async () => {
    const { data, error } = await supabase
      .from("advices")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setAdvices(data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoginLoading(false);
    if (error) {
      toast({ title: "Login Failed", description: error.message, variant: "destructive" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAdvices([]);
  };

  const filteredAdvices = searchPhone
    ? advices.filter((a) => a.phone.includes(searchPhone))
    : advices;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin text-2xl">◌</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-8">
        <div className="w-full max-w-md bg-card rounded-2xl shadow-card border border-border p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex p-3 sm:p-4 bg-primary/10 rounded-full mb-4">
              <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Admin Login</h1>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">Enter your credentials to continue</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={loginLoading}>
              {loginLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-3 sm:px-4 py-3 sm:py-4">
        <div className="container mx-auto flex items-center justify-between gap-2">
          <h1 className="text-base sm:text-xl font-bold text-foreground truncate">Admin Dashboard</h1>
          <Button variant="outline" size="sm" onClick={handleLogout} className="shrink-0">
            <LogOut className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="ফোন নম্বর দিয়ে খুঁজুন..."
              value={searchPhone}
              onChange={(e) => setSearchPhone(e.target.value)}
              className="pl-10"
            />
          </div>
          <span className="text-sm text-muted-foreground">
            {filteredAdvices.length} টি ফলাফল
          </span>
        </div>

        {/* Mobile card view */}
        <div className="block md:hidden space-y-3">
          {filteredAdvices.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground bg-card rounded-xl border border-border">
              কোনো তথ্য পাওয়া যায়নি
            </div>
          ) : (
            filteredAdvices.map((advice) => (
              <div
                key={advice.id}
                onClick={() => setSelectedAdvice(advice)}
                className="bg-card rounded-xl border border-border p-4 space-y-2 cursor-pointer hover:border-primary/50 transition-colors active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{advice.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(advice.created_at).toLocaleDateString("bn-BD")}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">📞</span>
                  <span className="text-foreground">{advice.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">📍</span>
                  <span className="text-foreground">{advice.area}</span>
                </div>
                <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 line-clamp-2">
                  {advice.message}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Desktop table view */}
        <div className="hidden md:block bg-card rounded-xl border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>নাম</TableHead>
                <TableHead>ফোন</TableHead>
                <TableHead>এলাকা</TableHead>
                <TableHead>পরামর্শ</TableHead>
                <TableHead>তারিখ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAdvices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    কোনো তথ্য পাওয়া যায়নি
                  </TableCell>
                </TableRow>
              ) : (
                filteredAdvices.map((advice) => (
                  <TableRow
                    key={advice.id}
                    onClick={() => setSelectedAdvice(advice)}
                    className="cursor-pointer"
                  >
                    <TableCell className="font-medium">{advice.name}</TableCell>
                    <TableCell>{advice.phone}</TableCell>
                    <TableCell>{advice.area}</TableCell>
                    <TableCell className="max-w-xs truncate">{advice.message}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(advice.created_at).toLocaleDateString("bn-BD")}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Advice Detail Dialog */}
        <Dialog open={!!selectedAdvice} onOpenChange={() => setSelectedAdvice(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-lg">{selectedAdvice?.name}</DialogTitle>
            </DialogHeader>
            {selectedAdvice && (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">📞 ফোন: </span>
                    <span className="font-medium text-foreground">{selectedAdvice.phone}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">📍 এলাকা: </span>
                    <span className="font-medium text-foreground">{selectedAdvice.area}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">📅 তারিখ: </span>
                    <span className="font-medium text-foreground">
                      {new Date(selectedAdvice.created_at).toLocaleDateString("bn-BD")}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">পরামর্শ:</p>
                  <div className="bg-muted/50 rounded-lg p-4 text-foreground whitespace-pre-wrap">
                    {selectedAdvice.message}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Admin;
