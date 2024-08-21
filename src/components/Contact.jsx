import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          
          <a href="hhttps://www.linkedin.com/in/rishabh-kumar-28b6371bb/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/Rishabhkumar6401" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="https://leetcode.com/u/rishabh6401/" target="_blank" className="items">
            <SiLeetcode className="icons" />
          </a>
          <a href="https://www.hackerrank.com/profile/rishabh6401" target="_blank" className="items">
            <FaHackerrank className="icons" />
          </a>
          <a
            href="mailto:rishabh6401@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;