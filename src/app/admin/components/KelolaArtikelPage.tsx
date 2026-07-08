import { useState } from "react";
import AdminNavbar from "../AdminNavbar";

export default function KelolaArtikelPage({
  onBack,
  onAddArtikel,
  onDraftArtikel,
  onOpenFolder,
  onLogout,
}: {
  onBack: () => void;
  onAddArtikel: () => void;
  onDraftArtikel: () => void;
  onOpenFolder: (category: string) => void;
  onLogout: () => void;
}) {
  const FOLDERS = [
    { label: "FOLDER ARTIKEL ADAT",    category: "Adat" },
    { label: "FOLDER ARTIKEL COSPLAY", category: "Cosplay" },
    { label: "FOLDER ARTIKEL WISUDA",  category: "Wisuda" },
  ];

  const [folders, setFolders] = useState(FOLDERS);

  const deleteFolder = (i: number) => {
    if (confirm(`Hapus "${folders[i].label}"?`)) {
      setFolders(f => f.filter((_, idx) => idx !== i));
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar showHome onHome={onBack} onLogout={onLogout} />

      <main style={{ flex: 1, padding: "32px 48px 80px" }}>

        {/* Breadcrumb */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          border: "1.5px solid #ccc", borderRadius: 14,
          padding: "14px 24px", marginBottom: 48,
        }}>
          <button
            onClick={onBack}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, padding: 0, lineHeight: 1, color: "#000" }}
          >
            ←
          </button>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20 }}>
            Artikel
          </span>
        </div>

        {/* Folder grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px 48px",
          marginBottom: 56,
        }}>
          {folders.map((f, i) => (
            <FolderCard
              key={i}
              label={f.label}
              onClick={() => onOpenFolder(f.category)}
              onDelete={() => deleteFolder(i)}
            />
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          {/* Tambah Artikel */}
          <button
            onClick={onAddArtikel}
            style={{
              background: "#0094F6",
              border: "none",
              borderRadius: 18,
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              cursor: "pointer",
              color: "#fff",
              boxShadow: "0 2px 8px rgba(0,148,246,0.18)",
            }}
          >
            {/* Plus icon */}
            <svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round">
              <rect x={3} y={3} width={18} height={18} rx={3} />
              <line x1={12} y1={8} x2={12} y2={16} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: 1 }}>
              TAMBAH ARTIKEL
            </span>
          </button>

          {/* Draft Artikel */}
          <button
            onClick={onDraftArtikel}
            style={{
              background: "#E8E8E8",
              border: "none",
              borderRadius: 18,
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              cursor: "pointer",
              color: "#000",
            }}
          >
            {/* Folder open icon */}
            <svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
              <polyline points="2 9 22 9" />
            </svg>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: 1 }}>
              DRAFT ARTIKEL
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}

function FolderCard({
  label,
  onClick,
  onDelete,
}: {
  label: string;
  onClick: () => void;
  onDelete: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={onClick}
      onKeyDown={e => e.key === "Enter" && onClick()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer", position: "relative", userSelect: "none", paddingTop: 28 }}
    >
      {/* Tab atas */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "50%",
        height: 30,
        background: "#F5A623",
        borderRadius: "12px 12px 0 0",
        display: "flex",
        alignItems: "center",
        paddingLeft: 14,
        zIndex: 1,
      }}>
        <span style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 800,
          fontSize: 13,
          color: "#000",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
          {label}
        </span>
      </div>

      {/* Folder body — pakai aspect-ratio bukan minHeight */}
      <div style={{
        width: "100%",
        aspectRatio: "16 / 9",   // proporsional di semua screen
        background: hovered ? "#E8971A" : "#F5A623",
        borderRadius: "0 12px 12px 12px",
        position: "relative",
        transition: "background 0.15s, box-shadow 0.15s",
        boxShadow: hovered
          ? "0 4px 16px rgba(245,166,35,0.35)"
          : "0 2px 6px rgba(0,0,0,0.08)",
      }}>
        {/* Trash button */}
        <button
          onClick={e => { e.stopPropagation(); onDelete(); }}
          aria-label={`Hapus ${label}`}
          style={{
            position: "absolute",
            bottom: 14,
            right: 14,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 6,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width={28} height={32} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4h6v2" />
          </svg>
        </button>
      </div>
    </div>
  );
}