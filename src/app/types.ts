export interface CartItem {
  id: string;
  name: string;
  description: string;
  seller: string;
  size: string;
  startDate: string;
  endDate: string;
  rentalDays: number;
  price: number;
}
/* Tambahan untuk fitur Kelola Transaksi  */

export type TransaksiStatus = "Menunggu Verifikasi" | "Terverifikasi" | "Ditolak";

export interface TransaksiTimelineEntry {
  label: string;
  timestamp: string;
  done: boolean;
}

export interface RiwayatTransaksiItem {
  id: string;
  item: string;
  status: "Selesai" | "Aktif" | "Dibatalkan";
}

export interface Transaksi {
  id: string;
  tanggalTransaksiLabel: string;
  tokoPartner: {
    nama: string;
    alamat: string;
    telepon: string;
  };
  costumer: {
    nama: string;
    telepon: string;
    email: string;
    status: string;
    memberSejak: string;
    alamat: string;
    rating: number;
    ratingNote: string;
    riwayat: RiwayatTransaksiItem[];
  };
  item: {
    nama: string;
    gambar: string;
  };
  tanggalRentalLabel: string;
  tanggalKembaliLabel: string;
  durasiHari: number;
  total: number;
  status: TransaksiStatus;
  catatan: string;
  timeline: TransaksiTimelineEntry[];
}
/* === Tambahan untuk fitur Kelola Pengguna === */

export interface PenggunaUmum {
  id: number;
  nama: string;
  telepon: string;
  email: string;
}

export interface PenggunaPerental {
  id: number;
  nama: string;
  telepon: string;
  email: string;
  deskripsiToko: string;
  kategori: string;
  alamatToko: string;
  verified: boolean;
}
/* === Tambahan untuk fitur Kelola Pengguna === */

export interface PenggunaUmum {
  id: number;
  nama: string;
  telepon: string;
  email: string;
}

export interface PenggunaPerental {
  id: number;
  nama: string;
  telepon: string;
  email: string;
  deskripsiToko: string;
  kategori: string;
  alamatToko: string;
  verified: boolean;
}
export type Product = { /* ... existing ... */ };
export type PesananMode = "orders" | "delivery" | "refund" | "deposit";
export type DraftStatus = "Draf" | "Published";

export interface Article {
  id: number;
  title: string;
  content: string;
  category: string[];
  status: DraftStatus;
  wordCount: number;
  createdAt: string;
  // ── BARU ──
  image?: string;
  imageCaption?: string;
  excerpt?: string;
  author?: string;
  editor?: string;
}

/* Transaksi & Pengguna types tetap sama */
export interface TransaksiTimelineEntry { label: string; timestamp: string; done: boolean; }
export interface RiwayatTransaksiItem { id: string; item: string; status: "Selesai" | "Aktif" | "Dibatalkan"; }
export interface Transaksi {
  id: string; tanggalTransaksiLabel: string;
  tokoPartner: { nama: string; alamat: string; telepon: string; };
  costumer: { nama: string; telepon: string; email: string; status: string; memberSejak: string; alamat: string; rating: number; ratingNote: string; riwayat: RiwayatTransaksiItem[]; };
  item: { nama: string; gambar: string; };
  tanggalRentalLabel: string; tanggalKembaliLabel: string; durasiHari: number; total: number;
  status: TransaksiStatus; catatan: string; timeline: TransaksiTimelineEntry[];
}
export interface PenggunaUmum { id: number; nama: string; telepon: string; email: string; }
export interface PenggunaPerental { id: number; nama: string; telepon: string; email: string; deskripsiToko: string; kategori: string; alamatToko: string; verified: boolean; }