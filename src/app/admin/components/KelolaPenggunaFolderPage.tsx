import AdminNavbar from "../AdminNavbar";
import AdminPageHeader from "./AdminPageHeader";

function TrashIcon() {
  return (
    <svg width={26} height={30} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}

function FolderCard({ label, onOpen, onDelete }: { label: string; onOpen: () => void; onDelete: () => void }) {
  return (
    <div style={{ position: "relative", cursor: "pointer" }} onClick={onOpen}>
      <div style={{ width: "100%", background: "#F5B73D", borderRadius: "0 18px 18px 18px", minHeight: 280, position: "relative", paddingTop: 56 }}>
        <div style={{ position: "absolute", top: -28, left: 0, width: 220, height: 30, background: "#F5B73D", borderRadius: "14px 14px 0 0" }} />
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800, fontSize: 17, color: "#000", padding: "0 22px", position: "absolute", top: -48, left: 0 }}>
          {label}
        </p>
        <div style={{ position: "absolute", bottom: 20, right: 22 }}>
          <button
            onClick={e => {
              e.stopPropagation();
              onDelete();
            }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
            aria-label={`Hapus ${label}`}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function KelolaPenggunaFolderPage({
  onBack,
  onOpenPengguna,
  onOpenPemilik,
  onClearPengguna,
  onClearPemilik,
  onLogout,
}: {
  onBack: () => void;
  onOpenPengguna: () => void;
  onOpenPemilik: () => void;
  onClearPengguna: () => void;
  onClearPemilik: () => void;
  onLogout: () => void;
}) {
  const handleClear = (label: string, action: () => void) => {
    if (confirm(`Hapus semua data pada ${label}? Tindakan ini tidak dapat dibatalkan.`)) {
      action();
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar onLogout={onLogout} />
      <AdminPageHeader title="Kelola Pengguna" onBack={onBack} />

      <main style={{ padding: "40px 40px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, maxWidth: 1100 }}>
          <FolderCard
            label="FOLDER PENGGUNA"
            onOpen={onOpenPengguna}
            onDelete={() => handleClear("Folder Pengguna", onClearPengguna)}
          />
          <FolderCard
            label="FOLDER PEMILIK"
            onOpen={onOpenPemilik}
            onDelete={() => handleClear("Folder Pemilik", onClearPemilik)}
          />
        </div>
      </main>
    </div>
  );
}