import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { useState } from "react";
import PengembalianImport from "../../../imports/PengembalianBaju/index";
import { ProfileMenu } from "./ProfileMenu";

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
  onBack: () => void;
  onSubmitted: () => void;
  onHistory?: () => void;
  onEditProfile?: () => void;
}

const NAV_BTN_TOP = 45.83;
const NAV_BTN_H = 37.1;

function navBtn(left: number, width: number) {
  return {
    position: "absolute" as const,
    top: NAV_BTN_TOP, left, width,
    height: NAV_BTN_H, zIndex: 200,
    background: "transparent", border: "none", cursor: "pointer", borderRadius: 8,
  };
}

const COURIERS = ["JNE", "J&T Express", "SiCepat", "AnterAja", "Pos Indonesia", "Ninja Xpress", "GoSend", "Lainnya"];

const SAMPLE_ORDERS = [
  { id: "TRX-20240001", display: "Kebaya Janggan (Merah) — TRX-20240001" },
  { id: "TRX-20240002", display: "Kimono Yukata — TRX-20240002" },
  { id: "TRX-20240003", display: "Baju Adat Bali Putri — TRX-20240003" },
];

const RETURN_REASONS = ["Ukuran tidak sesuai", "Baju rusak", "Noda permanen", "Lainnya"];

const selectStyle: React.CSSProperties = {
  position: "absolute",
  left: 36,
  width: 1639,
  height: 81,
  border: "none",
  background: "white",
  boxShadow: "0px 5px 7px 2px rgba(0,0,0,0.25)",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 700,
  fontSize: 26,
  paddingLeft: 28,
  paddingRight: 28,
  cursor: "pointer",
  zIndex: 100,
  outline: "none",
  color: "#1a1a2e",
  appearance: "none" as const,
  WebkitAppearance: "none" as const,
  borderRadius: 0,
};

