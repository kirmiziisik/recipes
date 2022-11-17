import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      Page not found
      <br />
      <Link to="/">back home</Link>
    </section>
  );
};

export default Error;
