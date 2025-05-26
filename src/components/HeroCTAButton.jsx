import React from "react";

export default function HeroCTAButton({ href, bgColor, textColor, hoverColor, text, icon }) {
  return (
    <a
      href={href}
      className={`${bgColor} ${textColor} px-6 py-3 rounded-lg ${hoverColor} shadow-md flex items-center gap-2`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </a>
  );
}
