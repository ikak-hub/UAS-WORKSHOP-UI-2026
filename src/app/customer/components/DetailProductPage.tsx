import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { useState } from "react";
import DetailProductImport from "../../../imports/DetailProduct/index";
import type { CartItem } from "../../types";
import { ProfileMenu } from "./ProfileMenu";

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
  onCheckout?: () => void;
  onAddToCart?: (item: CartItem) => void;
  onGoToCart?: () => void;
  onHistory?: () => void;
  onEditProfile?: () => void;
}

// Pnavbar: h=127px, buttons at top≈45.83, h≈37.1 within the 1728px canvas
const NAV_BTN_TOP = 45.83;
const NAV_BTN_H = 37.1;

function navBtn(left: number, width: number) {
  return {
    position: "absolute" as const,
    top: NAV_BTN_TOP,
    left,
    width,
    height: NAV_BTN_H,
    zIndex: 100,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    borderRadius: 8,
  };
}

const MONTHS_ID = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const DAYS_ID = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isInRange(day: Date, start: Date | null, end: Date | null) {
  if (!start || !end) return false;
  return day > start && day < end;
}

function buildCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (Date | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d));
  return days;
}

function CalendarMonth({
  year,
  month,
  startDate,
  endDate,
  hoverDate,
  onDayClick,
  onDayHover,
  today,
}: {
  year: number;
  month: number;
  startDate: Date | null;
  endDate: Date | null;
  hoverDate: Date | null;
  onDayClick: (d: Date) => void;
  onDayHover: (d: Date | null) => void;
  today: Date;
}) {
  const days = buildCalendarDays(year, month);
  const previewEnd = endDate ?? hoverDate;

  return (
    <div style={{ flex: 1 }}>
      <div style={{ textAlign: "center", fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 18, color: "#1a1a2e", marginBottom: 16 }}>
        {MONTHS_ID[month]} {year}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 8 }}>
        {DAYS_ID.map((d) => (
          <div key={d} style={{ textAlign: "center", fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 13, color: "#888", paddingBottom: 4 }}>
            {d}
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
        {days.map((day, idx) => {
          if (!day) return <div key={idx} />;

          const isPast = day < today && !isSameDay(day, today);
          const isStart = startDate ? isSameDay(day, startDate) : false;
          const isEnd = endDate ? isSameDay(day, endDate) : false;
          const isToday = isSameDay(day, today);
          const inRange = isInRange(day, startDate, previewEnd);

          let bg = "transparent";
          let color = isPast ? "#ccc" : "#1a1a2e";
          let borderRadius = "50%";

          if (isStart || isEnd) {
            bg = "#5b6ef5";
            color = "#fff";
          } else if (inRange) {
            bg = "#e8eaff";
            color = "#1a1a2e";
            borderRadius = "0";
          }

          return (
            <button
              key={idx}
              disabled={isPast}
              onClick={() => !isPast && onDayClick(day)}
              onMouseEnter={() => !isPast && onDayHover(day)}
              onMouseLeave={() => onDayHover(null)}
              style={{
                background: bg,
                color,
                border: isToday && !isStart && !isEnd ? "1.5px solid #5b6ef5" : "none",
                borderRadius,
                width: "100%",
                aspectRatio: "1",
                cursor: isPast ? "default" : "pointer",
                fontFamily: "'Roboto', sans-serif",
                fontSize: 14,
                fontWeight: isStart || isEnd ? 700 : 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                transition: "background 0.15s",
              }}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function DetailProductPage({ onHome, onArtikel, onKatalog, onCheckout, onAddToCart, onGoToCart, onHistory, onEditProfile }: Props) {
  const [cartAdded, setCartAdded] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [calMonth, setCalMonth] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const leftYear = calMonth.getFullYear();
  const leftMonth = calMonth.getMonth();
  const rightDate = new Date(leftYear, leftMonth + 1, 1);
  const rightYear = rightDate.getFullYear();
  const rightMonth = rightDate.getMonth();

  function handleDayClick(day: Date) {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day < startDate) {
      setStartDate(day);
      setEndDate(null);
    } else {
      setEndDate(day);
    }
  }

  function formatDate(d: Date | null) {
    if (!d) return "";
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`;
  }

  const dateRangeDisplay = startDate
    ? endDate
      ? `${formatDate(startDate)} — ${formatDate(endDate)}`
      : `${formatDate(startDate)} — pilih tanggal selesai`
    : "Pilih tanggal mulai sewa";

  function handleCart() {
    if (!startDate || !endDate) {
      alert("Pilih tanggal sewa terlebih dahulu.");
      return;
    }
    const newItem: CartItem = {
      id: `cart-${Date.now()}`,
      name: "Kebaya Janggan (Merah)",
      description: "Kebaya wisuda elegan dengan nuansa bali",
      seller: "Sicepot",
      size: "L",
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      rentalDays,
      price: 300000,
    };
    onAddToCart?.(newItem);
    setCartAdded(true);
  }

  function handleCheckout() {
    if (!startDate || !endDate) {
      alert("Pilih tanggal sewa terlebih dahulu.");
      return;
    }
    setShowCheckout(true);
  }

  const rentalDays = startDate && endDate
    ? Math.round((endDate.getTime() - startDate.getTime()) / 86400000) + 1
    : 0;

  return (
    <ResponsiveCanvas>
      <div className="relative" style={{ width: 1728, height: 1808 }}>
        <DetailProductImport />
        <ProfileMenu onHistory={onHistory ?? (() => {})} onEditProfile={onEditProfile ?? (() => {})} />

        {/* Nav buttons */}
        <button aria-label="Home" onClick={onHome} style={navBtn(1063, 112)} />
        <button aria-label="Katalog" onClick={onKatalog} style={navBtn(1199, 111)} />
        <button aria-label="Artikel" onClick={onArtikel} style={navBtn(1334, 111)} />
        <button aria-label="Logout" onClick={onHome} style={navBtn(1469, 112)} />

        {/* Checkout button overlay */}
        <button
          aria-label="Checkout"
          onClick={handleCheckout}
          style={{
            position: "absolute",
            left: 1257,
            top: 204,
            width: 324,
            height: 59,
            zIndex: 100,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            borderRadius: 8,
          }}
        />

        {/* Cart button overlay */}
        <button
          aria-label="Tambah ke Keranjang"
          onClick={handleCart}
          style={{
            position: "absolute",
            left: 1257,
            top: 284,
            width: 324,
            height: 59,
            zIndex: 100,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            borderRadius: 8,
          }}
        />

        {/* Date range picker overlay — covers static Figma calendar */}
        <div
          style={{
            position: "absolute",
            left: 125,
            top: 1700,
            width: 1478,
            zIndex: 100,
          }}
        >
          {/* Date input display */}
          <div
            style={{
              width: "100%",
              height: 56,
              background: "#fff",
              border: "1.5px solid #5b6ef5",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              fontFamily: "'Roboto', sans-serif",
              fontSize: 17,
              color: startDate ? "#1a1a2e" : "#999",
              boxSizing: "border-box",
              marginBottom: 8,
            }}
          >
            <span style={{ marginRight: 12, fontSize: 20 }}>📅</span>
            {dateRangeDisplay}
          </div>

          {/* Calendar */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              border: "1px solid #e0e0e0",
              padding: "24px 32px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            {/* Month navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <button
                onClick={() => setCalMonth(new Date(leftYear, leftMonth - 1, 1))}
                style={{ background: "#f0f0f0", border: "none", borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ‹
              </button>
              <div style={{ flex: 1 }} />
              <button
                onClick={() => setCalMonth(new Date(leftYear, leftMonth + 1, 1))}
                style={{ background: "#f0f0f0", border: "none", borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ›
              </button>
            </div>

            <div style={{ display: "flex", gap: 40 }}>
              <CalendarMonth
                year={leftYear}
                month={leftMonth}
                startDate={startDate}
                endDate={endDate}
                hoverDate={hoverDate}
                onDayClick={handleDayClick}
                onDayHover={setHoverDate}
                today={today}
              />
              <div style={{ width: 1, background: "#e0e0e0" }} />
              <CalendarMonth
                year={rightYear}
                month={rightMonth}
                startDate={startDate}
                endDate={endDate}
                hoverDate={hoverDate}
                onDayClick={handleDayClick}
                onDayHover={setHoverDate}
                today={today}
              />
            </div>

            {startDate && endDate && (
              <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16 }}>
                <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 15, color: "#555" }}>
                  {rentalDays} hari sewa
                </span>
                <button
                  onClick={() => { setStartDate(null); setEndDate(null); }}
                  style={{ background: "#f0f0f0", border: "none", borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#555" }}
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart toast */}
      {cartAdded && (
        <div
          style={{
            position: "fixed",
            bottom: 36,
            right: 36,
            background: "#22c55e",
            color: "#fff",
            padding: "16px 24px",
            borderRadius: 14,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: 17,
            zIndex: 2000,
            boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span>✓ Ditambahkan ke keranjang!</span>
          <button
            onClick={() => { setCartAdded(false); onGoToCart?.(); }}
            style={{
              background: "rgba(255,255,255,0.25)", border: "1.5px solid rgba(255,255,255,0.6)",
              color: "#fff", borderRadius: 8, padding: "6px 16px",
              fontFamily: "'Roboto',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer",
            }}
          >Lihat Keranjang →</button>
        </div>
      )}

      {/* Checkout modal */}
      {showCheckout && (
        <>
          <div
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 2000 }}
            onClick={() => setShowCheckout(false)}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              background: "#fff",
              borderRadius: 20,
              padding: 40,
              zIndex: 2001,
              width: 480,
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 22, color: "#1a1a2e", marginBottom: 20, marginTop: 0 }}>
              Ringkasan Pesanan
            </h2>
            <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 16, color: "#333", lineHeight: 2 }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eee", paddingBottom: 12, marginBottom: 12 }}>
                <span>Tanggal Mulai</span>
                <span style={{ fontWeight: 500 }}>{formatDate(startDate)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eee", paddingBottom: 12, marginBottom: 12 }}>
                <span>Tanggal Selesai</span>
                <span style={{ fontWeight: 500 }}>{formatDate(endDate)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eee", paddingBottom: 12, marginBottom: 12 }}>
                <span>Durasi Sewa</span>
                <span style={{ fontWeight: 500 }}>{rentalDays} hari</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <button
                onClick={() => setShowCheckout(false)}
                style={{ flex: 1, padding: "14px 0", borderRadius: 12, border: "1.5px solid #ddd", background: "#fff", fontFamily: "'Roboto', sans-serif", fontSize: 16, cursor: "pointer", color: "#555" }}
              >
                Batal
              </button>
              <button
                onClick={() => { setShowCheckout(false); onCheckout?.(); }}
                style={{ flex: 2, padding: "14px 0", borderRadius: 12, border: "none", background: "#5b6ef5", color: "#fff", fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 16, cursor: "pointer" }}
              >
                Konfirmasi Pesanan
              </button>
            </div>
          </div>
        </>
      )}
    </ResponsiveCanvas>
  );
}
