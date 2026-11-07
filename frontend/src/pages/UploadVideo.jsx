import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api/axios";

export default function UploadVideo() {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    videoUrl: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const token = localStorage.getItem("adminToken");

      await api.post(
        "/videos",
        {
          ...formData,
          thumbnailUrl: "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Video saved successfully!");

      setFormData({
        title: "",
        subject: "",
        description: "",
        videoUrl: "",
      });

      setThumbnail(null);

      e.target.reset();

      setTimeout(() => {
        navigate("/admin/videos");
      }, 1000);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminEmail");
        navigate("/admin/login", { replace: true });
        return;
      }

      setError(
        error.response?.data?.message ||
          "Failed to save video. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Upload Video</h1>

          <Link
            to="/admin/dashboard"
            className="text-blue-600 hover:underline"
          >
            Back to Dashboard
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl bg-white p-6 shadow-sm"
        >
          <div>
            <label className="mb-2 block font-medium">
              Video Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3"
              placeholder="Enter video title"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3"
              placeholder="e.g. Mathematics"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full rounded-lg border p-3"
              placeholder="Describe the video"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              YouTube Video URL
            </label>
            <input
              type="url"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3"
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Thumbnail Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setThumbnail(e.target.files?.[0] || null)
              }
              className="w-full rounded-lg border p-3"
            />
            {thumbnail && (
              <p className="mt-2 text-sm text-gray-500">
                Selected: {thumbnail.name}
              </p>
            )}
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}

          {success && (
            <p role="status" className="text-sm text-green-600">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save Video"}
          </button>
        </form>
      </div>
    </div>
  );
}
