import AdminNavbar from "./AdminNavbar";
import AdminPageHeader from "./AdminPageHeader";
import type { PenggunaPerental } from "../../shared/types";

function AvatarIcon() {
  return (
    <div style={{ width: 130, height: 130, borderRadius: "50%", background: "#E3ECFB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width={76} height={76} viewBox="0 0 24 24" fill="#3B82F6">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 5a3 3 0 110 6 3 3 0 010-6zm0 14a8 8 0 01-6.4-3.2c.03-2.12 4.27-3.3 6.4-3.3 2.13 0 6.37 1.18 6.4 3.3A8 8 0 0112 21z" />
      </svg>
    </div>
  );
}

export default function VerifikasiAkunPerentalPage({
  perental,
  onBack,
  onVerify,
  onLogout,
}: {
  perental: PenggunaPerental | null;
  onBack: () => void;
  onVerify: (id: number) => void;
  onLogout: () => void;
}) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar onLogout={onLogout} />
      <AdminPageHeader title="Verifikasi akun perental" onBack={onBack} />

      <main style={{ padding: "32px 40px 80px" }}>
        {!perental ? (
          <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#888" }}>Data tidak ditemukan.</p>
        ) : (
          <div style={{ background: "#dcdcdc", borderRadius: 18, padding: "32px 36px", maxWidth: 1100, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: 28 }}>
              <AvatarIcon />
              <div style={{ flex: 1 }}>
                <h2 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800, fontSize: 24, margin: "0 0 18px", color: "#000" }}>
                  {perental.nama}
                </h2>
                <Row label="No telp dan Email" value={`${perental.telepon} / ${perental.email}`} />
                <Row label="Deskripsi Toko" value={perental.deskripsiToko} multiline />
                <Row label="Kategori" value={perental.kategori} />
                <Row label="Alamat Toko" value={perental.alamatToko} />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 28 }}>
              {perental.verified ? (
                <span
                  style={{
                    background: "#0094F6",
                    color: "#fff",
                    borderRadius: 8,
                    padding: "16px 32px",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    textDecoration: "underline",
                  }}
                >
                  Telah Terverifikasi
                </span>
              ) : (
                <button
                  onClick={() => onVerify(perental.id)}
                  style={{
                    background: "#0094F6",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "16px 32px",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Verifikasi
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function Row({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
      <span style={{ minWidth: 140, fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#000", flexShrink: 0 }}>
        {label}
      </span>
      <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: "#000" }}>:</span>
      <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: "#000", whiteSpace: multiline ? "pre-line" : "normal" }}>
        {value}
      </span>
    </div>
  );
}