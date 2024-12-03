import React from 'react';
import classes from './loading.module.css';

type Props = {};

const MealsLoadingPage = (props: Props) => {
  return <p className={classes.loading}>Fetching meals...</p>;
};

export default MealsLoadingPage;
