import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { useState } from "react";
import { ProfileMenu } from "./ProfileMenu";
import imgProduct from "../../../imports/Keranjang/6d9889c899664e18dfd62c6971e8ba2b7c32919c.png";
import imgAvatar from "../../../imports/Keranjang/e6017670fd7b5bc5e16c37d790d7c203728cc55a.png";

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
  onBack: () => void;
  onHistory: () => void;
  onEditProfile: () => void;
}

const QUICK_TAGS = ["Kualitas bagus", "Ukuran sesuai", "Pengiriman cepat", "Seller ramah", "Sesuai foto", "Bersih & rapi"];
const RATING_LABELS = ["", "Sangat Buruk", "Buruk", "Cukup", "Bagus", "Sangat Bagus ✨"];

function CustomNavbar({ onHome, onKatalog, onArtikel }: { onHome: () => void; onKatalog: () => void; onArtikel: () => void }) {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: 1728, height: 127, background: "#0094f6", boxShadow: "inset 0px 4px 4px rgba(0,0,0,0.25)" }}>
      {[
        { label: "Home",    left: 1063, width: 112, onClick: onHome },
        { label: "Katalog", left: 1199, width: 111, onClick: onKatalog },
        { label: "Artikel", left: 1334, width: 111, onClick: onArtikel },
        { label: "Logout",  left: 1449, width: 112, onClick: onHome },
      ].map(({ label, left, width, onClick }) => (
        <button key={label} onClick={onClick} style={{
          position: "absolute", left, top: 45.83, width, height: 37.1,
          background: "#fffafa", border: "none", borderRadius: 10, cursor: "pointer",
          fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 16, color: "#000",
          boxShadow: "inset 0px 4px 4px rgba(0,0,0,0.25)",
        }}>{label}</button>
      ))}
    </div>
  );
}

