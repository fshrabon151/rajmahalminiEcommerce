import React from "react";

const FooterSocial = () => {
  return (
    <div className="col-lg-4">
      <h1 className="text-uppercase footer-title">Social Links</h1>

      <div className="footer-social col-8">
        <a href="#e" className="s-facebook">
          <i className="fab fa-facebook-f"></i>
        </a>

        <a href="#e" className="s-twitter">
          <i className="fab fa-twitter"></i>
        </a>

        <a href="#e" className="s-instagram">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="#e" className="s-youtube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
