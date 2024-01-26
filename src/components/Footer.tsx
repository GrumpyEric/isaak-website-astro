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
console.log(currentYear);

export function Footer() {
  return (
    <footer className="bg-accent w-full desktop:py-10 mobile:py-1/16 desktop:px-20 mobile:px-1/16 bottom-0">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex flex-1 flex-col items-center gap-2 text-white">
          <p className="desktop:text-6xl mobile:text-4xl font-osaka font-medium">
            Isekku
          </p>
          <p className="desktop:text-xl mobile:text-xs">
            {"Copyright © "}
            {currentYear}
            {" Isaak Michailoglou"}
          </p>
        </div>

        <div className="flex flex-1 justify-center gap-8 text-white">
          <p className="desktop:text-xl mobile:text-xs">Legal Stuff</p>

          <p className="desktop:text-xl mobile:text-xs">Privacy Policy</p>
          <p className="desktop:text-xl mobile:text-xs">Security</p>
        </div>

        <ul className="flex flex-1 justify-center gap-8 text-white desktop:text-2xl mobile:text-xl">
          <li>
            <a
              href="https://open.spotify.com/intl-de/artist/3L8Rwqoo75Sx8LtX4QPyxz?si=REGwxvCpRt6OlwuGCn3zNw"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center"
            >
              <FaSpotify></FaSpotify>
            </a>
          </li>

          <li>
            <a
              href=""
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center"
            >
              <FaPatreon></FaPatreon>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/isekku/"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center"
            >
              <FaInstagram></FaInstagram>
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/channel/UCgmueJwQXSEFmaIpoE5i0-A"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center"
            >
              <FaYoutube></FaYoutube>
            </a>
          </li>

          <li>
            <a
              href="https://www.twitch.tv/isekku"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center"
            >
              <FaTwitch></FaTwitch>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/YTIsekku"
              target="_blank"
              className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center"
            >
              <FaTwitter></FaTwitter>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
