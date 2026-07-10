import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./shared/context/AuthContext";
import { useState } from "react";

import AdminLoginPage from "../app/admin/LoginPage";
import AdminApp from "../app/admin/AdminApp";
import SellerLoginPage from "../app/seller/components/Login";
import RegisPemilikRental from "../app/seller/components/RegisPemilikRental";
import SellerRoutes from "../app/seller/SellerRoutes";
import CustomerRoutes from "../app/customer/CustomerRoutes";
import CustomerLoginPage from "../app/customer/components/LoginPageCS";

const CREDENTIALS = [
  { email: "admin@wcr.id",   password: "admin123",   role: "admin"    as const },
  { email: "seller@wcr.id", password: "seller123", role: "pemilik"  as const },
];

function AdminGuard() {
  const { user, login } = useAuth();
  const [error, setError] = useState("");

  if (!user || user.role !== "admin") {
    return (
      <AdminLoginPage
        heading="LOGIN ADMIN"
        onLogin={(email: string, password: string) => {
          const found = CREDENTIALS.find(
            c => c.email === email && c.password === password && c.role === "admin"
          );
          if (found) {
            login({ role: "admin", email: found.email });
          } else {
            setError("Email atau password admin salah.");
          }
        }}
        errorMessage={error}
      />
    );
  }
  return <AdminApp />;
}

function PemilikGuard() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  if (!user || user.role !== "pemilik") {
    return (
      <SellerLoginPage
        heading="LOGIN PEMILIK"
        onLogin={(email: string, password: string) => {
          const found = CREDENTIALS.find(
            c => c.email === email && c.password === password && c.role === "pemilik"
          );
          if (found) {
            login({ role: "pemilik", email: found.email });
          } else {
            setError("Email atau password pemilik salah.");
          }
        }}
        errorMessage={error}
        onBack={() => navigate("/pengguna")}
        onCreateAccount={() => navigate("/pemilik/daftar")}
      />
    );
  }
  return <SellerRoutes onBackToCustomer={() => navigate("/pengguna")} />;
}

function PemilikRegisterGuard() {
  const navigate = useNavigate();

  return (
    <RegisPemilikRental
      onSubmit={() => {
        // TODO: simpan data registrasi ke backend di sini kalau sudah ada API-nya
        navigate("/pemilik");
      }}
    />
  );
}

function CustomerGuard() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [error, setError] = useState("");

  // Sudah login sebagai pengguna atau langsung akses bebas
  if (showLogin) {
    return (
      <CustomerLoginPage
        onLogin={(email: string, password: string) => {
          if (email === "user@wcr.id" && password === "user123") {
            login({ role: "pengguna", email });
            setShowLogin(false);
          } else {
            setError("Email atau password salah. Silakan coba lagi.");
          }
        }}
        errorMessage={error}
        onBack={() => setShowLogin(false)}
        onGoToSeller={() => navigate("/pemilik")}
      />
    );
  }

  return (
    <CustomerRoutes
      onGoToLogin={() => setShowLogin(true)}
    />
  );
}

function RootRouter() {
  return (
    <Routes>
      <Route path="/admin/*"      element={<AdminGuard />} />
      <Route path="/pemilik/daftar" element={<PemilikRegisterGuard />} />
      <Route path="/pemilik/*"    element={<PemilikGuard />} />
      <Route path="/pengguna/*"   element={<CustomerGuard />} />
      <Route path="/"           element={<Navigate to="/pengguna" replace />} />
      <Route path="*"           element={<Navigate to="/pengguna" replace />} />
    </Routes>
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