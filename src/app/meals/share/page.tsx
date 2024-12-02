import { Params } from 'next/dist/server/request/params';
import React from 'react';

type Props = {
  params: Params;
};

const Shared = (props: Props) => {
  return <div>share</div>;
};

export default Shared;
