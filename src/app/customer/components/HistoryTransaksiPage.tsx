import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import HistoryTransaksiImport from "../../../imports/HistoryTransaksi/index";
import { ProfileMenu } from "./ProfileMenu";

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
  onBack: () => void;
  onPengembalian?: () => void;
  onReview?: () => void;
  onHistory?: () => void;
  onEditProfile?: () => void;
}

const NAV_BTN_TOP = 45.8;
const NAV_BTN_H = 37.1;

function navBtn(left: number, width: number) {
  return {
    position: "absolute" as const,
    top: NAV_BTN_TOP, left, width,
    height: NAV_BTN_H, zIndex: 100,
    background: "transparent", border: "none", cursor: "pointer", borderRadius: 8,
  };
}

export default function HistoryTransaksiPage({ onHome, onArtikel, onKatalog, onBack, onPengembalian, onReview, onHistory, onEditProfile }: Props) {
  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: 660 }}>
        <HistoryTransaksiImport />

        {/* Nav buttons */}
        <button aria-label="Home" onClick={onHome} style={navBtn(1061, 112)} />
        <button aria-label="Katalog" onClick={onKatalog} style={navBtn(1197, 111)} />
        <button aria-label="Artikel" onClick={onArtikel} style={navBtn(1332, 111)} />
        <button aria-label="Logout" onClick={onHome} style={navBtn(1467, 111)} />

        {/* Profile dropdown */}
        <ProfileMenu
          onHistory={onHistory ?? onBack}
          onEditProfile={onEditProfile ?? (() => {})}
        />

        {/* Back arrow */}
        <button aria-label="Kembali" onClick={onBack}
          style={{ position: "absolute", left: 21, top: 160, width: 110, height: 87, zIndex: 100, background: "transparent", border: "none", cursor: "pointer", borderRadius: 8 }} />

        {/* Order card click area → review page (covers the gray card at top=280, h=353) */}
        {/* Lower z-index so Retur button and Disetujui badge sit above it */}
        <button
          aria-label="Tulis Ulasan"
          onClick={onReview}
          style={{
            position: "absolute", left: 0, top: 280, width: 1728, height: 353,
            zIndex: 50, background: "transparent", border: "none", cursor: "pointer",
          }}
        />

        {/* "Tulis Ulasan" label hint on hover (shown as a small badge) */}
        <div style={{
          position: "absolute", left: 75, top: 588, zIndex: 60,
          background: "#0094f6", borderRadius: 10, padding: "6px 18px", pointerEvents: "none",
        }}>
          <span style={{ fontFamily: "'Open Sans',sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>
            ⭐ Klik untuk memberi ulasan
          </span>
        </div>

        {/* Ajukan Retur button (z-index above card overlay) */}
        <button
          onClick={onPengembalian}
          style={{
            position: "absolute", left: 1180, top: 543, width: 220, height: 63,
            zIndex: 100, background: "#ff6b35", border: "none", borderRadius: 16,
            cursor: "pointer", fontFamily: "'Open Sans',sans-serif", fontWeight: 700,
            fontSize: 20, color: "#fff", boxShadow: "0 4px 14px rgba(255,107,53,0.35)",
          }}
        >Ajukan Retur</button>
      </div>
    </ResponsiveCanvas>
  );
}
