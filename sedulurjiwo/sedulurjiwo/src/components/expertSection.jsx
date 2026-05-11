export default function ExpertProfile() {
  return (
    <section className="expert-section">

      <div className="expert-header">
        <h1>Profil Pakar</h1>

        <p>
          Bekerjasama dengan psikolog klinis berpengalaman
          untuk memberikan solusi yang berbasis data dan empati.
        </p>
      </div>

      <div className="expert-card">

        {/* FOTO */}
        <div className="expert-image">
           <img
                src="/pakar.jpg"
                alt="Psikolog"
            /> 
        </div>
        
        {/* CONTENT */}
        <div className="expert-content">

          <h2>Dr. Arisya Putri, M.Psi</h2>

          <span className="expert-role">
            Psikolog Klinis Dewasa
          </span>

          <p className="expert-desc">
            "Kesehatan mental bukanlah tujuan akhir,
            melainkan sebuah proses berkelanjutan.
            Saya di sini untuk membantu Anda menavigasi
            setiap tantangan dengan pendekatan yang
            personal dan berbasis keahlian klinis."
          </p>

          <div className="expert-info">

            <div>
              <small>SPESIALISASI</small>
              <h4>Kecemasan & Depresi</h4>
            </div>

            <div>
              <small>PENGALAMAN</small>
              <h4>12+ Tahun</h4>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}