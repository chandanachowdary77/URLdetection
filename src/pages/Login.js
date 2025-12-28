import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isAuth", "true");
      navigate("/");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Login Card */}
      <form
        onSubmit={handleLogin}
        className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-96
                   shadow-2xl border border-white/20"
      >
        <h2 className="text-3xl font-bold text-indigo-400 mb-2 text-center">
          CyberProtect
        </h2>

        <p className="text-sm text-slate-300 text-center mb-6">
          Secure Access to Threat Intelligence
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg
                     bg-black/40 text-white placeholder-slate-400
                     outline-none border border-slate-600 focus:border-indigo-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-lg
                     bg-black/40 text-white placeholder-slate-400
                     outline-none border border-slate-600 focus:border-indigo-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700
                     py-3 rounded-lg font-semibold text-white transition"
        >
          Login
        </button>

        <p className="text-xs text-slate-400 text-center mt-6">
          © 2025 CyberProtect Security Operations
        </p>
      </form>
    </div>
  );
}
