import svgPaths from "./svg-p563grivny";
import imgRectangle8 from "./6d9889c899664e18dfd62c6971e8ba2b7c32919c.png";
import imgRectangle88 from "./1dc92711e010a827b9a98e44a7998a1238c1f6d0.png";

function Container() {
  return (
    <div className="absolute contents left-[120px] top-[162px]" data-name="container">
      <div className="absolute h-[525px] left-[125px] top-[204px] w-[897px]">
        <div className="h-[525px] relative w-[897px]">
          <div className="absolute inset-0 rounded-[20px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle8} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[120px] text-[20px] text-black top-[162px] w-[468px]">Baju Mc / Penyanyi / Adat</p>
      {/* FIX: top-[190px] -> top-[745px]. Sebelumnya judul berada di atas gambar
          (gambar: top 204px s/d 729px), sehingga judul dan kategori menimpa gambar.
          Sekarang judul diletakkan tepat setelah gambar berakhir (204 + 525 = 729),
          selaras dengan posisi deskripsi (top-[809px]) di bawahnya. */}
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[57px] leading-[normal] left-[120px] text-[36px] text-black top-[745px] w-[700px]">Kebaya Janggan Merah</p>
      <div className="[word-break:break-word] absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[0] left-[125px] text-[24px] text-black top-[809px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0">Baju ini berdesain elegan dan mewah.</p>
        <p className="leading-[normal] mb-0">Kelengkapan Sewa</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[36px]">
            <span className="leading-[normal]">Pakaian Utama: Baju Atasan/Kebaya Modifikasi Beludru Maroon.</span>
          </li>
          <li className="mb-0 ms-[36px]">
            <span className="leading-[normal]">Pakaian Pendamping: Kain Bawahan/Rok (Batik/Songket) yang serasi.</span>
          </li>
          <li className="mb-0 ms-[36px]">
            <span className="leading-[normal]">Aksesoris: Set perhiasan pelengkap (bros atau anting) (tergantung paket sewa).</span>
          </li>
          <li className="ms-[36px]">
            <span className="leading-[normal]">Layanan: Biaya laundry biasanya termasuk dalam harga sewa.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[125px] top-[1668px]">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[200.5px] text-[16px] text-black text-center top-[1680px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">Tanggal Penyewaan</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
            <path d={svgPaths.p1cc3a100} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pl-[8px] pr-[4px] py-[10px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#49454f] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Aug</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 3.75">
            <path d={svgPaths.pd8d170} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
            <path d={svgPaths.p33166380} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function MonthDropDown() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Month drop down">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button - standard">
        <Content />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Building Blocks/Menu button">
        <StateLayer1 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button - standard">
        <Content1 />
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
            <path d={svgPaths.p1cc3a100} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pl-[8px] pr-[4px] py-[10px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#49454f] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">2025</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 3.75">
            <path d={svgPaths.pd8d170} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
            <path d={svgPaths.p33166380} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function YearDropDown() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Year drop down">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button - standard">
        <Content2 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Building Blocks/Menu button">
        <StateLayer4 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button - standard">
        <Content3 />
      </div>
    </div>
  );
}

function SelectionRow() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-[381px]" data-name="Selection Row">
      <MonthDropDown />
      <YearDropDown />
    </div>
  );
}

function Sunday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Sunday">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">S</p>
      </div>
    </div>
  );
}

function Monday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Monday">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">M</p>
      </div>
    </div>
  );
}

function Tuesday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Tuesday">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">T</p>
      </div>
    </div>
  );
}

function Wednesday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Wednesday">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">W</p>
      </div>
    </div>
  );
}

function Thursday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Thursday">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">T</p>
      </div>
    </div>
  );
}

function Friday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Friday">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">F</p>
      </div>
    </div>
  );
}

function Saturday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Saturday">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">S</p>
      </div>
    </div>
  );
}

function DaysOfTheWeek() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Days of the week">
      <Sunday />
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">26</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer6 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">27</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer7 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">28</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer8 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">29</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer9 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">30</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer10 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">31</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer11 />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer12 />
    </div>
  );
}

function Week() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[895px]" data-name="Week 1">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
        <Container1 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
        <Container2 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
        <Container3 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
        <Container4 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
        <Container5 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
        <Container6 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
        <Container7 />
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer13 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer14 />
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">4</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer15 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">5</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer16 />
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">6</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer17 />
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">7</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer18 />
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">8</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer19 />
    </div>
  );
}

