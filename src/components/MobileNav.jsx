import Link from 'next/link';
import { Popover } from '@headlessui/react';
import IconWallet from './IconWallet';
import { useRouter } from 'next/router';

const MobileNav = ({setMenuExpanded, menuExpanded}) => {
  const router = useRouter();
  return (
    <div className="w-full mx-auto px-4 flex items-center justify-between">
      <div className="menu-area block lg:hidden w-full">
        <ul className="">
          <li
            className={`text-lg text-white transition ease-in relative w-full pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
              router.pathname == '/' ? 'border-[#d81384]' : ' border-gray-500'
            }`}
            onClick={() => {
              setMenuExpanded(!menuExpanded);
            }}
          >
            <Link href="/">
              <a>
                <p>Dashboard</p>
              </a>
            </Link>
          </li>
          <li
            className={`text-lg text-white transition ease-in relative w-full pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
              router.pathname == '/calculator'
                ? 'border-[#d81384]'
                : ' border-gray-500'
            }`}
            onClick={() => {
              setMenuExpanded(!menuExpanded);
            }}
          >
            <Link href="/calculator">
              <a>
                <p>Calculator</p>
              </a>
            </Link>
          </li>
          <li
            className={`new text-lg text-white transition ease-in relative w-full pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
              router.pathname == '/games'
                ? 'border-[#d81384]'
                : ' border-gray-500'
            }`}
          >
            <Link href="/">
              <a>
                <p>Games</p>
              </a>
            </Link>
          </li>
          <li
            className={`text-lg text-white transition ease-in relative w-full pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
              router.pathname == '/Swap'
                ? 'border-[#d81384]'
                : ' border-gray-500'
            }`}
          >
            <Link href="/">
              <a>
                <p>Swap</p>
              </a>
            </Link>
          </li>
          <li
            className={`text-lg text-white transition ease-in relative w-full pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
              router.pathname == '/Docs'
                ? 'border-[#d81384]'
                : ' border-gray-500'
            }`}
          >
            <Link href="/">
              <a>
                <p>Docs</p>
              </a>
            </Link>
          </li>
          <li
            className={`new text-lg text-white transition ease-in relative w-full pt-2 pb-1 border-b border-solid hover:border-[#d81384] ${
              router.pathname == '/Wiki'
                ? 'border-[#d81384]'
                : ' border-gray-500'
            }`}
          >
            <Link href="/">
              <a>
                <p>Wiki</p>
              </a>
            </Link>
          </li>
        </ul>
        <div className="wallet mt-5 block lg:hidden">
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
      </div>
    </div>
  );
};

export default MobileNav;
