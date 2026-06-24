/**
 * admin/components/AdminPageHeader.tsx
 * Header breadcrumb (back arrow + judul) dipakai di halaman-halaman Kelola Pengguna.
 */
export default function AdminPageHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        border: "1.5px solid #ddd",
        borderRadius: 16,
        padding: "16px 24px",
        margin: "24px 40px 0",
      }}
    >
      <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, padding: 0, lineHeight: 1 }} aria-label="Kembali">
        ←
      </button>
      <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 22, color: "#000" }}>{title}</span>
    </div>
  );
}