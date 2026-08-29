import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

import SectionNav from "./SectionNav";

const MIN_CONTENT_WIDTH = 480;
const WIDTH_STORAGE_KEY = "site:content-width";
const KEYBOARD_STEP = 32;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";

  const [contentWidth, setContentWidth] = useState<number | null>(null);
  const draggingRef = useRef(false);

  const clamp = useCallback(
    (value: number) => Math.min(Math.max(value, MIN_CONTENT_WIDTH), window.innerWidth),
    [],
  );

  const persist = useCallback((value: number | null) => {
    try {
      if (value === null) {
        window.localStorage.removeItem(WIDTH_STORAGE_KEY);
      } else {
        window.localStorage.setItem(WIDTH_STORAGE_KEY, String(Math.round(value)));
      }
    } catch {
      // storage can be unavailable (private mode, blocked site data)
    }
  }, []);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(WIDTH_STORAGE_KEY);
      const parsed = stored === null ? NaN : Number(stored);

      if (Number.isFinite(parsed)) {
        setContentWidth(clamp(parsed));
      }
    } catch {
      // storage can be unavailable (private mode, blocked site data)
    }
  }, [clamp]);

  useEffect(() => {
    const onResize = () => setContentWidth((width) => (width === null ? width : clamp(width)));

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [clamp]);

  const startDrag = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.preventDefault();

      const handle = event.currentTarget;
      const pointerId = event.pointerId;

      handle.setPointerCapture(pointerId);
      draggingRef.current = true;
      document.body.style.userSelect = "none";
      document.body.style.cursor = "ew-resize";

      let latest: number | null = null;

      const onMove = (moveEvent: PointerEvent) => {
        if (!draggingRef.current) return;

        // The strip is centre-aligned, so both edges move symmetrically.
        latest = clamp(Math.abs(moveEvent.clientX - window.innerWidth / 2) * 2);
        setContentWidth(latest);
      };

      const onEnd = () => {
        draggingRef.current = false;
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
        handle.releasePointerCapture(pointerId);
        handle.removeEventListener("pointermove", onMove);
        handle.removeEventListener("pointerup", onEnd);
        handle.removeEventListener("pointercancel", onEnd);
        persist(latest);
      };

      handle.addEventListener("pointermove", onMove);
      handle.addEventListener("pointerup", onEnd);
      handle.addEventListener("pointercancel", onEnd);
    },
    [clamp, persist],
  );

  const onHandleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const step = event.key === "ArrowLeft" ? -KEYBOARD_STEP : event.key === "ArrowRight" ? KEYBOARD_STEP : 0;

      if (step === 0) return;

      event.preventDefault();
      setContentWidth((width) => {
        const next = clamp((width ?? MIN_CONTENT_WIDTH) + step * 2);
        persist(next);
        return next;
      });
    },
    [clamp, persist],
  );

  const resetWidth = useCallback(() => {
    setContentWidth(null);
    persist(null);
  }, [persist]);

  const handleProps = {
    role: "separator" as const,
    "aria-orientation": "vertical" as const,
    "aria-label": "Drag to resize the content width",
    tabIndex: 0,
    onPointerDown: startDrag,
    onKeyDown: onHandleKeyDown,
    onDoubleClick: resetWidth,
  };

  return (
    <div className="flex h-[100dvh] flex-col relative overflow-hidden font-sans selection:bg-gray-200 selection:text-black bg-black text-white">
      <div className="home-field fixed inset-0 z-0" aria-hidden="true" />
      <div className={`fixed inset-0 z-0 ${isHome ? "bg-black/35" : "bg-black/15"}`} aria-hidden="true" />
      <main
        className={`min-h-0 container relative z-10 mx-auto flex flex-1 flex-col overflow-hidden px-4 py-4 sm:py-6 ${
          isHome ? "max-w-6xl" : "max-w-[30rem]"
        }`}
        style={!isHome && contentWidth !== null ? { maxWidth: `${contentWidth}px` } : undefined}
      >
        {!isHome && (
          <>
            <div
              {...handleProps}
              className="group absolute inset-y-0 left-0 hidden w-3 -translate-x-1/2 cursor-ew-resize md:block"
            >
              <div className="mx-auto h-full w-px bg-white/25 transition-colors group-hover:bg-white/60 group-focus-visible:bg-white/60" />
            </div>
            <div
              {...handleProps}
              className="group absolute inset-y-0 right-0 hidden w-3 translate-x-1/2 cursor-ew-resize md:block"
            >
              <div className="mx-auto h-full w-px bg-white/25 transition-colors group-hover:bg-white/60 group-focus-visible:bg-white/60" />
            </div>
          </>
        )}
        <SectionNav />
        {/* The nav stays put; only this region scrolls. */}
        <div className={`min-h-0 flex-1 ${isHome ? "overflow-hidden" : "overflow-y-auto"}`}>{children}</div>
      </main>
    </div>
  );
}
