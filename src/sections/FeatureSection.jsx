import React from "react";

const FeatureSection = ({ backgroundColor, textColor, title, text }) => {
  const sectionStyle = {
    backgroundColor: backgroundColor,
    padding: "35px 0",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: textColor,
  };

  return (
    <div style={sectionStyle} className="text-center">
      <div className="container">
          <h4 className="">{title}</h4>
          <p className="mt-6">{text}</p>
      </div>
    </div>
  );
};

export default FeatureSection;
