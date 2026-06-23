import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { useState } from "react";
import { ProfileMenu } from "./ProfileMenu";

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
  onBack: () => void;
  onHistory: () => void;
}

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

export default function EditProfilePage({ onHome, onArtikel, onKatalog, onBack, onHistory }: Props) {
  const [nama, setNama] = useState("Budi Santoso");
  const [email, setEmail] = useState("budi@email.com");
  const [phone, setPhone] = useState("081234567890");
  const [alamat, setAlamat] = useState("Jl. Melati No. 12, Jakarta Selatan");
  const [saved, setSaved] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%", height: 58, border: "1.5px solid #e0e0e0", borderRadius: 12,
    padding: "0 18px", fontFamily: "'Roboto',sans-serif", fontSize: 18, color: "#1a1a2e",
    outline: "none", boxSizing: "border-box", background: "#fafafa",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Roboto',sans-serif", fontWeight: 600, fontSize: 16,
    color: "#555", display: "block", marginBottom: 8,
  };

  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: 980 }}>

        <CustomNavbar onHome={onHome} onKatalog={onKatalog} onArtikel={onArtikel} />
        <ProfileMenu onHistory={onHistory} onEditProfile={() => {}} />

        {/* Back bar */}
        <div style={{
          position: "absolute", top: 150, left: 22, width: 1685, height: 87,
          background: "white", border: "1px solid #ddd", borderRadius: 20,
          boxShadow: "0px 4px 4px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: 20, padding: "0 30px",
        }}>
          <button onClick={onBack} style={{ background: "#f0f0f0", border: "none", borderRadius: 12, width: 55, height: 45, cursor: "pointer", fontSize: 22 }}>←</button>
          <span style={{ fontFamily: "'Open Sans',sans-serif", fontWeight: 700, fontSize: 32, color: "#000" }}>Edit Profil</span>
        </div>

        {/* Form card */}
        <div style={{
          position: "absolute", top: 270, left: 364, width: 1000,
          background: "#fff", borderRadius: 24, padding: "44px 60px",
          boxShadow: "0 4px 28px rgba(0,0,0,0.08)",
        }}>
          {/* Avatar */}
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{
              width: 110, height: 110, borderRadius: "50%", background: "#0094f6",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontSize: 54, color: "#fff", marginBottom: 14,
            }}>👤</div>
            <p style={{ fontFamily: "'Roboto',sans-serif", fontSize: 16, color: "#0094f6", cursor: "pointer", margin: 0, fontWeight: 600 }}>
              Ganti Foto Profil
            </p>
          </div>

          {[
            { label: "Nama Lengkap", value: nama, set: setNama, type: "text", placeholder: "Masukkan nama lengkap" },
            { label: "Email", value: email, set: setEmail, type: "email", placeholder: "Masukkan email" },
            { label: "Nomor HP", value: phone, set: setPhone, type: "tel", placeholder: "Contoh: 08xxxxxxxxxx" },
          ].map(({ label, value, set, type, placeholder }) => (
            <div key={label} style={{ marginBottom: 24 }}>
              <label style={labelStyle}>{label}</label>
              <input
                type={type}
                value={value}
                onChange={e => set(e.target.value)}
                placeholder={placeholder}
                style={inputStyle}
              />
            </div>
          ))}

          {/* Alamat */}
          <div style={{ marginBottom: 32 }}>
            <label style={labelStyle}>Alamat</label>
            <textarea
              value={alamat}
              onChange={e => setAlamat(e.target.value)}
              placeholder="Masukkan alamat lengkap"
              style={{ ...inputStyle, height: 90, padding: "14px 18px", resize: "none", verticalAlign: "top" }}
            />
          </div>

          <button onClick={() => setSaved(true)} style={{
            width: "100%", padding: "18px 0", background: "#0094f6", border: "none",
            borderRadius: 14, color: "#fff", fontFamily: "'Montserrat',sans-serif",
            fontWeight: 700, fontSize: 20, cursor: "pointer",
            boxShadow: "0 4px 16px rgba(0,148,246,0.3)",
          }}>Simpan Perubahan</button>
        </div>
      </div>

      {/* Success modal */}
      {saved && (
        <>
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 3000 }} onClick={() => setSaved(false)} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#fff", borderRadius: 20, padding: 44, zIndex: 3001, width: 420, textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.22)" }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 22, margin: "0 0 24px 0", color: "#1a1a2e" }}>
              Profil Berhasil Diperbarui
            </h2>
            <button onClick={() => { setSaved(false); onBack(); }} style={{
              padding: "14px 44px", borderRadius: 12, border: "none", background: "#0094f6",
              color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 17, cursor: "pointer",
            }}>OK</button>
          </div>
        </>
      )}
    </ResponsiveCanvas>
  );
}
