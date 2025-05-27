import React from "react";
import Image from "next/image";
import HeroCTAButton from "./HeroCTAButton";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 px-4 text-center dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        {/* Logo for Light and Dark Mode */}
        <Image
          src="/contents/images/evox_logo_with_text_light.png"
          alt="EvoX Logo"
          width={200}
          height={200}
          className="mx-auto mb-6 dark:hidden"
        />
        <Image
          src="/contents/images/evox_logo_with_text_dark.png"
          alt="EvoX Logo Dark Mode"
          width={200}
          height={200}
          className="mx-auto mb-6 hidden dark:block"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          EvoX: Evolutionary Computation Reimagined
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
          A powerful, flexible distributed and GPU-accelerated framework for
          evolutionary algorithms in modern AI workflows.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <HeroCTAButton
            href="https://evox.readthedocs.io/en/latest/"
            bgColor="bg-white"
            textColor="text-blue-600"
            hoverColor="hover:bg-gray-100"
            text="Get Started"
          />
          <HeroCTAButton
            href="https://github.com/EMI-Group/evox"
            bgColor="bg-gray-800"
            textColor="text-white"
            hoverColor="hover:bg-gray-900"
            text="GitHub Repo"
          />
        </div>

        {/* Additional Info */}
        <div className="mt-8">
          <p className="text-sm text-gray-300 dark:text-gray-400">
            Current Version:{" "}
            <span className="font-semibold text-white">1.2.1</span>
          </p>
          <p className="text-sm text-gray-300 dark:text-gray-400">
            Released:{" "}
            <span className="font-semibold text-white">May 13, 2025</span>
          </p>
        </div>

        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/contents/images/demo/rastrigin_function.svg"
            alt="Decorative Background"
            layout="fill"
            objectFit="cover"
            className="opacity-10 dark:opacity-20"
          />
        </div>
      </div>
    </section>
  );
}
