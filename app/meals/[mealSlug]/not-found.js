import Link from 'next/link';

export default function NotFound() {
    return <main className="not-found">
        <h1>Meal Not Found</h1>
        <p>Are you lost? Go back to <Link href="/">homepage</Link></p>
    </main>
}