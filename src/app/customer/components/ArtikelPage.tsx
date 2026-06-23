import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { useState } from "react";
import ArtikelImport from "../../../imports/DetailArtikel/index";
import { ArtikelSidebarMenu } from "./ArtikelSidebarMenu";

interface Props {
  onHome: () => void;
  onArtikel1?: () => void;
  onArtikel2?: () => void;
  onKatalog?: () => void;
}

// Navbarwithlogo: top=0, left=0, w=1728px, h=281.51px
const NAV_W = 1728;
const NAV_H = 281.51;

function navBtn(leftPct: number, rightPct: number, topPct = 0.1628, bottomPct = 0.7057) {
  const top = topPct * NAV_H;
  const left = leftPct * NAV_W;
  const width = NAV_W - leftPct * NAV_W - rightPct * NAV_W;
  const height = NAV_H - topPct * NAV_H - bottomPct * NAV_H;
  return { position: "absolute" as const, top, left, width, height, zIndex: 100, background: "transparent", border: "none", cursor: "pointer", borderRadius: 10 };
}

function articleIdToPage(id: number, onArtikel1?: () => void, onArtikel2?: () => void) {
  if (id === 1 || id === 7) onArtikel1?.();
  else if (id === 3 || id === 5) onArtikel2?.();
}

export default function ArtikelPage({ onHome, onArtikel1, onArtikel2, onKatalog }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: 3285 }}>
        <ArtikelImport />

        {/* Logout → back to landing */}
        <button aria-label="Logout" onClick={onHome} style={navBtn(0.8391, 0.0961)} />
        {/* Home → landing */}
        <button aria-label="Home" onClick={onHome} style={navBtn(0.6042, 0.331)} />
        {/* Katalog */}
        <button aria-label="Katalog" onClick={onKatalog} style={{ position: "absolute", left: 1180, top: 45.83, width: 111, height: 37.1, zIndex: 100, background: "transparent", border: "none", cursor: "pointer", borderRadius: 8 }} />

        {/* Hamburger menu button — over List icon (left=1664, top=248) */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          style={{ position: "absolute", left: 1660, top: 244, width: 48, height: 48, zIndex: 100, background: "transparent", border: "none", cursor: "pointer", borderRadius: 8 }}
        />
      </div>

      {menuOpen && (
        <ArtikelSidebarMenu
          onClose={() => setMenuOpen(false)}
          onNavigate={(id) => {
            setMenuOpen(false);
            articleIdToPage(id, onArtikel1, onArtikel2);
          }}
        />
      )}
    </ResponsiveCanvas>
  );
}
