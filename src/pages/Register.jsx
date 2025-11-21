import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await register(formData.name, formData.email, formData.password);

    if (result.success) {
      toast.success(result.message || "Registration successful!");
      navigate("/dashboard");
    } else {
      toast.error(result.message || "Registration failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <header className="text-center space-y-2">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600">
            <FiUser size={22} />
          </span>
          <h1 className="text-2xl font-semibold text-gray-900">Create Account</h1>
          <p className="text-gray-500">
            Sign up to access your cart, saved items, and exclusive deals.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <FiUser size={16} />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <FiMail size={16} />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <FiLock size={16} />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <p className="mt-1 text-xs text-gray-500">Password must be at least 6 characters</p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-white font-semibold shadow-md hover:bg-orange-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiLogIn />
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 hover:text-orange-500 font-medium">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;

