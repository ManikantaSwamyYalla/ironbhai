import { useEffect, useState } from "react";
import { fetchConfig, ConfigResponse } from "../services/footerService";

export default function Home() {
  const [config, setConfig] = useState<ConfigResponse["data"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchConfig()
      .then((res) => {
        setConfig(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-blue-600">Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{config?.full_name}</h1>
      <img
        src={config?.logo_image}
        alt="Logo"
        className="h-16 my-4"
      />
      <p>{config?.copyright}</p>
      <p>
        Contact: {config?.contact_us.email} | {config?.contact_us.phone}
      </p>
      <p>
        Website:{" "}
        <a
          href={config?.website_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          {config?.website_url}
        </a>
      </p>
    </div>
  );
}