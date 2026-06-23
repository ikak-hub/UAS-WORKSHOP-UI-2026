import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { useState } from "react";
import PembayaranImport from "../../../imports/Pembayaran/index";
import imgQrCode from "../../../imports/Pembayaran/01bcd1d62471c82a3edca2af53f6e58a292ecb6e.png";
import { ProfileMenu } from "./ProfileMenu";

type PaymentMethod = "qris" | "debit" | "credit" | "cod" | null;

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
  onComplete: () => void;
  rentalDays?: number;
  onHistory?: () => void;
  onEditProfile?: () => void;
}

const RENTAL_PRICE = 300000;
const DEPOSIT_PRICE = 150000;

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

function fmt(n: number) {
  return n.toLocaleString("id-ID");
}

function RadioDot({ selected }: { selected: boolean }) {
  return selected ? (
    <div
      style={{
        width: 17,
        height: 17,
        borderRadius: "50%",
        background: "#0094f6",
      }}
    />
  ) : null;
}

// Card form for debit/credit
function CardForm({ label, onPay, onClose }: { label: string; onPay: () => void; onClose: () => void }) {
  const [cardNum, setCardNum] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  function formatCardNum(val: string) {
    return val.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  }

  function formatExpiry(val: string) {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  }

  const isValid = cardNum.replace(/\s/g, "").length === 16 && name.trim().length > 2 && expiry.length === 5 && cvv.length >= 3;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: 52,
    border: "1.5px solid #ddd",
    borderRadius: 10,
    padding: "0 16px",
    fontFamily: "'Roboto', sans-serif",
    fontSize: 17,
    outline: "none",
    boxSizing: "border-box",
    background: "#fafafa",
    color: "#1a1a2e",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
    display: "block",
  };

  return (
    <>
      <div
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 2000 }}
        onClick={onClose}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "#fff",
          borderRadius: 20,
          padding: 40,
          zIndex: 2001,
          width: 520,
          boxShadow: "0 8px 40px rgba(0,0,0,0.22)",
        }}
      >
        <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 22, color: "#1a1a2e", marginTop: 0, marginBottom: 28 }}>
          {label}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label style={labelStyle}>Nomor Kartu</label>
            <input
              style={inputStyle}
              placeholder="0000 0000 0000 0000"
              value={cardNum}
              onChange={(e) => setCardNum(formatCardNum(e.target.value))}
            />
          </div>
          <div>
            <label style={labelStyle}>Nama Pemegang Kartu</label>
            <input
              style={inputStyle}
              placeholder="Nama sesuai kartu"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Masa Berlaku</label>
              <input
                style={inputStyle}
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>CVV</label>
              <input
                style={{ ...inputStyle, letterSpacing: 4 }}
                placeholder="•••"
                type="password"
                maxLength={4}
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
              />
            </div>
          </div>
          <div style={{ background: "#f0f8ff", borderRadius: 10, padding: "12px 16px", fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#555" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Harga Sewa</span><span style={{ fontWeight: 600 }}>Rp {fmt(RENTAL_PRICE)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              <span>Deposit</span><span style={{ fontWeight: 600 }}>Rp {fmt(DEPOSIT_PRICE)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, borderTop: "1px solid #dde", paddingTop: 8, fontWeight: 700, color: "#0094f6", fontSize: 16 }}>
              <span>Total</span><span>Rp {fmt(RENTAL_PRICE + DEPOSIT_PRICE)}</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
          <button
            onClick={onClose}
            style={{ flex: 1, padding: "14px 0", borderRadius: 12, border: "1.5px solid #ddd", background: "#fff", fontFamily: "'Roboto', sans-serif", fontSize: 16, cursor: "pointer", color: "#555" }}
          >
            Batal
          </button>
          <button
            disabled={!isValid}
            onClick={onPay}
            style={{
              flex: 2, padding: "14px 0", borderRadius: 12, border: "none",
              background: isValid ? "#0094f6" : "#ccc",
              color: "#fff", fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 16,
              cursor: isValid ? "pointer" : "default",
            }}
          >
            Bayar Sekarang
          </button>
        </div>
      </div>
    </>
  );
}

