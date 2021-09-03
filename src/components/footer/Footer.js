import React from "react";
import FOOTER from "../../Data/footer";
import FooterInfo from "./innerComponent/FooterInfo";
import FooterSocial from "./innerComponent/FooterSocial";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="p-80 border-top">
        <div className="footer container">
          <div className="row">
            <FooterInfo
              title="Company"
              links={FOOTER[0].footerInfo[0].company}
            />
            <FooterInfo title="legal" links={FOOTER[0].footerInfo[1].legal} />
            <FooterSocial />
          </div>
        </div>
      </div>
      <div className="text-center footer-bottom">
        <span >
          COPYRIGHT © {new Date().getFullYear()} FSHRABON LTD. | ALL RIGHTS
          RESERVED
        </span>
      </div>
    </>
  );
};

export default Footer;
