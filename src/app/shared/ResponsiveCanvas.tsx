import { useEffect, useRef, useState } from "react";

/**
 * Native design width of every Figma frame in this project (1728px).
 * Customer pages are pixel-perfect at this width; ResponsiveCanvas scales the
 * whole frame down proportionally so spacing, font size, and margins stay
 * exactly in proportion on any desktop width without horizontal scrolling.
 */
export const NATIVE_WIDTH = 1728;

interface Props {
  children: React.ReactNode;
}

export function ResponsiveCanvas({ children }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      const available = outerRef.current?.clientWidth ?? NATIVE_WIDTH;
      const nextScale = Math.min(available / NATIVE_WIDTH, 1);
      const contentHeight = innerRef.current?.scrollHeight ?? 0;
      setScale(nextScale);
      setHeight(contentHeight * nextScale);
    };

    update();
    const ro = new ResizeObserver(update);
    if (outerRef.current) ro.observe(outerRef.current);
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={outerRef} className="w-full overflow-x-hidden" style={{ height: height || undefined }}>
      <div
        ref={innerRef}
        style={{
          width: NATIVE_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
