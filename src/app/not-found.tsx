import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-8xl font-heading font-bold text-green-200" aria-hidden="true">
        404
      </span>
      <h1 className="mt-4 font-heading text-3xl font-bold text-foreground">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved. Please
        check the URL or navigate back to the homepage.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Homepage
      </Link>
    </div>
  );
}
