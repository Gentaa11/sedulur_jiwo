import {
  Heart,
  Globe,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">

          <h2>SedulurJiwo</h2>

          <div className="footer-socials">

            <a href="#">
              <Heart size={16} />
            </a>

            <a href="#">
              <Globe size={16} />
            </a>

            <a href="#">
              <Mail size={16} />
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <p>© 2026 SedulurJiwo</p>

        </div>

      </div>

    </footer>
  );
}