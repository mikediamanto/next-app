import React, { Suspense } from 'react';
import classes from './meals.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import MealsLoadingPage from './loading-out';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Meals',
  description: 'Delicious meals shared by our vibrant community!!',
};

const Meals = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meals = (await getMeals()) as any[];

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, create{' '}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
