import AdminNavbar from "./AdminNavbar";
import type { Article } from "../../shared/types";

/**
 * admin/components/DraftArtikelPage.tsx
 * Daftar artikel yang tersimpan sebagai draft.
 * Props drafts, onEdit, onDelete sekarang wajib dari AdminApp.
 */
export default function DraftArtikelPage({
  drafts,
  onEdit,
  onDelete,
  onBack,
  onLogout,
}: {
  drafts: Article[];
  onEdit: (a: Article) => void;
  onDelete: (id: number) => void;
  onBack: () => void;
  onLogout: () => void;
}) {
  const handleDelete = (d: Article) => {
    if (confirm(`Hapus draft "${d.title || "(Tanpa Judul)"}"?`)) onDelete(d.id);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar showHome onHome={onBack} onLogout={onLogout} />
      <main style={{ flex: 1, padding: "32px 48px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, border: "1.5px solid #ddd", borderRadius: 12, padding: "14px 20px", marginBottom: 32, maxWidth: 900 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, padding: 0, lineHeight: 1 }}>←</button>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20, color: "#000" }}>Draf Artikel</span>
        </div>

        {drafts.length === 0 ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 260, flexDirection: "column", gap: 12 }}>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 20, fontWeight: 700, color: "#000" }}>
              Draf anda kosong
            </p>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#888" }}>
              Klik "Save Draft" di halaman editor untuk menyimpan draf baru.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 860 }}>
            {drafts.map(d => (
              <div key={d.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 18, margin: "0 0 4px", color: "#000" }}>
                    {d.title || "(Tanpa Judul)"}
                  </p>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#888", margin: 0 }}>
                    {d.createdAt} · {d.wordCount} kata · {d.status}
                    {d.category.length > 0 && ` · [${d.category.join(", ")}]`}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <button
                    onClick={() => onEdit(d)}
                    style={{ background: "#0094F6", border: "none", borderRadius: 6, color: "#fff", padding: "8px 16px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer" }}
                    title="Edit Draft"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(d)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
                    title="Hapus Draft"
                  >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#D00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}