import React, { useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import IconWallet from './IconWallet';
import IconProfile from './IconProfile';
import { useRouter } from 'next/router';
import MobileNav from './MobileNav';

export default function Header() {
  const router = useRouter();
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <header
      id="main-header"
      className={`shadow-header py-4 lg:py-8 fixed top-0 left-0 w-full z-50  ${
        menuExpanded ? 'bg-black' : 'bg-[#04071f]/20'
      }`}
    >
      <div className="w-full max-w-siteContainer mx-auto px-4 flex items-center justify-between">
        <div className="logo max-w-[100px] lg:max-w-[150px]">
          <Link href="/">
            <a>
              <img
                src="https://app.sphere.finance/static/media/sphere_logo.a54b67b3.svg"
                alt="logo"
                className="w-full h-full"
              />
            </a>
          </Link>
        </div>
        <div className="menu-area hidden lg:block">
          <ul className="flex items-center justify-center">
            <li
              className={`text-[15px] text-white transition ease-in relative mr-10 pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
                router.pathname == '/'
                  ? 'border-[#d81384]'
                  : 'border-transparent'
              }`}
            >
              <Link href="/">
                <a>
                  <p>Dashboard</p>
                </a>
              </Link>
            </li>
            <li
              className={`text-[15px] text-white transition ease-in relative mr-10 pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
                router.pathname == '/calculator'
                  ? 'border-[#d81384]'
                  : 'border-transparent'
              }`}
            >
              <Link href="/calculator">
                <a>
                  <p>Calculator</p>
                </a>
              </Link>
            </li>
            <li
              className={`new text-[15px] text-white transition ease-in relative mr-10 pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
                router.pathname == '/games'
                  ? 'border-[#d81384]'
                  : 'border-transparent'
              }`}
            >
              <Link href="/">
                <a>
                  <p>Games</p>
                </a>
              </Link>
            </li>
            <li
              className={`text-[15px] text-white transition ease-in relative mr-10 pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
                router.pathname == '/Swap'
                  ? 'border-[#d81384]'
                  : 'border-transparent'
              }`}
            >
              <Link href="/">
                <a>
                  <p>Swap</p>
                </a>
              </Link>
            </li>
            <li
              className={`text-[15px] text-white transition ease-in relative mr-10 pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
                router.pathname == '/Docs'
                  ? 'border-[#d81384]'
                  : 'border-transparent'
              }`}
            >
              <Link href="/">
                <a>
                  <p>Docs</p>
                </a>
              </Link>
            </li>
            <li
              className={`new text-[15px] text-white transition ease-in relative mr-10 pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
                router.pathname == '/Wiki'
                  ? 'border-[#d81384]'
                  : 'border-transparent'
              }`}
            >
              <Link href="/">
                <a>
                  <p>Wiki</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="login-area flex items-center">
          <div className="wallet mr-5 hidden lg:block">
            <Popover className="relative">
              {/* {({ open }) => ( */}
              <>
                <Popover.Button className="btn btn-primary">
                  <IconWallet />
                  <span>Connect Wallet</span>
                </Popover.Button>
                {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="fixed z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="p-4 bg-gray-50">
                          <a
                            href="##"
                            className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-gray-900">
                                Documentation
                              </span>
                            </span>
                            <span className="block text-sm text-gray-500">
                              Start integrating products and tools
                            </span>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition> */}
              </>
              {/* )} */}
            </Popover>
          </div>
          <div className="mobile-menu-wrap mr-4 block lg:hidden">
            <button
              className="menu-trigger mt-1 cursor-pointer"
              type="button"
              onClick={() => {
                setMenuExpanded(!menuExpanded);
              }}
            >
              <span
                className={`block relative w-[25px] h-[2px] bg-white mb-[5px] transition ease-in ${
                  menuExpanded ? 'rotate-45 top-[7px]' : 'rotate-0 top-0'
                }`}
              ></span>
              <span
                className={`block relative w-[25px] h-[2px] bg-white mb-[5px] transition ease-in ${
                  menuExpanded ? '-rotate-45' : 'rotate-0'
                }`}
              ></span>
              <span
                className={`block relative w-[25px] h-[2px] bg-white transition ease-in ${
                  menuExpanded ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
            </button>
          </div>
          <div className="profile-dropdown relative">
            <Popover>
              {/* {({ open }) => ( */}
              <>
                <Popover.Button className="wallet-dropdown-icon">
                  <IconProfile />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-[99] max-w-[80%] top-[54px] right-0 h-96 min-w-[300px] sm:min-w-[640px] grid grid-cols-1 sm:grid-cols-2 bg-[#1d2035] shadow-Site border border-solid border-[hsla(0,0%,100%,.1)] rounded-md">
                    <div className="tick absolute top-[-7px] right-[13px] w-[14px] h-[14px] bg-[#15172a] rotate-45"></div>
                    <div className="wallet-dropdown-box-column py-12 pl-10 flex flex-col items-start gap-5">
                      <h2 className="text-xs text-[#a7c9ee] font-semibold tracking-[3px]">
                        CONNECTED WALLET
                      </h2>
                      <h2 className="text-xs text-[#a7c9ee] font-semibold tracking-[3px]">
                        CONNECT CONTRACT
                      </h2>
                      <div className="menu flex items-start">
                        <button className="bg-transparent border-none flex items-center gap-2 cursor-pointer">
                          <img
                            src="https://app.sphere.finance/static/media/SPHERE.aab58ad8.svg"
                            alt="sphere"
                            className="w-[25px]"
                          />
                          <div className="wrap flex flex-col text-[hsla(0,0%,100%,.6)] text-left">
                            <h2 className="text-sm font-semibold">
                              Add SPHERE
                            </h2>
                            <p className="text-xs">to your wallet</p>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="wallet-dropdown-box-column py-12 pl-10 pr-7 flex flex-col items-start gap-5 bg-[#15172a]">
                      <h2 className="text-xs text-[#a7c9ee] font-semibold tracking-[3px]">
                        ACCOUNT SETTINGS
                      </h2>
                      <div className="select-field">
                        <label
                          htmlFor="sphereSelect-placeholder"
                          className="block text-sm text-[hsla(0,0%,100%,.6)]"
                        >
                          Currency
                        </label>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
              {/* )} */}
            </Popover>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu fixed top-[72px] right-0 w-full h-[calc(100%-72px)] bg-black transition ease-in opacity-100 lg:opacity-0 pointer-events-auto lg:pointer-events-none ${
          menuExpanded ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <MobileNav menuExpanded={menuExpanded} setMenuExpanded={setMenuExpanded} />
      </div>
    </header>
  );
}
