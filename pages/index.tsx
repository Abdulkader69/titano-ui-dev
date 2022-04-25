import type { NextPage } from 'next';
import Head from 'next/head';
import MetaMaskIcon from '../src/assets/images/metamask.99c96182.svg';
import { Popover } from '@headlessui/react';
import IconWallet from '../src/components/IconWallet';
import GraphCharts from '../src/components/GraphCharts';
import GraphCircle from '../src/components/GraphCircle';

const Home: NextPage = () => {
  return (
    <div className="site-container">
      <Head>
        <title>Sphere Finance | The S&P 500 of Crypto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-siteContainer m-auto">
        <div className="dashboard py-16 flex flex-col gap-8">
          <div className="column flex flex-row flex-nowrap gap-8">
            <div className="containerr p-[10px] rounded-[20px] min-h-[338px] min-w-full flex flex-row justify-between bg-[rgba(4,7,31,.6)] shadow-Site border border-solid border-[hsla(0,0%,100%,.07)] z-10">
              <div className="portfolio py-6 px-7 min-w-[240px] w-fit h-[318px] flex flex-col gap-4">
                <div className="portfolio-wrapper flex flex-col items-center">
                  <h1 className="text-xs text-[#a7c9ee] font-semibold uppercase tracking-[1.17px]">
                    Portfolio
                  </h1>
                  <div className="portfolio-icon h-[70px] w-[70px] flex justify-center items-center mt-[18px] mb-[9px]">
                    <img
                      className="w-[80%] h-auto"
                      src={MetaMaskIcon.src}
                      alt="icon"
                    />
                  </div>
                  <h6 className="text-sm text-[hsla(0,0%,100%,.6)]">
                    Not Connected
                  </h6>
                </div>
                <div className="flex-grow"></div>
                <a className="btn btn-primary p-1" href="#">
                  Buy SPHERE
                </a>
                <div className="wallet">
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
                <a href="#" className="btn btn-passive">
                  View Chart
                </a>
              </div>
              <div className="portfolio-content px-[52px] pt-[23px] w-full min-h-full flex flex-col">
                <div className="portfolio-content-column h-1/2 flex-row flex-nowrap items-start grid grid-cols-2">
                  <div className="lg-earnings w-[unset] break-words">
                    <div className="lg-earnings-title flex items-center">
                      <h4 className="text-xs text-[#a7c9ee] uppercase whitespace-nowrap tracking-[1.17px] font-semibold mb-1">
                        HOLDINGS
                      </h4>
                    </div>
                    <div className="lg-earnings-dollar flex flex-row items-start">
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        $
                      </div>
                      <div className="b relative text-white text-[55px] leading-[75px] font-extrabold -mt-2 tracking-[-1px]">
                        0
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        .00
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold"></div>
                    </div>
                    <div className="lg-earnings-sphere flex flex-row items-center gap-1">
                      <img
                        className="w-[15px] h-[15px]"
                        src="https://app.sphere.finance/static/media/sphere_logo_icon.2cbc48ec.svg"
                        alt="sphere"
                      />
                      <h6 className="text-[13px] text-[hsla(0,0%,100%,.6)] text-left ml-1">
                        0 SPHERE
                      </h6>
                    </div>
                  </div>
                  <div className="lg-earnings w-[unset] break-words">
                    <div className="lg-earnings-title flex items-center">
                      <h4 className="text-xs text-[#a7c9ee] uppercase whitespace-nowrap tracking-[1.17px] font-semibold mb-1">
                        DAILY EARNINGS
                      </h4>
                    </div>
                    <div className="lg-earnings-dollar flex flex-row items-start">
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        $
                      </div>
                      <div className="b relative text-white text-[55px] leading-[75px] font-extrabold -mt-2 tracking-[-1px]">
                        0
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        .00
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold"></div>
                    </div>
                    <div className="lg-earnings-sphere flex flex-row items-center gap-1">
                      <img
                        className="w-[15px] h-[15px]"
                        src="https://app.sphere.finance/static/media/sphere_logo_icon.2cbc48ec.svg"
                        alt="sphere"
                      />
                      <h6 className="text-[13px] text-[hsla(0,0%,100%,.6)] text-left ml-1">
                        0 SPHERE
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content-column h-1/2 flex flex-row flex-nowrap items-start">
                  <div className="recharts-responsive-container w-full h-full">
                    <div className="recharts-wrapper relative w-full max-w-[670px] h-[148px]">
                      <GraphCharts />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rebase pt-6 pr-12 flex flex-col items-center">
                <div className="rebase-circle relative flex justify-center items-center mb-9 w-[15vw] max-w-[162px]">
                  <div className="CircularProgress w-[160px] h-[160px] relative">
                    <GraphCircle />
                  </div>
                  <div className="rebase-circle-content absolute top-[20%] left-[32%] text-center">
                    <p className="text-[13px] text-[hsla(0,0%,100%,.6)] text-center max-w-[160px] m-auto pb-1">
                      REBASES
                      <br />
                      EVERY 30
                      <br />
                      MINUTES
                    </p>
                    <h4 className="text-2xl font-extrabold w-full text-center text-white">
                      00:00
                    </h4>
                  </div>
                </div>
                <div className="md-earnings">
                  <h4 className="text-[13px] text-[#a7c9ee] font-semibold uppercase">
                    NEXT REWARD
                  </h4>
                  <div className="md-earnings-dollar w-full flex flex-row justify-center">
                    <h4 className="text-2xl text-white font-extrabold leading-8 text-center">
                      $ 0.00
                    </h4>
                  </div>
                  <h4 className="text-[13px] text-[hsla(0,0%,100%,.6)] text-center">
                    0 SPHERE
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="column flex flex-row flex-nowrap gap-8">
            <div className="container-width grid w-full h-fit gap-7">
              <div className="sphere-container relative rounded-[20px] flex flex-row justify-around bg-[rgba(4,7,31,.6)] shadow-Site border border-solid border-[hsla(0,0%,100%,.07)] gap-7 py-7 px-8 z-10">
                <div className="container-with-border-column relative flex items-start flex-col">
                  <div className="lg-earnings w-[unset] break-words">
                    <div className="lg-earnings-title flex items-center">
                      <h4 className="text-xs text-[#a7c9ee] uppercase whitespace-nowrap tracking-[1.17px] font-semibold">
                        SPHERE PRICE
                      </h4>
                      <div className="stub text-[11px] text-[#ef4e4e] max-w-fit px-[7px] text-center">
                        -8.53%
                      </div>
                    </div>
                    <div className="lg-earnings-dollar flex flex-row items-start">
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        $
                      </div>
                      <div className="b relative text-white text-[55px] leading-[75px] font-extrabold -mt-2 tracking-[-1px]">
                        0
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        .0319
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold"></div>
                    </div>
                  </div>
                </div>
                <div className="container-with-border-column relative flex items-start flex-col">
                  <div className="lg-earnings w-[unset] break-words">
                    <div className="lg-earnings-title flex items-center">
                      <h4 className="text-xs text-[#a7c9ee] uppercase whitespace-nowrap tracking-[1.17px] font-semibold">
                        MARKET CAP
                      </h4>
                    </div>
                    <div className="lg-earnings-dollar flex flex-row items-start">
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        $
                      </div>
                      <div className="b relative text-white text-[55px] leading-[75px] font-extrabold -mt-2 tracking-[-1px]">
                        93
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        .55
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-with-border-column relative flex items-start flex-col">
                  <div className="lg-earnings w-[unset] break-words">
                    <div className="lg-earnings-title flex items-center">
                      <h4 className="text-xs text-[#a7c9ee] uppercase whitespace-nowrap tracking-[1.17px] font-semibold">
                        DAILY ROI
                      </h4>
                    </div>
                    <div className="lg-earnings-dollar flex flex-row items-start">
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold"></div>
                      <div className="b relative text-white text-[55px] leading-[75px] font-extrabold -mt-2 tracking-[-1px]">
                        1
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        .91
                      </div>
                      <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                        %
                      </div>
                    </div>
                  </div>
                  <div className="roi">
                    <div className="roi-row grid grid-cols-2">
                      <div className="roi-key text-[13px] text-[hsla(0,0%,100%,.6)] leading-5">
                        Next 30m:
                      </div>
                      <div className="roi-key text-[13px] text-white leading-5 text-right">
                        0.04%
                      </div>
                    </div>
                    <div className="roi-row grid grid-cols-2">
                      <div className="roi-key text-[13px] text-[hsla(0,0%,100%,.6)] leading-5">
                        5-day:
                      </div>
                      <div className="roi-key text-[13px] text-white leading-5 text-right">
                        9.92%
                      </div>
                    </div>
                    <div className="roi-row grid grid-cols-2">
                      <div className="roi-key text-[13px] text-[hsla(0,0%,100%,.6)] leading-5">
                        Annual:
                      </div>
                      <div className="roi-key text-[13px] text-white leading-5 text-right">
                        99,900%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-2-columns flex gap-7">
                <div className="sphere-container relative rounded-[20px] flex flex-row justify-around bg-[rgba(4,7,31,.6)] shadow-Site border border-solid border-[hsla(0,0%,100%,.07)] gap-7 py-7 px-8 z-10 flex-grow-0 flex-shrink-0 basis-[calc(50%-15px)]">
                  <div className="md-earnings">
                    <h4 className="text-[13px] text-[#a7c9ee] font-semibold uppercase">
                      TREASURY BALANCE
                    </h4>
                    <div className="md-earnings-dollar w-full flex flex-row justify-center">
                      <h4 className="text-2xl text-white font-extrabold leading-8 text-center">
                        $ 22.15M
                      </h4>
                    </div>
                  </div>
                  <div className="md-earnings">
                    <h4 className="text-[13px] text-[#a7c9ee] font-semibold uppercase">
                      TODAY&apos;S TREASURY GAINS
                    </h4>
                    <div className="md-earnings-dollar w-full flex flex-row justify-center">
                      <h4 className="text-2xl text-white font-extrabold leading-8 text-center">
                        $ 141,083.72
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="sphere-container relative rounded-[20px] flex flex-row justify-around bg-[rgba(4,7,31,.6)] shadow-Site border border-solid border-[hsla(0,0%,100%,.07)] gap-7 py-7 px-8 z-10 flex-grow-0 flex-shrink-0 basis-[calc(50%-15px)]">
                  <div className="md-earnings">
                    <h4 className="text-[13px] text-[#a7c9ee] font-semibold uppercase">
                      TOTAL WALLETS
                    </h4>
                    <div className="md-earnings-dollar w-full flex flex-row justify-center">
                      <h4 className="text-2xl text-white font-extrabold leading-8 text-center">
                        36,134
                      </h4>
                    </div>
                  </div>
                  <div className="md-earnings">
                    <h4 className="text-[13px] text-[#a7c9ee] font-semibold uppercase">
                      DYSON INDEX
                    </h4>
                    <div className="md-earnings-dollar w-full flex flex-row justify-center">
                      <h4 className="text-2xl text-white font-extrabold leading-8 text-center">
                        2.0110 x
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sphere-container relative rounded-[20px] flex flex-row justify-center items-center bg-[rgba(4,7,31,.6)] shadow-Site border border-solid border-[hsla(0,0%,100%,.07)] gap-7 py-7 px-8 z-10">
                <div className="lg-earnings w-[unset] break-words">
                  <div className="lg-earnings-title flex items-center">
                    <h4 className="text-xs text-[#a7c9ee] uppercase whitespace-nowrap tracking-[1.17px] font-semibold">
                      🔥 TOTAL TOKENS BURNED TO DATE 🔥
                    </h4>
                  </div>
                  <div className="lg-earnings-dollar flex flex-row items-start">
                    <div className="s relative text-white text-[35px] leading-9 font-extrabold"></div>
                    <div className="b relative text-white text-[55px] leading-[75px] font-extrabold -mt-2 tracking-[-1px]">
                      30,793,633
                    </div>
                    <div className="s relative text-white text-[35px] leading-9 font-extrabold">
                      .60
                    </div>
                    <div className="s relative text-white text-[35px] leading-9 font-extrabold"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-health-wrapper max-w-[290px] w-full">
              <div className="sphere-container relative rounded-[20px] flex flex-col justify-around bg-[rgba(4,7,31,.6)] shadow-Site border border-solid border-[hsla(0,0%,100%,.07)] gap-7 py-7 px-8 z-10 pb-0 mb-8">
                <div className="project-health-row w-full">
                  <h4 className="text-xs text-[#a7c9ee] uppercase font-semibold tracking-[2px]">
                    BUY TAX
                  </h4>
                  <p className="text-lg text-[#ff0093] mb-1">13%</p>
                  <div className="project-health-line w-full border border-solid border-[hsla(0,0%,100%,.2)]"></div>
                </div>
                <div className="project-health-row w-full">
                  <h4 className="text-xs text-[#a7c9ee] uppercase font-semibold tracking-[2px]">
                    SELL TAX
                  </h4>
                  <p className="text-lg text-[#ff0093] mb-1">20%</p>
                  <div className="project-health-line w-full border border-solid border-[hsla(0,0%,100%,.2)]"></div>
                </div>
                <div className="project-health-row w-full">
                  <h4 className="text-xs text-[#a7c9ee] uppercase font-semibold tracking-[2px]">
                    TRANSFER TAX
                  </h4>
                  <p className="text-lg text-[#ff0093] mb-1">13%</p>
                  <div className="project-health-line w-full border border-solid border-[hsla(0,0%,100%,.2)]"></div>
                </div>
                <div className="project-health-row w-full">
                  <h4 className="text-xs text-[#a7c9ee] uppercase font-semibold tracking-[2px]">
                    MAX TOKENS PER BUY/SELL
                  </h4>
                  <p className="text-lg text-[#ff0093] mb-1">869.23B / 1.50M</p>
                </div>
              </div>
              <div className="sphere-container relative rounded-[20px] flex flex-col justify-around bg-[rgba(4,7,31,.6)] shadow-Site border border-solid border-[hsla(0,0%,100%,.07)] gap-7 py-7 px-8 z-10">
                <div className="project-health-row w-full">
                  <h4 className="text-xs text-[#a7c9ee] uppercase font-semibold tracking-[2px]">
                    YOUR CURRENT TAX BRACKET
                  </h4>
                  <p className="text-lg text-[#ff0093] mb-1">
                    Sell Tier 1 (+0%)
                  </p>
                  <div className="project-health-line w-full border border-solid border-[hsla(0,0%,100%,.2)]"></div>
                  <div className="project-health-spacer pt-6">
                    <span className="block text-white text-[13px] font-bold">
                      Total Sell Tax = 20%
                    </span>
                    <span className="block text-white text-[13px] font-bold">
                      Total Transfer Tax = 13%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;