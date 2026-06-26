import { ResponsiveCanvas } from "../../shared/ResponsiveCanvas";
import { ProfileMenu } from "./ProfileMenu";

// Re-use the product photos that already exist in the Figma export
import imgImage35 from "../../../imports/DetailKatalog/ea5b649c8cc9f0a833b2407519355b602d9516ad.png";
import imgImage36 from "../../../imports/DetailKatalog/e23b70ba2b2fff6b23f9fab8715384edc2010acf.png";
import imgImage37 from "../../../imports/DetailKatalog/9729a75e848b217a025998dfbbacf0814034e021.png";
import imgImage38 from "../../../imports/DetailKatalog/162770e71b02b33352e737df173a336f6327942a.png";
import imgRectangle126 from "../../../imports/DetailKatalog/d9a04a16b0b03fb3e1c8979f608fc2de73a90a1e.png";
import imgRectangle8 from "../../../imports/DetailKatalog/6d9889c899664e18dfd62c6971e8ba2b7c32919c.png";
import imgRectangle9 from "../../../imports/DetailKatalog/ecf003fbb674828f7ab1647f9d25a6cb3c8b6b4b.png";
import imgRectangle10 from "../../../imports/DetailKatalog/debd60e82eab4b8b4f3e108203b4293f4bbf6ec1.png";
import imgRectangle11 from "../../../imports/DetailKatalog/6eaa9bdec5c7ec4f2e74da70f987f77bc012340d.png";
import imgRectangle12 from "../../../imports/DetailKatalog/82f2bb1bc99356538729bfcae53a0eeb1483b52c.png";
import imgRectangle13 from "../../../imports/DetailKatalog/55fca55c6779f2f6e79ce0b7e914d3b2c2b6c9c5.png";
import imgRectangle14 from "../../../imports/DetailKatalog/3579bf46b3118e13d080bd39436e0f87b560bbea.png";
import imgRectangle15 from "../../../imports/DetailKatalog/ac6959efcc96d56d83f01fdcf7c89c577fe30587.png";
import imgRectangle16 from "../../../imports/DetailKatalog/64a4b330186e2980052faa1cb0d6f31693f0377e.png";
import imgRectangle17 from "../../../imports/DetailKatalog/65751b2c303ab657c629257d58869ec1cbd0e632.png";
import imgRectangle18 from "../../../imports/DetailKatalog/53270acd4be30a0ac4801acd663b79096a6da64b.png";
import imgRectangle19 from "../../../imports/DetailKatalog/2ceab7c45c6c05b6f4a6b1f14b7eef8eabab14a5.png";
import imgRectangle20 from "../../../imports/DetailKatalog/928f60345e16c3df6e6b716d54695135128d1e4f.png";
import imgRectangle21 from "../../../imports/DetailKatalog/b36b3c78c78c4b43eefe946f97009c968535c363.png";
import imgRectangle22 from "../../../imports/DetailKatalog/d533d89907ccd991f0457c82693a4aee71173d85.png";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export interface ProductData {
  id: string;
  name: string;
  category: string;
  description: string;
  size: string;
  location: string;
  image: string;
}

interface ProductSection {
  title: string;
  showSeeMore?: boolean;
  products: ProductData[];
}

