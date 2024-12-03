import { Params } from 'next/dist/server/request/params';
import React from 'react';
import classes from './meals.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';

type Props = {
  params: Params;
};

const Meals = (props: Props) => {
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
        <MealsGrid meals={[{ id: '1', title: 'test' }]} />
      </main>
    </>
  );
};

export default Meals;
