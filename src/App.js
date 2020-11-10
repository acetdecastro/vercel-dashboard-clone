import GitHubLogo from './components/GitHubLogo';
import ProjectCard from './components/ProjectCard';
import ActivityFeed from './components/ActivityFeed';
import Avatar from './components/Avatar';
import AccountSwitcher from './components/AccountSwitcher';
import { useState } from 'react';
import NavMenuModal from './components/NavMenuModal';
import FeedBackModal from './components/FeedBackModal';

function VercelLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 116 100"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.5 0L115 100H0L57.5 0z"
      />
    </svg>
  );
}

function App() {
  document.title = 'Dashboard - Vercel';
  const [isAccountSwitcherOpen, setIsAccountSwitcherOpen] = useState(false);
  const [isNavMenuModalOpen, setIsNavMenuModalOpen] = useState(false);
  const [isFeedBackModelOpen, setIsFeedBackModelOpen] = useState(false);

  const handleIsAccountSwitcherOpen = () => {
    setIsAccountSwitcherOpen(!isAccountSwitcherOpen);
  };

  const handleIsNavMenuModalOpen = () => {
    setIsNavMenuModalOpen(!isNavMenuModalOpen);
  };

  const handleIsFeedBackModelOpen = () => {
    setIsFeedBackModelOpen(!isFeedBackModelOpen);
  };

  return (
    <div id="app_container">
      <div className="bg-white">
        <header className="space-y-2 border-b border-gray-200">
          <nav className="max-w-5xl mx-auto pt-4 flex justify-between items-center">
            <div className="flex items-center">
              <a href="/">
                <VercelLogo className={'h-6'} />
              </a>
              <span className="ml-2">
                <svg
                  viewBox="0 0 32 32"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-300"
                >
                  <line x1="8" y1="28" x2="22" y2="4" />
                </svg>
              </span>
              <AccountSwitcher
                isAccountSwitcherOpen={isAccountSwitcherOpen}
                handleIsAccountSwitcherOpen={handleIsAccountSwitcherOpen}
              />
            </div>
            <div className="flex items-center text-gray-600 text-sm space-x-4">
              <div className="flex items-center space-x-5">
                <FeedBackModal
                  isFeedBackModelOpen={isFeedBackModelOpen}
                  handleIsFeedBackModelOpen={handleIsFeedBackModelOpen}
                />
                <a
                  href="/"
                  className="inline-block leading-5 hover:text-gray-900 transition ease-in-out duration-150"
                >
                  Support
                </a>
                <a
                  href="/"
                  className="inline-block leading-5 hover:text-gray-900 transition ease-in-out duration-150"
                >
                  Docs
                </a>
              </div>
              <NavMenuModal
                isNavMenuModalOpen={isNavMenuModalOpen}
                handleIsNavMenuModalOpen={handleIsNavMenuModalOpen}
              />
              <button>
                <Avatar
                  size={'md'}
                  src={
                    'https://pbs.twimg.com/profile_images/1174626220283088896/vMD1tpZx_400x400.jpg'
                  }
                  alt={'acetdecastro'}
                />
              </button>
            </div>
          </nav>
          <div className="max-w-5xl mx-auto">
            <nav className="text-gray-600 flex text-sm leading-5 space-x-5 -mb-px">
              <a
                href="/"
                className="text-gray-900 inline-block px-0.5 py-3 border-b-2 border-black hover:text-gray-900 transition ease-in-out duration-150"
              >
                Overview
              </a>
              <a
                href="/"
                className="inline-block px-0.5 py-3 border-b-2 border-transparent hover:text-gray-900 transition ease-in-out duration-150"
              >
                Projects
              </a>
              <a
                href="/"
                className="inline-block px-0.5 py-3 border-b-2 border-transparent hover:text-gray-900 transition ease-in-out duration-150"
              >
                Integrations
              </a>
              <a
                href="/"
                className="inline-block px-0.5 py-3 border-b-2 border-transparent hover:text-gray-900 transition ease-in-out duration-150"
              >
                Activity
              </a>
              <a
                href="/"
                className="inline-block px-0.5 py-3 border-b-2 border-transparent hover:text-gray-900 transition ease-in-out duration-150"
              >
                Domains
              </a>
              <a
                href="/"
                className="inline-block px-0.5 py-3 border-b-2 border-transparent hover:text-gray-900 transition ease-in-out duration-150"
              >
                Usage
              </a>
              <a
                href="/"
                className="inline-block px-0.5 py-3 border-b-2 border-transparent hover:text-gray-900 transition ease-in-out duration-150"
              >
                Settings
              </a>
            </nav>
          </div>
        </header>
        <div className="flex justify-between items-start max-w-5xl mx-auto pt-14 pb-28">
          <div className="flex space-x-8">
            <div>
              <img
                className="h-24 w-24 rounded-full object-cover"
                src="https://pbs.twimg.com/profile_images/1174626220283088896/vMD1tpZx_400x400.jpg"
                alt="acetdecastro"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4">
              <div className="flex items-center space-x-3">
                <h1 className="text-4xl leading-10 font-bold">acetdecastro</h1>
                <span className="mt-1 inline-flex uppercase bg-gray-100 px-2 rounded-full text-gray-700 text-xs font-semibold border border-gray-200 leading-5">
                  Hobby
                </span>
              </div>
              <div className="flex">
                <dl className="space-y-1">
                  <dt className="uppercase text-gray-600 leading-5 text-xs font-medium tracking-wide">
                    Git Integration
                  </dt>
                  <dd className="flex items-center space-x-2 text-sm leading-5 font-medium">
                    <GitHubLogo className={'h-5 w-5'} />
                    <a
                      href="https://github.com/acetdecastro"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      acetdecastro
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 col-gap-6">
            <a
              href="/"
              className="inline-flex justify-center px-6 py-2 text-sm leading-5 font-medium text-gray-600 bg-white border-gray-300 border rounded hover:text-gray-900 hover:border-black transition ease-in-out duration-150"
            >
              Invite Team
            </a>
            <a
              href="/"
              className="inline-flex justify-center px-6 py-2 text-sm leading-5 font-medium bg-black border rounded border-transparent text-white hover:text-gray-900 hover:bg-white transition ease-in-out duration-150 hover:border-black"
            >
              Import Project
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 pb-10">
        <main className="-mt-9 max-w-5xl mx-auto px-2 grid grid-cols-12 col-gap-20">
          <div className="col-span-7">
            <h2 className="sr-only">Recent Projects</h2>
            <div className="space-y-8">
              <ul className="space-y-12">
                {[...Array(4)].map((_, index) => (
                  <li key={index}>
                    <ProjectCard />
                  </li>
                ))}
              </ul>
              <div>
                <a
                  href="/"
                  className="text-sm font-bold leading-5 text-blue-500 hover:underline"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-5 space-y-5">
            <h2 className="text-sm font-bold leading-5 pt-1">
              Recent Activity
            </h2>
            <ul className="border-b border-gray-200 divide-y divide-gray-200">
              {[...Array(19)].map((_, index) => {
                return (
                  <li key={index} className="py-3">
                    <ActivityFeed />
                  </li>
                );
              })}
            </ul>
            <div>
              <a
                href="/"
                className="text-sm font-bold leading-5 text-blue-500 hover:underline"
              >
                View All Activity
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