function Week1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[895px]" data-name="Week 6">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
        <Container8 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
        <Container9 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
        <Container10 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
        <Container11 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
        <Container12 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
        <Container13 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
        <Container14 />
      </div>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">9</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer20 />
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">10</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer21 />
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">11</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer22 />
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">12</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer23 />
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">13</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer24 />
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">14</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer25 />
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">15</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer26 />
    </div>
  );
}

function Week2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[895px]" data-name="Week 7">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
        <Container15 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
        <Container16 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
        <Container17 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
        <Container18 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
        <Container19 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
        <Container20 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
        <Container21 />
      </div>
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">16</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer27 />
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">17</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-start overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer28 />
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">18</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer29 />
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">19</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer30 />
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">20</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer31 />
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">21</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer32 />
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">22</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer33 />
    </div>
  );
}

function Week3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[895px]" data-name="Week 8">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
        <Container22 />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
        <Container23 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
        <Container24 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
        <Container25 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
        <Container26 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
        <Container27 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
        <Container28 />
      </div>
    </div>
  );
}

function StateLayer34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">23</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer34 />
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">24</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer35 />
    </div>
  );
}

function StateLayer36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">25</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer36 />
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">26</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer37 />
    </div>
  );
}

function StateLayer38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">27</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer38 />
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">28</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer39 />
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">29</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer40 />
    </div>
  );
}

function Week4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[895px]" data-name="Week 9">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
        <Container29 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
        <Container30 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
        <Container31 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
        <Container32 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
        <Container33 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
        <Container34 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
        <Container35 />
      </div>
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">30</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer41 />
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer42 />
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer43 />
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer44 />
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">4</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer45 />
    </div>
  );
}

function StateLayer46() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">5</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer46 />
    </div>
  );
}

function StateLayer47() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-38 relative shrink-0 text-[#49454f] text-[16px] text-center tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">6</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer47 />
    </div>
  );
}

function Week5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[895px]" data-name="Week 10">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
        <Container36 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
        <Container37 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
        <Container38 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
        <Container39 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
        <Container40 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
        <Container41 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
        <Container42 />
      </div>
    </div>
  );
}

function CalendarGrid() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[4px] px-[12px] relative shrink-0 w-[1478px]" data-name="Calendar grid">
      <DaysOfTheWeek />
      <Week />
      <Week1 />
      <Week2 />
      <Week3 />
      <Week4 />
      <Week5 />
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6750a4] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Cancel</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer48 />
    </div>
  );
}

function StateLayer49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6750a4] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">OK</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer49 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-end justify-end min-w-px relative" data-name="Button container">
      <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button - text">
        <Content4 />
      </div>
      <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button - text">
        <Content5 />
      </div>
    </div>
  );
}

function LocalActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Local Actions">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[4px] relative size-full">
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="absolute bg-[#ece6f0] content-stretch flex flex-col items-start left-[125px] overflow-clip rounded-[16px] top-[1792px] w-[1478px]" data-name="Date Picker">
      <SelectionRow />
      <CalendarGrid />
      <LocalActions />
    </div>
  );
}

function InputTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">{`17/08/2025 - 19/08/2025 `}</p>
      </div>
    </div>
  );
}

function LabelTextContainer() {
  return (
    <div className="absolute bg-[#fef7ff] content-stretch flex items-center left-[-4px] px-[4px] top-[-12px]" data-name="Label text container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6750a4] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Date
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer />
      <LabelTextContainer />
    </div>
  );
}

function StateLayer51() {
  return (
    <div className="bg-[rgba(73,69,79,0.08)] content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="absolute bottom-0 h-[28px] right-0 w-[38px]" data-name="Ripple">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 28">
          <path d={svgPaths.p3e89a300} fill="var(--fill-0, #49454F)" fillOpacity="0.1" id="Ripple" />
        </svg>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[8.33%_12.5%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.pcb4ca40} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer51 />
    </div>
  );
}

function StateLayer50() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="State-layer">
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content6 />
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-[4px] w-full" data-name="Text field">
      <div aria-hidden className="absolute border-3 border-[#6750a4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer50 />
    </div>
  );
}

function SupportingText() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex h-[20px] items-start left-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] min-w-px relative text-[#49454f] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        MM/DD/YYYY
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[125px] top-[1709px]">
      <DatePicker />
      <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[125px] rounded-tl-[4px] rounded-tr-[4px] top-[1709px] w-[1478px]" data-name="Text field">
        <TextField />
        <SupportingText />
      </div>
    </div>
  );
}

