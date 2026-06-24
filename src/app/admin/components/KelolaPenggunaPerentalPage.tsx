import AdminNavbar from "./AdminNavbar";
import AdminPageHeader from "./AdminPageHeader";
import type { PenggunaPerental } from "../../shared/types";

function AvatarIcon() {
  return (
    <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#E3ECFB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width={30} height={30} viewBox="0 0 24 24" fill="#3B82F6">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 5a3 3 0 110 6 3 3 0 010-6zm0 14a8 8 0 01-6.4-3.2c.03-2.12 4.27-3.3 6.4-3.3 2.13 0 6.37 1.18 6.4 3.3A8 8 0 0112 21z" />
      </svg>
    </div>
  );
}

function VerifiedBadge() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="#0094F6">
      <path d="M12 1l2.6 2.1 3.3-.4 1 3.2 3.1 1.2-.6 3.3 2 2.6-2 2.6.6 3.3-3.1 1.2-1 3.2-3.3-.4L12 23l-2.6-2.1-3.3.4-1-3.2-3.1-1.2.6-3.3-2-2.6 2-2.6-.6-3.3 3.1-1.2 1-3.2 3.3.4z" />
      <path d="M8.5 12.5l2.3 2.3 4.7-5" stroke="#fff" strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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

export default function KelolaPenggunaPerentalPage({
  list,
  onBack,
  onOpenDetail,
  onDelete,
  onLogout,
}: {
  list: PenggunaPerental[];
  onBack: () => void;
  onOpenDetail: (id: number) => void;
  onDelete: (id: number) => void;
  onLogout: () => void;
}) {
  const handleDelete = (p: PenggunaPerental) => {
    if (confirm(`Hapus akun perental "${p.nama}"?`)) onDelete(p.id);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar onLogout={onLogout} />
      <AdminPageHeader title="Kelola Pengguna Perental" onBack={onBack} />

      <main style={{ padding: "32px 40px 80px" }}>
        {list.length === 0 ? (
          <p style={{ textAlign: "center", fontFamily: "'Open Sans', sans-serif", color: "#888", marginTop: 60 }}>Belum ada akun perental.</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            {list.map(p => (
              <div
                key={p.id}
                onClick={() => onOpenDetail(p.id)}
                style={{ background: "#dcdcdc", borderRadius: 18, padding: "22px 26px", display: "flex", gap: 18, cursor: "pointer", position: "relative" }}
              >
                <AvatarIcon />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <p style={{ margin: 0, fontFamily: "'Open Sans', sans-serif", fontWeight: 800, fontSize: 20, color: "#000" }}>{p.nama}</p>
                    {p.verified && <VerifiedBadge />}
                  </div>
                  <DetailRow label="No telp dan Email" value={`${p.telepon} / ${p.email}`} />
                  <DetailRow label="Deskripsi Toko" value={p.deskripsiToko} />
                  <DetailRow label="Kategori" value={p.kategori} bold />
                  <DetailRow label="Alamat Toko" value={p.alamatToko} bold />
                </div>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    handleDelete(p);
                  }}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 4, position: "absolute", top: 18, right: 18 }}
                  aria-label={`Hapus ${p.nama}`}
                >
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

function DetailRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 6 }}>
      <span style={{ minWidth: 130, fontFamily: "'Open Sans', sans-serif", fontWeight: bold ? 700 : 400, fontSize: 13, color: "#000", flexShrink: 0 }}>
        {label}
      </span>
      <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#222" }}>: {value}</span>
    </div>
  );
}