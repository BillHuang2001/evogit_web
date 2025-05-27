import React from "react";

const ExampleOutput = ({ src, alt, caption }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative max-w-sm w-full aspect-square">
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg w-full h-full object-contain"
        />
      </div>
      {caption && (
        <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
          {caption}
        </p>
      )}
    </div>
  );
};

export default ExampleOutput;
