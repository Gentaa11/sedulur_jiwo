import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/kawasanstp.png",
    background: "/header1.jpg",
  },
  {
    id: 2,
    image: "/talent.png",
    background: "/header2.jpg",
  },
  {
    id: 3,
    image: "/innovation.png",
    background: "/header3.jpg",
  },
];

export default function Header() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE SETIAP 3 DETIK
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const currentSlide = slides[current];

  return (
    <header
      className="header"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(170, 255, 235, 0.92),
            rgba(240, 240, 240, 0.92)
          ),
          url(${currentSlide.background})
        `,
      }}
    >
      <div className="header-content">

        {/* KIRI - TEXT */}
        <div className="judul-header">

          <h1>
            Sedulur<span>Jiwo</span>
          </h1>

          <p className="header-description">
            SedulurJiwo hadir sebagai ruang aman untuk membantu
            memahami kesehatan mental melalui konsultasi dan
            rekomendasi coping strategy berbasis sistem pakar.
          </p>

          {/* BUTTON */}
          <div className="header-buttons">

            <button className="btn-primary">
              Dapatkan Diagnosis Terpercaya
            </button>

            <button className="btn-secondary">
              Login
            </button>

          </div>
        </div>

        {/* KANAN - IMAGE */}
        <div className="header-image">
          <img
            src={currentSlide.image}
            alt="slide"
            className="map-img"
          />
        </div>
      </div>

      {/* DOT INDICATOR */}
      <div className="header-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              current === index ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </header>
  );
}