import AdminNavbar from "../AdminNavbar";

type AdminPage =
  | "login"
  | "dashboard"
  | "kelola_artikel"
  | "add_artikel"
  | "draft_artikel"
  | "kelola_pengguna"
  | "kelola_transaksi"
  | "daftar_transaksi"
  | "detail_transaksi";

const CARDS = [
  {
    title: "MANAJEMEN TRANSAKSI",
    desc: "KELOLA PENCAIRAN DAN PEMOTONGAN APLIKASI UNTUK SETIAP PEMILIK",
    accent: "#0094F6",
    bgColor: "#EEF5FB",
    page: "kelola_transaksi" as AdminPage,
    illustration: (
      <svg viewBox="0 0 120 100" width="120" height="100">
        <rect x="20" y="30" width="55" height="60" rx="6" fill="#4FC3F7" />
        <rect x="28" y="38" width="39" height="6" rx="3" fill="white" opacity="0.8" />
        <rect x="28" y="50" width="25" height="4" rx="2" fill="white" opacity="0.6" />
        <rect x="28" y="60" width="30" height="4" rx="2" fill="white" opacity="0.6" />
        <rect x="50" y="20" width="45" height="35" rx="5" fill="#FFA726" />
        <rect x="58" y="27" width="29" height="4" rx="2" fill="white" opacity="0.8" />
        <rect x="58" y="36" width="18" height="4" rx="2" fill="white" opacity="0.6" />
        <circle cx="90" cy="70" r="18" fill="#66BB6A" />
        <path d="M82 70 L87 75 L98 64" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="25" r="8" fill="#F5A623" />
        <text x="27" y="29" fontSize="10" fill="white" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "MANAJEMEN FORUM",
    desc: "SEGERA HADIR",
    accent: "#0094F6",
    bgColor: "#EEF5FB",
    page: null as AdminPage | null,
    illustration: (
      <svg viewBox="0 0 120 100" width="120" height="100">
        <rect x="15" y="15" width="90" height="60" rx="6" fill="#90CAF9" />
        <rect x="22" y="22" width="50" height="35" rx="4" fill="#BBDEFB" />
        <rect x="25" y="26" width="30" height="4" rx="2" fill="#1565C0" opacity="0.5" />
        <rect x="25" y="34" width="40" height="3" rx="1.5" fill="#1565C0" opacity="0.3" />
        <rect x="25" y="41" width="35" height="3" rx="1.5" fill="#1565C0" opacity="0.3" />
        <circle cx="85" cy="35" r="14" fill="#1E88E5" />
        <rect x="80" y="28" width="10" height="3" rx="1.5" fill="white" opacity="0.8" />
        <rect x="78" y="34" width="14" height="3" rx="1.5" fill="white" opacity="0.8" />
        <rect x="80" y="40" width="10" height="3" rx="1.5" fill="white" opacity="0.8" />
        <ellipse cx="40" cy="78" rx="20" ry="10" fill="#E3F2FD" />
        <ellipse cx="70" cy="82" rx="15" ry="8" fill="#E3F2FD" />
        <ellipse cx="90" cy="78" rx="12" ry="7" fill="#E3F2FD" />
        <circle cx="35" cy="73" r="6" fill="#42A5F5" />
        <circle cx="65" cy="75" r="6" fill="#42A5F5" />
        <circle cx="85" cy="72" r="6" fill="#42A5F5" />
      </svg>
    ),
  },
  {
    title: "MANAJEMEN PENGGUNA",
    desc: "KELOLA PENGGUNA DAN VERIFIKASI PENGGUNA",
    accent: "#0094F6",
    bgColor: "#EEF5FB",
    page: "kelola_pengguna" as AdminPage,
    illustration: (
      <svg viewBox="0 0 120 100" width="120" height="100">
        <rect x="30" y="10" width="60" height="80" rx="8" fill="#90CAF9" />
        <rect x="36" y="18" width="48" height="64" rx="4" fill="#E3F2FD" />
        <circle cx="52" cy="35" r="10" fill="#42A5F5" />
        <circle cx="52" cy="30" r="6" fill="#1E88E5" />
        <path d="M38 55 Q52 45 66 55" fill="#42A5F5" />
        <circle cx="80" cy="42" r="8" fill="#FF7043" />
        <circle cx="80" cy="38" r="5" fill="#E64A19" />
        <path d="M69 58 Q80 50 91 58" fill="#FF7043" />
        <circle cx="38" cy="62" r="7" fill="#66BB6A" />
        <circle cx="38" cy="58" r="4" fill="#388E3C" />
        <path d="M28 74 Q38 67 48 74" fill="#66BB6A" />
        <rect x="55" y="62" width="25" height="3" rx="1.5" fill="#90CAF9" />
        <rect x="55" y="69" width="18" height="3" rx="1.5" fill="#90CAF9" />
      </svg>
    ),
  },
  {
    title: "MANAJEMEN ARTIKEL",
    desc: "KELOLA ARTIKEL DAN BERITA",
    accent: "#0094F6",
    bgColor: "#C5CAE9",
    page: "kelola_artikel" as AdminPage,
    illustration: (
      <svg viewBox="0 0 120 100" width="120" height="100">
        <rect x="10" y="20" width="45" height="60" rx="4" fill="#FFF9C4" stroke="#F5A623" strokeWidth="1.5" />
        <rect x="16" y="28" width="33" height="3" rx="1.5" fill="#F5A623" opacity="0.7" />
        <rect x="16" y="35" width="25" height="2.5" rx="1.25" fill="#9E9E9E" opacity="0.6" />
        <rect x="16" y="41" width="28" height="2.5" rx="1.25" fill="#9E9E9E" opacity="0.6" />
        <rect x="16" y="47" width="20" height="2.5" rx="1.25" fill="#9E9E9E" opacity="0.6" />
        <rect x="25" y="10" width="45" height="60" rx="4" fill="#FFF3E0" stroke="#FF9800" strokeWidth="1.5" />
        <rect x="31" y="18" width="33" height="3" rx="1.5" fill="#FF9800" opacity="0.7" />
        <rect x="31" y="25" width="25" height="2.5" rx="1.25" fill="#9E9E9E" opacity="0.6" />
        <rect x="31" y="31" width="28" height="2.5" rx="1.25" fill="#9E9E9E" opacity="0.6" />
        <rect x="31" y="37" width="20" height="2.5" rx="1.25" fill="#9E9E9E" opacity="0.6" />
        <rect x="42" y="5" width="45" height="60" rx="4" fill="white" stroke="#E0E0E0" strokeWidth="1.5" />
        <rect x="48" y="13" width="33" height="3" rx="1.5" fill="#0094F6" opacity="0.8" />
        <rect x="48" y="20" width="25" height="2.5" rx="1.25" fill="#9E9E9E" opacity="0.6" />
        <rect x="48" y="26" width="28" height="2.5" rx="1.25" fill="#9E9E9E" opacity="0.6" />
        <rect x="48" y="32" width="20" height="2.5" rx="1.25" fill="#9E9E9E" opacity="0.6" />
        <circle cx="95" cy="65" r="18" fill="#FF7043" />
        <rect x="89" y="55" width="12" height="18" rx="2" fill="white" opacity="0.9" />
        <rect x="86" y="70" width="18" height="3" rx="1.5" fill="white" opacity="0.7" />
        <circle cx="95" cy="50" r="7" fill="#FFCCBC" />
        <path d="M85 80 Q95 75 105 80 L105 90 Q95 88 85 90 Z" fill="#4CAF50" />
      </svg>
    ),
  },
];

export default function DashboardPage({
  onNavigate,
  onLogout,
}: {
  onNavigate: (p: AdminPage) => void;
  onLogout: () => void;
}) {
  return (
    <>
      <style>{`
        .dashboard-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 80px;
        }
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          max-width: 1100px;
          width: 100%;
        }
        .dashboard-card {
          background: #fff;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 0;
          min-height: 180px;
          transition: transform 0.15s, box-shadow 0.15s;
          overflow: hidden;
          box-sizing: border-box;
          border: 3px solid #0094F6;
        }
        .dashboard-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,148,246,0.15);
        }
        .dashboard-card-img {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 160px;
          min-height: 180px;
        }
        .dashboard-card-body {
          padding: 24px 24px 24px 8px;
          flex: 1;
        }
        .dashboard-card-title {
          font-family: 'Open Sans', sans-serif;
          font-weight: 800;
          font-size: 20px;
          margin: 0 0 10px;
          color: #000;
        }
        .dashboard-card-desc {
          font-family: 'Open Sans', sans-serif;
          font-size: 13px;
          color: #444;
          margin: 0 0 14px;
          line-height: 1.6;
        }
        .dashboard-card-updated {
          font-size: 12px;
          color: #999;
          font-family: 'Open Sans', sans-serif;
        }

        @media (max-width: 900px) {
          .dashboard-main {
            padding: 32px 24px;
          }
          .dashboard-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .dashboard-card-img {
            width: 120px;
            min-height: 160px;
          }
          .dashboard-card-title {
            font-size: 16px;
          }
          .dashboard-card-desc {
            font-size: 12px;
          }
        }

        @media (max-width: 600px) {
          .dashboard-main {
            padding: 20px 12px;
            align-items: flex-start;
          }
          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .dashboard-card {
            min-height: 130px;
            border-radius: 14px;
          }
          .dashboard-card-img {
            width: 100px;
            min-height: 130px;
          }
          .dashboard-card-title {
            font-size: 15px;
          }
          .dashboard-card-desc {
            font-size: 11px;
            margin-bottom: 8px;
          }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
        <AdminNavbar onLogout={onLogout} />

        <main className="dashboard-main">
          <div className="dashboard-grid">
            {CARDS.map((c, i) => (
              <div
                key={i}
                className="dashboard-card"
                onClick={() => c.page && onNavigate(c.page)}
                style={{ cursor: c.page ? "pointer" : "default" }}
              >
                {/* Illustration area */}
                <div
                  className="dashboard-card-img"
                  style={{ background: c.bgColor }}
                >
                  {c.illustration}
                </div>

                {/* Text */}
                <div className="dashboard-card-body">
                  <h2 className="dashboard-card-title">{c.title}</h2>
                  <p className="dashboard-card-desc">{c.desc}</p>
                  {c.page && (
                    <span className="dashboard-card-updated">
                      Last updated 3 mins ago
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}