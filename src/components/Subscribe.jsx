import React, { useState } from "react";

export const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-heading">
        <h1>Subscribe</h1>
      </div>

      <div className="input-content">
        <p className="subscribe-text">
          Stay updated with our latest news and updates!
        </p>
        <form className="subscribe-input-container" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="submit-subscribe">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
