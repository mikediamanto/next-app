import React from 'react';

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>Unfortunately we could not find the requested page or resource</p>
    </main>
  );
};

export default NotFoundPage;