export default function PembayaranPage({ onHome, onArtikel, onKatalog, onComplete, rentalDays = 1, onHistory, onEditProfile }: Props) {
  const [selected, setSelected] = useState<PaymentMethod>(null);
  const [showModal, setShowModal] = useState(false);
  const [qrisPaid, setQrisPaid] = useState(false);

  const radioPos: Record<NonNullable<PaymentMethod>, { left: number; top: number }> = {
    qris:   { left: 161, top: 249 },
    debit:  { left: 160, top: 385 },
    credit: { left: 161, top: 510 },
    cod:    { left: 160, top: 634 },
  };

  function handleContinue() {
    if (!selected) {
      alert("Pilih metode pembayaran terlebih dahulu.");
      return;
    }
    setShowModal(true);
  }

  function handlePaymentDone() {
    setShowModal(false);
    onComplete();
  }

  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: 1117 }}>
        <PembayaranImport />
        <ProfileMenu onHistory={onHistory ?? (() => {})} onEditProfile={onEditProfile ?? (() => {})} />

        {/* Nav buttons */}
        <button aria-label="Home" onClick={onHome} style={navBtn(1063, 112)} />
        <button aria-label="Katalog" onClick={onKatalog} style={navBtn(1199, 111)} />
        <button aria-label="Artikel" onClick={onArtikel} style={navBtn(1334, 111)} />
        <button aria-label="Logout" onClick={onHome} style={navBtn(1469, 112)} />

        {/* Payment method click areas */}
        <button aria-label="Pilih QRIS" onClick={() => setSelected("qris")}
          style={{ position: "absolute", left: 75, top: 207, width: 1578, height: 120, zIndex: 100, background: "transparent", border: "none", cursor: "pointer" }} />
        <button aria-label="Pilih Debit" onClick={() => setSelected("debit")}
          style={{ position: "absolute", left: 75, top: 337, width: 1578, height: 120, zIndex: 100, background: "transparent", border: "none", cursor: "pointer" }} />
        <button aria-label="Pilih Credit" onClick={() => setSelected("credit")}
          style={{ position: "absolute", left: 75, top: 467, width: 1578, height: 120, zIndex: 100, background: "transparent", border: "none", cursor: "pointer" }} />
        <button aria-label="Pilih COD" onClick={() => setSelected("cod")}
          style={{ position: "absolute", left: 75, top: 597, width: 1578, height: 110, zIndex: 100, background: "transparent", border: "none", cursor: "pointer" }} />

        {/* Selected radio fill indicators */}
        {(["qris", "debit", "credit", "cod"] as NonNullable<PaymentMethod>[]).map((m) =>
          selected === m ? (
            <div
              key={m}
              style={{
                position: "absolute",
                left: radioPos[m].left + 8,
                top: radioPos[m].top + 8,
                width: 17,
                height: 17,
                borderRadius: "50%",
                background: "#0094f6",
                zIndex: 101,
                pointerEvents: "none",
              }}
            />
          ) : null
        )}

        {/* Deposit info section */}
        <div
          style={{
            position: "absolute",
            left: 75,
            top: 725,
            width: 1578,
            background: "#fffbea",
            border: "1.5px solid #f5c842",
            borderRadius: 16,
            padding: "22px 36px",
            zIndex: 100,
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 20, color: "#1a1a2e", margin: "0 0 8px 0" }}>
              Deposit Keamanan
            </p>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 15, color: "#555", margin: "0 0 4px 0" }}>
              Deposit dikembalikan <strong>100%</strong> setelah produk kembali dalam kondisi baik.
            </p>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 15, color: "#c0392b", margin: 0 }}>
              Pemilik berhak memotong deposit sebagai kompensasi apabila terdapat kerusakan pada produk.
            </p>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 28, color: "#0094f6", margin: "0 0 4px 0" }}>
              Rp {fmt(DEPOSIT_PRICE)}
            </p>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "#888", margin: 0 }}>
              Deposit (dapat dikembalikan)
            </p>
          </div>
        </div>

        {/* Continue button overlay */}
        <button
          aria-label="Continue"
          onClick={handleContinue}
          style={{
            position: "absolute",
            left: 1417,
            top: 1008,
            width: 246,
            height: 49,
            zIndex: 100,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            borderRadius: 15,
          }}
        />
      </div>

      {/* ── QRIS Modal ── */}
      {showModal && selected === "qris" && (
        <>
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 2000 }} onClick={() => setShowModal(false)} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#fff", borderRadius: 20, padding: 40, zIndex: 2001, width: 480, textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.22)" }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 22, color: "#1a1a2e", marginTop: 0, marginBottom: 8 }}>Bayar via QRIS</h2>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 15, color: "#555", marginBottom: 20 }}>
              Scan QR di bawah dengan aplikasi pembayaran Anda
            </p>
            <div style={{ display: "inline-block", padding: 16, border: "2px solid #0094f6", borderRadius: 16, marginBottom: 20 }}>
              <img src={imgQrCode} alt="QR Code" style={{ width: 200, height: 200, objectFit: "contain", display: "block" }} />
            </div>
            <div style={{ background: "#f0f8ff", borderRadius: 10, padding: "12px 20px", marginBottom: 24, fontFamily: "'Roboto', sans-serif", fontSize: 15, color: "#333" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>Harga Sewa</span><span style={{ fontWeight: 600 }}>Rp {fmt(RENTAL_PRICE)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}><span>Deposit</span><span style={{ fontWeight: 600 }}>Rp {fmt(DEPOSIT_PRICE)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, borderTop: "1px solid #dde", paddingTop: 8, fontWeight: 700, color: "#0094f6", fontSize: 17 }}><span>Total</span><span>Rp {fmt(RENTAL_PRICE + DEPOSIT_PRICE)}</span></div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: "14px 0", borderRadius: 12, border: "1.5px solid #ddd", background: "#fff", fontFamily: "'Roboto', sans-serif", fontSize: 16, cursor: "pointer", color: "#555" }}>Batal</button>
              <button onClick={handlePaymentDone} style={{ flex: 2, padding: "14px 0", borderRadius: 12, border: "none", background: "#0094f6", color: "#fff", fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Sudah Bayar</button>
            </div>
          </div>
        </>
      )}

      {/* ── Debit Modal ── */}
      {showModal && selected === "debit" && (
        <CardForm label="Pembayaran Debit Card" onPay={handlePaymentDone} onClose={() => setShowModal(false)} />
      )}

      {/* ── Credit Modal ── */}
      {showModal && selected === "credit" && (
        <CardForm label="Pembayaran Credit Card" onPay={handlePaymentDone} onClose={() => setShowModal(false)} />
      )}

      {/* ── COD Modal ── */}
      {showModal && selected === "cod" && (
        <>
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 2000 }} onClick={() => setShowModal(false)} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#fff", borderRadius: 20, padding: 40, zIndex: 2001, width: 500, boxShadow: "0 8px 40px rgba(0,0,0,0.22)" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 52, marginBottom: 12 }}>📦</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 22, color: "#1a1a2e", margin: "0 0 8px 0" }}>Konfirmasi COD</h2>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 15, color: "#555", margin: 0 }}>
                Pesanan akan diantar ke lokasi Anda. Bayar tunai saat barang tiba.
              </p>
            </div>
            <div style={{ background: "#f5f5f5", borderRadius: 12, padding: "16px 20px", marginBottom: 24, fontFamily: "'Roboto', sans-serif", fontSize: 15, color: "#333" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>Harga Sewa</span><span style={{ fontWeight: 600 }}>Rp {fmt(RENTAL_PRICE)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}><span>Deposit</span><span style={{ fontWeight: 600 }}>Rp {fmt(DEPOSIT_PRICE)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, borderTop: "1px solid #ddd", paddingTop: 10, fontWeight: 700, fontSize: 17, color: "#0094f6" }}><span>Total Bayar</span><span>Rp {fmt(RENTAL_PRICE + DEPOSIT_PRICE)}</span></div>
            </div>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "#888", textAlign: "center", margin: "0 0 24px 0" }}>
              Deposit Rp {fmt(DEPOSIT_PRICE)} dikembalikan 100% setelah produk kembali dalam kondisi baik.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: "14px 0", borderRadius: 12, border: "1.5px solid #ddd", background: "#fff", fontFamily: "'Roboto', sans-serif", fontSize: 16, cursor: "pointer", color: "#555" }}>Batal</button>
              <button onClick={handlePaymentDone} style={{ flex: 2, padding: "14px 0", borderRadius: 12, border: "none", background: "#22c55e", color: "#fff", fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Konfirmasi Pesanan</button>
            </div>
          </div>
        </>
      )}
    </ResponsiveCanvas>
  );
}
