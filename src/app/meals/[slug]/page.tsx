import { Params } from 'next/dist/server/request/params';
import React from 'react';

type Props = {
  params: Params;
};

const MealsSlug = ({ params }: Props) => {
  return <div>MealsSlug {params.slug}</div>;
};

export default MealsSlug;
