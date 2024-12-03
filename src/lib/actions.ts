'use server';

import { redirect } from 'next/navigation';
import { storeMeal } from './meals';
import { revalidatePath } from 'next/cache';

export type MealType = {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
};

const isInvalidText = (text: string) => !text || text.trim() === '';

export const shareMeal = async (
  prevState: { message: string | null },
  formData: FormData
) => {
  'use server';

  const meal = {
    title: formData.get('title') as string,
    image: formData.get('image') as File,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid Input',
    };
  }

  await storeMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
};
