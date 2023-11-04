import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
  FaPhone,
  FaInstagram,
  FaTiktok,
  FaBars,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer-container">
      <FaFacebook color="blue" />
      <FaLinkedin />
      <FaXTwitter />
      <FaWhatsapp />
      <FaTelegram />
      <FaPhone />
      <FaInstagram />
      <FaTiktok />
      <FaBars />
    </div>
  );
}
