import React from "react";

export default function HeroCTAButton({
  href,
  bgColor,
  textColor,
  hoverColor,
  text,
  icon,
  target,
  additionalClasses,
}) {
  return (
    <a
      href={href}
      target={target || "_self"}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${bgColor} ${textColor} px-6 py-3 rounded-lg ${hoverColor} shadow-md flex items-center gap-2 transition duration-300 ease-in-out ${additionalClasses}`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="font-medium">{text}</span>
    </a>
  );
}
