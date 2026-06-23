import svgPaths from "./svg-v16uckhm5z";

function List() {
  return <div className="absolute left-0 size-[40px] top-0" data-name="List" />;
}

export default function SearchBar() {
  return (
    <div className="contents relative size-full" data-name="Search bar">
      <div className="absolute bg-white border border-black border-solid h-[48px] left-0 rounded-[20px] top-0 w-[335px]" />
      <List />
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.25 23.75">
        <path d={svgPaths.p1014a400} fill="var(--fill-0, black)" id="Vector" />
      </svg>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Open_Sans:Bold',sans-serif] font-bold h-[32px] leading-[normal] left-[54.5px] text-[24px] text-black text-center top-0 w-[109px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Search
      </p>
    </div>
  );
}