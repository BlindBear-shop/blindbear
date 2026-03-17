import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import logoLight from "@/assets/logo-light.png";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });

        if (error) alert(error.message);
        else alert("Login successful");
      } else {
        if (form.password !== form.confirmPassword) {
          alert("Passwords do not match");
          setLoading(false);
          return;
        }

        const { error } = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
          options: {
            data: {
              name: form.name,
            },
          },
        });

        if (error) alert(error.message);
        else alert("Account created! Check your email.");
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 pb-20 sm:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm px-5 sm:px-0"
      >
        <div className="text-center mb-8">
          <Link to="/">
            <img src={logoLight} alt="BLINDBEAR" className="h-12 sm:h-14 mx-auto mb-5" />
          </Link>

          <h1 className="font-display text-2xl sm:text-3xl text-foreground">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="font-body text-[11px] text-foreground/35 mt-1.5">
            {isLogin
              ? "Sign in to your BLINDBEAR account"
              : "Join the BLINDBEAR community"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {!isLogin && (
            <div>
              <label className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 mb-1.5 block">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full border border-foreground/10 bg-transparent px-3.5 py-3 font-body text-sm outline-none focus:border-foreground/30"
              />
            </div>
          )}

          <div>
            <label className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full border border-foreground/10 bg-transparent px-3.5 py-3 font-body text-sm outline-none focus:border-foreground/30"
            />
          </div>

          <div>
            <label className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 mb-1.5 block">
              Password
            </label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              className="w-full border border-foreground/10 bg-transparent px-3.5 py-3 font-body text-sm outline-none focus:border-foreground/30"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 mb-1.5 block">
                Confirm Password
              </label>
              <input
                type="password"
                required
                value={form.confirmPassword}
                onChange={(e) => update("confirmPassword", e.target.value)}
                className="w-full border border-foreground/10 bg-transparent px-3.5 py-3 font-body text-sm outline-none focus:border-foreground/30"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-foreground text-background py-3.5 font-body text-[11px] tracking-[0.15em] uppercase hover:bg-foreground/90"
          >
            {loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
          </button>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-foreground/[0.06]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 font-body text-[10px] text-foreground/25">
                or
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={loginWithGoogle}
            className="w-full border border-foreground/10 py-3.5 font-body text-xs tracking-wide hover:bg-muted/30 flex items-center justify-center gap-2.5"
          >
            Continue with Google
          </button>
        </form>

        <p className="text-center mt-6 font-body text-[11px] text-foreground/30">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-foreground/70 underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;