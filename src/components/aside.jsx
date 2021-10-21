import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{ backgroundImage: "url('/assets/images/mechanic.jpg')" }} />
      <img className="logo" src="/assets/images/logo.svg" alt="" />
      <h1>{props.garageName}</h1>
      <p>Our garage is the best.
        <br />
        Reasonable prices, always on time, we are the best (  and fictionnal).
      </p>
      {props.children}
    </div>
  );
};

export default Aside;
