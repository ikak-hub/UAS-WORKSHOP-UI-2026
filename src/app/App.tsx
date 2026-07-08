import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./shared/context/AuthContext";

// Admin
import AdminLoginPage from "../app/admin/LoginPage";
import AdminApp from "../app/admin/AdminApp";

// Seller (pemilik) — pakai komponen yang sudah ada
import SellerRoutes from "../app/seller/SellerRoutes";

// Customer (pengguna) — pakai komponen yang sudah ada
import CustomerRoutes from "../app/customer/CustomerRoutes";

// ── Guard: halaman admin hanya bisa diakses kalau role === "admin" ──
function AdminGuard() {
  const { user, login } = useAuth();

  if (!user || user.role !== "admin") {
    return (
      <AdminLoginPage
        onLogin={() =>
          login({ role: "admin", email: "admin@wcr.id" })
        }
      />
    );
  }
  return <AdminApp />;
}

// ── Root: pisah zona berdasarkan URL prefix ──
function RootRouter() {
  return (
    <Routes>
      {/* Zona admin — login page sendiri, terpisah */}
      <Route path="/admin/*" element={<AdminGuard />} />

      {/* Zona pemilik */}
      <Route
        path="/pemilik/*"
        element={
          <SellerRoutes onBackToCustomer={() => (window.location.href = "/pengguna")} />
        }
      />

      {/* Zona pengguna (customer) — default landing */}
      <Route
        path="/pengguna/*"
        element={
          <CustomerRoutes onGoToLogin={() => (window.location.href = "/pengguna")} />
        }
      />

      {/* Root redirect ke pengguna */}
      <Route path="/" element={<Navigate to="/pengguna" replace />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/pengguna" replace />} />
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