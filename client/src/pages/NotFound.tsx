import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h2 className="text-[22px] font-bold">404 Not Found</h2>
      <p>The page you are looking for doesn't exist. It may have been moved or deleted.</p>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </div>
  );
}
