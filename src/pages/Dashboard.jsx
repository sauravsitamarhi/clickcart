import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiCalendar, FiLogOut, FiShoppingBag } from "react-icons/fi";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      toast.error("Please login to access dashboard");
      navigate("/login");
    }
  }, [isAuthenticated, loading, navigate]);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-500 mt-1">Welcome back, {user.name}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition font-medium"
            >
              <FiLogOut />
              Logout
            </button>
          </div>

          {/* User Info Card */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FiUser className="text-orange-600" />
              User Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg">
                  <FiUser className="text-orange-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg">
                  <FiMail className="text-orange-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <p className="font-semibold text-gray-900">{user.email}</p>
                </div>
              </div>
              {user.createdAt && (
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg">
                    <FiCalendar className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Member Since</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/products"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
              >
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FiShoppingBag className="text-orange-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Browse Products</p>
                  <p className="text-sm text-gray-500">Shop now</p>
                </div>
              </a>
              <a
                href="/cart"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
              >
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FiShoppingBag className="text-orange-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">View Cart</p>
                  <p className="text-sm text-gray-500">Check items</p>
                </div>
              </a>
              <a
                href="/"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
              >
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FiShoppingBag className="text-orange-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Go Home</p>
                  <p className="text-sm text-gray-500">Back to home</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

