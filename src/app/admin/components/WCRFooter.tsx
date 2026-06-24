import { LogoMark } from "../../shared/components/LogoMark";

/**
 * Footer biru WCR — dipakai di DetailArtikelPage.
 */
export default function WCRFooter() {
  return (
    <footer style={{ background: "#0094F6", padding: "36px 48px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24, maxWidth: 900, margin: "0 auto 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
          <LogoMark />
          <div>
            <p style={{ margin: "0 0 2px", fontFamily: "'Secular One', sans-serif", color: "#fff", fontSize: 22, fontWeight: 700 }}>WCR</p>
            <p style={{ margin: "0 0 2px", fontFamily: "'Open Sans', sans-serif", color: "#fff", fontSize: 11 }}>(WARDROBE COSTUME RENTAL)</p>
            <p style={{ margin: "0 0 8px", fontFamily: "'Open Sans', sans-serif", color: "#fff", fontSize: 11 }}>Social Media</p>
            <div style={{ display: "flex", gap: 12 }}>
              {["f", "t", "ig"].map(s => (
                <div key={s} style={{ width: 28, height: 28, border: "1.5px solid #fff", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{s === "f" ? "f" : s === "t" ? "t" : "📷"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.3)", maxWidth: 900, margin: "0 auto 16px" }} />
      <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
        {["About", "Authors", "Archive", "Cookie Policy", "Terms and Conditions"].map(link => (
          <button key={link} style={{ background: "none", border: "none", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontSize: 13, cursor: "pointer", padding: 0 }}>
            {link}
          </button>
        ))}
      </div>
    </footer>
  );
}