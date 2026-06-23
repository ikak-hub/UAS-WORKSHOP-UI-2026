import { useState } from "react";
import svgPaths from "../../../imports/SearchBar/svg-v16uckhm5z";
import imgRectangle30 from "../../../imports/KatalogArtikel/31dcf626d31fadef65fb2988c0dd150f6233ca47.png";
import imgRectangle31 from "../../../imports/KatalogArtikel/39a31d445f2f94699cbc2834724d23f8b26652d0.png";
import imgRectangle32 from "../../../imports/KatalogArtikel/05520b33265834d60650f2d748f6ec79e3e8aa9f.png";
import imgRectangle33 from "../../../imports/KatalogArtikel/e600d804febf30831ba02c742798a648f19e5733.png";

export const artikelList = [
  {
    id: 1,
    img: imgRectangle30,
    title: "Universitas Terbuka bawa semangat Hari Pahlawan dalam wisuda 2025",
    desc: "Universitas Terbuka menggelar wisuda Tahun Akademik 2025/2026 di UT Convention Center, Tangerang Selatan pada 10–11 November 2025.",
  },
  {
    id: 2,
    img: imgRectangle31,
    title: "Wisatawan Mancanegara Meriahkan Fashion Show Busana Adat Bali di Festival Nusa Penida 2024",
    desc: "Dalam Festival Nusa Penida 2024, wisatawan asing ikut ambil bagian dalam fashion show busana adat Bali.",
  },
  {
    id: 3,
    img: imgRectangle32,
    title: "Banyuwangi Batik Festival 2025 Angkat Motif Wader Kesit di Peragaan Busana",
    desc: "Motif batik lokal \"Wader Kesit\" diangkat dalam peragaan busana Banyuwangi Batik Festival 2025.",
  },
  {
    id: 4,
    img: imgRectangle33,
    title: "Japan World",
    desc: "Himpunan Mahasiswa Studi Kejepangan FIB Universitas Airlangga menggelar Japanese World pada 20–21 Juli 2019 di FIB UNAIR.",
  },
  {
    id: 5,
    img: imgRectangle32,
    title: "Banyuwangi Batik Festival 2025 Angkat Motif Wader Kesit di Peragaan Busana",
    desc: "Kolaborasi desainer dan pengrajin lokal menghasilkan 60 pakaian batik yang menonjolkan kearifan lokal.",
  },
  {
    id: 6,
    img: imgRectangle33,
    title: "Japan World",
    desc: "Himpunan Mahasiswa Studi Kejepangan FIB Universitas Airlangga menggelar Japanese World pada 20–21 Juli 2019 di FIB UNAIR.",
  },
  {
    id: 7,
    img: imgRectangle30,
    title: "Universitas Terbuka bawa semangat Hari Pahlawan dalam wisuda 2025",
    desc: "Universitas Terbuka menggelar wisuda Tahun Akademik 2025/2026 di UT Convention Center, Tangerang Selatan pada 10–11 November 2025.",
  },
];

interface Props {
  onClose: () => void;
  onNavigate?: (articleId: number) => void;
}

export function ArtikelSidebarMenu({ onClose, onNavigate }: Props) {
  const [query, setQuery] = useState("");
  const filtered = artikelList.filter(
    (a) =>
      query === "" ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-[200]" onClick={onClose} />
      <div
        className="fixed top-0 right-0 h-full bg-white z-[201] flex flex-col shadow-2xl"
        style={{ width: 400 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 22 }}>
            TRENDING
          </span>
          <button
            onClick={onClose}
            style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: 24, lineHeight: 1, color: "#000" }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Search bar */}
        <div className="px-5 py-3 border-b border-black/10">
          <div className="flex items-center w-full border border-black rounded-[20px] bg-white px-4 py-2 gap-2">
            <svg width="20" height="15" viewBox="0 0 31.25 23.75" fill="none" style={{ flexShrink: 0 }}>
              <path d={svgPaths.p1014a400} fill="black" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                border: "none",
                outline: "none",
                background: "transparent",
                flex: 1,
                color: "#000",
              }}
            />
          </div>
        </div>

        {/* Article list */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-5">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="flex gap-3 items-start"
              style={{ cursor: onNavigate ? "pointer" : "default" }}
              onClick={() => onNavigate?.(article.id)}
            >
              <img
                src={article.img}
                alt={article.title}
                style={{ width: 90, height: 70, objectFit: "cover", borderRadius: 12, flexShrink: 0 }}
              />
              <div className="flex flex-col gap-1 min-w-0">
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 13, lineHeight: "1.3", margin: 0, color: "#000" }}>
                  {article.title}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 11, lineHeight: "1.4", margin: 0, color: "#444" }}>
                  {article.desc}
                </p>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#888", textAlign: "center", marginTop: 24 }}>
              Tidak ada artikel ditemukan.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
