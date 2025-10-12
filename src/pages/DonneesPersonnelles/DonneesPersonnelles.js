import React from "react";
import "../../pages/MentionsLegales/MentionsLegales.scss";
import constructionImg from "../../assets/images/construction.webp";

const DonneesPersonnelles = () => {
  return (
    <div className="mentions-legales-page">
      <main className="mentions-legales-content">
        <h1>DONNÉES PERSONNELLES</h1>
        <img
          src={constructionImg}
          alt="Page en construction"
          className="construction-image"
        />
      </main>
    </div>
  );
};

export default DonneesPersonnelles;
