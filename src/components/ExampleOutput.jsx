import React from "react";

const ExampleOutput = ({ src, alt, caption }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
      <div className="relative max-w-sm lg:max-w-md w-full aspect-square">
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg w-full h-full object-contain"
        />
      </div>
      {caption && (
        <div className="lg:max-w-md">
          <p className="mt-2 text-center lg:text-left text-gray-600 dark:text-gray-300 text-sm">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
};

export default ExampleOutput;
