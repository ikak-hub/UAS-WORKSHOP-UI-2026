import AdminNavbar from "./AdminNavbar";
import type { Article } from "../../shared/types";

/**
 * admin/components/DraftArtikelPage.tsx
 * Daftar artikel yang tersimpan sebagai draft.
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
  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar showHome onHome={onBack} onLogout={onLogout} />
      <main style={{ flex: 1, padding: "32px 48px 80px" }}>
        <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 24, margin: "0 0 28px", color: "#000" }}>
          Draf Artikel
        </h1>

        {drafts.length === 0 ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300 }}>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 20, fontWeight: 700, color: "#000" }}>
              Draf anda kosong
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 860 }}>
            {drafts.map(d => (
              <div
                key={d.id}
                style={{ border: "1px solid #ddd", borderRadius: 8, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}
              >
                <div>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 18, margin: "0 0 4px", color: "#000" }}>
                    {d.title || "(Tanpa Judul)"}
                  </p>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#888", margin: 0 }}>
                    {d.createdAt} · {d.wordCount} kata · {d.status}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <button
                    onClick={() => onEdit(d)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
                    title="Edit"
                  >
                    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => onDelete(d.id)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
                    title="Hapus"
                  >
                    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="#D00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
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