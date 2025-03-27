'use client'
import { useRef } from "react";

export default function HomePage() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav>
        <button onClick={scrollToAbout}>Go to About</button>
      </nav>

      <section style={{ height: "100vh", background: "#ccc" }}>
        <h2>Home Section</h2>
      </section>

      <section ref={aboutRef} style={{ height: "100vh", background: "#f4a" }}>
        <h2>About Section</h2>
        <p>This is the about section.</p>
      </section>
    </div>
  );
}
