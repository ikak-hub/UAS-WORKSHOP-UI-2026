import AdminNavbar from "../AdminNavbar";
import TransaksiPageHeader from "./TransaksiPageHeader";
import type { Transaksi } from "../../types";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const fmtIDR = (n: number) => "Rp " + n.toLocaleString("id-ID");

const WEEKLY_DATA = [
  { day: "Sen", amount: 28000000 },
  { day: "Sel", amount: 19000000 },
  { day: "Rab", amount: 12000000 },
  { day: "Kam", amount: 26000000 },
  { day: "Jum", amount: 8000000 },
  { day: "Sab", amount: 21000000 },
  { day: "Min", amount: 24000000 },
];

export default function TransaksiStatistikPage({
  transaksiList,
  onBack,
  onHome,
  onLogout,
  onSeeDetails,
}: {
  transaksiList: Transaksi[];
  onBack: () => void;
  onHome: () => void;
  onLogout: () => void;
  onSeeDetails: () => void;
}) {
  const terverifikasi = transaksiList.filter(t => t.status === "Terverifikasi");
  const ditolak = transaksiList.filter(t => t.status === "Ditolak");
  const menunggu = transaksiList.filter(t => t.status === "Menunggu Verifikasi");

  const totalPendapatan = terverifikasi.reduce((s, t) => s + t.total, 0);
  const totalMenunggu = menunggu.reduce((s, t) => s + t.total, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar onLogout={onLogout} />
      <TransaksiPageHeader onBack={onBack} onHome={onHome} />

      <main style={{ padding: "32px 40px 80px" }}>
        <h2 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 22, margin: "0 0 20px", color: "#000" }}>
          Statistik Pengguna Yang Berbelanja
        </h2>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
          <StatBox label="Pendapatan" value={fmtIDR(totalPendapatan)} />
          <StatBox label="Total Transaksi" value={`${transaksiList.length} Transaksi`} />
          <StatBox label="Transaksi Bulanan" value={String(transaksiList.length)} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 18, margin: 0, color: "#000" }}>Daftar Transaksi</h3>
          <button onClick={onSeeDetails} style={{ background: "none", border: "none", color: "#0094F6", fontFamily: "'Open Sans', sans-serif", fontStyle: "italic", fontSize: 14, cursor: "pointer" }}>
            See Details
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1460, marginBottom: 28 }}>
          <TransRow icon="✅" iconBg="#1FAA59" label="Transaksi" sub="Diterima" value={`${fmtIDR(totalPendapatan)} / Hari`} />
          <TransRow icon="❌" iconBg="#E0463B" label="Transaksi" sub="Dibatalkan" value={`${ditolak.length} Pengguna / Hari`} />
          <TransRow icon="⏳" iconBg="#E8E8E8" label="Transaksi" sub="Menunggu" value={fmtIDR(totalMenunggu)} isLast />
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
          <button
            onClick={() => alert("Mengekspor data transaksi...")}
            style={{ flex: 1, minWidth: 240, background: "#fff", border: "1px solid #ccc", borderRadius: 8, padding: "14px 0", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 15, cursor: "pointer" }}
          >
            Export
          </button>
          <button
            onClick={() => alert("Membagikan keuntungan ke tiap toko...")}
            style={{ flex: 1, minWidth: 240, background: "#000", color: "#fff", border: "none", borderRadius: 8, padding: "14px 0", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 15, cursor: "pointer" }}
          >
            Bagi Keuntungan Tiap toko
          </button>
        </div>

        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: "20px 24px", maxWidth: 1460 }}>
          <h3 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 18, margin: "0 0 2px", color: "#000" }}>
            Grafik Pengguna Menyewa di E-Commerce
          </h3>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: "#888", margin: "0 0 16px" }}>User Checkout (Rp)</p>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={WEEKLY_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip formatter={(v: number) => fmtIDR(v)} />
              <Bar dataKey="amount" fill="#E0C576" radius={[6, 6, 0, 0]} barSize={56} />
            </BarChart>
          </ResponsiveContainer>
          <p style={{ textAlign: "right", fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: "#888", margin: "8px 0 0" }}>Minggu</p>
        </div>
      </main>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 10, padding: "14px 22px", minWidth: 200 }}>
      <p style={{ margin: "0 0 6px", fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#888" }}>{label}</p>
      <p style={{ margin: 0, fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 18, color: "#000" }}>{value}</p>
    </div>
  );
}

function TransRow({
  icon,
  iconBg,
  label,
  sub,
  value,
  isLast,
}: {
  icon: string;
  iconBg: string;
  label: string;
  sub: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 4px", borderBottom: isLast ? "none" : "1px solid #eee" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ width: 34, height: 34, borderRadius: 8, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
          {icon}
        </span>
        <div>
          <p style={{ margin: 0, fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 15, color: "#000" }}>{label}</p>
          <p style={{ margin: 0, fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#888" }}>{sub}</p>
        </div>
      </div>
      <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 15, color: "#000" }}>{value}</span>
    </div>
  );
}