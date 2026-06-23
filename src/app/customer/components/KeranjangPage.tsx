import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { useState } from "react";
import KeranjangImport from "../../../imports/Keranjang/index";
import imgProduct from "../../../imports/Keranjang/6d9889c899664e18dfd62c6971e8ba2b7c32919c.png";
import imgAvatar from "../../../imports/Keranjang/e6017670fd7b5bc5e16c37d790d7c203728cc55a.png";
import type { CartItem } from "../../types";
import { ProfileMenu } from "./ProfileMenu";

interface Props {
  cartItems: CartItem[];
  onUpdateCart: (id: string, updates: Partial<CartItem>) => void;
  onRemoveFromCart: (id: string) => void;
  onHome: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
  onBack: () => void;
  onCheckout: () => void;
  onHistory?: () => void;
  onEditProfile?: () => void;
}

const NAV_BTN_TOP = 45.83;
const NAV_BTN_H = 37.1;
const ITEMS_START = 278;
const ITEM_H = 353;
const ITEM_GAP = 10;
const DOWNBAR_H = 169;
const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

const MONTHS_ID = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const DAYS_ID = ["Min","Sen","Sel","Rab","Kam","Jum","Sab"];

function navBtn(left: number, width: number) {
  return {
    position: "absolute" as const,
    top: NAV_BTN_TOP, left, width,
    height: NAV_BTN_H, zIndex: 200,
    background: "transparent", border: "none", cursor: "pointer", borderRadius: 8,
  };
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function buildCalDays(year: number, month: number): (Date | null)[] {
  const fd = new Date(year, month, 1).getDay();
  const dim = new Date(year, month + 1, 0).getDate();
  const days: (Date | null)[] = [];
  for (let i = 0; i < fd; i++) days.push(null);
  for (let d = 1; d <= dim; d++) days.push(new Date(year, month, d));
  return days;
}

function CalMonth({
  year, month, start, end, hover, today, onDayClick, onDayHover,
}: {
  year: number; month: number; start: Date | null; end: Date | null;
  hover: Date | null; today: Date;
  onDayClick: (d: Date) => void; onDayHover: (d: Date | null) => void;
}) {
  const days = buildCalDays(year, month);
  const previewEnd = end ?? hover;
  return (
    <div style={{ flex: 1 }}>
      <div style={{ textAlign: "center", fontFamily: "'Roboto',sans-serif", fontWeight: 500, fontSize: 16, marginBottom: 12 }}>
        {MONTHS_ID[month]} {year}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2, marginBottom: 6 }}>
        {DAYS_ID.map(d => <div key={d} style={{ textAlign: "center", fontSize: 12, color: "#888" }}>{d}</div>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2 }}>
        {days.map((day, i) => {
          if (!day) return <div key={i} />;
          const isPast = day < today && !isSameDay(day, today);
          const isStart = start ? isSameDay(day, start) : false;
          const isEnd = end ? isSameDay(day, end) : false;
          const inRange = start && previewEnd && day > start && day < previewEnd;
          let bg = "transparent", color = isPast ? "#ccc" : "#1a1a2e", br = "50%";
          if (isStart || isEnd) { bg = "#0094f6"; color = "#fff"; }
          else if (inRange) { bg = "#e0f4ff"; color = "#1a1a2e"; br = "0"; }
          return (
            <button key={i} disabled={isPast}
              onClick={() => !isPast && onDayClick(day)}
              onMouseEnter={() => !isPast && onDayHover(day)}
              onMouseLeave={() => onDayHover(null)}
              style={{ background: bg, color, border: "none", borderRadius: br, width: "100%", aspectRatio: "1",
                cursor: isPast ? "default" : "pointer", fontSize: 13, fontFamily: "'Roboto',sans-serif",
                fontWeight: isStart || isEnd ? 700 : 400, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}
            >{day.getDate()}</button>
          );
        })}
      </div>
    </div>
  );
}

function fmtDate(iso: string) {
  const d = new Date(iso);
  return `${d.getDate().toString().padStart(2,"0")} ${MONTHS_ID[d.getMonth()].slice(0,3)} ${d.getFullYear()}`;
}

function fmt(n: number) { return n.toLocaleString("id-ID"); }

