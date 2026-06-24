import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import ArtikelSubHeader from "./ArtikelSubHeader";
import WCRFooter from "./WCRFooter";
import type { Article } from "../../shared/types";

export default function DetailArtikelPage({
  article: initialArticle,
  onBack,
  onSave,
  onLogout,
}: {
  article: Article;
  onBack: () => void;
  onSave: (updated: Article) => void;
  onLogout: () => void;
}) {
  const [article, setArticle] = useState<Article>(initialArticle);
  const [dirty, setDirty] = useState(false);

  const handleCancel = () => {
    if (dirty && !confirm("Batalkan semua perubahan? Data yang belum disimpan akan hilang.")) return;
    setArticle(initialArticle);
    setDirty(false);
    onBack();
  };

  const handleSave = () => {
    onSave(article);
    setDirty(false);
    alert("Perubahan berhasil disimpan!");
  };

  // Parse content: split by \n\n into paragraphs; first paragraph has "WCR NEWS –" prefix
  const paragraphs = article.content.split("\n\n");

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar showHome onHome={onBack} onLogout={onLogout} />
      <ArtikelSubHeader />

      <main style={{ flex: 1, maxWidth: 820, margin: "0 auto", width: "100%", padding: "32px 24px 40px" }}>
        {/* Title */}
        <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "#000", textAlign: "center", margin: "0 0 28px", lineHeight: 1.35 }}>
          {article.title}
        </h1>

        {/* Body */}
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: "#222", lineHeight: 1.8 }}>
          {paragraphs.map((para, idx) => {
            // Detect "Penulis" and "Editor" lines
            if (para.startsWith("Penulis") || para.startsWith("Editor")) {
              return (
                <p key={idx} style={{ margin: "0 0 12px", fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#333" }}>
                  {para}
                </p>
              );
            }

            // First paragraph with bold lead
            if (idx === 0) {
              const wcrIdx = para.indexOf("–");
              if (wcrIdx !== -1) {
                return (
                  <p key={idx} style={{ margin: "0 0 18px" }}>
                    <strong>{para.slice(0, wcrIdx + 1)}</strong>
                    {para.slice(wcrIdx + 1)}
                  </p>
                );
              }
            }

            // Image placeholder after first paragraph
            const showImage = idx === 1 && article.image;

            return (
              <>
                {showImage && (
                  <figure key={`img-${idx}`} style={{ margin: "0 0 18px" }}>
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{ width: "100%", maxHeight: 480, objectFit: "cover", display: "block", borderRadius: 4 }}
                    />
                    {article.imageCaption && (
                      <figcaption style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#555", textAlign: "center", fontStyle: "italic", marginTop: 8 }}>
                        {article.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
                <p key={idx} style={{ margin: "0 0 16px" }}>{para}</p>
              </>
            );
          })}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 20, marginTop: 40, flexWrap: "wrap" }}>
          <button
            onClick={handleCancel}
            style={{ flex: 1, minWidth: 200, background: "#0094F6", color: "#fff", border: "none", borderRadius: 6, padding: "18px 0", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", textTransform: "uppercase" as const }}
          >
            Batalkan Perubahan
          </button>
          <button
            onClick={handleSave}
            style={{ flex: 1, minWidth: 200, background: "#0094F6", color: "#fff", border: "none", borderRadius: 6, padding: "18px 0", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", textTransform: "uppercase" as const }}
          >
            Simpan Perubahan
          </button>
        </div>
      </main>

      <WCRFooter />
    </div>
  );
}