export default function PengembalianBajuPage({ onHome, onArtikel, onKatalog, onBack, onSubmitted, onHistory, onEditProfile }: Props) {
  const [courier, setCourier] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [returnReason, setReturnReason] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviewUrls, setPhotoPreviewUrls] = useState<string[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedOrderObj = SAMPLE_ORDERS.find(o => o.id === selectedOrder);

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    const limited = files.slice(0, 4);
    setPhotos(limited);
    const urls = limited.map(f => URL.createObjectURL(f));
    setPhotoPreviewUrls(urls);
  }

  function handleVideoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setVideo(file);
  }

  function handleSubmit() {
    if (!courier) { alert("Pilih jasa pengiriman terlebih dahulu."); return; }
    if (!selectedOrder) { alert("Pilih pesanan yang ingin diretur."); return; }
    if (!returnReason) { alert("Pilih alasan retur."); return; }
    if (photos.length === 0) { alert("Upload foto kondisi baju."); return; }
    if (!video) { alert("Upload video kondisi baju."); return; }
    setSubmitted(true);
  }

  const fieldLabel: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
    display: "block",
  };

  const uploadZone: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "2px dashed #0094f6",
    borderRadius: 4,
    background: "rgba(0,148,246,0.03)",
    boxSizing: "border-box",
    padding: 12,
  };

  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: 1110 }}>
        <PengembalianImport />
        <ProfileMenu onHistory={onHistory ?? (() => {})} onEditProfile={onEditProfile ?? (() => {})} />

        {/* Nav buttons */}
        <button aria-label="Home" onClick={onHome} style={navBtn(1063, 112)} />
        <button aria-label="Katalog" onClick={onKatalog} style={navBtn(1199, 111)} />
        <button aria-label="Artikel" onClick={onArtikel} style={navBtn(1334, 111)} />
        <button aria-label="Logout" onClick={onHome} style={navBtn(1469, 112)} />

        {/* ── Field 1: Jasa Pengiriman (top=201, h=81, left=36, w=1639) ── */}
        <div style={{ position: "absolute", top: 201, left: 0, width: 1728, zIndex: 100 }}>
          <select
            value={courier}
            onChange={e => setCourier(e.target.value)}
            style={{ ...selectStyle, color: courier ? "#1a1a2e" : "#999" }}
          >
            <option value="" disabled>Pilih jasa pengiriman...</option>
            {COURIERS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {/* Dropdown chevron */}
          <div style={{ position: "absolute", right: 36 + 28, top: 0, height: 81, display: "flex", alignItems: "center", pointerEvents: "none", zIndex: 101 }}>
            <span style={{ fontSize: 22, color: "#666" }}>▾</span>
          </div>
        </div>

        {/* ── Field 2: Pilih baju / No Resi (top=431, h=81, left=36, w=1639) ── */}
        <div style={{ position: "absolute", top: 431, left: 0, width: 1728, zIndex: 100 }}>
          <select
            value={selectedOrder}
            onChange={e => setSelectedOrder(e.target.value)}
            style={{ ...selectStyle, color: selectedOrder ? "#1a1a2e" : "#999" }}
          >
            <option value="" disabled>Pilih baju yang ingin diretur...</option>
            {SAMPLE_ORDERS.map(o => <option key={o.id} value={o.id}>{o.display}</option>)}
          </select>
          <div style={{ position: "absolute", right: 36 + 28, top: 0, height: 81, display: "flex", alignItems: "center", pointerEvents: "none", zIndex: 101 }}>
            <span style={{ fontSize: 22, color: "#666" }}>▾</span>
          </div>
          {/* Auto-filled receipt number */}
          {selectedOrderObj && (
            <div style={{ position: "absolute", left: 36, top: 86, fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 18, color: "#0094f6" }}>
              No. Resi: {selectedOrderObj.id}
            </div>
          )}
        </div>

        {/* ── Alasan Retur — placed in the empty gap (top 282–431) so it never ── */}
        {/* ── overlaps the "Foto/Video kondisi baju" labels at y≈547–583 ── */}
        <div style={{ position: "absolute", top: 300, left: 36, width: 1639, zIndex: 100 }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 20, color: "#1a1a2e", display: "block", marginBottom: 12 }}>
            Alasan Retur
          </span>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {RETURN_REASONS.map(r => (
              <button key={r} onClick={() => setReturnReason(r)} style={{
                padding: "10px 24px", borderRadius: 10,
                border: returnReason === r ? "2px solid #0094f6" : "1.5px solid #ccc",
                background: returnReason === r ? "#e0f4ff" : "#fff",
                color: returnReason === r ? "#0094f6" : "#555",
                fontFamily: "'Inter',sans-serif", fontWeight: returnReason === r ? 700 : 400, fontSize: 18,
                cursor: "pointer",
              }}>{r}</button>
            ))}
          </div>
        </div>

        {/* ── Photo upload (Debit2: left=36, top=596, w=657, h=352) ── */}
        <div style={{ position: "absolute", left: 36, top: 596, width: 657, height: 352, zIndex: 100 }}>
          <label style={uploadZone}>
            <input type="file" accept="image/*" multiple hidden onChange={handlePhotoChange} />
            {photoPreviewUrls.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%", height: "100%", padding: 8, boxSizing: "border-box" }}>
                {photoPreviewUrls.map((url, i) => (
                  <img key={i} src={url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }} />
                ))}
              </div>
            ) : (
              <>
                <div style={{ fontSize: 48, marginBottom: 12 }}>📷</div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 18, color: "#0094f6", margin: 0 }}>Klik untuk upload foto</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "#888", margin: "8px 0 0 0" }}>Maks. 4 foto (JPG/PNG)</p>
              </>
            )}
          </label>
        </div>

        {/* ── Video upload (Debit4: left=1018, top=578, w=657, h=352) ── */}
        <div style={{ position: "absolute", left: 1018, top: 578, width: 657, height: 352, zIndex: 100 }}>
          <label style={uploadZone}>
            <input type="file" accept="video/*" hidden onChange={handleVideoChange} />
            {video ? (
              <div style={{ textAlign: "center", padding: 20 }}>
                <div style={{ fontSize: 52, marginBottom: 12 }}>🎬</div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 16, color: "#0094f6", margin: 0, wordBreak: "break-all" }}>{video.name}</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#888", margin: "8px 0 0 0" }}>
                  {(video.size / 1024 / 1024).toFixed(1)} MB
                </p>
              </div>
            ) : (
              <>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🎥</div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 18, color: "#0094f6", margin: 0 }}>Klik untuk upload video</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "#888", margin: "8px 0 0 0" }}>Format MP4/MOV/AVI</p>
              </>
            )}
          </label>
        </div>

        {/* ── Submit button (covers import's "simpan perubahan" at left=1249, top=996, w=416, h=89) ── */}
        <button
          onClick={handleSubmit}
          style={{
            position: "absolute", left: 1249, top: 996, width: 416, height: 89, zIndex: 200,
            background: "#0094f6", border: "none", cursor: "pointer", borderRadius: 10,
            boxShadow: "0px 5px 7px 2px rgba(0,0,0,0.25)",
            fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 30, color: "#fff",
          }}
        >Ajukan Pengembalian</button>

        {/* ── Back button — bottom left, returns to transaction history ── */}
        <button aria-label="Kembali ke Riwayat Transaksi" onClick={onBack}
          style={{
            position: "absolute", left: 36, top: 996, width: 300, height: 89, zIndex: 200,
            background: "#fff", border: "2px solid #0094f6", cursor: "pointer", borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 24, color: "#0094f6",
          }}
        >← Kembali</button>

        {/* Back overlay on the import's top-left arrow (kept for parity) */}
        <button aria-label="Kembali" onClick={onBack}
          style={{ position: "absolute", left: 20, top: 140, width: 220, height: 60, zIndex: 200, background: "transparent", border: "none", cursor: "pointer", borderRadius: 8 }} />
      </div>

      {/* ── Success modal ── */}
      {submitted && (
        <>
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 3000 }} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#fff", borderRadius: 20, padding: 48, zIndex: 3001, width: 520, textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.22)" }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 24, color: "#1a1a2e", margin: "0 0 12px 0" }}>
              Pengajuan Retur Berhasil
            </h2>
            <p style={{ fontFamily: "'Roboto',sans-serif", fontSize: 16, color: "#555", margin: "0 0 8px 0" }}>
              Pesanan: <strong>{selectedOrderObj?.display}</strong>
            </p>
            <p style={{ fontFamily: "'Roboto',sans-serif", fontSize: 15, color: "#555", margin: "0 0 32px 0" }}>
              Alasan: {returnReason} · Via {courier}
            </p>
            <p style={{ fontFamily: "'Roboto',sans-serif", fontSize: 14, color: "#888", margin: "0 0 32px 0" }}>
              Tim kami akan memproses pengajuan retur Anda dalam 1×24 jam.
            </p>
            <button
              onClick={() => { setSubmitted(false); onSubmitted(); }}
              style={{ padding: "16px 48px", borderRadius: 14, border: "none", background: "#0094f6", color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 18, cursor: "pointer" }}
            >
              Kembali ke Riwayat
            </button>
          </div>
        </>
      )}
    </ResponsiveCanvas>
  );
}
