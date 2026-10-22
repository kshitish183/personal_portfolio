import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

type Theme = "manga" | "comic";

function App() {
  const [theme, setTheme] = useState<Theme>("manga");
  const isLightComic = theme === "comic";

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "manga" ? "comic" : "manga"));
  }

  return (
    <div className={`theme-root min-h-screen overflow-hidden ${isLightComic ? "theme-comic" : "theme-manga"}`}>
      <Navbar isLightComic={isLightComic} onToggleTheme={toggleTheme} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
