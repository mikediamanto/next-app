import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getMeals = async () => {
  return await new Promise((resolve) => {
    // throw new Error('Failed to fetch meal data');

    setTimeout(() => resolve(db.prepare('SELECT * FROM meals').all()), 0);
  });
};

export const getMeal = async (slug: string) =>
  db.prepare('SELECT * FROM meals where slug = ?').get(slug);

export const storeMeal = async () => {};
