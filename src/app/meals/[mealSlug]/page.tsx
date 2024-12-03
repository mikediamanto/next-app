import React from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const meal = (await getMeal(params.mealSlug)) as {
    title: string;
    summary: string;
  };

  if (!meal) notFound();

  return {
    title: meal.title,
    description: meal.summary,
  };
};

const MealsSlug = async ({ params }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meal: any = await getMeal(params.mealSlug as string);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.create_email}`}></a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealsSlug;
