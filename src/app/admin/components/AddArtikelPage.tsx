import { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import type { Article, DraftStatus } from "../../shared/types";

/**
 * admin/components/AddArtikelPage.tsx
 * Halaman tulis/edit artikel — mendukung mode tambah baru & edit draft.
 * onSave sekarang WAJIB: parent AdminApp menangani simpan ke state.
 */
export default function AddArtikelPage({
  draft,
  onBack,
  onSave,
  onLogout,
}: {
  draft?: Article | null;
  onBack: () => void;
  onSave: (a: Partial<Article>) => void;
  onLogout: () => void;
}) {
  const [title, setTitle] = useState(draft?.title ?? "");
  const [body, setBody] = useState(draft?.content ?? "");
  const [status, setStatus] = useState<DraftStatus>(draft?.status ?? "Draf");
  const [visibility, setVisibility] = useState<"Publik" | "Pribadi">("Publik");
  const [categories, setCategories] = useState<string[]>(draft?.category ?? []);
  const [wordCount, setWordCount] = useState(draft?.wordCount ?? 0);
  const [savedFeedback, setSavedFeedback] = useState("");

  const createdTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
  });

  const CATS = ["Anime", "Wisuda", "Adat", "Cosplay", "Tips & Tren"];

  const toggleCat = (c: string) => {
    setCategories(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const handleBodyChange = (val: string) => {
    setBody(val);
    setWordCount(val.trim() ? val.trim().split(/\s+/).length : 0);
  };

  const handleSaveDraft = () => {
    if (!title.trim() && !body.trim()) {
      alert("Tulis judul atau konten terlebih dahulu sebelum menyimpan draft.");
      return;
    }
    onSave({ title, content: body, category: categories, status: "Draf", wordCount });
    setSavedFeedback("Draft berhasil disimpan!");
    setTimeout(() => setSavedFeedback(""), 2500);
  };

  const handlePublish = () => {
    if (!title.trim()) { alert("Judul artikel wajib diisi sebelum publish."); return; }
    onSave({ title, content: body, category: categories, status: "Published", wordCount });
    setSavedFeedback("Artikel berhasil dipublish!");
    setTimeout(() => { setSavedFeedback(""); onBack(); }, 1500);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar showHome onHome={onBack} onLogout={onLogout} />
      <main style={{ flex: 1, padding: "32px 48px 80px" }}>
        <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: 24, margin: "0 0 28px", color: "#000" }}>
          {draft ? "Edit Post" : "Add New Post"}
        </h1>

        {savedFeedback && (
          <div style={{ background: "#e6f9ee", border: "1px solid #1FAA59", borderRadius: 8, padding: "10px 18px", marginBottom: 20, fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#1FAA59" }}>
            ✓ {savedFeedback}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32, maxWidth: 1100 }}>
          {/* ── Kiri: Editor ── */}
          <div>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Tulis Judul Berita Di Sini"
              style={{ width: "100%", border: "1px solid #ddd", borderRadius: 4, padding: "14px 16px", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 20, outline: "none", boxSizing: "border-box" as const }}
            />

            <button style={{ background: "#fff", border: "1px solid #ddd", borderRadius: 6, padding: "8px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, marginBottom: 12, fontFamily: "'Open Sans', sans-serif", fontSize: 14 }}>
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth={2}>
                <rect x={3} y={3} width={18} height={18} rx={2} /><circle cx={8.5} cy={8.5} r={1.5} /><polyline points="21 15 16 10 5 21" />
              </svg>
              Add Media
            </button>

            <div style={{ border: "1px solid #ddd", borderRadius: 4 }}>
              <RichToolbar />
              <textarea
                value={body}
                onChange={e => handleBodyChange(e.target.value)}
                placeholder="Tulis berita disini"
                style={{ width: "100%", minHeight: 480, border: "none", padding: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: 15, resize: "vertical", outline: "none", boxSizing: "border-box" as const }}
              />
            </div>

            <div style={{ border: "1px solid #ddd", borderRadius: 4, padding: "10px 16px", display: "flex", justifyContent: "space-between", background: "#fff" }}>
              <span style={{ fontSize: 13, color: "#444", fontFamily: "'Open Sans', sans-serif" }}>Word Count: {wordCount}</span>
              <span style={{ fontSize: 13, color: "#444", fontFamily: "'Open Sans', sans-serif" }}>Draft created at {createdTime}</span>
            </div>
          </div>

          {/* ── Kanan: Sidebar ── */}
          <div>
            {/* Publish box */}
            <div style={{ border: "1px solid #ddd", borderRadius: 8, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: "#f8f8f8", borderBottom: "1px solid #ddd", padding: "12px 16px" }}>
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 16 }}>Publish</span>
              </div>
              <div style={{ padding: "16px" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                  <button
                    onClick={handleSaveDraft}
                    style={{ flex: 1, border: "1px solid #0094F6", borderRadius: 4, background: "#fff", padding: "9px 0", cursor: "pointer", fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#0094F6", fontWeight: 600 }}
                  >
                    Save Draft
                  </button>
                  <button style={{ flex: 1, border: "1px solid #ccc", borderRadius: 4, background: "#fff", padding: "7px 0", cursor: "pointer", fontFamily: "'Open Sans', sans-serif", fontSize: 13 }}>Preview</button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13 }}>
                      Status : <strong>{status}</strong>{" "}
                      <button onClick={() => setStatus(s => s === "Draf" ? "Published" : "Draf")} style={{ background: "none", border: "none", color: "#0094F6", fontSize: 13, cursor: "pointer", textDecoration: "underline" }}>Edit</button>
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13 }}>
                      Visibility : <strong>{visibility}</strong>{" "}
                      <button onClick={() => setVisibility(v => v === "Publik" ? "Pribadi" : "Publik")} style={{ background: "none", border: "none", color: "#0094F6", fontSize: 13, cursor: "pointer", textDecoration: "underline" }}>Edit</button>
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#555" }}>
                    Publish immediately
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <button onClick={onBack} style={{ background: "none", border: "none", color: "#D00", fontSize: 13, cursor: "pointer", fontFamily: "'Open Sans', sans-serif" }}>Move to Trash</button>
                  <button onClick={handlePublish} style={{ background: "#0094F6", color: "#fff", border: "none", borderRadius: 4, padding: "8px 20px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Publish</button>
                </div>
              </div>
            </div>

            {/* Categories box */}
            <div style={{ border: "1px solid #ddd", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ background: "#f8f8f8", borderBottom: "1px solid #ddd", padding: "12px 16px" }}>
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 15 }}>Categories Artikel</span>
              </div>
              <div style={{ padding: "12px 16px" }}>
                {CATS.map((c, i) => (
                  <label key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 12px", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={categories.includes(c)}
                      onChange={() => toggleCat(c)}
                      style={{ width: 16, height: 16, cursor: "pointer" }}
                    />
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14 }}>{c}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function RichToolbar() {
  const tools = ["B", "I", "Aa", "≡", "❝", "⬛", "⬜", "▦", "⇕", "🔗"];
  return (
    <div style={{ display: "flex", gap: 4, padding: "8px 12px", borderBottom: "1px solid #ddd", flexWrap: "wrap" as const }}>
      {tools.map((t, i) => (
        <button key={i} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 8px", fontSize: 15, borderRadius: 4, color: "#333" }} title={t}>{t}</button>
      ))}
    </div>
  );
}