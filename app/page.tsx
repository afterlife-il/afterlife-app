export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>
        {process.env.NEXT_PUBLIC_APP_NAME ?? "Afterlife"}
      </h1>

      <p style={{ fontSize: 16, opacity: 0.8 }}>
        Base URL: {process.env.NEXT_PUBLIC_BASE_URL ?? "not set"}
      </p>

      <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/docs">Docs</a>
      </div>

      <hr style={{ margin: "24px 0" }} />

      <p>
        MVP en construction. Prochaine étape : Auth + DB + contenu pays (Israël
        en premier).
      </p>
    </main>
  );
}
