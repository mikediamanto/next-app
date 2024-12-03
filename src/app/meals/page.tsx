import { Params } from 'next/dist/server/request/params';
import React from 'react';

type Props = {
  params: Params;
};

const Meals = (props: Props) => {
  return (
    <>
      <h2>Meals</h2>
    </>
  );
};

export default Meals;
