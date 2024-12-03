'use client';
import React from 'react';

type Props = {
  error: Error;
};

const ErrorPage = ({ error }: Props) => {
  return (
    <main className="error">
      <h1>Post Failed</h1>
      <p>{error.message}</p>
    </main>
  );
};

export default ErrorPage;
