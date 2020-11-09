import { useState } from 'react';
import { Transition } from '@tailwindui/react';
import Avatar from './Avatar';
import { ReactComponent as SelectorIcon } from 'heroicons/outline/selector.svg';
import { ReactComponent as CogIcon } from 'heroicons/outline/cog.svg';
import { ReactComponent as PlusIcon } from 'heroicons/solid/plus.svg';

export default function AccountSwitcher() {
  const [isAccountSwitcherOpen, setIsAccountSwitcherOpen] = useState(false);

  const handleIsAccountSwitcherOpen = () => {
    setIsAccountSwitcherOpen(!isAccountSwitcherOpen);
  };

  return (
    <div className="relative">
      <span className="inline-flex items-center leading-5 font-medium space-x-2">
        <a href="/" className="inline-flex space-x-2 items-center">
          <Avatar
            src={
              'https://pbs.twimg.com/profile_images/1174626220283088896/vMD1tpZx_400x400.jpg'
            }
            alt={'acetdecastro'}
          />
          <span className="text-sm">acetdecastro</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center border border-transparent rounded p-0.5 hover:border-gray-200 hover:bg-gray-100 transition ease-in-out duration-150 focus:outline-none group focus:border-gray-200 focus:bg-gray-100"
          onClick={handleIsAccountSwitcherOpen}
        >
          <SelectorIcon className=" transih-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-800 transition ease-in-out duration-150" />
        </button>
      </span>

      <Transition
        show={isAccountSwitcherOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute w-56 bg-white shadow-lg rounded-md overflow-hidden divide-y divide-gray-200 transition ease-in-out duration-200 transform skew-y-0">
          <div className="py-2">
            <div className="pt-3 px-4 pb-2 text-xs text-gray-500 uppercase font-medium">
              Personal Account
            </div>
            <ul>
              <li className="bg-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <a
                      href="/acetdecastro"
                      className="inline-flex py-3 pl-4 space-x-2 group"
                    >
                      <span className="w-6 h-6 ">
                        <Avatar
                          src={
                            'https://pbs.twimg.com/profile_images/1174626220283088896/vMD1tpZx_400x400.jpg'
                          }
                          size={'sm'}
                          alt={'acetdecastro'}
                        />
                      </span>
                      <span className="text-sm text-gray-600 w-32 truncate group-hover:text-gray-800 transition ease-in-out duration-150 leading-5 mt-px">
                        acetdecastroacetdecastro
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="/settings" className="inline-flex py-3 px-4 group">
                      <CogIcon className="h-4 w-4 text-gray-500 group-hover:text-gray-800 transition ease-in-out duration-150" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex w-full items-center justify-between py-4 px-4 group"
            >
              <span className="text-sm text-gray-600 tracking-wide group-hover:text-gray-800 transition ease-in-out duration-150">
                Create a Team
              </span>
              <PlusIcon className="h-5 w-5 -mr-px text-gray-600 group-hover:text-gray-800 transition ease-in-out duration-150" />
            </a>
          </div>
        </div>
      </Transition>
    </div>
  );
}
