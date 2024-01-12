import {
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaTwitter,
  FaSpotify,
  FaShop,
  FaHouse,
  FaPatreon,
} from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import { Home, MoreTime, Store } from "@mui/icons-material";
import { colors } from "./constants/colors";

export default function NavbarHeader() {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 1) {
        setAnimateHeader(true);
      } else {
        setAnimateHeader(false);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={`w-full z-40 bg-opacity-100 sticky top-0 grid-cols-3
      flex flex-row mobile:justify-center desktop:justify-between items-center desktop:px-[6vb] mobile:px-1/16 desktop:h-[8vb] mobile:h-[7.5vb] backdrop-filter backdrop-blur-lg transition ease-in-out duration-200 ${
        animateHeader ? "shadow-2xl bg-accent bg-opacity-50" : "bg-accent"
      }`}
    >
      <div className="flex flex-row gap-5 mobile:hidden justify-start desktop:w-[40%]">
        <div className="flex gap-2 items-center">
          <Button
            // nav buttons
            variant="text"
            startIcon={<Home />}
            className={`text-[2vb] desktop-lg:text-[1.75vb] transition ease-in-out duration-200
            ${
              animateHeader
                ? "text-text hover:text-white"
                : "text-white hover:text-text"
            }`}
          >
            Home
          </Button>
        </div>

        <div className="flex gap-2 items-center">
          <Button
            variant="text"
            startIcon={<Store />}
            className={`text-[2vb] desktop-lg:text-[1.75vb] transition ease-in-out duration-200
            ${
              animateHeader
                ? "text-text hover:text-white"
                : "text-white hover:text-text"
            }`}
          >
            Shop
          </Button>
        </div>
      </div>

      <div className="flex justify-center desktop:w-[20%]">
        <Button
          // header title
          className={`text-[6vb] desktop-lg:text-[5.25vb] font-osaka font-medium transition ease-linear duration-200
            ${
              animateHeader
                ? "text-text hover:text-white"
                : "text-white hover:text-text"
            }`}
          href="/"
        >
          Isekku
        </Button>
      </div>

      <div className="flex flex-row items-center gap-[5vb] mobile:hidden justify-end desktop:w-[40%]">
        <div className="flex flex-row gap-[1vb]">
          <IconButton
            // social icons
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
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
          </IconButton>

          <IconButton
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
                ${
                  animateHeader
                    ? "text-text hover:text-white"
                    : "text-white hover:text-text"
                }
              `}
            href=""
            target="_blank"
          >
            <FaPatreon />
          </IconButton>

          <IconButton
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
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
          </IconButton>

          <IconButton
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
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
          </IconButton>

          <IconButton
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
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
          </IconButton>

          <IconButton
            className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
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
          </IconButton>
        </div>

        <Button
          // appointment button
          variant="outlined"
          size="medium"
          className={`transition ease-in-out duration-200
          ${
            animateHeader
              ? "text-text hover:text-white border-text hover:bg-text"
              : "text-white hover:text-text border-white hover:bg-white"
          }`}
          startIcon={<MoreTime />}
          href=""
          sx={{
            padding: 1,
            ":hover": { borderColor: animateHeader ? colors.text : "white" },
          }}
        >
          Schedule appointment
        </Button>
      </div>
    </header>
  );
}
