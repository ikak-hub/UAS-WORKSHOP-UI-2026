import { useMemo, useState } from "react";
import AdminNavbar from "../AdminNavbar";
import TransaksiPageHeader from "./TransaksiPageHeader";
import type { Transaksi, TransaksiStatus } from "../../types";

const fmtIDR = (n: number) => "Rp " + n.toLocaleString("id-ID") + ",00";

const STATUS_STYLE: Record<TransaksiStatus, { bg: string; color: string }> = {
  Terverifikasi: { bg: "#1FAA59", color: "#fff" },
  "Menunggu Verifikasi": { bg: "#F2A93B", color: "#fff" },
  Ditolak: { bg: "#E0463B", color: "#fff" },
};

const PAGE_SIZE = 5;

export default function DaftarTransaksiPage({
  transaksiList,
  onBack,
  onHome,
  onLogout,
  onDetail,
  onApprove,
  onReject,
}: {
  transaksiList: Transaksi[];
  onBack: () => void;
  onHome: () => void;
  onLogout: () => void;
  onDetail: (id: string) => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"Semua Status" | TransaksiStatus>("Semua Status");
  const [sortBy, setSortBy] = useState<"Tanggal Dibuat" | "Total" | "Nama COSTUMEer">("Tanggal Dibuat");
  const [sortDesc, setSortDesc] = useState(true);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = [...transaksiList];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        t =>
          t.costumer.nama.toLowerCase().includes(q) ||
          t.item.nama.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q)
      );
    }

    if (statusFilter !== "Semua Status") {
      list = list.filter(t => t.status === statusFilter);
    }

    list.sort((a, b) => {
      let res = 0;
      if (sortBy === "Tanggal Dibuat") res = a.id.localeCompare(b.id);
      if (sortBy === "Total") res = a.total - b.total;
      if (sortBy === "Nama COSTUMEer") res = a.costumer.nama.localeCompare(b.costumer.nama);
      return sortDesc ? -res : res;
    });

    return list;
  }, [transaksiList, search, statusFilter, sortBy, sortDesc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const resetFilter = () => {
    setSearch("");
    setStatusFilter("Semua Status");
    setSortBy("Tanggal Dibuat");
    setSortDesc(true);
    setPage(1);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <AdminNavbar onLogout={onLogout} />
      <TransaksiPageHeader onBack={onBack} onHome={onHome} />

      <main style={{ background: "#f7f8fa", padding: "32px 40px 80px", marginTop: 24 }}>
        <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800, fontSize: 32, color: "#0094F6", margin: "0 0 6px" }}>
          DAFTAR TRANSAKSI
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#555", margin: "0 0 24px" }}>
          Kelola dan verifikasi semua transaksi rental kostum
        </p>

        <div style={{ background: "#fff", borderRadius: 16, padding: 28, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
          {/* Search */}
          <div style={{ position: "relative", marginBottom: 16, maxWidth: 760 }}>
            <input
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Cari berdasarkan nama COSTUMEer, item, atau ID transaksi..."
              style={{ width: "100%", border: "1px solid #ddd", borderRadius: 10, padding: "12px 44px 12px 16px", fontFamily: "'Open Sans', sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box" }}
            />
            <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)" }}>🔍</span>
          </div>

          {/* Filter row */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
            <select
              value={statusFilter}
              onChange={e => {
                setStatusFilter(e.target.value as typeof statusFilter);
                setPage(1);
              }}
              style={{ background: "#e8e8e8", border: "none", borderRadius: 8, padding: "10px 16px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
            >
              <option>Semua Status</option>
              <option>Menunggu Verifikasi</option>
              <option>Terverifikasi</option>
              <option>Ditolak</option>
            </select>
            <button
              onClick={resetFilter}
              style={{ background: "#555", color: "#fff", border: "none", borderRadius: 8, padding: "10px 18px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
            >
              Reset Filter
            </button>
          </div>

          {/* Sort row */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#444" }}>Urutkan berdasarkan:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as typeof sortBy)}
              style={{ background: "#e8e8e8", border: "none", borderRadius: 8, padding: "8px 14px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
            >
              <option>Tanggal Dibuat</option>
              <option>Total</option>
              <option>Nama COSTUMEer</option>
            </select>
            <button
              onClick={() => setSortDesc(v => !v)}
              title={sortDesc ? "Menurun" : "Menaik"}
              style={{ background: "#fff", border: "1px solid #ccc", borderRadius: 8, width: 36, height: 36, cursor: "pointer" }}
            >
              {sortDesc ? "↓" : "↑"}
            </button>
            <span style={{ marginLeft: "auto", fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#444" }}>
              Total: {filtered.length} transaksi
            </span>
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  {["ID Transaksi", "COSTUMEer", "Item", "Tanggal Rental", "Total", "Status", "Aksi"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#0094F6" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paged.map(t => {
                  const style = STATUS_STYLE[t.status];
                  return (
                    <tr key={t.id} style={{ borderBottom: "1px solid #eee" }}>
                      <td style={{ padding: "16px 12px", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#0094F6" }}>{t.id}</td>
                      <td style={{ padding: "16px 12px", fontFamily: "'Open Sans', sans-serif", fontSize: 14 }}>{t.costumer.nama}</td>
                      <td style={{ padding: "16px 12px", fontFamily: "'Open Sans', sans-serif", fontSize: 14 }}>{t.item.nama}</td>
                      <td style={{ padding: "16px 12px", fontFamily: "'Open Sans', sans-serif", fontSize: 14 }}>{t.tanggalRentalLabel}</td>
                      <td style={{ padding: "16px 12px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 14 }}>{fmtIDR(t.total)}</td>
                      <td style={{ padding: "16px 12px" }}>
                        <span style={{ background: style.bg, color: style.color, borderRadius: 14, padding: "5px 14px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 12, whiteSpace: "nowrap" }}>
                          {t.status}
                        </span>
                      </td>
                      <td style={{ padding: "16px 12px" }}>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button
                            onClick={() => onDetail(t.id)}
                            style={{ background: "#0094F6", color: "#fff", border: "none", borderRadius: 6, padding: "6px 14px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer" }}
                          >
                            Detail
                          </button>
                          {t.status === "Menunggu Verifikasi" && (
                            <>
                              <button
                                onClick={() => onApprove(t.id)}
                                style={{ background: "#1FAA59", color: "#fff", border: "none", borderRadius: 6, padding: "6px 14px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer" }}
                              >
                                Setuju
                              </button>
                              <button
                                onClick={() => onReject(t.id)}
                                style={{ background: "#E0463B", color: "#fff", border: "none", borderRadius: 6, padding: "6px 14px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer" }}
                              >
                                Tolak
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {paged.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ padding: 32, textAlign: "center", fontFamily: "'Open Sans', sans-serif", color: "#888" }}>
                      Tidak ada transaksi yang cocok.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20, flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#666" }}>
              Menampilkan {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1} - {Math.min(currentPage * PAGE_SIZE, filtered.length)} dari {filtered.length} transaksi
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button
                disabled={currentPage === 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                style={{ background: "#fff", border: "1px solid #ccc", borderRadius: 8, padding: "8px 16px", fontFamily: "'Open Sans', sans-serif", fontSize: 13, cursor: currentPage === 1 ? "default" : "pointer", opacity: currentPage === 1 ? 0.5 : 1 }}
              >
                Sebelumnya
              </button>
              <span style={{ background: "#0094F6", color: "#fff", borderRadius: 8, padding: "8px 14px", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 13 }}>
                {currentPage}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                style={{ background: "#fff", border: "1px solid #ccc", borderRadius: 8, padding: "8px 16px", fontFamily: "'Open Sans', sans-serif", fontSize: 13, cursor: currentPage === totalPages ? "default" : "pointer", opacity: currentPage === totalPages ? 0.5 : 1 }}
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}