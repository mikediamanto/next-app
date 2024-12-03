'use server';

export type MealType = {
  title: string;
  summary: string;
  instructions: string;
  image: string;
  creator: string;
  creator_email: string;
};

export const shareMeal = async (formData: FormData) => {
  'use server';

  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };
  console.log(meal);
};
