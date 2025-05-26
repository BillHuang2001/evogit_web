import React from "react";

const ExampleOutput = ({ src, alt, caption }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-lg max-w-full h-auto mb-2"
      />
      {caption && (
        <p className="text-sm text-gray-600 dark:text-gray-400 italic text-center">
          {caption}
        </p>
      )}
    </div>
  );
};

export default ExampleOutput;
