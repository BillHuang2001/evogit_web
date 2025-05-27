import React from "react";

const ExampleOutput = ({ src, alt, caption }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      {/* Code Output Section */}
      <div className="relative max-w-md w-full aspect-square">
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg w-full h-full object-contain"
        />
      </div>

      {/* Caption Section */}
      {caption && (
        <div className="flex flex-col justify-center items-start max-w-sm">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Output Preview
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default ExampleOutput;
