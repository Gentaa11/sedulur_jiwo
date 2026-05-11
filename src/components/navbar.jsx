import { useState, useRef } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const me = null;

  const doLogout = () => {
    console.log("Logout");
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h2 className="brand-text">Sedulur<span>Jiwo</span></h2>
      </div>


      {/* MENU */}
      <ul className="navbar-menu desktop-only">
        <li><a href="#beranda">Beranda</a></li>
        <li><a href="#layanan">Layanan</a></li>
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#konsultasi">Konsultasi</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>

      {/* RIGHT */}
      <div className="navbar-right desktop-only" ref={dropdownRef}>
        {me ? (
          <div className="user-menu">

            <div
              className="user-icon"
              onClick={() => setOpen(!open)}
            >
              {me?.username?.[0]?.toUpperCase() || "U"}
            </div>

            {open && (
              <div className="dropdown">

                <div className="dropdown-header">
                  <strong>{me.full_name}</strong>
                  <p>{me.email}</p>
                </div>

                <hr />

                <button
                  onClick={doLogout}
                  className="logout-btn"
                >
                  Logout
                </button>

              </div>
            )}
          </div>
        ) : (
          <button
            className="login-btn"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
        )}
      </div>

      {/* HAMBURGER */}
      <div
        className="hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </div>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        ref={mobileMenuRef}
      >

        <ul className="mobile-links">
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#layanan">Layanan</a></li>
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#konsultasi">Konsultasi</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>

        {!me ? (
          <button
            className="mobile-login-btn"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
        ) : (
          <button
            onClick={doLogout}
            className="mobile-login-btn"
          >
            Logout
          </button>
        )}
      </div>

    </nav>
  );
}