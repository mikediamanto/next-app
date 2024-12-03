import React from 'react';
import MealItem from './meal-item';
import classes from './meals-grid.module.css';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meals: any[];
};

const MealsGrid = ({ meals }: Props) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
