import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./shared/context/AuthContext";
import { useState } from "react";

import AdminApp from "../app/admin/AdminApp";
import AdminLoginPage from "../app/admin/LoginPage";
import SellerRoutes from "../app/seller/SellerRoutes";
import CustomerRoutes from "../app/customer/CustomerRoutes";
import CustomerLoginPage from "../app/customer/components/LoginPageCS"; // <-- import ini

type ShowLogin = "none" | "customer" | "admin-seller";

const ADMIN_CREDENTIALS = [
  { email: "admin@wcr.id",   password: "admin123",   role: "admin"   as const },
  { email: "pemilik@wcr.id", password: "pemilik123", role: "pemilik" as const },
];

function RootRouter() {
  const { user, login, logout } = useAuth();
  const [showLogin, setShowLogin] = useState<ShowLogin>("none");
  const [adminError, setAdminError] = useState("");

  // Sudah login admin
  if (user?.role === "admin") return <AdminApp />;

  // Sudah login pemilik
  if (user?.role === "pemilik") return <SellerRoutes onBackToCustomer={logout} />;

  // Tampilkan login admin/pemilik
  if (showLogin === "admin-seller") {
    return (
      <AdminLoginPage
        onLogin={(email: string, password: string) => {
          const found = ADMIN_CREDENTIALS.find(
            c => c.email === email && c.password === password
          );
          if (found) {
            setAdminError("");
            setShowLogin("none");
            login({ role: found.role, email: found.email });
          } else {
            setAdminError("Email atau password salah.");
          }
        }}
        errorMessage={adminError}
      />
    );
  }

  // Tampilkan login customer
  if (showLogin === "customer") {
    return (
      <CustomerLoginPage
        onLogin={() => {
          // CustomerLoginPage sudah handle validasi sendiri
          // Setelah login berhasil, set user sebagai pengguna
          login({ role: "pengguna", email: "user@wcr.id" });
          setShowLogin("none");
        }}
        onBack={() => setShowLogin("none")}
        onGoToSeller={() => setShowLogin("admin-seller")}
      />
    );
  }

  // Default — halaman customer
  return (
    <CustomerRoutes
      onGoToLogin={() => {
        setShowLogin("customer");
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RootRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}