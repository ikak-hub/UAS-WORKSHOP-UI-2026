import { useState } from "react";
import { LogoMark } from "../../shared/components/LogoMark";

/* Halaman login khusus Admin.*/
export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <nav style={{
        background: "#0094F6", height: 80,
        display: "flex", alignItems: "center",
        padding: "0 32px", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark />
          <span style={{ color: "#fff", fontSize: 22, fontFamily: "'Secular One', sans-serif" }}>
            WardrobeCostumRental
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width={56} height={56} viewBox="0 0 24 24" fill="white">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 5a3 3 0 110 6 3 3 0 010-6zm0 14a8 8 0 01-6.4-3.2c.03-2.12 4.27-3.3 6.4-3.3 2.13 0 6.37 1.18 6.4 3.3A8 8 0 0112 21z" />
          </svg>
          <button style={{
            background: "#FFFAFA", border: "none", borderRadius: 10,
            padding: "10px 22px", fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600, fontSize: 16, cursor: "pointer",
          }}>
            Logout
          </button>
        </div>
      </nav>

      {/* Form */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 0" }}>
        <div style={{
          background: "#0094F6", borderRadius: 50,
          padding: "57px 100px 76px", maxWidth: 540, width: "100%",
        }}>
          <h1 style={{ color: "#fff", textAlign: "center", fontFamily: "'Open Sans', sans-serif", fontWeight: 800, fontSize: 48, margin: "0 0 12px" }}>
            LOGIN
          </h1>
          <p style={{ color: "#fff", textAlign: "center", fontFamily: "'Open Sans', sans-serif", fontWeight: 800, fontSize: 16, margin: "0 0 32px" }}>
            MASUK KE AKUN ANDA
          </p>

          {/* Email */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
            <div style={{ background: "#06121A", borderRadius: "20px 0 0 20px", width: 57, height: 41, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width={22} height={22} viewBox="0 0 38 38" fill="white">
                <path d="M33.9 13.3L19.7 3.8A1.2 1.2 0 0019 3.6a1.2 1.2 0 00-.7.2L4.1 13.3a1 1 0 00-.5 1V29.7c0 .6.2 1.2.7 1.6.4.5 1 .7 1.6.7h26.1a2.3 2.3 0 002.4-2.3V14.2a1 1 0 00-.5-.9zM14.4 22.6l-8.4 5.9V16.6l8.4 6zm2.4 1.1h4.4l8.4 5.9H8.4l8.4-5.9zm7.2-1.1l8.4-6V28.5l-8.4-6zm-6.4-5.2l-7.8-5.3 6.4-4.4 4.8 3 4.8-3L32.6 12l-7.8 5.3h-7.2z" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, height: 41, border: "none", borderRadius: "0 20px 20px 0", padding: "0 20px", fontFamily: "'Poppins', sans-serif", fontSize: 16, outline: "none" }}
            />
          </div>

          {/* Password */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 64 }}>
            <div style={{ background: "#000", borderRadius: "20px 0 0 20px", width: 57, height: 41, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width={20} height={22} viewBox="0 0 31 30" fill="white">
                <path d="M17.5 14.6a4.2 4.2 0 014.2 4.2 4.2 4.2 0 01-4.2 4.2 4.2 4.2 0 01-4.2-4.2 4.2 4.2 0 014.2-4.2m0 2.2a2 2 0 000 4 2 2 0 000-4zm11.3-6.7H25v-3.4A8.8 8.8 0 0017.5 0a8.8 8.8 0 00-8.8 6.7v3.4H5a2.3 2.3 0 00-2.2 2.3v14.3a2.3 2.3 0 002.2 2.3h23.8a2.3 2.3 0 002.2-2.3V12.4a2.3 2.3 0 00-2.2-2.3zm-18.8-3.4a6.5 6.5 0 016.5-4.5 6.5 6.5 0 016.5 4.5v3.4H10v-3.4zm18.8 20H5V12.4h23.8v14.3z" />
              </svg>
            </div>
            <input
              type="password"
              placeholder="******************"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ flex: 1, height: 41, border: "none", borderRadius: "0 20px 20px 0", padding: "0 20px", fontFamily: "'Poppins', sans-serif", fontSize: 16, outline: "none" }}
            />
          </div>

          <button
            onClick={onLogin}
            style={{ width: "100%", height: 54, background: "#fff", border: "none", borderRadius: 20, fontFamily: "'Open Sans', sans-serif", fontWeight: 800, fontSize: 36, cursor: "pointer", color: "#000", marginBottom: 12 }}
          >
            LOGIN
          </button>
          <p style={{ textAlign: "center", margin: 0 }}>
            <button style={{ background: "none", border: "none", fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 16, color: "#000", textDecoration: "underline", cursor: "pointer" }}>
              Lupa password
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}