import React from "react";

const Card = ({ title, isImage, description, category, imgSource }) => {
  return isImage ? (
    <div>
      img
      {title}-
      {description}-
      {category}-{isImage}-{imgSource}
    </div>
  ) : (
    <div>
      card
      {title}-
      {description}-
      {category}-{isImage}-{imgSource}
    </div>
  );
};

export default Card;
