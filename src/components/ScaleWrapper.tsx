import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ScaleWrapper({ children }: { children: ReactNode }) {
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const next = Math.min(1, window.innerWidth / 1440);
      setScale(next);
      if (inner.current) setHeight(inner.current.scrollHeight * next);
    };

    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    const observer = new ResizeObserver(measure);
    if (inner.current) observer.observe(inner.current);

    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ height, position: "relative", overflowX: "hidden" }}>
      <div
        ref={inner}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: 1440,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
