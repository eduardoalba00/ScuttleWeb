import { PlusIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

function ResourcesCard({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  const contactModal = (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div
                      className="mx-auto flex flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 h-16 w-16"
                      style={{
                        backgroundImage: `url(${require("./assets/Eggdud.png")})`,
                        backgroundSize: "cover",
                        backgroundPosition: "left bottom",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <image
                        src="./assets/Eggdud.png"
                        alt="Eggdud"
                        className="object-fit"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Eduardo Alba
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          If you would like to contact me to get info on
                          Scuttle, talk code, get to know me, or any other
                          reason, add me on{" "}
                          <span className="font-bold">Discord: eggdud</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-200 px-4 py-4 sm:flex sm:flex-row-reverse sm:px-6" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div className="col-span-1 sm:col-span-2 bg-gray-100 rounded-xl p-6">
        <div>
          <div className="text-2xl font-bold lg:text-4xl">Resources</div>
          <div className="text-[12px] sm:text-b md:text-base lg:text-lg">
            Scroll down this page to view commands, general info, and contact
            info.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2 text-sm sm:text-base md:text-base lg:text-lg">
          <div>
            <ul>
              <li key="about">
                <a href="#about" className="hover:font-bold">
                  About
                </a>
              </li>
              <li key="commands">
                <a href="#commands" className="hover:font-bold">
                  Commands
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li key="Contact">
                <p
                  onClick={() => setOpen(true)}
                  className="hover:font-bold hover:cursor-pointer"
                >
                  Contact
                </p>
              </li>
              <li key="add_bot">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1222960533523796089&permissions=17600776293376&scope=bot"
                  className="hover:font-bold"
                >
                  Add Bot
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a
        className="bg-green-300 rounded-xl flex flex-col justify-center hover:cursor-pointer hover:scale-105"
        href="https://discord.com/oauth2/authorize?client_id=1222960533523796089&permissions=17600776293376&scope=bot"
      >
        <PlusIcon className="h-32 text-green-700 flex mx-auto" />
      </a>
      {contactModal}
    </div>
  );
}

export default ResourcesCard;
