import React from 'react';
import GitHubLogo from './GitHubLogo';

const ProjectCard = () => {
  return (
    <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-md overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">next-nested-routing</h3>
          <a
            href="/"
            className="border border-gray-200 text-gray-600 font-medium rounded px-5 py-1 hover:text-gray-900 hover:border-black transition ease-in-out duration-150 text-sm"
          >
            Visit
          </a>
        </div>
        <div className="space-y-3">
          <div
            aria-label="Production deployment"
            className="flex items-center space-x-3"
          >
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-sm leading-5 font-medium"
            >
              <span
                aria-hidden
                className="mt-px inline-block h-2.5 w-2.5 rounded-full bg-green-300"
              ></span>
              <span>shamelesscomfort.com</span>
            </a>
            <span className="inline-flex rounded-full bg-gray-100 border border-gray-200 px-1.5 leading-4 py-px 0.5 text-xs leading 4 font-medium">
              Production
            </span>
            <span className="text-sm leading-5 text-gray-500">
              <time dateTime="2019-04-04">204d</time>
            </span>
          </div>
          <div
            aria-label="Production deployment"
            className="flex items-center space-x-3"
          >
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-sm leading-5 font-medium"
            >
              <span
                aria-hidden
                className="mt-px inline-block h-2.5 w-2.5 rounded-full bg-green-300"
              ></span>
              <span>next-nested-routing-5ipzp1m88.now.sh</span>
            </a>
            <span className="inline-flex rounded-full bg-gray-100 border border-gray-200 px-1.5 leading-4 py-px 0.5 text-xs leading 4 font-medium">
              Latest
            </span>
            <span className="text-sm leading-5 text-gray-500">
              <time dateTime="2019-10-29">46d</time>
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 py-3">
        <a
          href="/"
          className="flex items-center space-x-1 text-sm leading-5 font-medium"
        >
          <GitHubLogo className={'h-5 w-5'} />
          <span>acetdecastro/next-nested-routing</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
