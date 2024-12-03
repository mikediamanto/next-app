import React from 'react';
import MealItem from './meal-item';
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meals: any[];
};

const MealsGrid = ({ meals }: Props) => {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
