import { useState } from "react";
import CustomerRoutes from "./customer/CustomerRoutes";
import SellerRoutes from "./seller/SellerRoutes";
import type { CartItem } from "./types";
export type { CartItem };

/** Top-level section: the customer (buyer) app vs the seller (owner) app. */
type Section = "customer" | "seller";

export default function App() {
  const [section, setSection] = useState<Section>("customer");

  if (section === "seller") {
    return <SellerRoutes onBackToCustomer={() => setSection("customer")} />;
  }
  return <CustomerRoutes onGoToLogin={() => setSection("seller")} />;
}
