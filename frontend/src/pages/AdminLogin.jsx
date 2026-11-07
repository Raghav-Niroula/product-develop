
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api/axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", response.data.token);
      localStorage.setItem("adminEmail", response.data.admin.email);

      navigate("/admin/dashboard");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <Link to="/" className="brand login-brand">
          <span className="brand-icon">S</span>
          <span>
            Skill<span className="brand-accent">Nep</span>
          </span>
        </Link>

        <div className="login-icon">🔐</div>

        <span className="section-kicker">RESTRICTED ACCESS</span>

        <h1>Admin Login</h1>

        <p className="login-description">
          Sign in to manage and publish recorded classes.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="admin-email">Admin email</label>

          <input
            id="admin-email"
            type="email"
            placeholder="Enter admin email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="admin-password">Password</label>

          <input
            id="admin-password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && (
            <p role="alert" className="text-red-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="button button-primary login-submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In →"}
          </button>
        </form>

        <p className="login-security-note">
          This area is intended for authorized administrators only.
        </p>

        <Link to="/" className="login-back-link">
          ← Back to SkillNep
        </Link>
      </section>
    </main>
  );
}
