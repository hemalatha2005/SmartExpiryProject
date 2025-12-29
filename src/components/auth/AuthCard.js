import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthCard({
  mode = "signup",
  setMode = () => {},
  onAuthSuccess,
}) {
  const isSignup = mode === "signup";

  // FORM STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid =
    email.trim().length > 0 && password.trim().length > 0;

  const handleSubmit = () => {
    if (!isFormValid) return;

    // fake authentication success
    setTimeout(() => {
      onAuthSuccess && onAuthSuccess();
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="w-[420px] rounded-2xl bg-white/70 backdrop-blur-xl
                 shadow-2xl p-6 relative z-10"
    >
      {/* TOGGLE */}
      <div className="flex bg-white/60 rounded-full p-1 mb-6">
        <button
          onClick={() => setMode("signup")}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition
            ${isSignup ? "bg-white shadow" : "text-gray-500"}`}
        >
          Sign up
        </button>
        <button
          onClick={() => setMode("login")}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition
            ${!isSignup ? "bg-white shadow" : "text-gray-500"}`}
        >
          Sign in
        </button>
      </div>

      {/* TITLE */}
      <h2 className="text-xl font-semibold mb-4">
        {isSignup ? "Create an account" : "Welcome back"}
      </h2>

      {/* FORM */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, x: isSignup ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isSignup ? -60 : 60 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="space-y-3"
        >
          {isSignup && (
            <div className="flex gap-2">
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="auth-input"
                placeholder="First name"
              />
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="auth-input"
                placeholder="Last name"
              />
            </div>
          )}

          <motion.input
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="auth-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <motion.input
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            type="password"
            className="auth-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* SUBMIT */}
          <motion.button
            whileHover={isFormValid ? { scale: 1.02 } : {}}
            whileTap={isFormValid ? { scale: 0.96 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
            disabled={!isFormValid}
            onClick={handleSubmit}
            className={`w-full mt-4 py-3 rounded-lg font-medium transition-all
              ${
                isFormValid
                  ? "bg-[#142D4C] text-white hover:bg-[#5682B1]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {isSignup ? "Create account" : "Sign in"}
          </motion.button>
        </motion.div>
      </AnimatePresence>

      {/* DIVIDER */}
      <div className="flex items-center gap-3 my-5 text-xs text-gray-400">
        <div className="flex-1 h-px bg-gray-300/50" />
        OR
        <div className="flex-1 h-px bg-gray-300/50" />
      </div>

      {/* SOCIAL */}
      <div className="flex gap-3">
        {/* GOOGLE */}
        <button className="social-btn flex items-center justify-center gap-2">
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.1 0 5.9 1.1 8.1 2.9l6-6C34.3 2.4 29.5 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.4 5.7C12 13.2 17.5 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.1 24.5c0-1.7-.2-3.3-.5-4.9H24v9.3h12.5c-.5 2.7-2 5-4.3 6.5l6.6 5.1c3.9-3.6 6.3-8.9 6.3-16z"/>
            <path fill="#FBBC05" d="M9.9 28.9c-.5-1.4-.8-2.9-.8-4.4s.3-3 .8-4.4l-7.4-5.7C.9 17.1 0 20.5 0 24s.9 6.9 2.5 9.6l7.4-5.7z"/>
            <path fill="#34A853" d="M24 48c5.5 0 10.3-1.8 13.8-4.9l-6.6-5.1c-1.8 1.2-4.1 1.9-7.2 1.9-6.5 0-12-3.7-14.1-9.1l-7.4 5.7C6.4 42.6 14.6 48 24 48z"/>
          </svg>
          Google
        </button>

        {/* FACEBOOK */}
        <button className="social-btn flex items-center justify-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z"/>
          </svg>
          Facebook
        </button>
      </div>

      {/* FOOTER */}
      <p className="text-[11px] text-gray-500 mt-4 text-center">
        By continuing, you agree to our Terms & Privacy Policy
      </p>
    </motion.div>
  );
}
