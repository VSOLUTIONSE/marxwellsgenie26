import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Music = {
  isPlaying: boolean;
  toggle: () => void;
};

const MusicContext = createContext<Music | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const userPaused = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const el = new Audio("/audio/song.mp3");
    el.loop = true;
    el.preload = "auto";
    el.muted = true;
    el.volume = 0;
    audio.current = el;

    const sync = () => setIsPlaying(!el.paused && !el.muted);
    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("volumechange", sync);

    const detach = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("pointerdown", startAudible);
      window.removeEventListener("touchstart", startAudible);
      window.removeEventListener("keydown", startAudible);
    };

    let lastAttempt = 0;

    const startAudible = () => {
      if (userPaused.current) return;
      if (!el.paused && !el.muted) {
        detach();
        return;
      }
      const now = Date.now();
      if (now - lastAttempt < 1000) return;
      lastAttempt = now;
      el.muted = false;
      el.volume = 0.6;
      el.play()
        .then(detach)
        .catch(() => {
          el.muted = true;
          el.volume = 0;
          el.play().catch(() => {});
        });
    };

    const onScroll = () => {
      if (window.scrollY > 10) startAudible();
    };

    el.play().catch(() => {});

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("pointerdown", startAudible, { passive: true });
    window.addEventListener("touchstart", startAudible, { passive: true });
    window.addEventListener("keydown", startAudible);

    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("volumechange", sync);
      detach();
      el.pause();
      el.src = "";
      audio.current = null;
    };
  }, []);

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (el.paused) {
      userPaused.current = false;
      el.muted = false;
      el.volume = 0.6;
      el.play().catch(() => {});
    } else if (el.muted) {
      el.muted = false;
      el.volume = 0.6;
    } else {
      userPaused.current = true;
      el.pause();
    }
  };

  return <MusicContext.Provider value={{ isPlaying, toggle }}>{children}</MusicContext.Provider>;
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) throw new Error("useMusic must be used inside MusicProvider");
  return context;
}
