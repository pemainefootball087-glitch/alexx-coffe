import { useEffect, useRef, useState } from "react";
import { Upload, Trash2, ImageIcon, ArrowLeft, RefreshCw } from "lucide-react";
import { Logo } from "../components/Logo";
import { MENU_ITEMS } from "../data/content";
import { fetchMedia, uploadMedia, deleteMedia, fileUrl } from "../lib/api";

const SLOTS = [
  { id: "hero", label: "Hero Utama (foto latar paling atas)" },
  { id: "gallery", label: "Gallery (tambah foto baru)" },
  ...MENU_ITEMS.map((m) => ({ id: m.id, label: `Menu: ${m.name}` })),
];

const slotLabel = (id) => SLOTS.find((s) => s.id === id)?.label || id;

export default function AdminPage() {
  const [media, setMedia] = useState([]);
  const [slot, setSlot] = useState("hero");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState(null);
  const inputRef = useRef(null);

  const load = async () => {
    try {
      setMedia(await fetchMedia());
    } catch {
      setMessage({ type: "error", text: "Gagal memuat daftar foto dari server." });
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onPick = (f) => {
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setMessage({ type: "error", text: "File harus berupa gambar (JPG/PNG/WebP)." });
      return;
    }
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setMessage(null);
  };

  const onUpload = async () => {
    if (!file) {
      setMessage({ type: "error", text: "Pilih foto dulu sebelum upload." });
      return;
    }
    setBusy(true);
    setMessage(null);
    try {
      await uploadMedia(slot, file);
      setMessage({ type: "success", text: "Foto berhasil diupload dan langsung tampil di website." });
      setFile(null);
      setPreview(null);
      if (inputRef.current) inputRef.current.value = "";
      await load();
    } catch {
      setMessage({ type: "error", text: "Upload gagal. Coba lagi dengan foto yang lebih kecil (maks 10 MB)." });
    } finally {
      setBusy(false);
    }
  };

  const onDelete = async (id) => {
    setBusy(true);
    try {
      await deleteMedia(id);
      await load();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div data-testid="admin-page" className="min-h-screen bg-parchment font-sans text-coffee-900">
      <header className="border-b border-coffee-900/10 bg-cream">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Logo />
          <a
            href="/"
            data-testid="admin-back-link"
            className="inline-flex items-center gap-2 text-sm font-medium text-coffee-800 transition-colors hover:text-caramel"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Website
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-caramel">Admin</p>
        <h1 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
          Upload Foto Cafe
        </h1>
        <p className="mt-3 max-w-2xl text-base text-coffee-700/80">
          Upload foto asli ALEXX COFFEE di sini. Pilih lokasi tampilnya (hero, gallery,
          atau menu tertentu) — foto langsung menggantikan/menambah foto di website.
        </p>

        <div className="mt-10 rounded-3xl border border-coffee-900/10 bg-white p-6 shadow-sm sm:p-8">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee-700/60">
            Tampilkan di
          </label>
          <select
            data-testid="admin-slot-select"
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
            className="mt-2 w-full rounded-xl border border-coffee-900/15 bg-parchment px-4 py-3 text-sm font-medium text-coffee-900 outline-none focus:border-caramel"
          >
            {SLOTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row">
            <button
              type="button"
              data-testid="admin-file-drop"
              onClick={() => inputRef.current?.click()}
              className="flex h-48 flex-1 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-coffee-900/20 bg-parchment text-coffee-700/70 transition-colors hover:border-caramel hover:text-caramel"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="h-full w-full rounded-2xl object-cover" />
              ) : (
                <>
                  <ImageIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Klik untuk pilih foto</span>
                  <span className="text-xs">JPG, PNG, atau WebP · maks 10 MB</span>
                </>
              )}
            </button>
            <input
              ref={inputRef}
              data-testid="admin-file-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => onPick(e.target.files?.[0])}
            />
            <div className="flex flex-col justify-center gap-3 sm:w-56">
              <button
                type="button"
                data-testid="admin-upload-btn"
                onClick={onUpload}
                disabled={busy}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel px-6 py-3.5 text-sm font-semibold text-coffee-950 transition-all duration-300 hover:bg-caramel-light disabled:opacity-50"
              >
                <Upload className="h-4 w-4" />
                {busy ? "Mengupload..." : "Upload Foto"}
              </button>
              {message && (
                <p
                  data-testid="admin-message"
                  className={`text-sm ${message.type === "error" ? "text-red-700" : "text-green-700"}`}
                >
                  {message.text}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <h2 className="font-display text-2xl">Foto Terupload ({media.length})</h2>
          <button
            type="button"
            data-testid="admin-refresh-btn"
            onClick={load}
            className="inline-flex items-center gap-2 text-sm font-medium text-coffee-700 transition-colors hover:text-caramel"
          >
            <RefreshCw className="h-4 w-4" />
            Muat Ulang
          </button>
        </div>

        {media.length === 0 ? (
          <p data-testid="admin-empty" className="mt-6 rounded-2xl border border-dashed border-coffee-900/15 p-8 text-center text-sm text-coffee-700/60">
            Belum ada foto yang diupload. Website masih memakai foto bawaan.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {media.map((m) => (
              <figure
                key={m.id}
                data-testid={`admin-media-card-${m.id}`}
                className="group overflow-hidden rounded-2xl border border-coffee-900/10 bg-white shadow-sm"
              >
                <img
                  src={fileUrl(m.storage_path)}
                  alt={m.original_filename}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="flex items-center justify-between gap-2 p-3">
                  <span className="truncate text-xs font-medium text-coffee-800">
                    {slotLabel(m.slot)}
                  </span>
                  <button
                    type="button"
                    data-testid={`admin-delete-btn-${m.id}`}
                    onClick={() => onDelete(m.id)}
                    disabled={busy}
                    aria-label="Hapus foto"
                    className="shrink-0 rounded-full p-2 text-red-700 transition-colors hover:bg-red-50 disabled:opacity-40"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
