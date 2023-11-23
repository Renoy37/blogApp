import React from "react";

function Hambuger() {
  return (
    <div className="side-nav-container">
      <nav className="ul-container">
        <ul className="ul-holder">
          <li className="side-nav">Home</li>
          <li className="side-nav">Categories</li>
          <li className="side-nav">Reviews</li>
          <li className="side-nav">News</li>
          <li className="side-nav">Membership</li>
          <li className="side-nav">Contact</li>
          <li className="side-nav sign-up">Sign in</li>
          <li className="side-nav sign-up">Sign Up</li>
        </ul>
      </nav>
    </div>
  );
}

export default Hambuger;
