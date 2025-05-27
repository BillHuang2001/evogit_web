import React from "react";

const ExampleOutput = ({ src, alt, caption }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative max-w-md w-full aspect-square">
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg w-full h-full object-contain"
        />
      </div>
      {caption && (
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          {caption}
        </div>
      )}
    </div>
  );
};

export default ExampleOutput;
