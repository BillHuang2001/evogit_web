import React from "react";
import Link from "next/link";

export default function NewsBanner() {
  return (
    <div className="bg-blue-600 text-white text-center py-2">
      <p className="text-sm">
        🚀 Released <strong>EvoX 1.2.1</strong> - Featuring the new Mujoco Playground and an official tutorial!{" "}
        <Link href="https://evox.group/index.php?m=home&c=View&a=index&aid=157" className="underline">
          Learn More
        </Link>
      </p>
    </div>
  );
}
