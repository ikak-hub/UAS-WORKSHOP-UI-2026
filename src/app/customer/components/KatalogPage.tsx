import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import KatalogImport from "../../../imports/DetailKatalog/index";
import { ProfileMenu } from "./ProfileMenu";

// Data semua produk katalog
export interface ProductData {
  id: string;
  name: string;
  category: string;
  description: string;
  size: string;
  location: string;
  imageKey?: string;
}

const PRODUCTS: ProductData[] = [
  // Terpopuler
  { id: "p1", name: "Jas Dasi Panjang", category: "Jas", description: "Berdesain rapih menyesuaikan lekukan tubuh penyewa", size: "L", location: "Jakarta Selatan" },
  { id: "p2", name: "Jas Dasi Kupu-kupu", category: "Jas", description: "Berdesain rapih menyesuaikan lekukan tubuh penyewa", size: "L", location: "Surabaya" },
  { id: "p3", name: "Jas Panjang Wanita", category: "Jas", description: "Berdesain modern untuk musim gugur dan musim dingin", size: "L", location: "Jakarta Selatan" },
  { id: "p4", name: "Adat Jawa", category: "Baju Adat", description: "Di desain dengan perpaduan modern dan tradisional", size: "L", location: "Surabaya" },
  // Baju Adat
  { id: "p5", name: "Kebaya Modern Emerald", category: "Baju Adat", description: "Berdesian dengan payet yang menunjang proporsi badan", size: "L", location: "Jakarta Selatan" },
  { id: "p6", name: "Kebaya Janggan Merah", category: "Baju Adat", description: "Berdesain elegan dengan detail kerah tinggi (Mandarin Collar)", size: "L", location: "Surabaya" },
  { id: "p7", name: "Kebaya Melayu", category: "Baju Adat", description: "Di desain dengan nuansa modern dan tradisional melayu", size: "L", location: "Jakarta Selatan" },
  { id: "p8", name: "Kebaya Betawi", category: "Baju Adat", description: "Di desain dengan nuansa modern dan tradisional betawi", size: "L", location: "Surabaya" },
  // Baju MC
  { id: "p9", name: "Dress Formal", category: "Baju MC", description: "Dres elegan dan mewah hijab friendly", size: "L", location: "Jakarta Selatan" },
  { id: "p10", name: "Adat Betawi", category: "Baju MC", description: "Setelan Baju adat Betawi cocok untuk drescode MC", size: "L", location: "Surabaya" },
  { id: "p11", name: "Jas", category: "Baju MC", description: "Setelan Jas timeless cocok untuk berbagai kegiatan", size: "L", location: "Jakarta Selatan" },
  { id: "p12", name: "Jas", category: "Baju MC", description: "Setelan Jas timeless cocok untuk berbagai kegiatan", size: "L", location: "Jakarta Selatan" },
  // Formal row 2
  { id: "p13", name: "Tuxedo / Jas", category: "Baju MC", description: "Setelan tuxedo pria", size: "L", location: "Jakarta Selatan" },
  { id: "p14", name: "Jas Semi Formal", category: "Baju MC", description: "Jas Semi Formal", size: "L", location: "Surabaya" },
  { id: "p15", name: "Tuxedo Grey", category: "Baju MC", description: "Setelan tuxedo pria", size: "L", location: "Jakarta Selatan" },
  { id: "p16", name: "Jas Batik", category: "Baju MC", description: "Jas Batik elegan", size: "L", location: "Surabaya" },
  // Cosplay
  { id: "p17", name: "Spy X Family", category: "Cosplay", description: "Yor Forger dari anime spy x family", size: "S", location: "Jakarta Selatan" },
  { id: "p18", name: "Kafka Honkai Rail Star", category: "Cosplay", description: "Kafka Honkai Rail Star", size: "M", location: "Surabaya" },
  { id: "p19", name: "Loid Forger Spy X Family", category: "Cosplay", description: "Loid Forger dari anime spy x family", size: "L", location: "Jakarta Selatan" },
  { id: "p20", name: "Blade Honkai Rail Star", category: "Cosplay", description: "Blade Honkai Rail Star", size: "L", location: "Surabaya" },
];

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onDetailProduct: (product: ProductData) => void;
  onHistory?: () => void;
  onEditProfile?: () => void;
}

const NAV_BTN_TOP = 45.83;
const NAV_BTN_H = 37.1;

function navBtn(left: number, width: number) {
  return {
    position: "absolute" as const,
    top: NAV_BTN_TOP,
    left,
    width,
    height: NAV_BTN_H,
    zIndex: 100,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    borderRadius: 8,
  };
}

function productBtn(left: number, top: number, onClick: () => void, width = 327, height = 295) {
  return { left, top, width, height, onClick };
}

const PRODUCT_BUTTONS = [
  // Terpopuler (top≈200)
  productBtn(93, 200, () => {}, 327, 295),
  productBtn(484, 200, () => {}),
  productBtn(891, 200, () => {}),
  productBtn(1212, 200, () => {}),
  // Baju Adat (top=792)
  productBtn(126, 792, () => {}),
  productBtn(506, 792, () => {}),
  productBtn(887, 792, () => {}),
  productBtn(1267, 792, () => {}),
  // Baju MC row 1 (top=1373)
  productBtn(130, 1373, () => {}),
  productBtn(510, 1373, () => {}),
  productBtn(891, 1373, () => {}),
  productBtn(1271, 1373, () => {}),
  // Baju MC row 2 (top=1875)
  productBtn(130, 1875, () => {}),
  productBtn(510, 1875, () => {}),
  productBtn(891, 1875, () => {}),
  productBtn(1271, 1875, () => {}),
  // Cosplay (top=2455)
  productBtn(129, 2455, () => {}),
  productBtn(509, 2455, () => {}),
  productBtn(890, 2455, () => {}),
  productBtn(1270, 2455, () => {}),
];

export default function KatalogPage({ onHome, onArtikel, onDetailProduct, onHistory, onEditProfile }: Props) {
  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: 3285 }}>
        <KatalogImport />
        <ProfileMenu onHistory={onHistory ?? (() => {})} onEditProfile={onEditProfile ?? (() => {})} />

        {/* Nav */}
        <button aria-label="Home" onClick={onHome} style={navBtn(1044.5, 111.5)} />
        <button aria-label="Artikel" onClick={onArtikel} style={navBtn(1315, 111.1)} />
        <button aria-label="Logout" onClick={onHome} style={navBtn(1449.6, 112.4)} />

        {/* Product buttons — each passes its specific product data */}
        {PRODUCTS.map((product, idx) => {
          const btn = PRODUCT_BUTTONS[idx];
          return (
            <button
              key={product.id}
              aria-label={product.name}
              onClick={() => onDetailProduct(product)}
              style={{
                position: "absolute",
                top: btn.top,
                left: btn.left,
                width: btn.width,
                height: btn.height,
                zIndex: 100,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                borderRadius: 8,
              }}
            />
          );
        })}
      </div>
    </ResponsiveCanvas>
  );
}