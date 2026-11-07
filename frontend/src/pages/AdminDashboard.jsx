
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api/axios";

export default function AdminDashboard() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const response = await api.get("/videos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setVideos(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminEmail");
          navigate("/admin/login", { replace: true });
          return;
        }

        setError("Unable to load videos. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    navigate("/admin/login", { replace: true });
  };

  const publishedCount = videos.filter(
    (video) => video.status === "Published"
  ).length;

  const draftCount = videos.filter(
    (video) => video.status === "Draft"
  ).length;

  const recentVideos = videos.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">
          Skillset Admin
        </h1>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <div className="flex">
        <aside className="hidden min-h-screen w-64 bg-gray-900 p-6 text-white md:block">
          <nav className="space-y-3">
            <Link
              to="/admin/dashboard"
              className="block rounded-lg bg-blue-600 px-4 py-3"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/videos"
              className="block rounded-lg px-4 py-3 hover:bg-gray-800"
            >
              Manage Videos
            </Link>

            <Link
              to="/admin/videos/upload"
              className="block rounded-lg px-4 py-3 hover:bg-gray-800"
            >
              Upload Video
            </Link>
          </nav>
        </aside>

        <main className="w-full p-6 md:p-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Dashboard
              </h2>
              <p className="mt-1 text-gray-500">
                Manage your educational video content.
              </p>
            </div>

            <Link
              to="/admin/videos/upload"
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
            >
              + Upload Video
            </Link>
          </div>

          {error && (
            <p className="mb-4 text-red-600">{error}</p>
          )}

          <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
              title="Total Videos"
              value={loading ? "..." : videos.length}
            />
            <StatCard
              title="Published"
              value={loading ? "..." : publishedCount}
            />
            <StatCard
              title="Drafts"
              value={loading ? "..." : draftCount}
            />
          </section>

          <section className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="flex items-center justify-between border-b p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Videos
              </h3>

              <Link
                to="/admin/videos"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View All
              </Link>
            </div>

            {loading ? (
              <p className="p-5 text-gray-500">Loading videos...</p>
            ) : videos.length === 0 ? (
              <p className="p-5 text-gray-500">
                No videos uploaded yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500">
                    <tr>
                      <th className="px-5 py-4">Video Title</th>
                      <th className="px-5 py-4">Subject</th>
                      <th className="px-5 py-4">Date</th>
                      <th className="px-5 py-4">Status</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y">
                    {recentVideos.map((video) => (
                      <tr key={video._id} className="hover:bg-gray-50">
                        <td className="px-5 py-4 font-medium text-gray-900">
                          {video.title}
                        </td>
                        <td className="px-5 py-4 text-gray-600">
                          {video.subject}
                        </td>
                        <td className="px-5 py-4 text-gray-600">
                          {video.createdAt
                            ? new Date(video.createdAt).toLocaleDateString()
                            : "—"}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              video.status === "Published"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {video.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-3 text-3xl font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
}
