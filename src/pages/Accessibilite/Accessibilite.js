import React from "react";
import "../../pages/MentionsLegales/MentionsLegales.scss"; // SCSS de mise en page
import constructionImg from "../../assets/images/construction.webp";

const Accessibilite = () => {
  return (
    <div className="mentions-legales-page">
      <main className="mentions-legales-content">
        <h1>ACCESSIBILITÉ</h1>
        <img
          src={constructionImg}
          alt="Page en construction"
          className="construction-image"
        />
      </main>
    </div>
  );
};

export default Accessibilite;