function AturanSewa() {
  return (
    <div className="absolute contents left-[125px] top-[1115px]" data-name="Aturan Sewa">
      <div className="absolute h-[495px] left-[125px] rounded-[20px] top-[1161px] w-[496px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle88} />
      </div>
      <p className="[word-break:break-word] absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] left-[125px] text-[24px] text-black top-[1115px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Aturan Penyewaan
      </p>
    </div>
  );
}

function Lokasi() {
  return (
    <div className="absolute contents left-[125px] top-[1072px]" data-name="Lokasi">
      <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[169px] text-[24px] text-black top-[1072px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Jakarta Selatan
      </p>
      <div className="absolute inset-[46.99%_91.61%_51.96%_7.23%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
          <path d={svgPaths.p3a7b6c00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[125px] top-[1017px]">
      <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[125px] text-[24px] text-black top-[1017px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Size:
      </p>
      <div className="absolute h-[27px] left-[195px] top-[1023px] w-[28px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 27">
          <ellipse cx="14" cy="13.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 13" rx="14" ry="13.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[202px] text-[24px] text-black top-[1020px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        L
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[125px] top-[1017px]">
      <Lokasi />
      <Group />
    </div>
  );
}

function Cekot() {
  return (
    <div className="absolute contents inset-[0_0_73.18%_0]" data-name="Cekot">
      <div className="absolute bg-white border border-black border-solid inset-[0_0_73.18%_0] rounded-[20px]" />
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-[8.64%_37.65%_82.27%_37.65%] leading-[normal] text-[16px] text-black text-center whitespace-nowrap">Checkout</p>
    </div>
  );
}

function Cart() {
  return (
    <div className="absolute inset-[43.64%_83.02%_44.74%_8.02%]" data-name="Cart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 25.5697">
        <g id="Cart">
          <path d={svgPaths.p1b6b8800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1dbadd00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1c257a80} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Keranjang() {
  return (
    <div className="absolute contents inset-[36.36%_0_36.82%_0]" data-name="Keranjang">
      <div className="absolute bg-white border border-black border-solid inset-[36.36%_0_36.82%_0] rounded-[20px]" />
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-[45%_37.04%_45.91%_36.73%] leading-[normal] text-[16px] text-black text-center whitespace-nowrap">Keranjang</p>
      <Cart />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[24.41%_1.95%_23.08%_61.52%]">
      <div className="absolute inset-[36.09%_8.51%_34.76%_85.01%] pointer-events-none rounded-[10px]">
        <div aria-hidden className="absolute bg-[#fffafa] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-[41.73%_10.01%_42.52%_86.57%] leading-[normal] text-[16px] text-black whitespace-nowrap">Logout</p>
      <div className="absolute inset-[36.09%_16.38%_34.76%_77.2%] pointer-events-none rounded-[10px]">
        <div aria-hidden className="absolute bg-[#fffafa] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-[41.55%_18%_40.23%_78.82%] leading-[normal] text-[16px] text-black">Artikel</p>
      <div className="absolute inset-[36.09%_24.19%_34.76%_69.39%] pointer-events-none rounded-[10px]">
        <div aria-hidden className="absolute bg-[#fffafa] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-[41.55%_25.35%_40.23%_70.54%] leading-[normal] text-[16px] text-black">Katalog</p>
      <div className="absolute inset-[36.09%_32%_34.76%_61.52%] pointer-events-none rounded-[10px]">
        <div aria-hidden className="absolute bg-[#fffafa] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-[41.55%_33.8%_40.23%_63.25%] leading-[normal] text-[16px] text-black">Home</p>
      <div className="absolute aspect-[24/24] left-[94.19%] right-[1.95%] top-[31px]" data-name="ic:sharp-account-circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6857 66.6857">
          <path d={svgPaths.p23a23bc0} fill="var(--fill-0, #FFFAFA)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function DetailProduct() {
  return (
    <div className="bg-white relative size-full" data-name="Detail product">
      <Container />
      <Group3 />
      <Group1 />
      <AturanSewa />
      <Group2 />
      <div className="absolute h-[220px] left-[1257px] top-[204px] w-[324px]" data-name="Component 7">
        <Cekot />
        <Keranjang />
      </div>
      <div className="absolute h-[127px] left-0 top-0 w-[1728px]" data-name="Pnavbar">
        <div aria-hidden className="absolute bg-[#0094f6] inset-0 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        <Group4 />
      </div>
    </div>
  );
}