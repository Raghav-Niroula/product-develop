
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api/axios";

export default function ManageVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);

  const navigate = useNavigate();

  const getAuthConfig = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    },
  });

  const fetchVideos = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await api.get("/videos", getAuthConfig());
      setVideos(response.data.videos || response.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminEmail");
        navigate("/admin/login", { replace: true });
        return;
      }

      setError(
        err.response?.data?.message || "Failed to load videos."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleEditChange = (e) => {
    setEditingVideo({
      ...editingVideo,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const response = await api.put(
        `/videos/${editingVideo._id}`,
        {
          title: editingVideo.title,
          subject: editingVideo.subject,
          description: editingVideo.description,
          videoUrl: editingVideo.videoUrl,
          thumbnailUrl: editingVideo.thumbnailUrl || "",
          status: editingVideo.status,
        },
        getAuthConfig()
      );

      const updatedVideo = response.data.video || response.data;

      setVideos((currentVideos) =>
        currentVideos.map((video) =>
          video._id === editingVideo._id
            ? updatedVideo
            : video
        )
      );

      setEditingVideo(null);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to update video."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (video) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${video.title}"?`
    );

    if (!confirmed) return;

    setError("");

    try {
      await api.delete(`/videos/${video._id}`, getAuthConfig());

      setVideos((currentVideos) =>
        currentVideos.filter((item) => item._id !== video._id)
      );
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to delete video."
      );
    }
  };

  const handleToggleStatus = async (video) => {
    const newStatus =
      video.status === "Published" ? "Draft" : "Published";

    try {
      const response = await api.put(
        `/videos/${video._id}`,
        { status: newStatus },
        getAuthConfig()
      );

      const updatedVideo = response.data.video || response.data;

      setVideos((currentVideos) =>
        currentVideos.map((item) =>
          item._id === video._id ? updatedVideo : item
        )
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to change video status."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Videos</h1>

        <Link
          to="/admin/videos/upload"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          + Upload Video
        </Link>
      </div>

      {error && (
        <div
          role="alert"
          className="mb-5 rounded-lg bg-red-100 p-4 text-red-700"
        >
          {error}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        {loading ? (
          <p className="p-6 text-gray-500">Loading videos...</p>
        ) : videos.length === 0 ? (
          <p className="p-6 text-gray-500">
            No videos found. Upload your first video.
          </p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="p-5">Title</th>
                <th className="p-5">Subject</th>
                <th className="p-5">Status</th>
                <th className="p-5">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {videos.map((video) => (
                <tr key={video._id}>
                  <td className="p-5 font-medium">
                    {video.title}
                  </td>

                  <td className="p-5">{video.subject}</td>

                  <td className="p-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        video.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {video.status}
                    </span>
                  </td>

                  <td className="space-x-4 p-5">
                    <button
                      onClick={() => setEditingVideo({ ...video })}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleToggleStatus(video)}
                      className="text-indigo-600 hover:underline"
                    >
                      {video.status === "Published"
                        ? "Unpublish"
                        : "Publish"}
                    </button>

                    <button
                      onClick={() => handleDelete(video)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {editingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <form
            onSubmit={handleUpdate}
            className="max-h-[90vh] w-full max-w-xl space-y-4 overflow-y-auto rounded-xl bg-white p-6"
          >
            <h2 className="text-xl font-bold">Edit Video</h2>

            <div>
              <label className="mb-1 block font-medium">
                Title
              </label>
              <input
                name="title"
                value={editingVideo.title || ""}
                onChange={handleEditChange}
                required
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">
                Subject
              </label>
              <input
                name="subject"
                value={editingVideo.subject || ""}
                onChange={handleEditChange}
                required
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">
                Description
              </label>
              <textarea
                name="description"
                value={editingVideo.description || ""}
                onChange={handleEditChange}
                rows="3"
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">
                YouTube URL
              </label>
              <input
                name="videoUrl"
                type="url"
                value={editingVideo.videoUrl || ""}
                onChange={handleEditChange}
                required
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">
                Thumbnail URL
              </label>
              <input
                name="thumbnailUrl"
                type="url"
                value={editingVideo.thumbnailUrl || ""}
                onChange={handleEditChange}
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">
                Status
              </label>
              <select
                name="status"
                value={editingVideo.status || "Draft"}
                onChange={handleEditChange}
                className="w-full rounded-lg border p-3"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setEditingVideo(null)}
                className="rounded-lg border px-4 py-2"
                disabled={saving}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
