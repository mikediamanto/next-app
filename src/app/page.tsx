import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Link href="/meals">Meals</Link>
          <Link href="/meals/share">Share Meals</Link>
          <Link href="/meals/meal-1">Meal 1</Link>
          <Link href="/community">Community</Link>
        </nav>
      </header>
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Time to get started!
        </h1>
      </main>
    </>
  );
}
