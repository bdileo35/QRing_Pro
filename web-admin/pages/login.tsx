// pages/login.tsx

import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación login simple
    if (email === "admin@qring.com" && password === "1234") {
      router.push("/dashboard"); // Redirige al Dashboard o inicio
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>QRingPro WebAdmin</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            Ingresar
          </button>
        </form>
        <p style={styles.footer}>¿Olvidaste tu contraseña?</p>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 32,
    borderRadius: 12,
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: 400,
  },
  title: {
    marginBottom: 24,
    textAlign: "center",
    color: "#0ea5e9",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 16,
    border: "1px solid #ccc",
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: "#0ea5e9",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
  footer: {
    marginTop: 16,
    fontSize: 14,
    textAlign: "center",
    color: "#6b7280",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
};
