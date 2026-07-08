import { useState } from "react";
import { useAuth } from "../shared/context/AuthContext";
import AdminDashboard from "./components/DashboardPage";
import KelolaArtikel from "./components/KelolaArtikelPage";
import AddArtikel from "./components/AddArtikelPage";
import DraftArtikel from "./components/DrafArtikelPage";
import FolderArtikelPage from "./components/FolderArtikelPage";
import DetailArtikelPage from "./components/DetailArtikelPage";
import TransaksiStatistikPage from "./components/TransaksiStatistikPage";
import DaftarTransaksiPage from "./components/DaftarTransaksiPage";
import DetailTransaksiPage from "./components/DetailTransaksiPage";
import KelolaPenggunaFolderPage from "./components/KelolaPenggunaFolderPage";
import KelolaPenggunaUmumPage from "./components/KelolaPenggunaUmumPage";
import KelolaPenggunaPerentalPage from "./components/KelolaPenggunaPerentalPage";
import VerifikasiAkunPerentalPage from "./components/VerifikasiAkunPerentalPage";
import Loginpage from "./LoginPage";
import { TRANSAKSI_LIST } from "./data/transaksiData";
import { PENGGUNA_UMUM_LIST, PENGGUNA_PERENTAL_LIST } from "./data/penggunaData";
import { ARTIKEL_BY_CATEGORY } from "./data/artikelData";
import type {
  Article, Transaksi, TransaksiStatus,
  PenggunaUmum, PenggunaPerental,
} from "../types";

type AdminPage =
  | "dashboard"
  | "kelola_artikel"
  | "folder_artikel"
  | "add_artikel"
  | "draft_artikel"
  | "detail_artikel"
  | "kelola_transaksi"
  | "daftar_transaksi"
  | "detail_transaksi"
  | "kelola_pengguna"
  | "pengguna_umum"
  | "pengguna_perental"
  | "verifikasi_perental";

let _nextId = 1000;
const nextId = () => _nextId++;

