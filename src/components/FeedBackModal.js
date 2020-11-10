import ModalOverlay from './ModalOverlay';
import { Transition } from '@tailwindui/react';

export default function FeedBackModal({
  isFeedBackModelOpen,
  handleIsFeedBackModelOpen,
}) {
  const handleFormButtons = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isFeedBackModelOpen && (
        <ModalOverlay handleToggle={handleIsFeedBackModelOpen} />
      )}

      <div className="relative">
        <div>
          <button
            type="button"
            className="border border-gray-200 rounded px-3 py-1.5 hover:border-black transition ease-in-out duration-150"
            onClick={handleIsFeedBackModelOpen}
          >
            FeedBack
          </button>
        </div>

        <Transition
          show={isFeedBackModelOpen}
          enter="transition-opacity ease-in duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute z-20 bg-white rounded-xl shadow-lg w-72">
            <form className="divide-y divide-gray-400">
              <div className="pt-4 pb-2 px-4">
                <textarea
                  className="resize-none w-64 h-24 py-2 px-3 text-gray-700"
                  name="feedback"
                  id="feedback"
                  type="text"
                  placeholder="✍"
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                  autoFocus="on"
                ></textarea>
              </div>
              <div className="p-4 flex items-center justify-between bg-gray-100">
                <div className="space-x-2 group">
                  <button
                    onClick={handleFormButtons}
                    className="bg-gray-50 border border-gray-300 rounded-full p-1.5 hover:scale-110 transform focus:scale-110 active:scale-50 focus:outline-none focus:border-orange-400 transition ease-in-out duration-150 delay-100"
                  >
                    <img
                      src="https://assets.vercel.com/twemoji/1f929.svg"
                      alt="Very satisfied"
                      className="h-5 w-5"
                    />
                  </button>
                  <button
                    onClick={handleFormButtons}
                    className="bg-gray-50 border border-gray-300 rounded-full p-1.5 hover:scale-110 transform focus:outline-none focus:border-orange-400 transition ease-in-out duration-150 delay-100"
                  >
                    <img
                      src="https://assets.vercel.com/twemoji/1f600.svg"
                      alt="Satisfied"
                      className="h-5 w-5"
                    />
                  </button>
                  <button
                    onClick={handleFormButtons}
                    className="bg-gray-50 border border-gray-300 rounded-full p-1.5 hover:scale-110 transform focus:outline-none focus:border-orange-400 transition ease-in-out duration-150 delay-100"
                  >
                    <img
                      src="https://assets.vercel.com/twemoji/1f615.svg"
                      alt="Dissatisfied"
                      className="h-5 w-5"
                    />
                  </button>
                  <button
                    onClick={handleFormButtons}
                    className="bg-gray-50 border border-gray-300 rounded-full p-1.5 hover:scale-110 transform focus:outline-none focus:border-orange-400 transition ease-in-out duration-150 delay-100"
                  >
                    <img
                      src="https://assets.vercel.com/twemoji/1f62d.svg"
                      alt="Dissatisfied"
                      className="h-5 w-5"
                    />
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleFormButtons}
                    className="px-3 py-1.5 text-sm leading-5 font-medium bg-black rounded border border-transparent text-white hover:text-gray-900 hover:bg-white transition ease-in-out duration-150 hover:border-black"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Transition>
      </div>
    </>
  );
}
