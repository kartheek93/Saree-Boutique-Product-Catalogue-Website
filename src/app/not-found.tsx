import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-7xl place-items-center px-4 py-28 text-center">
      <span className="font-heading text-7xl font-bold text-primary/20">404</span>
      <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight">
        This drape slipped away
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back to the collection.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/sarees"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Browse Sarees
        </Link>
        <Link
          href="/"
          className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
