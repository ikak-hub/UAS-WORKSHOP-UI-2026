import { useMemo, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminPageHeader from "./AdminPageHeader";
import type { PenggunaUmum } from "../../shared/types";

function AvatarIcon() {
  return (
    <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#E3ECFB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width={30} height={30} viewBox="0 0 24 24" fill="#3B82F6">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 5a3 3 0 110 6 3 3 0 010-6zm0 14a8 8 0 01-6.4-3.2c.03-2.12 4.27-3.3 6.4-3.3 2.13 0 6.37 1.18 6.4 3.3A8 8 0 0112 21z" />
      </svg>
    </div>
  );
}

function TrashIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}

export default function KelolaPenggunaUmumPage({
  list,
  onBack,
  onDelete,
  onLogout,
}: {
  list: PenggunaUmum[];
  onBack: () => void;
  onDelete: (id: number) => void;
  onLogout: () => void;
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return list;
    const q = search.toLowerCase();
    return list.filter(u => u.nama.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.telepon.includes(q));
  }, [list, search]);

  const handleDelete = (u: PenggunaUmum) => {
    if (confirm(`Hapus pengguna "${u.nama}"?`)) onDelete(u.id);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar onLogout={onLogout} />
      <AdminPageHeader title="Kelola Pengguna Umum" onBack={onBack} />

      <main style={{ padding: "32px 40px 80px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search"
            style={{ width: 260, border: "1px solid #ddd", borderRadius: 24, padding: "10px 20px", fontFamily: "'Open Sans', sans-serif", fontSize: 14, outline: "none" }}
          />
        </div>

        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", fontFamily: "'Open Sans', sans-serif", color: "#888", marginTop: 60 }}>Tidak ada pengguna ditemukan.</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px" }}>
            {filtered.map(u => (
              <div
                key={u.id}
                style={{ background: "#e6e6e6", borderRadius: 40, padding: "14px 26px", display: "flex", alignItems: "center", gap: 16 }}
              >
                <AvatarIcon />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: "0 0 2px", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 17, color: "#000" }}>{u.nama}</p>
                  <p style={{ margin: 0, fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#444", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {u.telepon} / {u.email}
                  </p>
                </div>
                <button onClick={() => handleDelete(u)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, flexShrink: 0 }} aria-label={`Hapus ${u.nama}`}>
                  <TrashIcon />
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}