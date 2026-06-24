/**
 * admin/components/TransaksiPageHeader.tsx
 * Header bar (back arrow + judul + home/bell) dipakai di semua halaman Kelola Transaksi.
 */
function HomeIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

export default function TransaksiPageHeader({
  onBack,
  onHome,
}: {
  onBack: () => void;
  onHome: () => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, border: "1.5px solid #ddd", borderRadius: 16, padding: "16px 24px", margin: "24px 40px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, padding: 0, lineHeight: 1 }} aria-label="Kembali">
          ←
        </button>
        <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 22, color: "#000" }}>Kelola Transaksi</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button onClick={onHome} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }} aria-label="Home">
          <HomeIcon />
        </button>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }} aria-label="Notifikasi" type="button">
          <BellIcon />
        </button>
      </div>
    </div>
  );
}