import React from "react";

export default function HeroCTAButton({ href, bgColor, textColor, hoverColor, text }) {
  return (
    <a
      href={href}
      className={`${bgColor} ${textColor} px-6 py-3 rounded-lg ${hoverColor} shadow-md`}
    >
      {text}
    </a>
  );
}