function EditDateModal({ item, onSave, onClose }: { item: CartItem; onSave: (s: string, e: string, days: number) => void; onClose: () => void }) {
  const today = new Date(); today.setHours(0,0,0,0);
  const [calMonth, setCalMonth] = useState(new Date(item.startDate));
  const [start, setStart] = useState<Date | null>(new Date(item.startDate));
  const [end, setEnd] = useState<Date | null>(new Date(item.endDate));
  const [hover, setHover] = useState<Date | null>(null);

  const ly = calMonth.getFullYear(), lm = calMonth.getMonth();
  const rd = new Date(ly, lm + 1, 1);

  function onDayClick(day: Date) {
    if (!start || (start && end)) { setStart(day); setEnd(null); }
    else if (day < start) { setStart(day); setEnd(null); }
    else setEnd(day);
  }

  const days = start && end ? Math.round((end.getTime() - start.getTime()) / 86400000) + 1 : 0;

  return (
    <>
      <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:3000 }} onClick={onClose} />
      <div style={{ position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"#fff", borderRadius:20, padding:32, zIndex:3001, width:760, boxShadow:"0 8px 40px rgba(0,0,0,0.2)" }}>
        <h3 style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:20, margin:"0 0 20px 0" }}>Ubah Tanggal Sewa</h3>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:16 }}>
          <button onClick={() => setCalMonth(new Date(ly, lm-1, 1))} style={{ border:"none", background:"#f0f0f0", borderRadius:8, width:32, height:32, cursor:"pointer", fontSize:16 }}>‹</button>
          <button onClick={() => setCalMonth(new Date(ly, lm+1, 1))} style={{ border:"none", background:"#f0f0f0", borderRadius:8, width:32, height:32, cursor:"pointer", fontSize:16 }}>›</button>
        </div>
        <div style={{ display:"flex", gap:32 }}>
          <CalMonth year={ly} month={lm} start={start} end={end} hover={hover} today={today} onDayClick={onDayClick} onDayHover={setHover} />
          <div style={{ width:1, background:"#eee" }} />
          <CalMonth year={rd.getFullYear()} month={rd.getMonth()} start={start} end={end} hover={hover} today={today} onDayClick={onDayClick} onDayHover={setHover} />
        </div>
        {start && end && (
          <p style={{ fontFamily:"'Roboto',sans-serif", fontSize:14, color:"#555", marginTop:12, marginBottom:0 }}>
            {fmtDate(start.toISOString())} — {fmtDate(end.toISOString())} · {days} hari
          </p>
        )}
        <div style={{ display:"flex", gap:12, marginTop:20 }}>
          <button onClick={onClose} style={{ flex:1, padding:"12px 0", borderRadius:10, border:"1.5px solid #ddd", background:"#fff", cursor:"pointer", fontFamily:"'Roboto',sans-serif", fontSize:15 }}>Batal</button>
          <button disabled={!start || !end} onClick={() => { if (start && end) onSave(start.toISOString(), end.toISOString(), days); }}
            style={{ flex:2, padding:"12px 0", borderRadius:10, border:"none", background: (start && end) ? "#0094f6" : "#ccc", color:"#fff", cursor: (start && end) ? "pointer" : "default", fontFamily:"'Roboto',sans-serif", fontWeight:600, fontSize:15 }}>
            Simpan Tanggal
          </button>
        </div>
      </div>
    </>
  );
}

function EditSizeModal({ current, onSave, onClose }: { current: string; onSave: (s: string) => void; onClose: () => void }) {
  const [sel, setSel] = useState(current);
  return (
    <>
      <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:3000 }} onClick={onClose} />
      <div style={{ position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"#fff", borderRadius:20, padding:40, zIndex:3001, width:480, boxShadow:"0 8px 40px rgba(0,0,0,0.2)" }}>
        <h3 style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:20, margin:"0 0 24px 0" }}>Ubah Ukuran</h3>
        <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:32 }}>
          {SIZES.map(s => (
            <button key={s} onClick={() => setSel(s)} style={{
              padding:"14px 28px", borderRadius:12, border: sel === s ? "2.5px solid #0094f6" : "1.5px solid #ddd",
              background: sel === s ? "#e0f4ff" : "#fff", color: sel === s ? "#0094f6" : "#333",
              fontFamily:"'Roboto',sans-serif", fontWeight: sel === s ? 700 : 400, fontSize:18, cursor:"pointer",
            }}>{s}</button>
          ))}
        </div>
        <div style={{ display:"flex", gap:12 }}>
          <button onClick={onClose} style={{ flex:1, padding:"14px 0", borderRadius:12, border:"1.5px solid #ddd", background:"#fff", cursor:"pointer", fontFamily:"'Roboto',sans-serif", fontSize:16 }}>Batal</button>
          <button onClick={() => onSave(sel)} style={{ flex:2, padding:"14px 0", borderRadius:12, border:"none", background:"#0094f6", color:"#fff", cursor:"pointer", fontFamily:"'Roboto',sans-serif", fontWeight:600, fontSize:16 }}>Simpan Ukuran</button>
        </div>
      </div>
    </>
  );
}

