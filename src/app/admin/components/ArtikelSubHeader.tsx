import { useState } from "react";

/**
 * Sub-header article: search box + hamburger icon
 * Muncul di bawah AdminNavbar di halaman folder & detail artikel.
 */
export default function ArtikelSubHeader({
  onSearch,
}: {
  onSearch?: (q: string) => void;
}) {
  const [q, setQ] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12, padding: "14px 40px", borderBottom: "1px solid #eee" }}>
      <input
        value={q}
        onChange={e => {
          setQ(e.target.value);
          onSearch?.(e.target.value);
        }}
        placeholder="Search"
        style={{ border: "1px solid #ccc", borderRadius: 20, padding: "8px 20px", fontFamily: "'Open Sans', sans-serif", fontSize: 14, outline: "none", width: 200 }}
      />
      <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "#333" }}>☰</button>
    </div>
  );
}