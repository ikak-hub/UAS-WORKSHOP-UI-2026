import { useState } from "react";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPageCS";
import ArtikelPage from "./components/ArtikelPage";
import ArtikelPage1 from "./components/ArtikelPage1";
import ArtikelPage2 from "./components/ArtikelPage2";
import KatalogPage from "./components/KatalogPage";
import DetailProductPage from "./components/DetailProductPage";
import PembayaranPage from "./components/PembayaranPage";
import HistoryTransaksiPage from "./components/HistoryTransaksiPage";
import KeranjangPage from "./components/KeranjangPage";
import PengembalianBajuPage from "./components/PengembalianBajuPage";
import ReviewPage from "./components/ReviewPage";
import EditProfilePage from "./components/EditProfilePage";
import type { CartItem } from "../types";

type CustomerPage =
  | "landing" | "login" | "artikel" | "artikel1" | "artikel2"
  | "katalog" | "detail-product"
  | "keranjang" | "pembayaran" | "history-transaksi" | "pengembalian"
  | "review" | "edit-profile";

const initialCart: CartItem[] = [
  {
    id: "cart-1",
    name: "Kebaya Janggan (Merah)",
    description: "Kebaya wisuda elegan dengan nuansa bali",
    seller: "Sicepot",
    size: "L",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 2 * 86400000).toISOString(),
    rentalDays: 3,
    price: 300000,
  },
];

interface Props {
  /** Switch to the seller/owner section (login). */
  onGoToLogin: () => void;
}

export default function CustomerRoutes({ onGoToLogin }: Props) {
  const [page, setPage] = useState<CustomerPage>("landing");
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const addToCart = (item: CartItem) => setCartItems((prev) => [...prev, item]);
  const updateCartItem = (id: string, updates: Partial<CartItem>) =>
    setCartItems((prev) => prev.map((c) => (c.id === id ? { ...c, ...updates } : c)));
  const removeFromCart = (id: string) => setCartItems((prev) => prev.filter((c) => c.id !== id));

  const goHistory = () => setPage("history-transaksi");
  const goEditProfile = () => setPage("edit-profile");

  if (page === "landing") return <LandingPage onLogin={() => setPage("login")} onArtikel={() => setPage("artikel")} onKatalog={() => setPage("katalog")} onHistory={goHistory} onEditProfile={goEditProfile} />;
  if (page === "login") return <LoginPage onLogin={() => setPage("landing")} onBack={() => setPage("landing")} onGoToSeller={onGoToLogin} />;
  if (page === "artikel") return <ArtikelPage onHome={() => setPage("landing")} onArtikel1={() => setPage("artikel1")} onArtikel2={() => setPage("artikel2")} onKatalog={() => setPage("katalog")} />;
  if (page === "artikel1") return <ArtikelPage1 onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onArtikel2={() => setPage("artikel2")} onKatalog={() => setPage("katalog")} />;
  if (page === "artikel2") return <ArtikelPage2 onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onArtikel1={() => setPage("artikel1")} onKatalog={() => setPage("katalog")} />;

  if (page === "katalog") return (
    <KatalogPage onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onDetailProduct={() => setPage("detail-product")} onHistory={goHistory} onEditProfile={goEditProfile} />
  );
  if (page === "detail-product") return (
    <DetailProductPage onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onKatalog={() => setPage("katalog")}
      onCheckout={() => setPage("pembayaran")} onAddToCart={addToCart} onGoToCart={() => setPage("keranjang")}
      onHistory={goHistory} onEditProfile={goEditProfile} />
  );
  if (page === "keranjang") return (
    <KeranjangPage cartItems={cartItems} onUpdateCart={updateCartItem} onRemoveFromCart={removeFromCart}
      onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onKatalog={() => setPage("katalog")}
      onBack={() => setPage("katalog")} onCheckout={() => setPage("pembayaran")}
      onHistory={goHistory} onEditProfile={goEditProfile} />
  );
  if (page === "pembayaran") return (
    <PembayaranPage onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onKatalog={() => setPage("katalog")}
      onComplete={() => setPage("history-transaksi")} onHistory={goHistory} onEditProfile={goEditProfile} />
  );
  if (page === "history-transaksi") return (
    <HistoryTransaksiPage onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onKatalog={() => setPage("katalog")}
      onBack={() => setPage("katalog")} onPengembalian={() => setPage("pengembalian")}
      onReview={() => setPage("review")} onHistory={goHistory} onEditProfile={goEditProfile} />
  );
  if (page === "pengembalian") return (
    <PengembalianBajuPage onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onKatalog={() => setPage("katalog")}
      onBack={() => setPage("history-transaksi")} onSubmitted={() => setPage("history-transaksi")}
      onHistory={goHistory} onEditProfile={goEditProfile} />
  );
  if (page === "review") return (
    <ReviewPage onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onKatalog={() => setPage("katalog")}
      onBack={() => setPage("history-transaksi")} onHistory={goHistory} onEditProfile={goEditProfile} />
  );
  return (
    <EditProfilePage onHome={() => setPage("landing")} onArtikel={() => setPage("artikel")} onKatalog={() => setPage("katalog")}
      onBack={() => setPage("history-transaksi")} onHistory={goHistory} />
  );
}