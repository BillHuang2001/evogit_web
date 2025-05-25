import React from "react";

export default function NewsBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-sm py-2 px-4 text-center">
      <p>
        🚀 Released <strong>EvoX 1.2.1</strong> - Featuring the new Mujoco Playground and an official tutorial!{" "}
        <a
          href="https://evox.group/index.php?m=home&c=View&a=index&aid=157"
          className="underline hover:text-yellow-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Details
        </a>
      </p>
    </div>
  );
}