const SECTIONS: ProductSection[] = [
  {
    title: "Terpopuler",
    showSeeMore: true,
    products: [
      { id: "p1", name: "Jas Dasi Panjang", category: "Jas", description: "Berdesain rapih menyesuaikan lekukan tubuh penyewa", size: "L", location: "Jakarta Selatan", image: imgImage35 },
      { id: "p2", name: "Jas Dasi Kupu-kupu", category: "Jas", description: "Berdesain rapih menyesuaikan lekukan tubuh penyewa", size: "L", location: "Surabaya", image: imgImage36 },
      { id: "p3", name: "Jas Panjang Wanita", category: "Jas", description: "Berdesain modern untuk musim gugur dan musim dingin", size: "L", location: "Jakarta Selatan", image: imgImage37 },
      { id: "p4", name: "Adat Jawa", category: "Baju Adat", description: "Di desain dengan perpaduan modern dan tradisional", size: "L", location: "Surabaya", image: imgImage38 },
    ],
  },
  {
    title: "Baju Adat",
    showSeeMore: true,
    products: [
      { id: "p5", name: "Kebaya Modern Emerald", category: "Baju Adat", description: "Berdesian dengan payet yang menunjang proporsi badan", size: "L", location: "Jakarta Selatan", image: imgRectangle126 },
      { id: "p6", name: "Kebaya Janggan Merah", category: "Baju Adat", description: "Berdesain elegan dengan detail kerah tinggi (Mandarin Collar)", size: "L", location: "Surabaya", image: imgRectangle8 },
      { id: "p7", name: "Kebaya Melayu", category: "Baju Adat", description: "Di desain dengan nuansa modern dan tradisional melayu", size: "L", location: "Jakarta Selatan", image: imgRectangle9 },
      { id: "p8", name: "Kebaya Betawi", category: "Baju Adat", description: "Di desain dengan nuansa modern dan tradisional betawi", size: "L", location: "Surabaya", image: imgRectangle10 },
    ],
  },
  {
    title: "Baju MC",
    products: [
      { id: "p9", name: "Dress Formal", category: "Baju MC", description: "Dres elegan dan mewah hijab friendly", size: "L", location: "Jakarta Selatan", image: imgRectangle11 },
      { id: "p10", name: "Adat Betawi", category: "Baju MC", description: "Setelan Baju adat Betawi cocok untuk drescode MC", size: "L", location: "Surabaya", image: imgRectangle12 },
      { id: "p11", name: "Jas", category: "Baju MC", description: "Setelan Jas timeless cocok untuk berbagai kegiatan", size: "L", location: "Jakarta Selatan", image: imgRectangle13 },
      { id: "p12", name: "Jas", category: "Baju MC", description: "Setelan Jas timeless cocok untuk berbagai kegiatan", size: "L", location: "Jakarta Selatan", image: imgRectangle14 },
      { id: "p13", name: "Tuxedo / Jas", category: "Baju MC", description: "Setelan tuxedo pria", size: "L", location: "Jakarta Selatan", image: imgRectangle15 },
      { id: "p14", name: "Jas Semi Formal", category: "Baju MC", description: "Jas Semi Formal", size: "L", location: "Surabaya", image: imgRectangle16 },
      { id: "p15", name: "Tuxedo Grey", category: "Baju MC", description: "Setelan tuxedo pria", size: "L", location: "Jakarta Selatan", image: imgRectangle17 },
      { id: "p16", name: "Jas Batik", category: "Baju MC", description: "Jas Batik elegan", size: "L", location: "Surabaya", image: imgRectangle18 },
    ],
  },
  {
    title: "Cosplay",
    products: [
      { id: "p17", name: "Spy X Family", category: "Cosplay", description: "Yor Forger dari anime spy x family", size: "S", location: "Jakarta Selatan", image: imgRectangle19 },
      { id: "p18", name: "Kafka Honkai Rail Star", category: "Cosplay", description: "Kafka Honkai Rail Star", size: "M", location: "Surabaya", image: imgRectangle20 },
      { id: "p19", name: "Loid Forger Spy X Family", category: "Cosplay", description: "Loid Forger dari anime spy x family", size: "L", location: "Jakarta Selatan", image: imgRectangle21 },
      { id: "p20", name: "Blade Honkai Rail Star", category: "Cosplay", description: "Blade Honkai Rail Star", size: "L", location: "Surabaya", image: imgRectangle22 },
    ],
  },
];

// ---------------------------------------------------------------------------
// UI pieces
// ---------------------------------------------------------------------------

function LocationPin() {
  return (
    <svg width="14" height="20" viewBox="0 0 17 24" fill="none" className="inline-block shrink-0 mr-1">
      <path
        d="M8.5 0C3.81 0 0 3.81 0 8.5C0 14.875 8.5 24 8.5 24C8.5 24 17 14.875 17 8.5C17 3.81 13.19 0 8.5 0ZM8.5 11.5C6.84 11.5 5.5 10.16 5.5 8.5C5.5 6.84 6.84 5.5 8.5 5.5C10.16 5.5 11.5 6.84 11.5 8.5C11.5 10.16 10.16 11.5 8.5 11.5Z"
        fill="black"
      />
    </svg>
  );
}

function ProductCard({ product, onClick }: { product: ProductData; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left flex flex-col gap-2 group focus:outline-none"
    >
      <div className="w-full aspect-[326/295] rounded-[20px] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[24px] text-black">
        {product.name}
      </p>
      <p className="font-['Open_Sans:Italic',sans-serif] italic text-[16px] text-black leading-snug">
        {product.description}
      </p>
      <p className="font-['Open_Sans:Italic',sans-serif] italic text-[16px] text-black">Size : {product.size}</p>
      <p className="font-['Open_Sans:Italic',sans-serif] italic text-[16px] text-black flex items-center">
        <LocationPin />
        {product.location}
      </p>
    </button>
  );
}

