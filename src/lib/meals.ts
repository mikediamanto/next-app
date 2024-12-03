import sql from 'better-sqlite3';
import { MealType } from './actions';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export const getMeals = async () => {
  return await new Promise((resolve) => {
    // throw new Error('Failed to fetch meal data');

    setTimeout(() => resolve(db.prepare('SELECT * FROM meals').all()), 0);
  });
};

export const getMeal = async (slug: string) =>
  db.prepare('SELECT * FROM meals where slug = ?').get(slug);

export const storeMeal = async (meal: MealType) => {
  const slug = slugify(meal.title);
  const instructions = xss(meal.instructions);

  console.log(slug);

  const extension = meal.image.name.split('.').pop();
  const filename = `${slug}.${extension}`;
  console.log(meal.image);
  console.log(extension);
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error('Sth went wrong!!!');
  });

  const pathImage = `/images/${filename}`;

  db.prepare(
    `
    INSERT INTO meals (title,summary,instructions,creator,creator_email,image,slug) 
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )`
  ).run({
    ...meal,
    image: pathImage,
    instructions,
    slug,
  });
};
