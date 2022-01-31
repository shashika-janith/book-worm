import React from 'react';

import './index.scss';

const NotFound = () => {

  return (
    <div className="h-screen flex justify-center items-center not-found-layout">
      <div className="card shadow-xl">
        <img className="mb-10 mx-auto ic-not-found" src="/assets/images/common/not-found.svg" alt="Not found" />

        <h1 className="mb-6 title">404</h1>
        <p className="mb-8 message">Uh oh! Page you're looking for is not found</p>

        <button className="btn mx-auto btn-home">Back Home</button>
      </div>
    </div>
  );

}

export default NotFound;