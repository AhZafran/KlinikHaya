"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-4">
      <h2 className="mb-4 text-2xl font-bold text-primary">
        Sesuatu Tidak Kena
      </h2>
      <p className="mb-6 text-center text-muted-foreground">
        Maaf, terdapat masalah dengan halaman ini.
      </p>
      <Button onClick={() => reset()}>Cuba Lagi</Button>
    </div>
  );
}
