import React from "react";

const ExampleOutput = ({ src, alt, caption }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative max-w-xs w-full aspect-square">
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ExampleOutput;
