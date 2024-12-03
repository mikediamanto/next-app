import React from 'react';

type Props = {
  children: React.ReactDOM;
};

const MealsLayout = ({ children }: Props) => {
  return (
    <>
      {/* <h1>Meals Layout</h1> */}
      {children}
    </>
  );
};

export default MealsLayout;
