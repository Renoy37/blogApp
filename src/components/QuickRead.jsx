import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import quick from "../images/quick_read/quick_read_1.jpg";
import quick2 from "../images/quick_read/quick_read_2.jpg";
import quick3 from "../images/quick_read/quick_read_3.jpg";
import quick4 from "../images/quick_read/quick_read_4.jpg";
import quick5 from "../images/quick_read/quick_read_5.jpg";
import quick6 from "../images/quick_read/quick_read_6.jpg";

export const QuickRead = () => {
  const images = [quick, quick2, quick3, quick4, quick5, quick6];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const firstImage = { backgroundImage: `url(${images[currentImageIndex]})` };
  const secondImage = {
    backgroundImage: `url(${images[(currentImageIndex + 1) % images.length]})`,
  };

  return (
    <div className="quick-read-container">
      <div>
        <h1>Quick Read</h1>
      </div>

      <div className="arrow-container">
        <div className="arrow-back" onClick={handlePrevClick}>
          <IoIosArrowBack />
        </div>
        <div className="arrow-forward">
          <IoIosArrowForward onClick={handleNextClick} />
        </div>
      </div>

      <div className="quick-read-class">
        <div className="quick-article-container" style={firstImage}>
          <div className="quick-read-hover">
            <div className="quick-read-article">
              <span className="quick-read-date">23 Dec 2021</span>
              <span className="quick-read-mins">3 MIn Read</span>
            </div>
            <h3 className="quick-read-content">Content Here</h3>
          </div>
        </div>

        <div className="quick-article-container hidden" style={secondImage}>
          <div className="quick-read-hover">
            <div className="quick-read-article">
              <span className="quick-read-date">23 Dec 2021</span>
              <span className="quick-read-mins">3 MIn Read</span>
            </div>
            <h3 className="quick-read-content">Content Here</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
