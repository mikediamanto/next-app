import { Params } from 'next/dist/server/request/params';
import React, { Suspense } from 'react';
import classes from './meals.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import MealsLoadingPage from './loading-out';

type Props = {
  params: Params;
};

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = (props: Props) => {
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
