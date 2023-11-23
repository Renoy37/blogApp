import React from "react";

import older1 from "../images/older_posts/older_posts_1.jpg";
import older2 from "../images/older_posts/older_posts_2.jpg";
import older3 from "../images/older_posts/older_posts_3.jpg";
import older4 from "../images/older_posts/older_posts_5.jpg";
import older5 from "../images/older_posts/older_posts_5.jpg";
import older6 from "../images/older_posts/older_posts_6.jpg";

export const OlderPosts = () => {
  const olderOne = { backgroundImage: `url(${older1})` };
  const olderTwo = { backgroundImage: `url(${older2})` };
  const olderThree = { backgroundImage: `url(${older3})` };
  const olderFour = { backgroundImage: `url(${older4})` };
  const olderFive = { backgroundImage: `url(${older5})` };
  const olderSix = { backgroundImage: `url(${older6})` };

  return (
    <div className="older-container">
      <div className="heading">
        <h1>Older Posts</h1>
      </div>

      <div className="main-post-container">
        <div className="post-article-container">
          <article className="post-container" style={olderOne}>
            <div className="posts-content">
              <div className="post-span">
                <span>23 Dec 2022</span>
                <span>3 Min read</span>
              </div>
              <h3 className="post-header">Sample Article</h3>
              <p className="post-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                aliquid corrupti ex quas reiciendis aut nostrum placeat, magni,
                fugiat ratione consequuntur .
              </p>
            </div>
          </article>
        </div>

        <div className="post-article-container">
          <article className="post-container" style={olderTwo}>
            <div className="posts-content">
              <div className="post-span">
                <span>23 Dec 2022</span>
                <span>3 Min read</span>
              </div>
              <h3 className="post-header">Sample Article</h3>
              <p className="post-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                aliquid corrupti ex quas reiciendis aut nostrum placeat, magni,
                fugiat ratione consequuntur .
              </p>
            </div>
          </article>
        </div>

        <div className="post-article-container">
          <article className="post-container" style={olderThree}>
            <div className="posts-content">
              <div className="post-span">
                <span>23 Dec 2022</span>
                <span>3 Min read</span>
              </div>
              <h3 className="post-header">Sample Article</h3>
              <p className="post-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                aliquid corrupti ex quas reiciendis aut nostrum placeat, magni,
                fugiat ratione consequuntur.
              </p>
            </div>
          </article>
        </div>

        <div className="post-article-container">
          <article className="post-container" style={olderFour}>
            <div className="posts-content">
              <div className="post-span">
                <span>23 Dec 2022</span>
                <span>3 Min read</span>
              </div>
              <h3 className="post-header">Sample Article</h3>
              <p className="post-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                aliquid corrupti ex quas reiciendis aut nostrum placeat, magni,
                fugiat ratione consequuntur.
              </p>
            </div>
          </article>
        </div>

        <div className="post-article-container">
          <article className="post-container" style={olderFive}>
            <div className="posts-content">
              <div className="post-span">
                <span>23 Dec 2022</span>
                <span>3 Min read</span>
              </div>
              <h3 className="post-header">Sample Article</h3>
              <p className="post-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                aliquid corrupti ex quas reiciendis aut nostrum placeat, magni,
                fugiat ratione consequuntur .
              </p>
            </div>
          </article>
        </div>

        <div className="post-article-container">
          <article className="post-container" style={olderSix}>
            <div className="posts-content">
              <div className="post-span">
                <span>23 Dec 2022</span>
                <span>3 Min read</span>
              </div>
              <h3 className="post-header">Sample Article</h3>
              <p className="post-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                aliquid corrupti ex quas reiciendis aut nostrum placeat, magni,
                fugiat ratione consequuntur.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