function DeleteConfirmModal({ name, onConfirm, onClose }: { name: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <>
      <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:3000 }} onClick={onClose} />
      <div style={{ position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"#fff", borderRadius:20, padding:40, zIndex:3001, width:460, textAlign:"center", boxShadow:"0 8px 40px rgba(0,0,0,0.2)" }}>
        <div style={{ fontSize:44, marginBottom:16 }}>🗑️</div>
        <h3 style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:20, margin:"0 0 12px 0" }}>Hapus dari Keranjang?</h3>
        <p style={{ fontFamily:"'Roboto',sans-serif", fontSize:15, color:"#555", margin:"0 0 28px 0" }}>{name}</p>
        <div style={{ display:"flex", gap:12 }}>
          <button onClick={onClose} style={{ flex:1, padding:"14px 0", borderRadius:12, border:"1.5px solid #ddd", background:"#fff", cursor:"pointer", fontFamily:"'Roboto',sans-serif", fontSize:16 }}>Batal</button>
          <button onClick={onConfirm} style={{ flex:2, padding:"14px 0", borderRadius:12, border:"none", background:"#ef4444", color:"#fff", cursor:"pointer", fontFamily:"'Roboto',sans-serif", fontWeight:600, fontSize:16 }}>Hapus</button>
        </div>
      </div>
    </>
  );
}

interface ModalState {
  type: "editDate" | "editSize" | "delete";
  itemId: string;
}

