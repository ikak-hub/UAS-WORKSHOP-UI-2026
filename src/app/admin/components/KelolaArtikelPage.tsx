import { useState } from "react";
import AdminNavbar from "../AdminNavbar";

/**
 * admin/components/KelolaArtikelPage.tsx
 * Halaman manajemen artikel — folder + aksi tambah/draft.
 */
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
    { label: "FOLDER ARTIKEL ADAT", category: "Adat" },
    { label: "FOLDER ARTIKEL COSPLAY", category: "Cosplay" },
    { label: "FOLDER ARTIKEL WISUDA", category: "Wisuda" },
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
      <main style={{ flex: 1, padding: "24px 40px 80px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, border: "1.5px solid #ddd", borderRadius: 12, padding: "14px 20px", marginBottom: 40, maxWidth: 900 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, padding: 0, lineHeight: 1 }}>←</button>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20, color: "#000" }}>Artikel</span>
        </div>

        {/* Folders */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 900, marginBottom: 48 }}>
          {folders.map((f, i) => (
            <FolderIcon key={i} label={f.label} onClick={() => onOpenFolder(f.category)} onDelete={() => deleteFolder(i)} />
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 900 }}>
          <button
            onClick={onAddArtikel}
            style={{ background: "#0094F6", border: "none", borderRadius: 16, padding: "22px 32px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", color: "#fff" }}
          >
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round">
              <rect x={3} y={3} width={18} height={18} rx={3} /><line x1={12} y1={8} x2={12} y2={16} /><line x1={8} y1={12} x2={16} y2={12} />
            </svg>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 18 }}>TAMBAH ARTIKEL</span>
          </button>
          <button
            onClick={onDraftArtikel}
            style={{ background: "#E8E8E8", border: "none", borderRadius: 16, padding: "22px 32px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", color: "#000" }}
          >
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
              <circle cx={12} cy={14} r={1.5} /><path d="M7 19h10" />
            </svg>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 18 }}>DRAFT ARTIKEL</span>
          </button>
        </div>
      </main>
    </div>
  );
}

function FolderIcon({ label, onClick, onDelete }: { label: string; onClick: () => void; onDelete: () => void }) {
  return (
    <div
      style={{ position: "relative", cursor: "pointer" }}
      onClick={onClick}
      onKeyDown={e => e.key === "Enter" && onClick()}
      tabIndex={0}
      role="button"
      aria-label={label}
    >
      <div style={{ width: "100%", background: "#F5A623", borderRadius: "0 16px 16px 16px", minHeight: 200, position: "relative", paddingTop: 40 }}>
        <div style={{ position: "absolute", top: -20, left: 0, width: 160, height: 22, background: "#F5A623", borderRadius: "12px 12px 0 0" }} />
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#000", padding: "0 16px", position: "absolute", top: -36, left: 0 }}>
          {label}
        </p>
        <div style={{ position: "absolute", bottom: 16, right: 16 }}>
          <button
            onClick={e => { e.stopPropagation(); onDelete(); }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
            aria-label={`Hapus ${label}`}
          >
            <svg width={28} height={32} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
              <path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}