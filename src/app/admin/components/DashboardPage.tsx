import AdminNavbar from "../AdminNavbar";

type AdminPage =
  | "login"
  | "dashboard"
  | "kelola_artikel"
  | "add_artikel"
  | "draft_artikel"
  | "kelola_transaksi"
  | "daftar_transaksi"
  | "detail_transaksi";

/**
 * admin/components/DashboardPage.tsx
 * Dashboard utama Admin — menampilkan menu manajemen.
 */
export default function DashboardPage({
  onNavigate,
  onLogout,
}: {
  onNavigate: (p: AdminPage) => void;
  onLogout: () => void;
}) {
  const cards = [
    {
      title: "MANAJEMEN TRANSAKSI",
      desc: "KELOLA PENCAIRAN DAN PEMOTONGAN APLIKASI UNTUK SETIAP PEMILIK",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=70",
      accent: "#0094F6",
      page: "kelola_transaksi" as AdminPage | null,
    },
    {
      title: "MANAJEMEN FORUM",
      desc: "SEGERA HADIR",
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=200&q=70",
      accent: "#0094F6",
      page: null as AdminPage | null,
    },
    {
      title: "MANAJEMEN PENGGUNA",
      desc: "KELOLA PENGGUNA DAN VERIFIKASI PENGGUNA",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=70",
      accent: "#0094F6",
      page: null as AdminPage | null,
    },
    {
      title: "MANAJEMEN ARTIKEL",
      desc: "KELOLA ARTIKEL DAN BERITA",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=70",
      accent: "#7B68EE",
      page: "kelola_artikel" as AdminPage,
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar onLogout={onLogout} />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, maxWidth: 1100, width: "100%" }}>
          {cards.map((c, i) => (
            <div
              key={i}
              onClick={() => c.page && onNavigate(c.page)}
              style={{
                background: "#fff",
                border: `3px solid ${c.accent}`,
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                gap: 24,
                padding: "28px 32px",
                cursor: c.page ? "pointer" : "default",
                minHeight: 180,
                transition: "transform 0.15s",
                boxSizing: "border-box",
              }}
              onMouseEnter={e => c.page && (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "none")}
            >
              <div style={{ width: 140, height: 120, borderRadius: 12, overflow: "hidden", flexShrink: 0, background: i === 3 ? "#B0B8E8" : "#EEF5FB" }}>
                <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20, margin: "0 0 10px", color: "#000" }}>
                  {c.title}
                </h2>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#333", margin: "0 0 12px", lineHeight: 1.5 }}>
                  {c.desc}
                </p>
                <span style={{ fontSize: 12, color: "#888", fontFamily: "'Open Sans', sans-serif" }}>
                  Last updated 3 mins ago
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}