import { useEffect } from "react";
import { Agentation } from "agentation";
import { Route, Routes, useLocation } from "react-router-dom";
import MusicWidget from "./components/MusicWidget";
import ScaleWrapper from "./components/ScaleWrapper";
import Gifts from "./pages/Gifts";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import QA from "./pages/QA";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const target = hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <MusicWidget />
      <ScaleWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/q-a" element={<QA />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </ScaleWrapper>
      {import.meta.env.DEV && <Agentation />}
    </>
  );
}
