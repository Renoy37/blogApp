import React from "react";
import featured1 from "../images/featured/featured-1.jpg";
import featured2 from "../images/featured/featured-2.jpg";
import featured3 from "../images/featured/featured-3.jpg";
import trending1 from "../images/trending/trending_1.jpg";
import trending2 from "../images/trending/trending_2.jpg";
import trending3 from "../images/trending/trending_3.jpg";
import trending4 from "../images/trending/trending_4.jpg";
import trending5 from "../images/trending/trending_5.jpg";

export const Hero = () => {
  const backgroundOne = { backgroundImage: `url(${featured1})` };
  const backgroundTwo = { backgroundImage: `url(${featured2})` };
  const backgroundThree = { backgroundImage: `url(${featured3})` };
  const backgroundTrendOne = { backgroundImage: `url(${trending1})` };
  const backgroundTrendTwo = { backgroundImage: `url(${trending2})` };
  const backgroundTrendThree = { backgroundImage: `url(${trending3})` };
  const backgroundTrendFour = { backgroundImage: `url(${trending4})` };
  const backgroundTrendFive = { backgroundImage: `url(${trending5})` };

  return (
    <div className="hero-container">
      <div className="breaking-news">
        <h3 className="headline">Breaking News</h3>
        <p className="headline-text">Apple announces a new patnership</p>
      </div>

      <div className="grid-container">
        <div className="article-container">
          <div className="image-one" style={backgroundOne}>
            <span className="article-category">Technology</span>
            <div className="article-read">
              <span className="article-date">Dec 5th 2021</span>
              <span className="article-time">8 Min Read</span>
              <h3 className="article-heading">Is VR the furture?</h3>
            </div>
          </div>

          <div className="image-one" style={backgroundTwo}>
            <span className="article-category">Food</span>
            <div className="article-read">
              <span className="article-date">Dec 6th 2021</span>
              <span className="article-time">4 Min Read</span>
              <h3 className="article-heading">Fine dining 101</h3>
            </div>
          </div>

          <div className="image-one image-left" style={backgroundThree}>
            <span className="article-category">Health</span>
            <div className="article-read">
              <span className="article-date">Dec 5th 2021</span>
              <span className="article-time">5 Min Read</span>
              <h3 className="article-heading">Natural fat burner</h3>
            </div>
          </div>

          <div className="image-one" style={backgroundTwo}>
            <span className="article-category">Food</span>
            <div className="article-read">
              <span className="article-date">Dec 6th 2021</span>
              <span className="article-time">4 Min Read</span>
              <h3 className="article-heading">Fine dining 101</h3>
            </div>
          </div>
        </div>

        <div className="trending-container">
          <h2 className="trend-headline">Trending News</h2>
          <div className="trending-category-container">
            <div className="trending-image" style={backgroundTrendOne}>
              <h1 className="trending-number">01</h1>
            </div>
            <div className="trending-details-container">
              <div className="trend-timing">
                <span className="trending-date">23 Dec 2021</span>
                <span className="trending-read">3 Min read</span>
              </div>
              <h3 className="trending-title">Sample article title</h3>
            </div>
          </div>

          <div className="trending-category-container">
            <div className="trending-image" style={backgroundTrendTwo}>
              <h1 className="trending-number">02</h1>
            </div>
            <div className="trending-details-container">
              <div className="trend-timing">
                <span className="trending-date">23 Dec 2021</span>
                <span className="trending-read">3 Min read</span>
              </div>
              <h3 className="trending-title">Sample article title</h3>
            </div>
          </div>

          <div className="trending-category-container">
            <div className="trending-image" style={backgroundTrendThree}>
              <h1 className="trending-number">03</h1>
            </div>
            <div className="trending-details-container">
              <div className="trend-timing">
                <span className="trending-date">23 Dec 2021</span>
                <span className="trending-read">3 Min read</span>
              </div>
              <h3 className="trending-title">Sample article title</h3>
            </div>
          </div>

          <div className="trending-category-container">
            <div className="trending-image" style={backgroundTrendFour}>
              <h1 className="trending-number">04</h1>
            </div>
            <div className="trending-details-container">
              <div className="trend-timing">
                <span className="trending-date">23 Dec 2021</span>
                <span className="trending-read">3 Min read</span>
              </div>
              <h3 className="trending-title">Sample article title</h3>
            </div>
          </div>

          <div className="trending-category-container">
            <div className="trending-image" style={backgroundTrendFive}>
              <h1 className="trending-number">05</h1>
            </div>
            <div className="trending-details-container">
              <div className="trend-timing">
                <span className="trending-date">23 Dec 2021</span>
                <span className="trending-read">3 Min read</span>
              </div>
              <h3 className="trending-title">Sample article title</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
