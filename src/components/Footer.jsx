import React from "react";

import { FaGithub } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { SiPinterest } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="containers-footer">
        <h3 className="footer-header">categories</h3>

        <ul className="categories-list footer">
          <li className="list-elements">Travel</li>
          <li className="list-elements">Food</li>
          <li className="list-elements">Technology</li>
          <li className="list-elements">Health</li>
          <li className="list-elements">Nature</li>
          <li className="list-elements">Fitness</li>
        </ul>
      </div>

      <div className="containers-footer">
        <h3 className="footer-header">useful links</h3>
        <ul className="links-list footer">
          <li className="list-elements">Home</li>
          <li className="list-elements">Elements</li>
          <li className="list-elements">Tags</li>
          <li className="list-elements">Authors</li>
          <li className="list-elements">Membership</li>
        </ul>
      </div>

      <div className="containers-footer">
        <h3 className="footer-header">company</h3>

        <ul className="company-list footer">
          <li className="list-elements">Contact us</li>
          <li className="list-elements">F.A.Q</li>
          <li className="list-elements">Careers</li>
          <li className="list-elements">Authors</li>
          <li className="list-elements">Memberships</li>
        </ul>
      </div>

      <div className="containers-footer">
        <h3 className="footer-header">Renon</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          sunt laborum praesentium possimus eos ipsum quae soluta illum, hic
          fugit.
        </p>
        <ul className="media-list footer">
          <li className="list-elements git">
            <FaGithub />
          </li>
          <li className="list-elements instagram">
            <AiOutlineInstagram />
          </li>
          <li className="list-elements twitter">
            <BsTwitterX />
          </li>
          <li className="list-elements pinterest">
            <SiPinterest />
          </li>
        </ul>
      </div>
    </div>
  );
};
