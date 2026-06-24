import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import LandingPageImport from "../../../imports/LandingPage-1/index";
import { ProfileMenu } from "./ProfileMenu";

interface Props {
  onLogin: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
  onHistory?: () => void;
  onEditProfile?: () => void;
}

const NAV_LEFT = 75;
const NAV_TOP = 45;
const NAV_W = 1578.342;
const NAV_H = 66.686;
const NAV_BTN_TOP = NAV_TOP + 0.2224 * NAV_H;       // ~59.8
const NAV_BTN_H = (1 - 0.2224 * 2) * NAV_H;         // ~37

function navBtn(leftPct: number, rightPct: number) {
  return {
    position: "absolute" as const,
    top: NAV_BTN_TOP,
    left: NAV_LEFT + leftPct * NAV_W,
    width: (1 - leftPct - rightPct) * NAV_W,
    height: NAV_BTN_H,
    zIndex: 100,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    borderRadius: 10,
  };
}

export default function LandingPage({ onLogin, onArtikel, onKatalog, onHistory, onEditProfile }: Props) {
  // Total page height: footer (Group14) top=2686 + height=599 = 3285px
  const PAGE_H = 3285;

  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, minHeight: PAGE_H }}>
        <LandingPageImport />

        {/* Clickable profile circle */}
        <ProfileMenu
          onHistory={onHistory ?? (() => {})}
          onEditProfile={onEditProfile ?? (() => {})}
          iconLeft={1587}
          iconTop={45}
          iconSize={67}
        />

        {/* Login nav button */}
        <button aria-label="Login" onClick={onLogin} style={navBtn(0.8572, 0.0718)} />
        {/* Katalog nav button */}
        <button aria-label="Katalog" onClick={onKatalog} style={navBtn(0.6862, 0.2435)} />
        {/* Artikel nav button */}
        <button aria-label="Artikel" onClick={onArtikel} style={navBtn(0.7717, 0.158)} />
        
        {/* SEKARANG SUDAH DIPINDAH TURUN KE BAWAH */}
        <button
          aria-label="See More"
          onClick={onArtikel}
          style={{
            position: "absolute",
            left: 780,                    // Diganti ke tengah halaman secara horizontal
            top: 2590,                    // Disesuaikan agar berada di bawah baris kategori/artikel
            width: 160,
            height: 40,
            background: "transparent",    // Tetap transparan agar klik pas di gambar teks bawaan
            border: "none",
            cursor: "pointer",
            zIndex: 100,
          }}
        />
      </div>
    </ResponsiveCanvas>
  );
}