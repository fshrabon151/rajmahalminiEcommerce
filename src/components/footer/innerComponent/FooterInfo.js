import React from "react";

const FooterInfo = ({ title, links }) => {

  return (
    <div className="col-lg-4">
      <h1 className="text-uppercase footer-title">{title}</h1>
      <div className="footer-ul">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.link}>{link.title}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default FooterInfo;
