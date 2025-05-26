import React from "react";

const ExampleOutput = ({ src, alt }) => {
  return (
    <div className="flex justify-center">
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default ExampleOutput;
