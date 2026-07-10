import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./shared/context/AuthContext";
import { useState } from "react";

import AdminLoginPage from "../app/admin/LoginPage";
import AdminApp from "../app/admin/AdminApp";
import SellerRoutes from "../app/seller/SellerRoutes";
import CustomerRoutes from "../app/customer/CustomerRoutes";
import CustomerLoginPage from "../app/customer/components/LoginPageCS";

const CREDENTIALS = [
  { email: "admin@wcr.id",   password: "admin123",   role: "admin"    as const },
  { email: "pemilik@wcr.id", password: "pemilik123", role: "pemilik"  as const },
];

function AdminGuard() {
  const { user, login } = useAuth();
  const [error, setError] = useState("");

  if (!user || user.role !== "admin") {
    return (
      <AdminLoginPage
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
      <AdminLoginPage
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
      />
    );
  }
  return <SellerRoutes onBackToCustomer={() => navigate("/pengguna")} />;
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
        onLogin={() => {
          login({ role: "pengguna", email: "user@wcr.id" });
          setShowLogin(false);
        }}
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
      <Route path="/admin/*"    element={<AdminGuard />} />
      <Route path="/pemilik/*"  element={<PemilikGuard />} />
      <Route path="/pengguna/*" element={<CustomerGuard />} />
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