export default function KeranjangPage({ cartItems, onUpdateCart, onRemoveFromCart, onHome, onArtikel, onKatalog, onBack, onCheckout, onHistory, onEditProfile }: Props) {
  const [modal, setModal] = useState<ModalState | null>(null);
  const activeItem = modal ? cartItems.find(c => c.id === modal.itemId) : null;

  const downbarTop = Math.max(948, ITEMS_START + cartItems.length * (ITEM_H + ITEM_GAP));
  const canvasH = downbarTop + DOWNBAR_H;
  const totalPrice = cartItems.reduce((sum, c) => sum + c.price, 0);

  const actionBtn = (label: string, bg: string, color: string, onClick: () => void) => (
    <button onClick={onClick} style={{
      padding: "10px 22px", border: "none", borderRadius: 10, background: bg, color,
      fontFamily: "'Open Sans',sans-serif", fontWeight: 700, fontSize: 16, cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    }}>{label}</button>
  );

  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: canvasH }}>

        <ProfileMenu onHistory={onHistory ?? (() => {})} onEditProfile={onEditProfile ?? (() => {})} />

        {/* Figma import clipped to show only navbar (0-127px) + back bar (159-246px) */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 1728, height: 246, overflow: "hidden" }}>
          <div style={{ width: 1728, height: 1117, position: "relative" }}>
            <KeranjangImport />
          </div>
        </div>

        {/* Nav button overlays */}
        <button aria-label="Home" onClick={onHome} style={navBtn(1063, 112)} />
        <button aria-label="Katalog" onClick={onKatalog} style={navBtn(1199, 111)} />
        <button aria-label="Artikel" onClick={onArtikel} style={navBtn(1334, 111)} />
        <button aria-label="Logout" onClick={onHome} style={navBtn(1469, 112)} />

        {/* Back button overlay */}
        <button aria-label="Kembali" onClick={onBack}
          style={{ position:"absolute", left:22, top:159, width:280, height:87, zIndex:200, background:"transparent", border:"none", cursor:"pointer" }} />

        {/* Cart items */}
        {cartItems.length === 0 && (
          <div style={{ position:"absolute", top:420, left:0, width:1728, textAlign:"center" }}>
            <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:28, color:"#888" }}>Keranjang Anda kosong</p>
          </div>
        )}

        {cartItems.map((item, idx) => {
          const itemTop = ITEMS_START + idx * (ITEM_H + ITEM_GAP);
          return (
            <div key={item.id} style={{ position:"absolute", top:itemTop, left:1, width:1727, height:ITEM_H, background:"#bdbbbc" }}>
              {/* Seller row */}
              <div style={{ position:"absolute", top:14, left:23, display:"flex", alignItems:"center", gap:10 }}>
                <img src={imgAvatar} alt="" style={{ width:35, height:35, objectFit:"cover", borderRadius:"50%" }} />
                <span style={{ fontFamily:"'Open Sans',sans-serif", fontStyle:"italic", fontSize:24, color:"#000" }}>{item.seller}</span>
              </div>

              {/* Product image */}
              <div style={{ position:"absolute", top:69, left:76, width:247, height:243, borderRadius:10, overflow:"hidden" }}>
                <img src={imgProduct} alt={item.name} style={{ width:"100%", height:"181%", objectFit:"cover", objectPosition:"top" }} />
              </div>

              {/* Product info */}
              <div style={{ position:"absolute", top:69, left:390 }}>
                <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:24, color:"#000", margin:"0 0 6px 0" }}>{item.name}</p>
                <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:24, color:"#000", margin:"0 0 6px 0" }}>{item.description}</p>
                <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:24, color:"#000", margin:0 }}>Size : {item.size}</p>
              </div>

              {/* Rental info */}
              <div style={{ position:"absolute", top:176, left:390 }}>
                <p style={{ fontFamily:"'Open Sans',sans-serif", fontWeight:700, fontSize:24, color:"#000", margin:"0 0 8px 0" }}>
                  Masa Sewa : {item.rentalDays} Hari
                </p>
                <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:18, color:"#333", margin:0 }}>
                  {fmtDate(item.startDate)} — {fmtDate(item.endDate)}
                </p>
              </div>

              {/* Price */}
              <div style={{ position:"absolute", bottom:20, left:390 }}>
                <span style={{ fontFamily:"'Open Sans',sans-serif", fontWeight:700, fontSize:26, color:"#1a1a2e" }}>
                  Rp {fmt(item.price)}
                </span>
              </div>

              {/* Delete button */}
              <button
                onClick={() => setModal({ type:"delete", itemId:item.id })}
                style={{ position:"absolute", top:14, right:24, background:"#ef4444", border:"none", color:"#fff", borderRadius:"50%", width:40, height:40, cursor:"pointer", fontSize:20, display:"flex", alignItems:"center", justifyContent:"center", zIndex:10 }}
              >✕</button>

              {/* Edit buttons */}
              <div style={{ position:"absolute", bottom:18, right:24, display:"flex", gap:14 }}>
                {actionBtn("Ubah Tanggal", "#0094f6", "#fff", () => setModal({ type:"editDate", itemId:item.id }))}
                {actionBtn("Ubah Ukuran", "#fff", "#0094f6", () => setModal({ type:"editSize", itemId:item.id }))}
              </div>
            </div>
          );
        })}

        {/* Downbar */}
        <div style={{ position:"absolute", top:downbarTop, left:0, width:1728, height:DOWNBAR_H, background:"#0094f6" }}>
          {/* Total */}
          <div style={{ position:"absolute", left:284.5, top:"50%", transform:"translateX(-50%) translateY(-50%)", fontFamily:"'Montserrat',sans-serif", fontWeight:600, fontSize:28, color:"#000", whiteSpace:"nowrap" }}>
            Total : {cartItems.length} Item, Rp {fmt(totalPrice)}
          </div>
          {/* Checkout button */}
          <button
            onClick={cartItems.length > 0 ? onCheckout : undefined}
            style={{
              position:"absolute", left:1419, top:60, width:246, height:49,
              background:"white", borderRadius:15, border:"none",
              cursor: cartItems.length > 0 ? "pointer" : "default",
              fontFamily:"'Montserrat',sans-serif", fontWeight:600, fontSize:28, color:"#000",
              opacity: cartItems.length > 0 ? 1 : 0.5,
            }}
          >Checkout</button>
        </div>
      </div>

      {/* Modals */}
      {modal?.type === "editDate" && activeItem && (
        <EditDateModal item={activeItem} onClose={() => setModal(null)}
          onSave={(s, e, days) => { onUpdateCart(activeItem.id, { startDate:s, endDate:e, rentalDays:days }); setModal(null); }} />
      )}
      {modal?.type === "editSize" && activeItem && (
        <EditSizeModal current={activeItem.size} onClose={() => setModal(null)}
          onSave={(size) => { onUpdateCart(activeItem.id, { size }); setModal(null); }} />
      )}
      {modal?.type === "delete" && activeItem && (
        <DeleteConfirmModal name={activeItem.name} onClose={() => setModal(null)}
          onConfirm={() => { onRemoveFromCart(activeItem.id); setModal(null); }} />
      )}
    </ResponsiveCanvas>
  );
}
