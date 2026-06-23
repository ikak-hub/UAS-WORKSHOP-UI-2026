import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import KatalogImport from "../../../imports/DetailKatalog/index";
import { ProfileMenu } from "./ProfileMenu";

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onDetailProduct: () => void;
  onHistory?: () => void;
  onEditProfile?: () => void;
}

// Pnavbar: h=127px, buttons at top≈45.83, h≈37.1 within the 1728px canvas
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

function productBtn(left: number, top: number, width = 327, height = 295) {
  return {
    position: "absolute" as const,
    top,
    left,
    width,
    height,
    zIndex: 100,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    borderRadius: 8,
  };
}

export default function KatalogPage({ onHome, onArtikel, onDetailProduct, onHistory, onEditProfile }: Props) {
  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: 3285 }}>
        <KatalogImport />
        <ProfileMenu onHistory={onHistory ?? (() => {})} onEditProfile={onEditProfile ?? (() => {})} />

        {/* Nav buttons */}
        <button aria-label="Home" onClick={onHome} style={navBtn(1044.5, 111.5)} />
        <button aria-label="Artikel" onClick={onArtikel} style={navBtn(1315, 111.1)} />
        <button aria-label="Logout" onClick={onHome} style={navBtn(1449.6, 112.4)} />

        {/* Row 1: Terpopuler (top≈200) */}
        <button aria-label="Produk 1" onClick={onDetailProduct} style={productBtn(93, 200)} />
        <button aria-label="Produk 2" onClick={onDetailProduct} style={productBtn(484, 200)} />
        <button aria-label="Produk 3" onClick={onDetailProduct} style={productBtn(891, 200)} />
        <button aria-label="Produk 4" onClick={onDetailProduct} style={productBtn(1212, 200)} />

        {/* Row 2: Baju Adat (top=792) */}
        <button aria-label="Produk 5" onClick={onDetailProduct} style={productBtn(126, 792)} />
        <button aria-label="Produk 6" onClick={onDetailProduct} style={productBtn(506, 792)} />
        <button aria-label="Produk 7" onClick={onDetailProduct} style={productBtn(887, 792)} />
        <button aria-label="Produk 8" onClick={onDetailProduct} style={productBtn(1267, 792)} />

        {/* Row 3: Baju MC/Dress (top=1373) */}
        <button aria-label="Produk 9" onClick={onDetailProduct} style={productBtn(130, 1373)} />
        <button aria-label="Produk 10" onClick={onDetailProduct} style={productBtn(510, 1373)} />
        <button aria-label="Produk 11" onClick={onDetailProduct} style={productBtn(891, 1373)} />
        <button aria-label="Produk 12" onClick={onDetailProduct} style={productBtn(1271, 1373)} />

        {/* Row 4: Formal (top=1875) */}
        <button aria-label="Produk 13" onClick={onDetailProduct} style={productBtn(130, 1875)} />
        <button aria-label="Produk 14" onClick={onDetailProduct} style={productBtn(510, 1875)} />
        <button aria-label="Produk 15" onClick={onDetailProduct} style={productBtn(891, 1875)} />
        <button aria-label="Produk 16" onClick={onDetailProduct} style={productBtn(1271, 1875)} />

        {/* Row 5: Cosplay (top=2455) */}
        <button aria-label="Produk 17" onClick={onDetailProduct} style={productBtn(129, 2455)} />
        <button aria-label="Produk 18" onClick={onDetailProduct} style={productBtn(509, 2455)} />
        <button aria-label="Produk 19" onClick={onDetailProduct} style={productBtn(890, 2455)} />
        <button aria-label="Produk 20" onClick={onDetailProduct} style={productBtn(1270, 2455)} />
      </div>
    </ResponsiveCanvas>
  );
}
