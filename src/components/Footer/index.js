import React from "react";

const Footer = () => {
  return (
    <section>
      <footer className="text-center text-white">
        <div className="container pt-4">
          <div className="mb-4">

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="mailto:Zach.Steuer98@gmail.com"
            >
              Zach.Steuer98@gmail.com</a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://linkedin.com/in/zachary-steuer-6106a5113"
            >LinkedIn</a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/Zachsteuer98/"
            >Github</a>
          </div>
        </div>
        <div className="text-center text-dark p-3">
          © 2022 Copyright:
        </div>
      </footer>
    </section>
  );
};
export default Footer;