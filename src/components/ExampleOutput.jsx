import React from "react";

const ExampleOutput = ({ src, alt, caption }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-4 lg:space-y-0">
      <div className="relative max-w-md w-full lg:max-w-lg aspect-square lg:aspect-auto">
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg w-full h-full object-contain"
        />
      </div>
      {caption && (
        <div className="text-center lg:text-left text-sm text-gray-600 dark:text-gray-400">
          {caption}
        </div>
      )}
    </div>
  );
};

export default ExampleOutput;
