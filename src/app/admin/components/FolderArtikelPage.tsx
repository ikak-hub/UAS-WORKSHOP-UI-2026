import { useMemo, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import ArtikelSubHeader from "./ArtikelSubHeader";
import type { Article } from "../../shared/types";

function TrashIcon() {
  return (
    <svg width={18} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

export default function FolderArtikelPage({
  folderCategory,
  articles,
  onBack,
  onEdit,
  onDelete,
  onLogout,
}: {
  folderCategory: string;
  articles: Article[];
  onBack: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onLogout: () => void;
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return articles;
    const q = search.toLowerCase();
    return articles.filter(a => a.title.toLowerCase().includes(q) || (a.excerpt ?? "").toLowerCase().includes(q));
  }, [articles, search]);

  const handleDelete = (a: Article) => {
    if (confirm(`Hapus artikel "${a.title}"?`)) onDelete(a.id);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar showHome onHome={onBack} onLogout={onLogout} />
      <ArtikelSubHeader onSearch={setSearch} />

      <main style={{ flex: 1, padding: "0 40px 80px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, border: "1.5px solid #ddd", borderRadius: 14, padding: "16px 24px", margin: "24px 0" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, padding: 0, lineHeight: 1 }}>←</button>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20, color: "#000" }}>Artikel</span>
        </div>

        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888", fontFamily: "'Open Sans', sans-serif", marginTop: 48 }}>
            {search ? "Artikel tidak ditemukan." : "Belum ada artikel di folder ini."}
          </p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {filtered.map(a => (
              <ArticleCard key={a.id} article={a} onEdit={() => onEdit(a.id)} onDelete={() => handleDelete(a)} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function ArticleCard({ article, onEdit, onDelete }: { article: Article; onEdit: () => void; onDelete: () => void }) {
  return (
    <div style={{ display: "flex", border: "1px solid #eee", borderRadius: 6, overflow: "hidden", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      {/* Thumbnail */}
      <div style={{ width: 130, minHeight: 100, flexShrink: 0, background: "#e0e0e0", overflow: "hidden" }}>
        {article.image ? (
          <img src={article.image} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "#ccc" }} />
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "10px 14px", minWidth: 0 }}>
        <h3 style={{ margin: "0 0 6px", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#000", lineHeight: 1.4 }}>
          {article.title}
        </h3>
        <p style={{ margin: 0, fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: "#555", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {article.excerpt}
        </p>
      </div>

      {/* Action bar */}
      <div style={{ background: "#0094F6", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "0 12px", flexShrink: 0 }}>
        <button onClick={e => { e.stopPropagation(); onDelete(); }} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }} aria-label="Hapus artikel">
          <TrashIcon />
        </button>
        <button onClick={e => { e.stopPropagation(); onEdit(); }} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }} aria-label="Edit artikel">
          <EditIcon />
        </button>
      </div>
    </div>
  );
}