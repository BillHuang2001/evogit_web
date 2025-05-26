import React from "react";

export default function HeroCTAButton({ href, bgColor, textColor, hoverColor, text, icon, target }) {
  return (
    <a
      href={href}
      target={target || "_self"}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${bgColor} ${textColor} px-6 py-3 rounded-lg ${hoverColor} shadow-md flex items-center gap-2`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </a>
  );
}
