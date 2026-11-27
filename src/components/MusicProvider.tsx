import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Music = {
  isPlaying: boolean;
  toggle: () => void;
};

const MusicContext = createContext<Music | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const audio = useRef<HTMLAudioElement | null>(null);
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

    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      unlocked = true;
      el.muted = false;
      el.volume = 0.6;
      el.play().catch(() => {
        unlocked = false;
      });
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
    const onScroll = () => {
      if (window.scrollY > 40) unlock();
    };

    el.play().catch(() => {});

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("keydown", unlock);

    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("volumechange", sync);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      el.pause();
      el.src = "";
      audio.current = null;
    };
  }, []);

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (el.paused) {
      el.muted = false;
      el.volume = 0.6;
      el.play().catch(() => {});
    } else if (el.muted) {
      el.muted = false;
      el.volume = 0.6;
    } else {
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
