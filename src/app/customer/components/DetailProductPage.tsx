import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { useState } from "react";
import DetailProductImport from "../../../imports/DetailProduct/index";
import type { CartItem } from "../../types";
import { ProfileMenu } from "./ProfileMenu";
import type { ProductData } from "../data/product";

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
  onCheckout?: () => void;
  onAddToCart?: (item: CartItem) => void;
  onGoToCart?: () => void;
  onHistory?: () => void;
  onEditProfile?: () => void;
  product?: ProductData; // <-- tambah ini
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
// FIX: header hari sebelumnya "Min, Sen, Sel, ..." (3 huruf, gaya Indonesia panjang)
// tidak sesuai mockup yang memakai inisial 1 huruf ala Material Design (S M T W T F S).
const DAYS_ID = ["S", "M", "T", "W", "T", "F", "S"];

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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 8 }}>
        {DAYS_ID.map((d, i) => (
          // FIX: key ditambahkan index karena "T" (Tuesday/Thursday) dan "S" (Sunday/Saturday) duplikat
          <div key={`${d}-${i}`} style={{ textAlign: "center", fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 16, color: "#1d1b20", paddingBottom: 4 }}>
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
          // FIX: warna aksen disamakan dengan mockup (ungu Material #6750a4),
          // sebelumnya memakai biru #5b6ef5 yang membuat kalender terlihat seperti
          // komponen generik, bukan seperti hasil desain Figma.
          let color = isPast ? "#ccc" : "#1d1b20";
          let borderRadius = "50%";

          if (isStart || isEnd) {
            bg = "#6750a4";
            color = "#fff";
          } else if (inRange) {
            bg = "#eaddff";
            color = "#1d1b20";
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
                border: isToday && !isStart && !isEnd ? "1.5px solid #6750a4" : "none",
                borderRadius,
                width: "100%",
                aspectRatio: "1",
                cursor: isPast ? "default" : "pointer",
                fontFamily: "'Roboto', sans-serif",
                fontSize: 16,
                fontWeight: 400,
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

export default function DetailProductPage({ onHome, onArtikel, onKatalog, onCheckout, onAddToCart, onGoToCart, onHistory, onEditProfile, product, }: Props) {
   // Nama & info produk dari props, fallback ke default
  const productName = product?.name ?? "Kebaya Janggan Merah";
  const productDesc = product?.description ?? "Baju ini berdesain elegan dan mewah...";
  const productSize = product?.size ?? "L";
  const productLocation = product?.location ?? "Jakarta Selatan";
  const productCategory = product?.category ?? "Baju Adat";
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
      name: productName,           // <-- pakai variabel
      description: productDesc,   // <-- pakai variabel
      seller: "WCR",
      size: productSize,           // <-- pakai variabel
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

        {/*
          FIX: Overlay kategori.
          Sebelumnya overlay ini digabung dengan overlay judul di top:162 dan
          tidak memiliki background, sehingga menimpa breadcrumb statis
          "Baju Mc / Penyanyi / Adat" tanpa menutupinya secara bersih (dua teks
          transparan bertumpuk). Sekarang dipisah, diberi background solid,
          dan tetap berada tepat di posisi breadcrumb (top:162) — sesuai
          layout target: breadcrumb di baris ini, gambar & judul di bawahnya.
        */}
        <div
          style={{
            position: "absolute",
            left: 120,
            top: 162,
            width: 700,
            height: 30,
            zIndex: 50,
            pointerEvents: "none",
            background: "#fff",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: 20,
            color: "#000",
          }}
        >
          {productCategory}
        </div>

        {/*
          FIX: Overlay nama produk.
          Sebelumnya top:162 (dekat area breadcrumb & atas gambar), sehingga
          judul dan kategori tampak bertumpuk DI ATAS gambar produk (gambar
          dimulai top:204). Sekarang dipindahkan ke top:745, tepat setelah
          gambar berakhir (204 + 525 tinggi gambar = 729), selaras dengan
          posisi statis Figma yang sudah diperbaiki di imports/DetailProduct.
          Diberi background solid agar tidak tumpang tindih dengan teks statis
          di baliknya.
        */}
        <div
          style={{
            position: "absolute",
            left: 120,
            top: 745,
            width: 700,
            minHeight: 60,
            zIndex: 50,
            pointerEvents: "none",
            background: "#fff",
          }}
        >
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 36,
              color: "#000",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {productName}
          </h1>
        </div>

        {/* Overlay deskripsi produk (menutupi teks Figma di top≈809) */}
        <div
          style={{
            position: "absolute",
            left: 125,
            top: 809,
            width: 1100,
            zIndex: 50,
            pointerEvents: "none",
            fontFamily: "'Open Sans', sans-serif",
            fontStyle: "italic",
            fontSize: 20,
            color: "#000",
            lineHeight: 1.8,
            background: "#fff", // menutupi teks Figma
            padding: "8px 0",
          }}
        >
          <p style={{ margin: "0 0 8px 0" }}>{productDesc}</p>
          <p style={{ margin: "0 0 4px 0", fontWeight: 600, fontStyle: "normal" }}>Kelengkapan Sewa:</p>
          <ul style={{ margin: 0, paddingLeft: 24 }}>
            <li>Pakaian Utama: {productName}</li>
            <li>Pakaian Pendamping sesuai paket</li>
            <li>Aksesori pelengkap (tergantung paket sewa)</li>
            <li>Layanan laundry termasuk dalam harga sewa</li>
          </ul>
        </div>

        {/* Overlay Size & Lokasi (menutupi Figma di top≈1017-1072) */}
        <div
          style={{
            position: "absolute",
            left: 125,
            top: 1010,
            zIndex: 50,
            pointerEvents: "none",
            background: "#fff",
            padding: "4px 8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "'Open Sans', sans-serif", fontSize: 22, color: "#000", marginBottom: 8 }}>
            <span>Size:</span>
            <span
              style={{
                display: "inline-block",
                background: "#D9D9D9",
                borderRadius: "50%",
                width: 36,
                height: 36,
                textAlign: "center",
                lineHeight: "36px",
                fontWeight: 600,
              }}
            >
              {productSize}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Open Sans', sans-serif", fontSize: 22, color: "#000" }}>
            <svg width="18" height="22" viewBox="0 0 20 24" fill="none">
              <path d="M10 0C6.13 0 3 3.13 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5s2.5 1.12 2.5 2.5S11.38 9.5 10 9.5z" fill="black"/>
            </svg>
            <span>{productLocation}</span>
          </div>
        </div>

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

        {/*
          FIX: Kalender interaktif.
          Sebelumnya:
          - top:1700 dan tinggi konten (2 kolom bulan + padding besar) jauh
            melebihi area kalender statis di bawahnya (yang dimulai top:1792),
            sehingga saling tumpang tindih ("Semua elemen terlihat saling
            menimpa").
          - Gaya visual (border biru terang, shadow besar, emoji 📅, 2 bulan
            berdampingan, tombol "Reset") berbeda total dari mockup Material
            Design (ungu #6750a4, satu bulan per tampilan, tombol "Cancel/OK",
            header hari 1 huruf), sehingga terlihat "seperti komponen default
            browser" dibanding mockup.
          Sekarang: satu kolom bulan, warna & tipografi disamakan dengan
          mockup, posisi disesuaikan agar pas menimpa kalender statis Figma
          tanpa keluar area maupun bertabrakan dengan elemen lain.
          Business logic (handleDayClick, startDate/endDate, rentalDays,
          format tanggal) SAMA SEKALI TIDAK diubah.
        */}
        <div
          style={{
            position: "absolute",
            left: 125,
            top: 1709,
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
              border: "1.5px solid #6750a4",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              fontFamily: "'Roboto', sans-serif",
              fontSize: 16,
              color: startDate ? "#1d1b20" : "#999",
              boxSizing: "border-box",
              marginBottom: 8,
            }}
          >
            {dateRangeDisplay}
          </div>

          {/* Calendar */}
          <div
            style={{
              background: "#ece6f0",
              borderRadius: 16,
              padding: "16px 24px 12px",
              boxSizing: "border-box",
            }}
          >
            {/* Month navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <button
                onClick={() => setCalMonth(new Date(leftYear, leftMonth - 1, 1))}
                style={{ background: "none", border: "none", borderRadius: 100, width: 40, height: 40, cursor: "pointer", fontSize: 18, color: "#49454f", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ‹
              </button>
              <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 14, color: "#49454f" }}>
                {MONTHS_ID[leftMonth].slice(0, 3)} {leftYear}
              </span>
              <button
                onClick={() => setCalMonth(new Date(leftYear, leftMonth + 1, 1))}
                style={{ background: "none", border: "none", borderRadius: 100, width: 40, height: 40, cursor: "pointer", fontSize: 18, color: "#49454f", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ›
              </button>
            </div>

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

            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 8, marginTop: 12, padding: "4px 0" }}>
              {startDate && endDate && (
                <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#6750a4", marginRight: 8 }}>
                  {rentalDays} hari sewa
                </span>
              )}
              <button
                onClick={() => { setStartDate(null); setEndDate(null); }}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 14, color: "#6750a4", padding: "10px 16px" }}
              >
                Cancel
              </button>
              <button
                disabled={!startDate || !endDate}
                style={{ background: "none", border: "none", cursor: startDate && endDate ? "pointer" : "default", fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 14, color: startDate && endDate ? "#6750a4" : "#c8c2cc", padding: "10px 16px" }}
              >
                OK
              </button>
            </div>
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