export default function ReviewPage({ onHome, onArtikel, onKatalog, onBack, onHistory, onEditProfile }: Props) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleTag(tag: string) {
    setTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  }

  function handleSubmit() {
    if (rating === 0) { alert("Pilih rating bintang terlebih dahulu."); return; }
    setSubmitted(true);
  }

  const displayRating = hoverRating || rating;

  const inputStyle: React.CSSProperties = {
    width: "100%", border: "1.5px solid #e0e0e0", borderRadius: 12,
    padding: "0 18px", fontFamily: "'Roboto',sans-serif", fontSize: 18,
    color: "#1a1a2e", outline: "none", boxSizing: "border-box", background: "#fafafa",
  };

  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: 1350 }}>

        <CustomNavbar onHome={onHome} onKatalog={onKatalog} onArtikel={onArtikel} />
        <ProfileMenu onHistory={onHistory} onEditProfile={onEditProfile} />

        {/* Back bar */}
        <div style={{
          position: "absolute", top: 150, left: 22, width: 1685, height: 87,
          background: "white", border: "1px solid #ddd", borderRadius: 20,
          boxShadow: "0px 4px 4px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: 20, padding: "0 30px",
        }}>
          <button onClick={onBack} style={{ background: "#f0f0f0", border: "none", borderRadius: 12, width: 55, height: 45, cursor: "pointer", fontSize: 22 }}>←</button>
          <span style={{ fontFamily: "'Open Sans',sans-serif", fontWeight: 700, fontSize: 32, color: "#000" }}>Tulis Ulasan</span>
        </div>

        {/* Order info card */}
        <div style={{
          position: "absolute", top: 270, left: 22, width: 1685,
          background: "#bdbbbc", borderRadius: 16, padding: "28px 32px",
          display: "flex", gap: 28, alignItems: "center",
        }}>
          <div style={{ width: 148, height: 178, borderRadius: 10, overflow: "hidden", flexShrink: 0 }}>
            <img src={imgProduct} alt="Product" style={{ width: "100%", height: "200%", objectFit: "cover", objectPosition: "top" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <img src={imgAvatar} alt="" style={{ width: 32, height: 32, objectFit: "cover", borderRadius: "50%" }} />
              <span style={{ fontFamily: "'Open Sans',sans-serif", fontStyle: "italic", fontSize: 20, color: "#333" }}>Sicepot</span>
            </div>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 26, fontWeight: 700, color: "#000", margin: "0 0 6px 0" }}>Kebaya Janggan (Merah)</p>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 20, color: "#444", margin: "0 0 4px 0" }}>Kebaya wisuda elegan dengan nuansa bali</p>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 20, color: "#444", margin: "0 0 4px 0" }}>Size: L · Masa Sewa: 3 Hari</p>
          </div>
          <div style={{ background: "#22c55e", borderRadius: 12, padding: "10px 24px", flexShrink: 0 }}>
            <span style={{ fontFamily: "'Open Sans',sans-serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>LUNAS</span>
          </div>
        </div>

        {/* Rating & review card */}
        <div style={{
          position: "absolute", top: 500, left: 22, width: 1685,
          background: "#fff", borderRadius: 20, padding: "40px 56px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}>
          {/* Stars */}
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 26, color: "#1a1a2e", margin: "0 0 20px 0" }}>Beri Rating</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            {[1, 2, 3, 4, 5].map(s => (
              <button
                key={s}
                onClick={() => setRating(s)}
                onMouseEnter={() => setHoverRating(s)}
                onMouseLeave={() => setHoverRating(0)}
                style={{
                  background: "transparent", border: "none", cursor: "pointer",
                  fontSize: 60, color: displayRating >= s ? "#f59e0b" : "#e0e0e0",
                  lineHeight: 1, padding: 0, transition: "color 0.1s, transform 0.1s",
                  transform: displayRating >= s ? "scale(1.1)" : "scale(1)",
                }}
              >★</button>
            ))}
            {displayRating > 0 && (
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 22, color: "#f59e0b", marginLeft: 12 }}>
                {RATING_LABELS[displayRating]}
              </span>
            )}
          </div>

          {/* Quick tags */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36, marginTop: 20 }}>
            {QUICK_TAGS.map(tag => (
              <button key={tag} onClick={() => toggleTag(tag)} style={{
                padding: "10px 22px", borderRadius: 24,
                border: tags.includes(tag) ? "2px solid #0094f6" : "1.5px solid #ddd",
                background: tags.includes(tag) ? "#e0f4ff" : "#f9f9f9",
                color: tags.includes(tag) ? "#0094f6" : "#555",
                fontFamily: "'Roboto',sans-serif", fontWeight: tags.includes(tag) ? 700 : 400,
                fontSize: 17, cursor: "pointer",
              }}>{tags.includes(tag) ? "✓ " : ""}{tag}</button>
            ))}
          </div>

          {/* Text review */}
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 24, color: "#1a1a2e", margin: "0 0 14px 0" }}>Tulis Ulasan</h2>
          <textarea
            value={review}
            onChange={e => e.target.value.length <= 500 && setReview(e.target.value)}
            placeholder="Bagaimana pengalaman Anda? Ceritakan kepada calon penyewa lain..."
            style={{
              ...inputStyle, height: 200, padding: "16px 18px", resize: "none",
              lineHeight: "1.6", verticalAlign: "top",
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 6, marginBottom: 28 }}>
            <span style={{ fontFamily: "'Roboto',sans-serif", fontSize: 13, color: review.length > 450 ? "#f59e0b" : "#aaa" }}>
              {review.length}/500
            </span>
          </div>

          <button onClick={handleSubmit} style={{
            padding: "18px 72px", background: "#0094f6", border: "none", borderRadius: 14,
            color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 22,
            cursor: "pointer", boxShadow: "0 4px 16px rgba(0,148,246,0.3)",
          }}>Kirim Ulasan</button>
        </div>
      </div>

      {/* Success modal */}
      {submitted && (
        <>
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 3000 }} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#fff", borderRadius: 24, padding: 52, zIndex: 3001, width: 520, textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.22)" }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>⭐</div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 26, color: "#1a1a2e", margin: "0 0 12px 0" }}>Terima Kasih!</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 16 }}>
              {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize: 40, color: s <= rating ? "#f59e0b" : "#e0e0e0" }}>★</span>)}
            </div>
            <p style={{ fontFamily: "'Roboto',sans-serif", fontSize: 16, color: "#555", margin: "0 0 32px 0" }}>
              Ulasan Anda telah berhasil dikirim dan membantu penyewa lain.
            </p>
            <button onClick={() => { setSubmitted(false); onBack(); }} style={{
              padding: "14px 52px", borderRadius: 14, border: "none", background: "#0094f6",
              color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 18, cursor: "pointer",
            }}>Kembali ke Riwayat</button>
          </div>
        </>
      )}
    </ResponsiveCanvas>
  );
}
