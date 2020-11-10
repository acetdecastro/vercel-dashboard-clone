import { ReactComponent as DotsHorizontalIcon } from 'heroicons/solid/dots-horizontal.svg';
import { Transition } from '@tailwindui/react';
import ModalOverlay from './ModalOverlay';

export default function NavMenuModal({
  isNavMenuModalOpen,
  handleIsNavMenuModalOpen,
}) {
  return (
    <>
      {isNavMenuModalOpen && (
        <ModalOverlay handleToggle={handleIsNavMenuModalOpen} />
      )}
      <div className="relative">
        <button
          type="button"
          className="focus:outline-none"
          onClick={handleIsNavMenuModalOpen}
        >
          <DotsHorizontalIcon className="h-5 w-5" />
        </button>

        <Transition
          show={isNavMenuModalOpen}
          enter="transition-opacity ease-in duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute z-20 bg-white shadow-lg mt-1 py-2 w-40 rounded-md overflow-hidden transform -translate-x-16">
            <ul className="divide-y divide-gray-200">
              <div>
                <li>
                  <a
                    href="/home"
                    className="inline-flex py-3 pl-6 w-full hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="inline-flex py-3 pl-6 w-full hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/cli"
                    className="inline-flex py-3 pl-6 w-full hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    Command-line
                  </a>
                </li>
              </div>
              <div className="py-0.5">
                <li>
                  <a
                    href="/blog"
                    className="inline-flex py-3 pl-6 w-full hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    Blog
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a
                    href="/about"
                    className="inline-flex py-3 pl-6 w-full hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="inline-flex py-2 pl-6 w-full hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/oss"
                    className="inline-flex py-2 pl-6 w-full hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    OSS
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </Transition>
      </div>
    </>
  );
}