export default function AdminApp() {
  const { logout } = useAuth();
  const [page, setPage] = useState<AdminPage>("dashboard");

  // ── ARTIKEL STATE ──
  const [articlesByCategory, setArticlesByCategory] = useState<Record<string, Article[]>>(ARTIKEL_BY_CATEGORY);
  const [drafts, setDrafts] = useState<Article[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>("Wisuda");
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
  const [editingDraft, setEditingDraft] = useState<Article | null>(null);

  // ── TRANSAKSI STATE ──
  const [transaksiList, setTransaksiList] = useState<Transaksi[]>(TRANSAKSI_LIST);
  const [selectedTrxId, setSelectedTrxId] = useState<string | null>(null);

  // ── PENGGUNA STATE ──
  const [penggunaUmumList, setPenggunaUmumList] = useState<PenggunaUmum[]>(PENGGUNA_UMUM_LIST);
  const [penggunaPerentalList, setPenggunaPerentalList] = useState<PenggunaPerental[]>(PENGGUNA_PERENTAL_LIST);
  const [selectedPerentalId, setSelectedPerentalId] = useState<number | null>(null);

  const goDashboard = () => setPage("dashboard");

  // ── ARTIKEL HANDLERS ──

  /** Dipanggil dari AddArtikelPage: simpan draft ATAU publish ke folder */
  const handleSaveArtikel = (partial: Partial<Article>) => {
    const isEdit = editingDraft !== null;
    const now = new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });

    if (partial.status === "Draf") {
      const saved: Article = {
        id: isEdit ? editingDraft!.id : nextId(),
        title: partial.title ?? "",
        content: partial.content ?? "",
        category: partial.category ?? [],
        status: "Draf",
        wordCount: partial.wordCount ?? 0,
        createdAt: isEdit ? editingDraft!.createdAt : now,
        image: partial.image,
        excerpt: partial.excerpt,
      };
      if (isEdit) {
        setDrafts(prev => prev.map(d => d.id === saved.id ? saved : d));
      } else {
        setDrafts(prev => [...prev, saved]);
      }
      setEditingDraft(null);
    } else {
      // Publish: tambahkan ke kategori yang sesuai
      const published: Article = {
        id: isEdit ? editingDraft!.id : nextId(),
        title: partial.title ?? "",
        content: partial.content ?? "",
        category: partial.category ?? [],
        status: "Published",
        wordCount: partial.wordCount ?? 0,
        createdAt: now,
        image: partial.image,
        excerpt: (partial.content ?? "").slice(0, 160) + "...",
      };
      const cats = partial.category ?? [];
      if (cats.length === 0) {
        // Simpan di folder pertama yang tersedia jika tidak ada kategori
        setArticlesByCategory(prev => ({ ...prev, Wisuda: [published, ...(prev["Wisuda"] ?? [])] }));
      } else {
        setArticlesByCategory(prev => {
          const next = { ...prev };
          cats.forEach(cat => {
            next[cat] = [published, ...(next[cat] ?? [])];
          });
          return next;
        });
      }
      // Hapus dari draft jika ini adalah edit draft yang dipublish
      if (isEdit) {
        setDrafts(prev => prev.filter(d => d.id !== editingDraft!.id));
      }
      setEditingDraft(null);
      setPage("kelola_artikel");
    }
  };

  /** Simpan perubahan dari DetailArtikelPage */
  const handleSaveDetailArtikel = (updated: Article) => {
    setArticlesByCategory(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(cat => {
        next[cat] = next[cat].map(a => a.id === updated.id ? updated : a);
      });
      return next;
    });
  };

  const openFolder = (category: string) => {
    setSelectedFolder(category);
    setPage("folder_artikel");
  };

  const openDetailArtikel = (id: number) => {
    setSelectedArticleId(id);
    setPage("detail_artikel");
  };

  const deleteArtikelFromFolder = (id: number) => {
    setArticlesByCategory(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(cat => {
        next[cat] = next[cat].filter(a => a.id !== id);
      });
      return next;
    });
  };

  const deleteDraft = (id: number) => {
    setDrafts(prev => prev.filter(d => d.id !== id));
  };

  const editDraft = (draft: Article) => {
    setEditingDraft(draft);
    setPage("add_artikel");
  };

  // ── TRANSAKSI HANDLERS ──
  const openDetail = (id: string) => {
    setSelectedTrxId(id);
    setPage("detail_transaksi");
  };

  const updateStatus = (id: string, status: TransaksiStatus) => {
    const now =
      new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" }) +
      ", " + new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) + " WIB";
    setTransaksiList(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, status, timeline: [...t.timeline, { label: status === "Terverifikasi" ? "Terverifikasi Admin" : "Ditolak Admin", timestamp: now, done: true }] }
          : t
      )
    );
  };

  // ── PENGGUNA HANDLERS ──
  const deletePenggunaUmum = (id: number) => setPenggunaUmumList(prev => prev.filter(u => u.id !== id));
  const deletePenggunaPerental = (id: number) => setPenggunaPerentalList(prev => prev.filter(p => p.id !== id));
  const clearPenggunaUmum = () => setPenggunaUmumList([]);
  const clearPenggunaPerental = () => setPenggunaPerentalList([]);
  const openVerifikasi = (id: number) => { setSelectedPerentalId(id); setPage("verifikasi_perental"); };
  const verifyPerental = (id: number) => setPenggunaPerentalList(prev => prev.map(p => p.id === id ? { ...p, verified: true } : p));

  // ── RENDER ──

  if (page === "dashboard") return <AdminDashboard onNavigate={setPage} onLogout={logout} />;

  // Artikel
  if (page === "kelola_artikel")
    return <KelolaArtikel onBack={goDashboard} onAddArtikel={() => { setEditingDraft(null); setPage("add_artikel"); }} onDraftArtikel={() => setPage("draft_artikel")} onOpenFolder={openFolder} onLogout={logout} />;

  if (page === "folder_artikel") {
    const folderArticles = articlesByCategory[selectedFolder] ?? [];
    return (
      <FolderArtikelPage
        folderCategory={selectedFolder}
        articles={folderArticles}
        onBack={() => setPage("kelola_artikel")}
        onEdit={openDetailArtikel}
        onDelete={deleteArtikelFromFolder}
        onLogout={logout}
      />
    );
  }

  if (page === "add_artikel")
    return (
      <AddArtikel
        draft={editingDraft}
        onBack={() => { setEditingDraft(null); setPage(editingDraft ? "draft_artikel" : "kelola_artikel"); }}
        onSave={handleSaveArtikel}
        onLogout={logout}
      />
    );

  if (page === "draft_artikel")
    return (
      <DraftArtikel
        drafts={drafts}
        onEdit={editDraft}
        onDelete={deleteDraft}
        onBack={() => setPage("kelola_artikel")}
        onLogout={logout}
      />
    );

  if (page === "detail_artikel") {
    // Cari artikel dari semua kategori
    const allArticles = Object.values(articlesByCategory).flat();
    const art = allArticles.find(a => a.id === selectedArticleId) ?? allArticles[0];
    return (
      <DetailArtikelPage
        article={art}
        onBack={() => setPage("folder_artikel")}
        onSave={handleSaveDetailArtikel}
        onLogout={logout}
      />
    );
  }

  // Transaksi
  if (page === "kelola_transaksi")
    return <TransaksiStatistikPage transaksiList={transaksiList} onBack={goDashboard} onHome={goDashboard} onLogout={logout} onSeeDetails={() => setPage("daftar_transaksi")} />;

  if (page === "daftar_transaksi")
    return <DaftarTransaksiPage transaksiList={transaksiList} onBack={() => setPage("kelola_transaksi")} onHome={goDashboard} onLogout={logout} onDetail={openDetail} onApprove={id => updateStatus(id, "Terverifikasi")} onReject={id => updateStatus(id, "Ditolak")} />;

  if (page === "detail_transaksi") {
    const trx = transaksiList.find(t => t.id === selectedTrxId) ?? transaksiList[0];
    return <DetailTransaksiPage transaksi={trx} onBack={() => setPage("daftar_transaksi")} onHome={goDashboard} onLogout={logout} />;
  }

  // Pengguna
  if (page === "kelola_pengguna")
    return <KelolaPenggunaFolderPage onBack={goDashboard} onOpenPengguna={() => setPage("pengguna_umum")} onOpenPemilik={() => setPage("pengguna_perental")} onClearPengguna={clearPenggunaUmum} onClearPemilik={clearPenggunaPerental} onLogout={logout} />;

  if (page === "pengguna_umum")
    return <KelolaPenggunaUmumPage list={penggunaUmumList} onBack={() => setPage("kelola_pengguna")} onDelete={deletePenggunaUmum} onLogout={logout} />;

  if (page === "pengguna_perental")
    return <KelolaPenggunaPerentalPage list={penggunaPerentalList} onBack={() => setPage("kelola_pengguna")} onOpenDetail={openVerifikasi} onDelete={deletePenggunaPerental} onLogout={logout} />;

  if (page === "verifikasi_perental") {
    const perental = penggunaPerentalList.find(p => p.id === selectedPerentalId) ?? null;
    return <VerifikasiAkunPerentalPage perental={perental} onBack={() => setPage("pengguna_perental")} onVerify={verifyPerental} onLogout={logout} />;
  }

  return null;
}