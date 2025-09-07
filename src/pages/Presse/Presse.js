import React from "react";
import "../../pages/MentionsLegales/MentionsLegales.scss"; // SCSS de mise en page
import constructionImg from "../../assets/images/construction.webp";

const Presse = () => {
  return (
    <div className="mentions-legales-page">
      <main className="mentions-legales-content">
        <h1>PRESSE</h1>
        <img
          src={constructionImg}
          alt="Page en construction"
          className="construction-image"
        />
      </main>
    </div>
  );
};

export default Presse;
