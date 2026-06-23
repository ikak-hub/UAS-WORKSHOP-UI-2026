import { LogoMark } from "../../shared/components/LogoMark";

/**
 * admin/components/AdminNavbar.tsx
 * Navbar yang digunakan di semua halaman Admin (setelah login).
 */
export default function AdminNavbar({
  showHome = false,
  onHome,
  onLogout,
}: {
  showHome?: boolean;
  onHome?: () => void;
  onLogout?: () => void;
}) {
  return (
    <nav style={{
      background: "#0094F6",
      height: 80,
      display: "flex",
      alignItems: "center",
      padding: "0 32px",
      justifyContent: "space-between",
      flexShrink: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <LogoMark />
        <span style={{ color: "#fff", fontSize: 22, fontFamily: "'Secular One', sans-serif", fontWeight: 400, letterSpacing: 0.5 }}>
          WardrobeCostumRental
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {showHome && (
          <button
            onClick={onHome}
            style={{ background: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer", color: "#000" }}
          >
            Home
          </button>
        )}
        <button
          onClick={onLogout}
          style={{ background: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer", color: "#000" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}