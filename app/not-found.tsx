import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-4">
      <h1 className="mb-2 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-bold">Halaman Tidak Dijumpai</h2>
      <p className="mb-6 text-center text-muted-foreground">
        Maaf, halaman yang anda cari tidak wujud.
      </p>
      <Link href="/">
        <Button>Kembali ke Laman Utama</Button>
      </Link>
    </div>
  );
}
