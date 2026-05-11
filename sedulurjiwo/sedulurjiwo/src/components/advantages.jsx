import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Advantages() {

  const [openIndex, setOpenIndex] = useState(null);

  const advantages = [
    {
      title: "Cepat & Akurat",
      desc: "Sistem pakar kami menganalisis input Anda dengan cepat dan memberikan hasil yang akurat untuk membantu pengguna memahami kondisi mental dengan lebih baik.",
      icon: "⚡",
    },
    {
      title: "Berbasis Pakar",
      desc: "Seluruh metode diagnosis dan rekomendasi dikembangkan bersama psikolog profesional dan berbasis pendekatan ilmiah.",
      icon: "🧠",
    },
    {
      title: "Mudah Digunakan",
      desc: "Interface dibuat sederhana dan nyaman sehingga mudah digunakan oleh semua kalangan tanpa kebingungan.",
      icon: "☝",
    },
    {
      title: "Privasi Terjamin",
      desc: "Semua data pengguna disimpan secara aman dan terenkripsi untuk menjaga kerahasiaan informasi pribadi.",
      icon: "🛡",
    },
  ];

  const toggleCard = (index) => {
     if (openIndex === index) {
        setOpenIndex(null);
    } else {
        setOpenIndex(index);
    }
    };

  return (
    <section className="advantage-section">
      <div className="advantage-container">
        <h1>Keunggulan Kami</h1>
        <p>
          Dirancang dengan teknologi terkini untuk memastikan
          Anda mendapatkan dukungan terbaik secara efisien.
        </p>
        <div className="advantage-grid">
          {advantages.map((item, index) => (
            <div
              className={`advantage-card ${
                openIndex === index ? "active" : ""
              }`}
              key={index}
            >

              {/* ICON */}
              <div className="advantage-icon">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3>{item.title}</h3>

              {/* DESCRIPTION */}
              <div
                className={`advantage-content ${
                  openIndex === index ? "show" : ""
                }`}
              >
                <p>{item.desc}</p>
              </div>

              {/* BUTTON */}
              <button
                className="expand-btn"
                onClick={() => toggleCard(index)}
              >
                <ChevronDown size={20} />
              </button>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}