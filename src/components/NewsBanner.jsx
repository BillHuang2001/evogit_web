import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/solid';

const newsItems = [
  {
    date: '2025-05-13',
    title: 'Released EvoX 1.2.1',
    description: 'EvoX v1.2.1 release is now available, featuring the new Mujoco Playground and an official tutorial!',
    link: 'https://evox.group/index.php?m=home&c=View&a=index&aid=157',
  },
  {
    date: '2025-02-03',
    title: 'Released EvoRL',
    description: 'A GPU-accelerated framework for Evolutionary Reinforcement Learning, powered by JAX!',
    link: 'https://github.com/EMI-Group/evorl',
  },
  {
    date: '2025-01-30',
    title: 'Released EvoGP',
    description: 'A GPU-accelerated framework for Genetic Programming, powered by PyTorch & CUDA!',
    link: 'https://github.com/EMI-Group/evogp',
  },
];

export default function NewsBanner() {
  return (
    <div className="bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-50 py-2 px-4 border-b border-blue-200 dark:border-blue-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-2">
          <InformationCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-300" />
          <span className="font-medium">Latest News:</span>
        </div>
        <div className="flex space-x-6 overflow-x-auto">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline whitespace-nowrap flex items-center space-x-2"
            >
              <span className="font-semibold">{item.date}:</span>
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
