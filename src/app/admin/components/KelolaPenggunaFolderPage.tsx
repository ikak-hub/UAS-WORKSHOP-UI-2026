import { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import AdminPageHeader from "./AdminPageHeader";

function TrashIcon() {
  return (
    <svg width={32} height={36} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}

function FolderCard({
  label,
  onOpen,
  onDelete,
}: {
  label: string;
  onOpen: () => void;
  onDelete: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        .folder-card-wrap {
          position: relative;
          cursor: pointer;
          user-select: none;
        }
        .folder-tab {
          position: absolute;
          top: 0;
          left: 0;
          width: 52%;
          height: 34px;
          background: #F5B73D;
          border-radius: 16px 16px 0 0;
          display: flex;
          align-items: center;
          padding-left: 18px;
          z-index: 1;
        }
        .folder-tab span {
          font-family: 'Open Sans', sans-serif;
          font-weight: 800;
          font-size: 14px;
          color: #000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .folder-body {
          margin-top: 26px;
          border-radius: 0 18px 18px 18px;
          min-height: 280px;
          position: relative;
          transition: background 0.15s, box-shadow 0.15s;
        }
        .folder-trash {
          position: absolute;
          bottom: 20px;
          right: 22px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .folder-trash:hover {
          background: rgba(0,0,0,0.08);
        }

        /* Tablet */
        @media (max-width: 768px) {
          .folder-tab {
            height: 28px;
          }
          .folder-tab span {
            font-size: 12px;
          }
          .folder-body {
            min-height: 200px;
            margin-top: 22px;
            border-radius: 0 14px 14px 14px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .folder-tab {
            height: 24px;
            width: 60%;
          }
          .folder-tab span {
            font-size: 10px;
          }
          .folder-body {
            min-height: 150px;
            margin-top: 18px;
            border-radius: 0 12px 12px 12px;
          }
          .folder-trash svg {
            width: 24px;
            height: 28px;
          }
        }
      `}</style>

      <div
        className="folder-card-wrap"
        onClick={onOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onKeyDown={e => e.key === "Enter" && onOpen()}
        tabIndex={0}
        role="button"
        aria-label={label}
      >
        {/* Tab atas */}
        <div className="folder-tab">
          <span>{label}</span>
        </div>

        {/* Body folder */}
        <div
          className="folder-body"
          style={{
            background: hovered ? "#E8A82A" : "#F5B73D",
            boxShadow: hovered
              ? "0 6px 20px rgba(245,183,61,0.4)"
              : "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {/* Trash button */}
          <button
            className="folder-trash"
            onClick={e => { e.stopPropagation(); onDelete(); }}
            aria-label={`Hapus ${label}`}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </>
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
    <>
      <style>{`
        .kelola-main {
          padding: 40px 48px 80px;
        }
        .kelola-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 1100px;
        }

        @media (max-width: 768px) {
          .kelola-main {
            padding: 28px 24px 60px;
          }
          .kelola-grid {
            gap: 28px;
          }
        }

        @media (max-width: 480px) {
          .kelola-main {
            padding: 16px 12px 40px;
          }
          .kelola-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
        <AdminNavbar showHome onHome={onBack} onLogout={onLogout} />
        <AdminPageHeader title="Kelola Pengguna" onBack={onBack} />

        <main className="kelola-main">
          <div className="kelola-grid">
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
    </>
  );
}