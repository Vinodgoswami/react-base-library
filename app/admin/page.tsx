"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authStatus = sessionStorage.getItem("isAdminAuthenticated");
    if (authStatus !== "true") {
      router.push("/");
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminAuthenticated");
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-xl text-gray-600 dark:text-gray-300">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 font-sans">
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Admin Dashboard
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome, Admin!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            You have successfully logged in to the admin dashboard.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Users
              </h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                1,234
              </p>
            </div>
            <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                Active Sessions
              </h3>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                56
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Reports
              </h3>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                89
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
