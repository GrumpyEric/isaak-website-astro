import {
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaTwitter,
  FaSpotify,
  FaPatreon,
  FaShop,
  FaHouse,
  FaCalendarPlus,
  FaHammer,
} from "react-icons/fa6";
import { useState, useEffect } from "react";

export const NavbarHeader = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 1) {
        setAnimateHeader(true);
      } else {
        setAnimateHeader(false);
      }
    };

    console.log(window.scrollY);

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={`w-full z-40 bg-opacity-100 fixed top-0 grid-cols-3 flex flex-row mobile:justify-center desktop:justify-between items-center desktop:px-[6vb] mobile:px-1/16 desktop:h-[8vb] mobile:h-[7.5vb] 
      backdrop-filter backdrop-blur-lg transition ease-in-out duration-200 ${
        animateHeader ? "shadow-2xl bg-accent bg-opacity-50" : "bg-accent"
      }`}
    >
      <div className="flex flex-row gap-5 mobile:hidden justify-start desktop:w-[40%]">
        <p
          className={`flex justify-center items-center gap-4 text-[1.6vb] desktop-lg:text-[1.5vb] transition ease-in-out duration-200
            ${animateHeader ? "text-text" : "text-white"}`}
        >
          <FaHammer />
          Site under construction
        </p>
        {/* <div className="flex gap-2 items-center">
          <a
            // nav buttons
            // variant="text"
            // startIcon={<Home />}
            href="/"
            className={`text-[2vb] desktop-lg:text-[1.75vb] transition ease-in-out duration-200
            ${
              animateHeader
                ? "text-text hover:text-white"
                : "text-white hover:text-text"
            }`}
          >
            Home
          </a>
        </div>

        <div className="flex gap-2 items-center">
          <a
            // variant="text"
            // startIcon={<Store />}
            href="shop"
            className={`text-[2vb] desktop-lg:text-[1.75vb] transition ease-in-out duration-200
            ${
              animateHeader
                ? "text-text hover:text-white"
                : "text-white hover:text-text"
            }`}
          >
            Shop
          </a>
        </div> */}
      </div>

      <div className="flex justify-center desktop:w-[20%]">
        <a
          // header title
          className={`text-[5vb] desktop-lg:text-[4.5vb] font-osaka font-medium transition ease-linear duration-200
            ${
              animateHeader
                ? "text-text hover:text-white"
                : "text-white hover:text-text"
            }`}
          href="/"
        >
          Isekku
        </a>
      </div>

      <div className="flex flex-row items-center gap-[5vb] mobile:hidden justify-end desktop:w-[40%]">
        <div className="flex flex-row flex-wrap gap-[1vb]">
          <a
            // social icons
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.5vb] p-[0.5vb] 
                ${
                  animateHeader
                    ? "text-text hover:text-white"
                    : "text-white hover:text-text"
                }
              `}
            href="https://open.spotify.com/intl-de/artist/3L8Rwqoo75Sx8LtX4QPyxz?si=REGwxvCpRt6OlwuGCn3zNw"
            target="_blank"
          >
            <FaSpotify />
          </a>

          <a
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.5vb] p-[0.5vb] 
                ${
                  animateHeader
                    ? "text-text hover:text-white"
                    : "text-white hover:text-text"
                }
              `}
            href="https://www.patreon.com/Isekku"
            target="_blank"
          >
            <FaPatreon />
          </a>

          <a
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.5vb] p-[0.5vb] 
                ${
                  animateHeader
                    ? "text-text hover:text-white"
                    : "text-white hover:text-text"
                }
              `}
            href="https://www.instagram.com/isekku/"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.5vb] p-[0.5vb] 
                ${
                  animateHeader
                    ? "text-text hover:text-white"
                    : "text-white hover:text-text"
                }
              `}
            href="https://www.youtube.com/channel/UCgmueJwQXSEFmaIpoE5i0-A"
            target="_blank"
          >
            <FaYoutube />
          </a>

          <a
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.5vb] p-[0.5vb] 
                ${
                  animateHeader
                    ? "text-text hover:text-white"
                    : "text-white hover:text-text"
                }
              `}
            href="https://www.twitch.tv/isekku"
            target="_blank"
          >
            <FaTwitch />
          </a>

          <a
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.5vb] p-[0.5vb] 
                ${
                  animateHeader
                    ? "text-text hover:text-white"
                    : "text-white hover:text-text"
                }
              `}
            href="https://twitter.com/YTIsekku"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </div>

        <a
          // appointment button
          className={`flex items-center gap-2 border-2 rounded-md p-2 transition ease-in-out duration-200 text-[1.75vb] desktop-lg:text-[1.5vb]
          ${
            animateHeader
              ? "text-text hover:text-white border-text hover:bg-text"
              : "text-white hover:text-text border-white hover:bg-white"
          }`}
          href=""
        >
          <FaCalendarPlus />
          Schedule appointment
        </a>
      </div>
    </header>
  );
};
