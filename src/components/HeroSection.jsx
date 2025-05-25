import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 text-center">
      <div className="container mx-auto">
        <Image
          src="/contents/images/evox_logo_with_text_light.png"
          alt="EvoX Logo"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          EvoX: Evolutionary Computation Reimagined
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          A powerful, flexible distributed and GPU-accelerated framework for
          evolutionary algorithms in modern AI workflows.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://evox.readthedocs.io/en/latest/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="https://github.com/EMI-Group/evox"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
}
