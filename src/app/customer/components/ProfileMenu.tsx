import { useState } from "react";

interface Props {
  onHistory: () => void;
  onEditProfile: () => void;
  /** Override the profile-circle hit area to match a page's navbar geometry. */
  iconLeft?: number;
  iconTop?: number;
  iconSize?: number;
}

// Default profile icon geometry (full-height 127px navbar pages)
const DEFAULT_ICON_LEFT = 1622;
const DEFAULT_ICON_TOP = 28;
const DEFAULT_ICON_SIZE = 72;

export function ProfileMenu({ onHistory, onEditProfile, iconLeft, iconTop, iconSize }: Props) {
  const [open, setOpen] = useState(false);
  const ICON_LEFT = iconLeft ?? DEFAULT_ICON_LEFT;
  const ICON_TOP = iconTop ?? DEFAULT_ICON_TOP;
  const ICON_SIZE = iconSize ?? DEFAULT_ICON_SIZE;

  return (
    <>
      {/* Transparent click overlay on the profile circle icon */}
      <button
        aria-label="Buka menu profil"
        onClick={() => setOpen(o => !o)}
        style={{
          position: "absolute",
          left: ICON_LEFT,
          top: ICON_TOP,
          width: ICON_SIZE,
          height: ICON_SIZE,
          zIndex: 200,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          borderRadius: "50%",
        }}
      />

      {/* Click-outside backdrop */}
      {open && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 199 }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            left: 1448,
            top: 110,
            width: 272,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            zIndex: 300,
            overflow: "hidden",
          }}
        >
          {/* Profile header */}
          <div style={{ padding: "20px 22px 14px", borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#0094f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#fff", flexShrink: 0 }}>
              👤
            </div>
            <div>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 15, color: "#1a1a2e", margin: 0 }}>Budi Santoso</p>
              <p style={{ fontFamily: "'Roboto',sans-serif", fontSize: 12, color: "#888", margin: "2px 0 0 0" }}>budi@email.com</p>
            </div>
          </div>

          <button
            onClick={() => { setOpen(false); onEditProfile(); }}
            style={{
              display: "flex", alignItems: "center", gap: 14, width: "100%",
              padding: "16px 22px", border: "none", borderBottom: "1px solid #f0f0f0",
              background: "#fff", cursor: "pointer", textAlign: "left",
              fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 16, color: "#1a1a2e",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
            onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
          >
            <span style={{ fontSize: 20 }}>✏️</span> Edit Profil
          </button>

          <button
            onClick={() => { setOpen(false); onHistory(); }}
            style={{
              display: "flex", alignItems: "center", gap: 14, width: "100%",
              padding: "16px 22px", border: "none", background: "#fff",
              cursor: "pointer", textAlign: "left",
              fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 16, color: "#1a1a2e",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
            onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
          >
            <span style={{ fontSize: 20 }}>📋</span> Riwayat Pesanan
          </button>
        </div>
      )}
    </>
  );
}
