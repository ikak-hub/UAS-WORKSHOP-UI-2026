import type { Article } from "../../shared/types";

let _id = 200;
const nid = () => _id++;

export const ARTIKEL_BY_CATEGORY: Record<string, Article[]> = {
  Wisuda: [
    {
      id: nid(), title: "Universitas Terbuka bawa semangat Hari Pahlawan dalam wisuda 2025",
      excerpt: "Universitas Terbuka mengggelar wisuda Tahun Akademik 2025/2026 di UT Convention Center, Tangerang Selatan pada 10-11 November 2025. Rektor UT mengajak wisudawan agar menjadi \"pahlawan masa kini\" yang menyebarkan manfaat, solusi, dan perubahan positif di masyarakat. Dalam proses tersebut, tercatat 1.764 wisudawan yang hadir dalam upacara.",
      image: "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?w=800&q=80",
      imageCaption: "SUASANA Prosesi Wisuda Universitas Terbuka Tahun Akademik 2025/2026 yang digelar di UT Convention Center (UTCC), Pondok Cabe, Tangerang Selatan, Selasa (11/11/2025). ANTARA/Sean Filo Muhamad",
      content: `WCR NEWS – Universitas Terbuka (UT) membawa semangat Hari Pahlawan dalam gelaran Wisuda Tahun Akademik 2025/2026 yang digelar di UT Convention Center (UTCC), Tangerang Selatan, pada 10-11 November 2025.\n\nRektor UT Ali Muktiyanto dalam sambutannya di Tangerang Selatan, Selasa, mengajak kepada para wisudawan untuk menjadikan Hari Pahlawan ini sebagai pengingat bahwa setiap langkah kecil yang diambil dengan niat tulus dan tanggung jawab adalah bentuk kepahlawanan masa kini.\n\n"(Wisudawan UT) diharapkan mampu menjadi pahlawan di bidangnya masing-masing, pahlawan yang menebarkan manfaat, menciptakan solusi dan membawa perubahan positif bagi masyarakat," ucapnya.\n\nAli mengungkapkan pada tahun ajaran ini UT telah meluluskan 41.340 orang dari berbagai program studi dan jenjang pendidikan. Dari jumlah tersebut, sebanyak 1.764 wisudawan mengikuti prosesi wisuda pada hari ini.\n\n"Dengan semangat Hari Pahlawan, kita bersama-sama membangun jalan menuju Indonesia Emas 2045, sebuah cita-cita besar yang memerlukan keberanian, keuletan, dan dedikasi seperti yang ditunjukkan oleh para pahlawan bangsa," ujarnya.\n\nDengan jumlah mahasiswa aktif yang lebih dari 766.000 orang dan lebih dari 2 juta alumni yang tersebar di seluruh penjuru Indonesia, bahkan hingga mancanegara, Ali menyebut para alumni UT memiliki potensi luar biasa dalam mencetak sumber daya manusia unggul dan berdaya saing global.\n\n"Semoga ilmu yang diperoleh menjadi amal jariah dan bermanfaat bagi masyarakat, bangsa, dan negara. Selamat melangkah ke babak baru kehidupan dengan penuh semangat dan tanggung jawab." tutur Rektor UT Ali Muktiyanto.`,
      category: ["Wisuda"], status: "Published", wordCount: 210, createdAt: "11 November 2025",
    },
    {
      id: nid(), title: "Kukuhkan 3.057 Wisudawan, Lulusan UNRI Berdampak untuk Negeri",
      excerpt: "Universitas Riau mewisuda 3.057 lulusan dalam prosesi Oktober 2025 di Gedung Student Center. Rektor menekankan nilai \"ASRI\": Amanah, Santun, Responsif, Inovatif sebagai dasar berkarya alumni.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      imageCaption: "Prosesi wisuda Universitas Riau, Oktober 2025. Dok. UNRI",
      content: `WCR NEWS – Universitas Riau (UNRI) mengukuhkan 3.057 wisudawan dalam prosesi wisuda yang digelar di Gedung Student Center, Oktober 2025.\n\nRektor UNRI menekankan nilai "ASRI" — Amanah, Santun, Responsif, dan Inovatif — sebagai fondasi bagi para alumni dalam berkarya dan berkontribusi kepada negeri.\n\n"Lulusan UNRI harus mampu menjadi agen perubahan yang memberikan dampak nyata bagi masyarakat sekitar," ungkap Rektor dalam sambutannya.\n\nPada wisuda kali ini, UNRI mencatat tingkat kelulusan tertinggi dalam dekade terakhir, dengan 87% wisudawan telah memiliki pekerjaan atau rencana lanjut studi sebelum tanggal wisuda.`,
      category: ["Wisuda"], status: "Published", wordCount: 120, createdAt: "15 Oktober 2025",
    },
    {
      id: nid(), title: "UI luluskan 1.914 mahasiswa kesehatan, 943 di antaranya cum laude",
      excerpt: "Universitas Indonesia mewisuda 1.914 mahasiswa dari fakultas kesehatan pada wisuda Semester Genap 2024/2025, dan hampir setengahnya (943) dengan predikat cum laude.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      imageCaption: "Prosesi wisuda Fakultas Kedokteran UI, 2025. Dok. UI",
      content: `WCR NEWS – Universitas Indonesia (UI) mewisuda sebanyak 1.914 mahasiswa dari rumpun ilmu kesehatan pada upacara wisuda Semester Genap 2024/2025.\n\nMenjadi catatan membanggakan, hampir separuh dari total wisudawan — yakni 943 mahasiswa — berhasil meraih predikat kelulusan cum laude.\n\nDekan Fakultas Kedokteran UI menyatakan bahwa pencapaian ini merupakan bukti dedikasi mahasiswa dan kualitas pengajaran yang terus ditingkatkan setiap tahunnya.\n\n"Kami bangga dengan generasi muda kesehatan Indonesia yang tidak hanya cerdas secara akademik, tetapi juga memiliki karakter dan integritas yang kuat," ujarnya.`,
      category: ["Wisuda"], status: "Published", wordCount: 110, createdAt: "20 September 2025",
    },
    {
      id: nid(), title: "UT Surabaya bekali 1.065 calon wisudawan dengan literasi data",
      excerpt: "Sebelum wisuda periode 2025/2026, UT Surabaya mengadakan seminar literasi data untuk 1.065 calon wisudawan agar siap menghadapi dunia kerja di era digital.",
      image: "https://images.unsplash.com/photo-1562516710-57c4c0241f70?w=800&q=80",
      imageCaption: "Seminar Literasi Data UT Surabaya, 2025. Dok. UT Surabaya",
      content: `WCR NEWS – Universitas Terbuka (UT) Surabaya menggelar seminar literasi data bagi 1.065 calon wisudawan periode 2025/2026.\n\nSeminar ini dirancang untuk membekali para lulusan dengan keterampilan analisis data dasar yang semakin dibutuhkan di dunia kerja era digital.\n\nKepala UPBJJ-UT Surabaya mengatakan bahwa seminar ini merupakan bagian dari komitmen UT dalam memastikan setiap wisudawan siap bersaing secara global.\n\n"Data literacy bukan lagi pilihan, melainkan kebutuhan dasar bagi setiap profesional muda di era ini," tegasnya dalam pembukaan seminar.`,
      category: ["Wisuda"], status: "Published", wordCount: 105, createdAt: "5 September 2025",
    },
    {
      id: nid(), title: "Universitas Sriwijaya wisuda 1.885 sarjana baru",
      excerpt: "Universitas Sriwijaya (Unsri) menggelar wisuda ke-176 dengan 1.885 sarjana baru, dimana sejumlah lulusan mendapatkan predikat pujian (cum laude).",
      image: "https://images.unsplash.com/photo-1627636117690-2e5e61a5e89c?w=800&q=80",
      imageCaption: "Prosesi Wisuda ke-176 Universitas Sriwijaya. Dok. Unsri",
      content: `WCR NEWS – Universitas Sriwijaya (Unsri) kembali menggelar wisuda ke-176 dengan meluluskan 1.885 sarjana baru dari berbagai program studi.\n\nSejumlah lulusan berhasil meraih predikat pujian (cum laude) atas prestasi akademik mereka selama masa studi.\n\nRektor Unsri menyampaikan rasa bangga atas pencapaian para wisudawan dan berpesan agar mereka terus berkontribusi positif bagi masyarakat dan bangsa.\n\n"Ijazah yang kalian terima hari ini adalah tiket menuju pengabdian yang sesungguhnya, bukan akhir dari perjalanan belajar," pesannya dalam orasi wisuda.`,
      category: ["Wisuda"], status: "Published", wordCount: 100, createdAt: "1 Agustus 2025",
    },
  ],

  Adat: [
    {
      id: nid(), title: "Wisatawan Mancanegara Meriahkan Fashion Show Busana Adat Bali di Festival Nusa Penida 2024",
      excerpt: "Dalam Festival Nusa Penida 2024, wisatawan asing ikut ambil bagian dalam fashion show busana adat Bali.",
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
      imageCaption: "Fashion Show Busana Adat Bali, Festival Nusa Penida 2024. Dok. Panitia",
      content: `WCR NEWS – Festival Nusa Penida 2024 kembali digelar dengan meriah, menghadirkan sebuah acara fashion show busana adat Bali yang memukau.\n\nUniknya, puluhan wisatawan mancanegara turut ambil bagian dalam peragaan busana tersebut, mengenakan pakaian adat Bali lengkap dengan segala aksesorinya.\n\nWisatawan dari berbagai negara seperti Australia, Prancis, dan Jepang tampak antusias mengenakan kain endek, kamen, dan udeng — perlengkapan busana adat Bali.\n\n"Ini pengalaman yang luar biasa. Saya tidak pernah menyangka bisa ikut memakai pakaian tradisional yang indah seperti ini," ujar salah satu wisatawan asal Australia.\n\nFestival Nusa Penida 2024 berlangsung selama tiga hari dan menjadi ajang pelestarian budaya sekaligus promosi pariwisata pulau Nusa Penida.`,
      category: ["Adat"], status: "Published", wordCount: 130, createdAt: "15 Oktober 2024",
    },
    {
      id: nid(), title: "Indonesia pamerkan mode busana Nusantara di Front Row Paris 2025",
      excerpt: "Kedutaan Besar RI bekerja sama dengan Indonesia Fashion Chamber (IFC) menampilkan mode busana Nusantara di Front Row Paris 2025.",
      image: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=800&q=80",
      imageCaption: "Peragaan Busana Nusantara di Front Row Paris 2025. Dok. KBRI Paris",
      content: `WCR NEWS – Kedutaan Besar Republik Indonesia (KBRI) di Paris bekerja sama dengan Indonesia Fashion Chamber (IFC) kembali menampilkan keindahan mode busana Nusantara di ajang bergengsi Front Row Paris 2025.\n\nSebanyak 30 koleksi busana yang terinspirasi dari berbagai kain tradisional Indonesia — mulai dari batik, tenun, hingga songket — ditampilkan di hadapan para pecinta mode internasional.\n\nDubes RI untuk Prancis menyatakan bahwa keikutsertaan Indonesia di Front Row Paris adalah bukti komitmen untuk memperkenalkan kekayaan budaya tekstil Indonesia ke panggung dunia.\n\n"Mode adalah bahasa universal. Melalui kain dan busana tradisional kita, kita bercerita tentang kekayaan budaya Indonesia yang tiada duanya," ujarnya.`,
      category: ["Adat"], status: "Published", wordCount: 125, createdAt: "10 Maret 2025",
    },
    {
      id: nid(), title: "Banyuwangi Batik Festival 2025 Angkat Motif Wader Kesit di Peragaan Busana",
      excerpt: "Motif batik lokal \"Wader Kesit\" diangkat dalam peragaan busana Banyuwangi Batik Festival 2025. Kolaborasi desainer dan pengrajin lokal menghasilkan 60 pakaian batik yang menonjolkan kearifan lokal.",
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
      imageCaption: "dok. Pemkab Banyuwangi",
      content: `WCR NEWS – Keagungan Batik Banyuwangi kembali ditampilkan dengan apik dalam Banyuwangi Batik Festival 2025. Event yang digelar rutin sejak 2013 lalu, tahun ini mengangkat motif Wader Kesit, satu dari belasan motif lawas Batik Banyuwangi.\n\nPagelaran Batik Festival berlangsung di Gesibu Blambangan, Sabtu Malam (19/10) berlangsung memukau. Event ini menampilkan puluhan karya busana batik 'apik' dan berkualitas hasil kreativitas pelaku batik daerah.\n\nBBF kali ini menampilkan sebanyak 60 busana batik yang merupakan kolaborasi dari 15 desainer busana dan pembatik lokal. Motif 'Wader Kesit' tampil memikat di panggung, membawa semangat kolaborasi antara desainer, pengrajin, dan industri.\n\nBupati Banyuwangi, Ipuk Fiestiandani mengatakan acara ini bukan sekadar peragaan busana, tetapi juga sebagai ajang penghubung para pengrajin batik dengan industri.`,
      category: ["Adat"], status: "Published", wordCount: 150, createdAt: "20 Oktober 2025",
    },
    {
      id: nid(), title: "FKOB Kalbar Kenalkan Pakaian Adat Bugis ke Anak-anak Lewat Fashion Show",
      excerpt: "Forum Komunikasi Orang Bugis (FKOB) Kalimantan Barat mengadakan fashion show pakaian adat Bugis untuk anak-anak.",
      image: "https://images.unsplash.com/photo-1604697964391-7f60ced8c4fa?w=800&q=80",
      imageCaption: "Fashion Show Pakaian Adat Bugis FKOB Kalbar. Dok. FKOB",
      content: `WCR NEWS – Forum Komunikasi Orang Bugis (FKOB) Kalimantan Barat menggelar fashion show pakaian adat Bugis yang melibatkan anak-anak usia sekolah dasar hingga menengah.\n\nKegiatan ini bertujuan untuk memperkenalkan dan melestarikan budaya Bugis kepada generasi muda, khususnya di tanah perantauan Kalimantan Barat.\n\nKetua FKOB Kalbar menyatakan pentingnya upaya pelestarian budaya dimulai sejak dini.\n\n"Dengan mengenalkan pakaian adat kepada anak-anak, kita menanamkan rasa cinta dan bangga terhadap identitas budaya kita," ujarnya.\n\nFashion show ini menampilkan berbagai jenis pakaian adat Bugis seperti baju bodo untuk perempuan dan jas tutu untuk laki-laki.`,
      category: ["Adat"], status: "Published", wordCount: 115, createdAt: "5 November 2025",
    },
    {
      id: nid(), title: "RI promosi fesyen berkelanjutan melalui pakaian adat dari bahan alam",
      excerpt: "Pemerintah RI (KLHK) mendorong fesyen berkelanjutan menggunakan pakaian adat berbahan alam seperti viscose serat hutan.",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80",
      imageCaption: "Peragaan busana berkelanjutan berbahan alam. Dok. KLHK",
      content: `WCR NEWS – Kementerian Lingkungan Hidup dan Kehutanan (KLHK) bersama pelaku industri fashion Indonesia mendorong pengembangan fesyen berkelanjutan melalui pemanfaatan pakaian adat dari bahan-bahan alami.\n\nSalah satu bahan yang dipromosikan adalah viscose serat hutan — sebuah material ramah lingkungan yang diekstrak dari pohon-pohon yang ditanam secara berkelanjutan.\n\nBerbagai pengrajin dan desainer lokal turut dilibatkan dalam program ini untuk menciptakan koleksi pakaian adat modern yang memadukan estetika tradisional dengan nilai-nilai keberlanjutan lingkungan.\n\n"Fesyen berkelanjutan bukan sekadar tren, melainkan tanggung jawab kita terhadap bumi dan generasi mendatang," ujar perwakilan KLHK dalam peluncuran program.`,
      category: ["Adat"], status: "Published", wordCount: 118, createdAt: "12 November 2025",
    },
  ],

  Cosplay: [
    {
      id: nid(), title: "Japan World",
      excerpt: "Himpunan Mahasiswa Studi Kejepangan Fakultas Ilmu Budaya (FIB) Universitas Airlangga kembali menggelar Japanese World (JW) pada 20-21 Juli 2019 bertempat di FIB UNAIR.",
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=800&q=80",
      imageCaption: "SUASANA saat penampilan band dalam Japanese World 2019 di Fakultas Ilmu Budaya UNAIR. (Foto : istimewa)",
      content: `WCR NEWS – Himpunan Mahasiswa Studi Kejepangan Fakultas Ilmu Budaya (FIB) Universitas Airlangga kembali menggelar Japanese World (JW) pada 20-21 Juli 2019 bertempat di FIB UNAIR. Haira Catur Nurul Candraningrum, ketua panitia JW mengatakan bahwa tujuan utama dari festival itu ialah untuk mengenalkan program studi kejepangan UNAIR kepada publik. Di samping itu, JW juga bertujuan untuk mengenalkan budaya Jepang serta memperat hubungan antara Indonesia dengan Jepang.\n\nMahasiswa yang akrab disapa Haira itu, menuturkan bahwa setiap tahunnya JW memiliki tema yang berbeda. Tahun ini JW mengangkat tema Natsu no Eien no Monogatari yang berarti "Kisah abadi di musim panas".\n\nArea stage utama JW menampilkan pertunjukan-pertunjukan utama seperti penampilan grup band, dance Jepang dan cosplay. Sementara itu, di sekitar area stage utama banyak ditemukan stand-stand bertema Jepang.\n\nJapanese World juga menyuguhkan berbagai perlombaan untuk siswa SMA dan umum. Lomba akademik terdiri atas Shodo (kaligrafi Jepang), Kuizu Taikai (cerdas cermat), Katari (bercerita), Sakubun (mengarang), Kakikikitori (mendengar dan menulis), Kanji Taikai (kompetisi kanji) dan Rodoku (membaca cepat).\n\nPenutupan Japanese World 2019 malam itu ditutup dengan pesta hanabi (kembang api).\n\nPenulis : Sandi Prabowo\n\nEditor   : Khefti Al Mawalia`,
      category: ["Cosplay"], status: "Published", wordCount: 220, createdAt: "22 Juli 2019",
      author: "Sandi Prabowo", editor: "Khefti Al Mawalia",
    },
    {
      id: nid(), title: "Cerita Cosplayer Loki Marvel di ICC x INACON 2025, Bikin Kostum Seminggu",
      excerpt: "Seorang cosplayer bernama Masaki (17 tahun) membuat kostum Loki sendiri dalam waktu seminggu untuk hadir di acara ICC x INACON di JCC, Jakarta.",
      image: "https://images.unsplash.com/photo-1545830934-c3f3da1e1975?w=800&q=80",
      imageCaption: "Cosplayer Loki di ICC x INACON 2025, JCC Jakarta. Dok. Panitia",
      content: `WCR NEWS – Di tengah keramaian Indonesia Comic Con (ICC) x Indonesia Anime Con (INACON) 2025 yang digelar di Jakarta Convention Center (JCC), seorang cosplayer muda bernama Masaki (17 tahun) mencuri perhatian dengan kostum Loki dari Marvel yang ia buat sendiri hanya dalam waktu satu minggu.\n\n"Saya mulai membuat kostum ini tepat seminggu sebelum acara. Memang sangat padat, tapi saya sangat excited untuk hadir di sini," cerita Masaki antusias.\n\nKostum yang ia kenakan mencakup jubah panjang berwarna hijau dan hitam khas Loki, lengkap dengan helm bertanduk ikonik yang dibuat dari bahan EVA foam.\n\nMasaki mengaku terinspirasi untuk membuat kostum sendiri karena biaya membeli kostum jadi sangat mahal. "Dengan membuat sendiri, kita juga bisa lebih mengekspresikan kreativitas," ujarnya.`,
      category: ["Cosplay"], status: "Published", wordCount: 135, createdAt: "25 Oktober 2025",
    },
    {
      id: nid(), title: "Indonesia Comic Con dan Indonesia Anime Con 2025 digelar akhir Oktober",
      excerpt: "ICC dan INACON digabung menjadi satu event di Jakarta (JICC), dengan target pengunjung 30.000–35.000 orang.",
      image: "https://images.unsplash.com/photo-1614682684040-4e2613b35562?w=800&q=80",
      imageCaption: "Suasana Indonesia Comic Con x INACON 2025. Dok. Panitia ICC",
      content: `WCR NEWS – Indonesia Comic Con (ICC) dan Indonesia Anime Con (INACON) 2025 resmi digabungkan menjadi satu event besar yang digelar di Jakarta International Convention Center (JICC) pada akhir Oktober 2025.\n\nPenyelenggara menargetkan kehadiran 30.000 hingga 35.000 pengunjung selama dua hari pelaksanaan, menjadikannya salah satu event pop culture terbesar di Asia Tenggara tahun ini.\n\nEvent ini menghadirkan berbagai atraksi menarik mulai dari pameran komik dan anime, kompetisi cosplay berhadiah puluhan juta rupiah, bazar merchandise eksklusif, hingga sesi temu fans dengan kreator dan desainer terkemuka.\n\nDirektur ICC menyatakan bahwa penggabungan dua event ini merupakan langkah strategis untuk memberikan pengalaman yang lebih komprehensif bagi para penggemar budaya pop Indonesia.`,
      category: ["Cosplay"], status: "Published", wordCount: 128, createdAt: "28 Oktober 2025",
    },
    {
      id: nid(), title: "myBCA Indonesia Comic Con X Indonesia Anime Con 2025, Jembatan Budaya Pop Global dan Lokal",
      excerpt: "Acara tersebut menghadirkan kompetisi cosplay, workshop kreatif, pembicara kreator, serta kolaborasi antara budaya barat dan timur.",
      image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=800&q=80",
      imageCaption: "myBCA ICC x INACON 2025. Dok. BCA",
      content: `WCR NEWS – Untuk pertama kalinya, myBCA hadir sebagai sponsor utama dalam perhelatan Indonesia Comic Con X Indonesia Anime Con 2025, menjadikan event ini sebagai jembatan yang menghubungkan budaya pop global dan lokal.\n\nSebagai bagian dari kolaborasi ini, myBCA menghadirkan berbagai aktivitas eksklusif termasuk kompetisi cosplay berhadiah total Rp 150 juta, workshop desain karakter, serta sesi meet-and-greet dengan kreator dari Jepang dan Amerika.\n\nMelalui dukungan ini, BCA berkomitmen untuk mendukung ekosistem kreatif Indonesia yang semakin berkembang pesat.\n\n"Generasi muda Indonesia sangat kreatif dan antusias. Kami ingin menjadi bagian dari pertumbuhan komunitas kreatif ini," ujar Direktur BCA dalam pembukaan event.`,
      category: ["Cosplay"], status: "Published", wordCount: 120, createdAt: "29 Oktober 2025",
    },
    {
      id: nid(), title: "Antusiasme Para Wibu Hadiri Ajang Cosplay Expo 2025",
      excerpt: "Gelaran Cosplay Expo di GBK dipenuhi pengunjung dengan kostum karakter anime; ada parade, bazzar, sampai pertunjukan idol.",
      image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&q=80",
      imageCaption: "Cosplay Expo 2025 di GBK, Jakarta. Dok. Panitia",
      content: `WCR NEWS – Gelanggang Olahraga Bung Karno (GBK) menjadi lautan kostum anime dan karakter fiksi ketika ribuan penggemar cosplay memadati ajang Cosplay Expo 2025.\n\nEvent yang digelar selama dua hari ini berhasil menarik lebih dari 20.000 pengunjung, menjadikannya salah satu gelaran cosplay terbesar yang pernah ada di Indonesia.\n\nBerbagai kegiatan menarik tersedia mulai dari parade cosplay keliling arena, bazar merchandise anime dan manga, kompetisi cosplay berbagai kategori, hingga penampilan idol grup dari Jepang yang untuk pertama kalinya hadir langsung di Indonesia.\n\n"Saya sudah menunggu event ini selama setahun. Akhirnya bisa ketemu sesama wibu dan pamer kostum yang sudah susah payah dibuat," ujar salah satu pengunjung sambil tersenyum lebar.`,
      category: ["Cosplay"], status: "Published", wordCount: 130, createdAt: "2 November 2025",
    },
    {
      id: nid(), title: "GBK Jadi Isekaii! Cosplay Expo 2025 Bikin Dunia Nyata Serasa Masuk Anime!",
      excerpt: "Cosplay Expo menghadirkan suasana ala dunia fantasi — cosplayer, idol, DJ, dan pertunjukan musik menyatu dalam event dua hari di GBK.",
      image: "https://images.unsplash.com/photo-1614682684040-4e2613b35562?w=800&q=80",
      imageCaption: "Suasana isekai di Cosplay Expo 2025 GBK. Dok. Panitia",
      content: `WCR NEWS – "Isekai" — sebuah istilah dalam anime yang berarti "dunia lain" — terasa nyata di Gelanggang Olahraga Bung Karno (GBK) selama berlangsungnya Cosplay Expo 2025.\n\nRibu cosplayer berbagai karakter anime, game, dan film memenuhi setiap sudut GBK, menciptakan atmosfer yang seolah-olah membawa pengunjung masuk ke dalam dunia fiksi favoritnya.\n\nSelain cosplay, event ini juga menghadirkan penampilan DJ dan musisi bertema anime, serta pertunjukan light show spektakuler di malam hari yang semakin menguatkan nuansa "isekai" tersebut.\n\n"Ini bukan sekadar event cosplay biasa. Ini adalah pengalaman imersif yang membawa kita semua masuk ke dunia anime," kata co-founder Cosplay Expo dalam konferensi pers.`,
      category: ["Cosplay"], status: "Published", wordCount: 122, createdAt: "3 November 2025",
    },
  ],
};