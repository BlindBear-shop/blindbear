import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoLight from "@/assets/logo-light.png";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            {isLogin ? "Sign in to your BLINDBEAR account" : "Join the BLINDBEAR community"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {!isLogin && (
            <div>
              <label className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full border border-foreground/10 bg-transparent px-3.5 py-3 font-body text-sm outline-none focus:border-foreground/30 transition-colors"
              />
            </div>
          )}
          <div>
            <label className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 mb-1.5 block">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full border border-foreground/10 bg-transparent px-3.5 py-3 font-body text-sm outline-none focus:border-foreground/30 transition-colors"
            />
          </div>
          <div>
            <label className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 mb-1.5 block">Password</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              className="w-full border border-foreground/10 bg-transparent px-3.5 py-3 font-body text-sm outline-none focus:border-foreground/30 transition-colors"
            />
          </div>
          {!isLogin && (
            <div>
              <label className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 mb-1.5 block">Confirm Password</label>
              <input
                type="password"
                required
                value={form.confirmPassword}
                onChange={(e) => update("confirmPassword", e.target.value)}
                className="w-full border border-foreground/10 bg-transparent px-3.5 py-3 font-body text-sm outline-none focus:border-foreground/30 transition-colors"
              />
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <button type="button" className="font-body text-[10px] text-foreground/30 hover:text-foreground/60 underline">
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-foreground text-background py-3.5 font-body text-[11px] tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-foreground/[0.06]" /></div>
            <div className="relative flex justify-center"><span className="bg-background px-4 font-body text-[10px] text-foreground/25">or</span></div>
          </div>

          <button
            type="button"
            className="w-full border border-foreground/10 py-3.5 font-body text-xs tracking-wide hover:bg-muted/30 transition-colors flex items-center justify-center gap-2.5"
          >
            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>
        </form>

        <p className="text-center mt-6 font-body text-[11px] text-foreground/30">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-foreground/70 underline hover:text-foreground"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
