import { useCallback, useEffect, useRef, useState } from "react";

export const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const lastUpdate = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();

    // Throttle to 60fps max
    if (now - lastUpdate.current < 16) return;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
      lastUpdate.current = now;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleMouseMove]);

  return mousePos;
};
