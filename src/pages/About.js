import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">About Us</h1>
      <h2 className="about">
        Recipes you want to make & Cooking advice that works...
      </h2>
      <div className="container">
        <img src="./about.avif" alt="" />
        <p className="about-para">
          With a crisp and easily navigable site and backing of skilled and
          experienced culinary masters, this platform furnishes its visitors
          with thousands of recipes and meal preparation videos. It also
          features comprehensive how-to-do guides on absolutely everything
          food-related topics.
        </p>
      </div>
    </section>
  );
};

export default About;
