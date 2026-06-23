import { useState } from "react";
import Login from "./components/Login";
import RegisPemilikRental from "./components/RegisPemilikRental";
import VerifikasiPending from "./components/VerifikasiPending";
import Dashboard from "./components/Dashboard";
import KelolaProduct from "./components/KelolaProduct";
import AccountSettings from "./components/AccountSettings";
import KelolaPesanan, { type PesananMode } from "./components/KelolaPesanan";
import Pendapatan from "./components/Pendapatan";
import type { Product } from "./data/products";

type SellerPage =
  | "login" | "regis" | "verifikasi"
  | "dashboard" | "kelola" | "account" | "pesanan" | "pendapatan";

interface Props {
  /** Return to the customer section (landing page). */
  onBackToCustomer: () => void;
}

export default function SellerRoutes({ onBackToCustomer }: Props) {
  const [page, setPage] = useState<SellerPage>("login");
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [pesananMode, setPesananMode] = useState<PesananMode>("orders");

  const openPendapatan = () => setPage("pendapatan");

  if (page === "login") return <Login onCreateAccount={() => setPage("regis")} onLogin={() => setPage("dashboard")} onBack={onBackToCustomer} />;
  if (page === "regis") return <RegisPemilikRental onSubmit={() => setPage("verifikasi")} />;
  if (page === "verifikasi") return <VerifikasiPending />;
  if (page === "kelola") return <KelolaProduct onBack={() => setPage("dashboard")} product={selectedProduct} onOpenAccount={() => setPage("account")} onLogout={() => setPage("login")} />;
  if (page === "account") return <AccountSettings onBack={() => setPage("dashboard")} onLogout={() => setPage("login")} onOpenPesanan={(m) => { setPesananMode(m); setPage("pesanan"); }} onOpenPendapatan={openPendapatan} />;
  if (page === "pesanan") return <KelolaPesanan mode={pesananMode} onBack={() => setPage("account")} onOpenAccount={() => setPage("account")} onLogout={() => setPage("login")} />;
  if (page === "pendapatan") return <Pendapatan onBack={() => setPage("dashboard")} onOpenAccount={() => setPage("account")} onLogout={() => setPage("login")} />;
  return (
    <Dashboard onSelectProduct={(p) => { setSelectedProduct(p); setPage("kelola"); }} onOpenAccount={() => setPage("account")} onLogout={() => setPage("login")} onOpenPendapatan={openPendapatan} />
  );
}
