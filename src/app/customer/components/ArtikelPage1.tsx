import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { useState } from "react";
import ArtikelImport from "../../../imports/DetailArtikel-1/index";
import { ArtikelSidebarMenu } from "./ArtikelSidebarMenu";

interface Props {
  onHome: () => void;
  onArtikel?: () => void;
  onArtikel2?: () => void;
  onKatalog?: () => void;
}

// Navbarwithlogo: top=0, left=0, w=1728px, h=281.51px — same structure as DetailArtikel
const NAV_W = 1728;
const NAV_H = 281.51;

function navBtn(leftPct: number, rightPct: number, topPct = 0.1628, bottomPct = 0.7057) {
  const top = topPct * NAV_H;
  const left = leftPct * NAV_W;
  const width = NAV_W - leftPct * NAV_W - rightPct * NAV_W;
  const height = NAV_H - topPct * NAV_H - bottomPct * NAV_H;
  return { position: "absolute" as const, top, left, width, height, zIndex: 100, background: "transparent", border: "none", cursor: "pointer", borderRadius: 10 };
}

export default function ArtikelPage1({ onHome, onArtikel, onArtikel2, onKatalog }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ResponsiveCanvas>
      {/* Same canvas size: DownBar top=2955 + h=330 = 3285px */}
      <div className="relative" style={{ width: 1728, height: 3285 }}>
        <ArtikelImport />

        {/* Logout → back to landing */}
        <button aria-label="Logout" onClick={onHome} style={navBtn(0.8391, 0.0961)} />
        {/* Home → landing */}
        <button aria-label="Home" onClick={onHome} style={navBtn(0.6042, 0.331)} />
        {/* Katalog */}
        <button aria-label="Katalog" onClick={onKatalog} style={{ position: "absolute", left: 1180, top: 45.83, width: 111, height: 37.1, zIndex: 100, background: "transparent", border: "none", cursor: "pointer", borderRadius: 8 }} />

        {/* Hamburger — over List icon (left=1668, top=210) in DetailArtikel-1 */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          style={{ position: "absolute", left: 1664, top: 206, width: 48, height: 48, zIndex: 100, background: "transparent", border: "none", cursor: "pointer", borderRadius: 8 }}
        />
      </div>

      {menuOpen && (
        <ArtikelSidebarMenu
          onClose={() => setMenuOpen(false)}
          onNavigate={(id) => {
            setMenuOpen(false);
            if (id === 3 || id === 5) onArtikel2?.();
            else if (id === 4 || id === 6) onArtikel?.();
          }}
        />
      )}
    </ResponsiveCanvas>
  );
}
