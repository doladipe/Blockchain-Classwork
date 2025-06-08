import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="bg-[url(/gbo-WyXuSQMDt1c-unsplash.jpg)] bg-center bg-contain ">
        <div className="min-h-screen mx-auto max-w-6xl">
          <nav className="flex items-center justify-between px-6 py-9">
            <h1 className="text-2xl font-bold text-white">Next3Gen</h1>

            <div className="hidden md:flex space-x-8 text-white">
              <a href="">All Pages</a>
              <a href="">Company</a>
              <a href="">Services</a>
              <a href="">Contact Us</a>
            </div>

            <button className="bg-none px-6 py-2 rounded-2xl border border-gray-800 text-white transition">
              Create Free Account
            </button>
          </nav>

          {/* Section One  */}

          <div className=" mt-15 min-h-screen flex flex-col md:flex-row ">
            {/* Left Side  */}
            <div className="md:w-1/2">
              <h1 className="text-7xl font-semibold text-white ">
                Unlock new possibilities <br /> with blockchain
              </h1>
              <p className="text-white mt-4">
                Experience the future of the internet with secure, transparent,
                and Decentralized Solutions
              </p>
              <button className="mt-8 bg-gradient-to-r from-teal-400 to-green-400 px-5 py-3 rounded-3xl">
                Create Free Account
              </button>
              <button className="mt-8 bg-none border ml-6 text-white border-gray-500 px-5 py-3 rounded-3xl">
                Explore Solutions
              </button>

              <div className=" flex gap-20 mt-10 ">
                <p className="text-[#979797] text-sm ">Trusted Excellent on</p>
                <p className="text-[#979797] text-sm ">DeFi has surpassed</p>
              </div>
              <div className=" flex gap-28 mt-2 ">
                <p className="text-white text-2xl ">Trustpilot</p>
                <p className="text-white text-2xl ">1000k+</p>
              </div>
            </div>

            {/* Right Side  */}
            <div className="  ">
              {" "}
              <img
                className="animate-spin mt-15 ml-10 w-sm max-w-xl"
                style={{ animationDuration: "30s" }}
                src="/dark.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section Two  */}
      <div className="pt-20 pb-20 bg-[#151515] ">
        <div className=" bg-[#1F2022] mx-auto max-w-6xl  rounded-t-2xl rounded-b-r ">
          <div className="flex flex-col items-center p-10 sm:flex-row gap-x-40 ">
            <div className=" ">
              <h1 className=" mb-5 ml-30 text-1xl font-bold bg-gradient-to-r from-blue-900 to-green-400 bg-clip-text text-transparent">
                DIGITAL EXPERIENCE
              </h1>
              <h1 className="text-4xl  text-white ">
                Intuitive design for <br /> navigation and interaction.
              </h1>
              <p className="mt-3 text-[#979797] text-sm">
                Whether you're a beginner or an exper. our platform <br />{" "}
                supports various popular wallets to enure easy <br />
                integration
              </p>
            </div>
            <div className="">
              <img
                className="animate-spin  w-sm max-w-xl"
                style={{ animationDuration: "30s" }}
                src="/dark.jpg"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-x-9 md:flex-row justify-between mx-auto pb-20 max-w-6xl ">
          <div className="bg-[#1F2022]  w-1/2 rounded-b-2xl p-10">
            <button className=" bg-gradient-to-r from-teal-400 to-green-400 px-5 py-3 rounded-3xl">
              Get Started For Free
            </button>
            <p className="text-[#979797] mt-5 text-sm ">
              No account needed to start
            </p>
          </div>
          <div className="bg-[#1F2022]  mt-4 p-6 rounded-2xl">
            <h1 className="text-xl font-medium text-white mt-2">
              Connect Your Wallet
            </h1>
            <p className="text-xs font-medium text-[#979797] mt-2">
              Effortlessly connect your digital wallet to access Web3Go's
              platform
            </p>
          </div>
          <div className="bg-[#1F2022]  mt-4 p-6 rounded-2xl">
            <h1 className="text-xl font-medium text-white mt-2">
              Explore Decentralized Apps
            </h1>
            <p className="text-xs font-medium text-[#979797] mt-2">
              Discover and interact with a wide array of decentralized
              applications.
            </p>
          </div>
        </div>
      </div>

      {/* Section three  */}
      <div className="bg-[#151515] py-10 ">
        <div className="mx-auto  max-w-6xl  ">
          <h1 className=" text-1xl font-bold bg-gradient-to-r from-blue-900 to-green-400 bg-clip-text text-transparent">
            DECENTRALIZED FUTURE
          </h1>
          <h1 className="text-5xl mt-5 text-white ">
            Empower your digital <br /> experience with Web3Go
          </h1>
          <p className="mt-7 text-[#979797] text-sm mb-10">
            Experience the Future of the Internet with Secure, <br />{" "}
            Transparent, and Decentralized Solutions
          </p>
        </div>
        <div className="mx-auto  max-w-6xl flex flex-col items-center sm:flex-row gap-x-10">
          <div className="border-[#434345] shadow-2xs shadow-[#434345] p-10 rounded-4xl border-1">
            <div className="border-b-[#434345] border-b">
              <h1 className=" text-1xl font-bold bg-gradient-to-r from-blue-900 to-green-400 bg-clip-text text-transparent">
                MULTI-CHAIN INTEGRATION
              </h1>
              <h1 className="text-5xl mt-5 text-white ">
                Seamless Multi- <br /> Chain Integration
              </h1>
              <p className="mt-7 text-[#979797] text-sm mb-10">
                Access and Interact with Multiple Blockchains Effortlessly
                allowing <br /> users to explore and interact with various
                ecosystems.
              </p>
            </div>
            <div className=" mt-7 ">
              <img
                className="border-4 border-[#434345] rounded-4xl"
                src="/Screenshot 2025-06-07 at 18.03.30.png"
                alt=""
              />
            </div>
          </div>
          <div className="border-[#434345] shadow-2xs shadow-[#434345] p-10 rounded-4xl border-1">
            <div className="border-b-[#434345] border-b">
              <h1 className=" text-1xl font-bold bg-gradient-to-r from-blue-900 to-green-400 bg-clip-text text-transparent">
                AI-DRIVEN INSIGHTS
              </h1>
              <h1 className="text-5xl mt-5 text-white ">
                Leverage AI- for <br /> Informed Decision
              </h1>
              <p className="mt-7 text-[#979797] text-sm mb-10">
                Bridge the digital of the divide between disparate blockchain{" "}
                <br /> ecosystems. Empower users to seamlessly traverse.
              </p>
            </div>
            <div className=" mt-7 ">
              <img
                className="border-4 border-[#434345] rounded-4xl"
                src="/Screenshot 2025-06-07 at 18.14.15.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Four  */}
      <div className="bg-[#151515] py-10 ">
        <div className="mx-auto  max-w-6xl flex flex-col justify-center items-center   ">
          <h1 className=" text-1xl font-bold bg-gradient-to-r from-blue-900 to-green-400 bg-clip-text text-transparent">
            ADVANCED FEATURES
          </h1>
          <h1 className="text-5xl mt-5 text-white ">
            Explore the Decentralized Future
          </h1>
          <p className="mt-4 text-[#979797] text-sm ">
            Experience the Future of the Internet with Secure and Transparent{" "}
          </p>
          <p className=" text-[#979797] text-sm mb-10 ">
            {" "}
            and Decentralized Solutions
          </p>
        </div>
        <div className=" mx-auto  max-w-6xl flex flex-col justify-center  items-center sm:flex-row gap-x-35">
          {/* Left Div  */}
          <div className=" rounded-2xl border-0">
            <div className=" mt-5 ">
              <img
                className="border-1 border-[#434345] h-130 w-100 rounded-4xl"
                src="/Screenshot 2025-06-07 at 18.28.48.png"
                alt=""
              />
            </div>
          </div>
          {/* Right Div  */}
          <div className=" mt-5 ">
            <div className="">
              <h1 className="text-3xl text-white ">
                Access Cutting-Edge <br /> Financial Tools and Services
              </h1>
              <p className="mt-2 mb-3 text-[#979797] text-sm ">
                Access and Interact with Multiple Blockchains Effortlessly.
              </p>
            </div>
            <div className=" gap-x-10 flex items-center justify-center ">
              <div className="">
                <img
                  className="border-1 h-15 v-15  rounded-2xl mb-3"
                  src="/Screenshot 2025-06-07 at 18.56.36.png"
                  alt=""
                />
                <h1 className="text-sm  text-white ">Yield Farming</h1>
                <p className="mt-2 text-[#979797] text-sm ">
                  Participate in yield farming <br /> opportunities to <br />{" "}
                  maximize your returns
                </p>
              </div>
              <div className="mt-8">
                <img
                  className="border-1 h-15 v-15  rounded-2xl mb-3"
                  src="/Screenshot 2025-06-07 at 18.56.56.png"
                  alt=""
                />
                <h1 className="text-sm  text-white ">Stacking Opportunities</h1>
                <p className="mt-2 text-[#979797] text-sm mb-10">
                  Engage in staking to support <br /> network security and earn{" "}
                  <br /> rewards
                </p>
              </div>
            </div>
            <div className=" mt-5 ">
              <button className="text-white rounded-4xl text-sm border-[#434345]  border-1 px-5 py-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5  */}
      <div className="bg-[#151515] py-10 ">
        <div className=" mx-auto  max-w-6xl flex flex-col justify-center  items-center sm:flex-row gap-x-35">
          {/* Left Div  */}
          <div className=" mt-5 ">
            <div className="">
              <h1 className="text-3xl text-white ">
                Discover, Buy, and Sell <br /> Unique Digital Assets
              </h1>
              <p className="mt-8 mb-3 text-[#979797] text-sm ">
                Buy and sell NFTs with ease using integrated wallet support and{" "}
                <br /> secure smart contracts, ensuring transparency and trust
                in every <br /> transaction.
              </p>
              <p className="mt-3 mb-10 text-[#979797] text-sm ">
                Leverage Web3Go's intuitive tools to create and mint your own
                NFTs, <br />
                allowing artists and creators to showcase their work to a global{" "}
                <br /> audience ensuring transparency and trust.
              </p>
            </div>
            <div className=" mt-5 ">
              <button className="text-white rounded-4xl text-sm border-[#434345]  border-1 px-5 py-2">
                Learn More
              </button>
            </div>
          </div>
          {/* Right Div  */}
          <div className=" rounded-2xl border-0">
            <div className=" mt-5 ">
              <img
                className="border-1 border-[#434345] h-130 w-100 rounded-4xl"
                src="/Screenshot 2025-06-07 at 20.45.42.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Setion 6  */}
      <div className="bg-[#151515] py-10 ">
        <div className=" mx-auto  max-w-6xl flex flex-col justify-center  items-center sm:flex-row gap-x-50">
          {/* Left Div  */}
          <div className=" rounded-2xl border-0">
            <div className=" mt-5 ">
              <img
                className="border-1 border-[#434345] h-120 w-100 rounded-4xl"
                src="/Screenshot 2025-06-07 at 20.49.29.png"
                alt=""
              />
            </div>
          </div>
          {/* Right Div  */}

          <div className=" mt-5 ">
            <div className="">
              <h1 className="text-3xl text-white ">
                Seamless Multi- <br /> Chain Integration
              </h1>
              <p className="mt-4 mb-9 text-[#979797] text-sm ">
                Enhance security and trust by leveraging the strenghts.
              </p>
              <div className="flex items-center gap-x-3 ">
                <img
                  className=" space-y-6 h-5 w-5"
                  src="/Screenshot 2025-06-07 at 21.04.52.png"
                  alt=""
                />
                <p className=" text-[#979797] text-sm ">
                  Manage your digital identity securely with decentralized{" "}
                  <br /> identifiers (DIDs), ensuring.
                </p>
              </div>
              <div className="flex  items-center gap-x-3 ">
                <img
                  className=" space-y-6 h-5 w-5"
                  src="/Screenshot 2025-06-07 at 21.04.52.png"
                  alt=""
                />
                <p className="mt-3  text-[#979797] text-sm ">
                  Benefit from robust encryption techniques that safeguard your{" "}
                  <br /> data and transactions.
                </p>
              </div>
              <div className="flex  items-center gap-x-3 ">
                <img
                  className=" space-y-6 h-5 w-5"
                  src="/Screenshot 2025-06-07 at 21.04.52.png"
                  alt=""
                />
                <p className="mt-3  text-[#979797] text-sm ">
                  Explore Web3 applications and services with confidence, <br />{" "}
                  knowing that your online activities.
                </p>
              </div>
            </div>
            <div className=" mt-10 ">
              <button className="text-white rounded-4xl text-sm border-[#434345]  border-1 px-5 py-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7  */}

      <div className="bg-[#151515] py-10 ">
        <div className="mx-auto  max-w-6xl flex flex-col justify-center items-center   ">
          <h1 className=" text-1xl font-bold bg-gradient-to-r from-blue-900 to-green-400 bg-clip-text text-transparent">
            BENEFITS
          </h1>
          <h1 className="text-5xl mt-5 text-white ">
            Web3 revolution with Next3Gen
          </h1>
          <p className="mt-4 text-[#979797] text-sm ">
            Experience the Future of the Internet with Secure and Transparent{" "}
          </p>
          <p className=" text-[#979797] text-sm mb-10 ">
            {" "}
            and Decentralized Solutions
          </p>
        </div>
        <div className="mt-5 mb-5 mx-auto  max-w-6xl flex flex-col justify-center  items-center sm:flex-row space-y-3 gap-x-10">
          <div className="border-[#434345] bg-[#1F2021] shadow-2xs shadow-[#434345] px-8 py-8 rounded-4xl border-1">
            <div className="">
              <div className=" ">
                <img
                  className="h-40 w-40 "
                  src="/Screenshot 2025-06-07 at 21.45.19.png"
                  alt=""
                />
              </div>
              <h1 className=" text-1xl font-bold text-white">
                Decentralized Future
              </h1>

              <p className="mt-7 text-[#979797] text-sm mb-10">
                Eliminate intermediaries and third parties, <br /> allowing you
                to and interact with your <br /> resources transparently.
              </p>
              <h1 className=" text-1xl font-bold text-white">Learn More </h1>
            </div>
          </div>
          <div className="border-[#434345] bg-[#1F2021] shadow-2xs shadow-[#434345] px-8 py-8 rounded-4xl border-1">
            <div className="">
              <div className=" ">
                <img
                  className="h-40 w-40 "
                  src="/Screenshot 2025-06-07 at 21.45.27.png"
                  alt=""
                />
              </div>
              <h1 className=" text-1xl font-bold text-white">
                Pioneers in the Web3 Space
              </h1>

              <p className="mt-7 text-[#979797] text-sm mb-10">
                Bypass intermediaries, directly to his in <br /> handling and
                interacting with your resources <br /> transparently.
              </p>
              <h1 className=" text-1xl font-bold text-white">Learn More </h1>
            </div>
          </div>
          <div className="border-[#434345] bg-[#1F2021] shadow-2xs shadow-[#434345] px-8 py-8 rounded-4xl border-1">
            <div className="">
              <div className=" ">
                <img
                  className="h-40 w-40 "
                  src="/Screenshot 2025-06-07 at 21.45.35.png"
                  alt=""
                />
              </div>
              <h1 className=" text-1xl font-bold text-white">
                Transparency, and Community
              </h1>

              <p className="mt-7 text-[#979797] text-sm mb-10">
                Exclude intermediaries, facilitating <br /> transparent,
                hands-on resource allowing <br /> direct and clear management.
              </p>
              <h1 className=" text-1xl font-bold text-white">Learn More </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 8  */}
      <div className="bg-[url(/gbo-WyXuSQMDt1c-unsplash.jpg)] bg-contain py-10 ">
        <div className="mx-auto  max-w-6xl flex flex-col justify-center items-center   ">
          <h1 className=" text-1xl font-bold bg-gradient-to-r from-blue-900 to-green-400 bg-clip-text text-transparent">
            DECENTRALIZED FUTURE
          </h1>
          <h1 className="text-5xl mt-5 text-white ">
            The next generation of the internet
          </h1>
          <p className="mt-4 text-[#979797] text-sm ">
            Experience the Future of the Internet with Secure and Transparent{" "}
          </p>
          <p className=" text-[#979797] text-sm mb-10 ">
            {" "}
            and Decentralized Solutions
          </p>
        </div>
        <div className="mt-5 mb-5 mx-auto  max-w-6xl flex flex-col justify-center  items-center sm:flex-row  gap-x-10">
          <div className="">
            <div className="">
              <div className=" ">
                <img
                  className=" "
                  src="/Screenshot 2025-06-07 at 22.08.30.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