function SectionHeader({ title, showSeeMore }: { title: string; showSeeMore?: boolean }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[24px] text-black">
        {title}
      </h2>
      {showSeeMore && (
        <button className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[20px] text-black hover:opacity-70">
          See More.... &gt;
        </button>
      )}
    </div>
  );
}

function Navbar({
  onHome,
  onArtikel,
  onKatalog,
}: {
  onHome: () => void;
  onArtikel: () => void;
  onKatalog: () => void;
}) {
  return (
    <div className="bg-[#0094f6] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] px-10 py-6 flex items-center justify-between gap-6">
      <div className="flex flex-col gap-2 w-[320px]">
        <div className="bg-white rounded-[10px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center px-4 py-2 gap-2">
          <svg width="16" height="18" viewBox="0 0 16 18.5098" fill="none">
            <path
              d="M6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C7.85 13 9.1 12.59 10.14 11.9L14.59 16.35C14.79 16.55 15.04 16.65 15.3 16.65C15.56 16.65 15.81 16.55 16 16.35C16.4 15.95 16.4 15.35 16 14.95L11.55 10.5C12.24 9.45 12.65 8.21 12.65 6.86C12.65 3.27 9.74 0.36 6.15 0.36"
              fill="black"
            />
          </svg>
          <span className="text-[16px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-black/60">Cari</span>
        </div>
        <div className="bg-white rounded-[10px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center px-4 py-2 gap-2">
          <svg width="17" height="12" viewBox="0 0 16.5 11.5" fill="none">
            <path d="M1 1H15.5M3.5 5.75H13M6.5 10.5H10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[16px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-black/60">Filter. . . .</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={onHome} className="bg-[#fffafa] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] px-6 py-2 text-[16px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-black">
          Home
        </button>
        <button onClick={onKatalog} className="bg-[#fffafa] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] px-6 py-2 text-[16px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-black">
          Katalog
        </button>
        <button onClick={onArtikel} className="bg-[#fffafa] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] px-6 py-2 text-[16px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-black">
          Artikel
        </button>
        <button onClick={onHome} className="bg-[#fffafa] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] px-6 py-2 text-[16px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-black">
          Logout
        </button>
        <ProfileMenuTrigger />
      </div>
    </div>
  );
}

// Small wrapper so we don't need to know ProfileMenu's exact internal markup —
// it already renders its own icon + dropdown; we just place it inline here.
function ProfileMenuTrigger() {
  return <div className="relative w-[40px] h-[40px]" />;
}

function Footer() {
  return (
    <div className="bg-[#0094f6] px-10 py-12 mt-16 flex flex-col gap-10">
      <div className="flex flex-wrap items-start justify-between gap-10">
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px] rounded-full border-2 border-[#E2C379] flex items-center justify-center text-white font-bold">
            WCR
          </div>
          <div className="text-white">
            <p className="font-['Abril_Fatface',sans-serif] text-[28px] leading-none">WCR</p>
            <p className="text-[12px]">(WARDROBE COSTUME RENTAL)</p>
          </div>
        </div>
        <div className="flex gap-10 text-white font-['Montserrat:SemiBold',sans-serif] font-semibold text-[18px]">
          <span className="cursor-pointer hover:opacity-80">About</span>
          <span className="cursor-pointer hover:opacity-80">Authors</span>
          <span className="cursor-pointer hover:opacity-80">Archive</span>
          <span className="cursor-pointer hover:opacity-80">Cookie Policy</span>
          <span className="cursor-pointer hover:opacity-80">Terms and Conditions</span>
        </div>
      </div>
      <div className="text-white">
        <p className="text-[16px] mb-2">Social Media</p>
        <div className="flex gap-4">
          <span>FB</span>
          <span>X</span>
          <span>IG</span>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

interface Props {
  onHome: () => void;
  onArtikel: () => void;
  onDetailProduct: (product: ProductData) => void;
  onHistory?: () => void;
  onEditProfile?: () => void;
}

export default function KatalogPage({ onHome, onArtikel, onDetailProduct, onHistory, onEditProfile }: Props) {
  return (
    <ResponsiveCanvas>
      <div className="bg-white w-full min-h-screen">
        <Navbar onHome={onHome} onArtikel={onArtikel} onKatalog={() => {}} />
        <ProfileMenu onHistory={onHistory ?? (() => {})} onEditProfile={onEditProfile ?? (() => {})} />

        <div className="max-w-[1620px] mx-auto px-10 py-10 flex flex-col gap-16">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <SectionHeader title={section.title} showSeeMore={section.showSeeMore} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12">
                {section.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => onDetailProduct(product)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <Footer />
      </div>
    </ResponsiveCanvas>
  );
}