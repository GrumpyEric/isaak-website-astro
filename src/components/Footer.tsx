import { getYear } from "date-fns";
import {
  FaMessage,
  FaPhone,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaTwitter,
  FaSpotify,
  FaPatreon,
} from "react-icons/fa6";

const time = new Date();
const currentYear = getYear(time);

export function Footer() {
  return (
    <footer className="bg-accent w-full desktop:py-10 mobile:py-1/16 desktop:px-20 mobile:px-1/16 bottom-0">
      <div className="flex flex-col justify-center gap-[2vb]">
        <div className="flex flex-1 flex-col items-center gap-[0.1vb] text-white">
          <p className="desktop:text-[4.5vb] mobile:text-[4vb] font-osaka font-medium">
            Isekku
          </p>
          <p className="desktop:text-[1.25vb] mobile:text-[1vb]">
            {"Copyright © "}
            {currentYear}
            {" Isaak Michailoglou"}
          </p>
        </div>

        <div className="flex flex-1 justify-center gap-[2vb] text-white desktop:text-[1.5vb] mobile:text-[1.25vb]">
          <p>Legal Stuff</p>

          <p>Privacy Policy</p>
          <p>Security</p>
        </div>

        <ul className="flex flex-1 justify-center gap-[2vb] text-white desktop:text-[2vb] mobile:text-[1.75vb]">
          <li>
            <a
              href="https://open.spotify.com/intl-de/artist/3L8Rwqoo75Sx8LtX4QPyxz?si=REGwxvCpRt6OlwuGCn3zNw"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row justify-center items-center"
            >
              <FaSpotify></FaSpotify>
            </a>
          </li>

          <li>
            <a
              href=""
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row justify-center items-center"
            >
              <FaPatreon></FaPatreon>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/isekku/"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row justify-center items-center"
            >
              <FaInstagram></FaInstagram>
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/channel/UCgmueJwQXSEFmaIpoE5i0-A"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row justify-center items-center"
            >
              <FaYoutube></FaYoutube>
            </a>
          </li>

          <li>
            <a
              href="https://www.twitch.tv/isekku"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row justify-center items-center"
            >
              <FaTwitch></FaTwitch>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/YTIsekku"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row justify-center items-center"
            >
              <FaTwitter></FaTwitter>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
