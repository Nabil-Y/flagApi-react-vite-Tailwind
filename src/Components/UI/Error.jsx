import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <h2 className="my-10 text-2xl font-bold">Error 404 not found</h2>
      <Link to="/" className=" text-xl font-bold text-blue-500">
        Return to Homepage
      </Link>
    </main>
  );
};

export default Error;
