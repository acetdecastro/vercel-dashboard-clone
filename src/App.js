import { ReactComponent as SelectorIcon } from 'heroicons/outline/selector.svg';
import { ReactComponent as DotsHorizontalIcon } from 'heroicons/solid/dots-horizontal.svg';

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

function NavAvatar({ src, alt = 'Avatar' }) {
  return (
    <img
      className="h-8 w-8 rounded-full border border-gray-200 bg-contain"
      src={src}
      alt={alt}
    />
  );
}

function GitHubLogo({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
      ></path>
    </svg>
  );
}

function App() {
  return (
    <div>
      <div className="bg-white">
        <header className="space-y-2 border-b border-gray-200">
          <nav className="max-w-5xl mx-auto pt-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <VercelLogo className={'h-6'} />
              <span>
                <svg
                  viewBox="0 0 32 32"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-300"
                >
                  <line x1="8" y1="28" x2="22" y2="4" />
                </svg>
              </span>
              <span className="inline-flex items-center leading-5 font-medium space-x-2">
                <a href="/" className="inline-flex space-x-2 items-center">
                  <NavAvatar
                    src={
                      'https://pbs.twimg.com/profile_images/1174626220283088896/vMD1tpZx_400x400.jpg'
                    }
                    alt={'acetdecastro'}
                  />
                  <span className="text-sm">acetdecastro</span>
                </a>
                <button
                  type="button"
                  className="inline-flex items-center border border-transparent rounded p-0.5 hover:border-gray-200 hover:bg-gray-100 transition ease-in-out duration-150 focus:outline-none focus:text-gray-900"
                >
                  <SelectorIcon className="h-5 w-5 text-gray-400" />
                </button>
              </span>
            </div>
            <div className="flex items-center text-gray-600 text-sm space-x-4">
              <div className="flex items-center space-x-5">
                <button
                  type="button"
                  className="border border-gray-200 rounded px-3 py-1.5 hover:border-black transition ease-in-out duration-150"
                >
                  FeedBack
                </button>
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
              <button type="button" className="focus:outline-none">
                <DotsHorizontalIcon className="h-5 w-5" />
              </button>
              <button>
                <NavAvatar
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
                    <GitHubLogo className={'h-4 w-4'} />
                    <span>acetdecastro</span>
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
              className="inline-flex justify-center px-6 py-2 text-sm  leading-5 font-medium bg-black border rounded border-transparent text-white hover:text-gray-900 hover:bg-white transition ease-in-out duration-150 hover:border-black"
            >
              Import Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
