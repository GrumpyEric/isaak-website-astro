import { SwipeableDrawer } from "@mui/material";
import React from "react";
import {
  FaBars,
  FaInstagram,
  FaPatreon,
  FaSpotify,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const MobileDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <>
      {!openDrawer ? (
        <button
          className="fixed z-10 desktop:hidden bottom-[7.5%] right-[7.5%] bg-white focus:opacity-75 w-[7.5svh] h-[7.5svh] rounded-[50%]"
          onClick={() => setOpenDrawer(true)}
        >
          <FaBars className="m-auto w-[2.5svh] h-[2.5svh]" />
        </button>
      ) : null}
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="flex flex-col bg-accent items-center py-[5%] gap-4">
          <a
            href="/"
            className="text-[2vb] text-white desktop-lg:text-[1.75vb] transition ease-in-out duration-200
            "
          >
            Home
          </a>

          <a
            href="shop"
            className="text-[2vb] text-white desktop-lg:text-[1.75vb] transition ease-in-out duration-200
            "
          >
            Shop
          </a>

          <div className="flex flex-row gap-[6vb]">
            <a
              // social icons
              className="text-white text-[3vb] desktop-lg:text-[2.625vb]"
              href="https://open.spotify.com/intl-de/artist/3L8Rwqoo75Sx8LtX4QPyxz?si=REGwxvCpRt6OlwuGCn3zNw"
              target="_blank"
            >
              <FaSpotify />
            </a>

            <a
              className="text-white text-[3vb] desktop-lg:text-[2.625vb]"
              href=""
              target="_blank"
            >
              <FaPatreon />
            </a>

            <a
              className="text-white text-[3vb] desktop-lg:text-[2.625vb]"
              href="https://www.instagram.com/isekku/"
              target="_blank"
            >
              <FaInstagram />
            </a>

            <a
              className="text-white text-[3vb] desktop-lg:text-[2.625vb]"
              href="https://www.youtube.com/channel/UCgmueJwQXSEFmaIpoE5i0-A"
              target="_blank"
            >
              <FaYoutube />
            </a>

            <a
              className="text-white text-[3vb] desktop-lg:text-[2.625vb]"
              href="https://www.twitch.tv/isekku"
              target="_blank"
            >
              <FaTwitch />
            </a>

            <a
              className="text-white text-[3vb] desktop-lg:text-[2.625vb]"
              href="https://twitter.com/YTIsekku"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};
