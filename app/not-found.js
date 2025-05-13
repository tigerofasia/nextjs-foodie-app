import Link from 'next/link';

export default function NotFound() {
    return <main className="not-found">
        <h1>Page Not Found</h1>
        <p>Are you lost? Go back to <Link href="/">homepage</Link></p>
    </main>;
}