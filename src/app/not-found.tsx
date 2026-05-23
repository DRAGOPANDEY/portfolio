import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg mask-fade-b opacity-50"
      />
      <div className="absolute -top-32 left-1/2 -z-10 size-[480px] -translate-x-1/2 rounded-full bg-primary-600/20 blur-[120px]" />

      <div className="flex max-w-xl flex-col items-center gap-6 text-center">
        <div className="font-display text-8xl font-extrabold text-gradient sm:text-9xl">
          404
        </div>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          Lost in the edge fleet.
        </h1>
        <p className="text-balance text-base text-muted sm:text-lg">
          This page got disconnected from the bastion. Let's get you back to
          something that's online.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="size-4" />
            Back home
          </Link>
          <Link href="/#contact" className="btn-secondary">
            <ArrowLeft className="size-4" />
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
