
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadVideo from "./pages/UploadVideo";
import ManageVideos from "./pages/ManageVideos";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";


import "./App.css";

// Layout for public website
function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route element={<ProtectedRoute />}>
  <Route
    path="/admin/dashboard"
    element={<AdminDashboard />}
  />

  <Route
    path="/admin/videos/upload"
    element={<UploadVideo />}
  />

  <Route
    path="/admin/videos"
    element={<ManageVideos />}
  />
</Route>

        <Route
          path="/classes"
          element={
            <PublicLayout>
              <Classes />
            </PublicLayout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={<Navigate to="/admin/login" replace />}
        />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />
        

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <main className="not-found">
                <h1>404</h1>
                <p>Sorry, this page could not be found.</p>
                <a href="/" className="button button-primary">
                  Back to Home
                </a>
              </main>
            </PublicLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
