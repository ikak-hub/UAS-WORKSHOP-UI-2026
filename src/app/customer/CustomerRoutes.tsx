import { useState } from "react";
import { useAuth } from "../shared/context/AuthContext";
import LandingPage from "./components/LandingPage";
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
import type { ProductData } from "./types/product";

// Halaman yang WAJIB login
const PROTECTED_PAGES = [
  "keranjang", "pembayaran", "history-transaksi",
  "pengembalian", "review", "edit-profile", "detail-product"
] as const;

type CustomerPage =
  | "landing" | "artikel" | "artikel1" | "artikel2"
  | "katalog" | "detail-product"
  | "keranjang" | "pembayaran" | "history-transaksi" | "pengembalian"
  | "review" | "edit-profile";

const initialCart: CartItem[] = [];

interface Props {
  onGoToLogin: () => void;
}

export default function CustomerRoutes({ onGoToLogin }: Props) {
  const { user } = useAuth();
  const [page, setPage] = useState<CustomerPage>("landing");
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [selectedProduct, setSelectedProduct] = useState<ProductData | undefined>();

  const addToCart = (item: CartItem) => setCartItems((prev) => [...prev, item]);
  const updateCartItem = (id: string, updates: Partial<CartItem>) =>
    setCartItems((prev) => prev.map((c) => (c.id === id ? { ...c, ...updates } : c)));
  const removeFromCart = (id: string) =>
    setCartItems((prev) => prev.filter((c) => c.id !== id));

  const goHistory = () => goProtected("history-transaksi");
  const goEditProfile = () => goProtected("edit-profile");

  // Navigasi ke halaman protected — kalau belum login, redirect ke /login
  function goProtected(target: CustomerPage) {
    const isProtected = PROTECTED_PAGES.includes(target as any);
    if (isProtected && !user) {
      onGoToLogin();
      return;
    }
    setPage(target);
  }

  if (page === "landing") return (
    <LandingPage
      onLogin={onGoToLogin}
      onArtikel={() => setPage("artikel")}
      onKatalog={() => setPage("katalog")}
      onHistory={goHistory}
      onEditProfile={goEditProfile}
    />
  );

  if (page === "artikel") return (
    <ArtikelPage
      onHome={() => setPage("landing")}
      onArtikel1={() => setPage("artikel1")}
      onArtikel2={() => setPage("artikel2")}
      onKatalog={() => setPage("katalog")}
    />
  );

  if (page === "artikel1") return (
    <ArtikelPage1
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onArtikel2={() => setPage("artikel2")}
      onKatalog={() => setPage("katalog")}
    />
  );

  if (page === "artikel2") return (
    <ArtikelPage2
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onArtikel1={() => setPage("artikel1")}
      onKatalog={() => setPage("katalog")}
    />
  );

  if (page === "katalog") return (
    <KatalogPage
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onDetailProduct={(product) => {
        setSelectedProduct(product);
        goProtected("detail-product");
      }}
      onHistory={goHistory}
      onEditProfile={goEditProfile}
    />
  );

  if (page === "detail-product") return (
    <DetailProductPage
      key={selectedProduct?.id}
      product={selectedProduct}
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onKatalog={() => setPage("katalog")}
      onCheckout={() => goProtected("pembayaran")}
      onAddToCart={addToCart}
      onGoToCart={() => goProtected("keranjang")}
      onHistory={goHistory}
      onEditProfile={goEditProfile}
    />
  );

  if (page === "keranjang") return (
    <KeranjangPage
      cartItems={cartItems}
      onUpdateCart={updateCartItem}
      onRemoveFromCart={removeFromCart}
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onKatalog={() => setPage("katalog")}
      onBack={() => setPage("katalog")}
      onCheckout={() => goProtected("pembayaran")}
      onHistory={goHistory}
      onEditProfile={goEditProfile}
    />
  );

  if (page === "pembayaran") return (
    <PembayaranPage
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onKatalog={() => setPage("katalog")}
      onComplete={() => goProtected("history-transaksi")}
      onHistory={goHistory}
      onEditProfile={goEditProfile}
    />
  );

  if (page === "history-transaksi") return (
    <HistoryTransaksiPage
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onKatalog={() => setPage("katalog")}
      onBack={() => setPage("katalog")}
      onPengembalian={() => goProtected("pengembalian")}
      onReview={() => goProtected("review")}
      onHistory={goHistory}
      onEditProfile={goEditProfile}
    />
  );

  if (page === "pengembalian") return (
    <PengembalianBajuPage
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onKatalog={() => setPage("katalog")}
      onBack={() => goProtected("history-transaksi")}
      onSubmitted={() => goProtected("history-transaksi")}
      onHistory={goHistory}
      onEditProfile={goEditProfile}
    />
  );

  if (page === "review") return (
    <ReviewPage
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onKatalog={() => setPage("katalog")}
      onBack={() => goProtected("history-transaksi")}
      onHistory={goHistory}
      onEditProfile={goEditProfile}
    />
  );

  return (
    <EditProfilePage
      onHome={() => setPage("landing")}
      onArtikel={() => setPage("artikel")}
      onKatalog={() => setPage("katalog")}
      onBack={() => goProtected("history-transaksi")}
      onHistory={goHistory}
    />
  );
}