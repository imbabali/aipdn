export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-700" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
