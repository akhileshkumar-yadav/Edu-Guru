'use client'
import { useRef, useState } from "react";

export default function HomePage() {
  const sectionRefs = useRef({
    about: null,
    contact: null,
    university: null,
    reviews: null
  });

  const scrollToSection = (section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  // Dummy reviews data
  const reviews = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    text: `This is review number ${i + 1}`,
  })).reverse(); // Latest reviews first

  const [showAll, setShowAll] = useState(false);
  
  return (
    <div>
      <nav style={{ position: "fixed", top: 0, background: "#fff", padding: "10px", width: "100%", zIndex: 1000 }}>
        <button onClick={() => scrollToSection("about")}>Go to About</button>
        <button onClick={() => scrollToSection("contact")}>Go to Contact</button>
        <button onClick={() => scrollToSection("university")}>Go to University</button>
        <button onClick={() => scrollToSection("reviews")}>Go to Reviews</button>
      </nav>

      <section style={{ height: "100vh", background: "#ccc", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2>Home Section</h2>
      </section>

      <section ref={(el) => (sectionRefs.current.about = el)} style={{ height: "100vh", background: "#f4a", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2>About Section</h2>
      </section>

      <section ref={(el) => (sectionRefs.current.contact = el)} style={{ height: "100vh", background: "#a4f", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2>Contact Section</h2>
      </section>

      <section ref={(el) => (sectionRefs.current.university = el)} style={{ height: "100vh", background: "#4af", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2>University Section</h2>
      </section>

      {/* Reviews Section */}
      <section ref={(el) => (sectionRefs.current.reviews = el)} style={{ padding: "40px", background: "#eee", textAlign: "center" }}>
        <h2>Reviews</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {(showAll ? reviews : reviews.slice(0, 10)).map((review) => (
            <li key={review.id} style={{ background: "#fff", margin: "10px 0", padding: "10px", borderRadius: "5px" }}>
              {review.text}
            </li>
          ))}
        </ul>
        {!showAll && (
          <button onClick={() => setShowAll(true)} style={{ padding: "10px 20px", background: "#333", color: "#fff", border: "none", cursor: "pointer" }}>
            Show More Reviews
          </button>
        )}
      </section>
    </div>
  );
}
