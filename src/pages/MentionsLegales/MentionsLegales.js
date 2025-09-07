// src/pages/MentionsLegales/MentionsLegales.js
import React from "react";
import "../../pages/MentionsLegales/MentionsLegales.scss"; // SCSS
import constructionImg from "../../assets/images/construction.webp";

const MentionsLegales = () => {
  return (
    <div className="mentions-legales-page">
      <main className="mentions-legales-content">
        <h1>MENTIONS LÉGALES</h1>
        <img
          src={constructionImg}
          alt="Page en construction"
          className="construction-image"
        />
      </main>
    </div>
  );
};

export default MentionsLegales;
