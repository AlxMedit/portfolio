// src/components/SocialButton.jsx
import React from "react";
import "./SocialButton.css";

export default function SocialButton({ color, hoverColor, Icon, text, url }) {
  return (
    <a
      href={url}
      className="social-btn"
      style={{ "--btn-color": color, "--btn-hover": hoverColor }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon-wrapper">
        <Icon className="icon-main" />
        <Icon className="icon-hover" />
      </span>
      <span className="btn-text">{text}</span>
    </a>
  );
}
