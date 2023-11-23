import React from "react";

import tag1 from "../images/tags/travel-tag.jpg";
import tag2 from "../images/tags/technology-tag.jpg";
import tag3 from "../images/tags/nature-tag.jpg";
import tag4 from "../images/tags/health-tag.jpg";
import tag5 from "../images/tags/food-tag.jpg";
import tag6 from "../images/tags/fitness-tag.jpg";

export const PorpularTags = () => {
  const backTagOne = { backgroundImage: `url(${tag1})` };
  const backTagTwo = { backgroundImage: `url(${tag2})` };
  const backTagThree = { backgroundImage: `url(${tag3})` };
  const backTagFour = { backgroundImage: `url(${tag4})` };
  const backTagFive = { backgroundImage: `url(${tag5})` };
  const backTagSix = { backgroundImage: `url(${tag6})` };

  return (
    <div className="tags-container">
      <h1>PorpularTags</h1>

      <div className="tags-responsive-container">
        <div className="tags-carrier">
          <div className="tag-one" style={backTagOne}>
            <span className="hash-tag">#Travel</span>
          </div>
        </div>

        <div className="tags-carrier">
          <div className="tag-one" style={backTagTwo}>
            <span className="hash-tag">#Travel</span>
          </div>
        </div>

        <div className="tags-carrier">
          <div className="tag-one" style={backTagThree}>
            <span className="hash-tag">#Travel</span>
          </div>
        </div>

        <div className="tags-carrier">
          <div className="tag-one" style={backTagFour}>
            <span className="hash-tag">#Travel</span>
          </div>
        </div>

        <div className="tags-carrier">
          <div className="tag-one" style={backTagFive}>
            <span className="hash-tag">#Travel</span>
          </div>
        </div>

        <div className="tags-carrier">
          <div className="tag-one" style={backTagSix}>
            <span className="hash-tag">#Travel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
