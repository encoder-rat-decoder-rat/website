import React from "react";
import OrfeliaContent from "./OrfeliaContent.mdx";
import image from "../../images/orfelia-slide-1.jpeg";

const OrfeliaPage = () => {
  return (
    <div id="orfelia-page">
      <section className="container">
        <img
          src={image}
          alt="Queer Futures Presents: A Night at the Orfelia. Detroit 2023. Produced By Encoder Rat Decoder Rat. The future is not yet queer."
        />
        <OrfeliaContent />
      </section>
    </div>
  );
};

export default OrfeliaPage;
