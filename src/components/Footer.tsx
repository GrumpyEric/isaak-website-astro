import { FaMessage, FaPhone, FaInstagram, FaYoutube, FaTwitch, FaTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-accent w-full desktop:py-10 mobile:py-1/16 desktop:px-20 mobile:px-1/16 bottom-0">
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="flex flex-1 flex-col items-center justify-start text-white pb-10 border-b-2 gap-2">
          <h1 className="text-3xl">Contact</h1>
          <ul className="flex flex-col items-start">
            <li>
              <a href="mailto:isekku@gmail.com" target="_blank" className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center">
                <FaMessage></FaMessage>
                Email: isekku@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+49 176 12345678" target="_blank" className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center">
                <FaPhone></FaPhone>
                Phone: +49 176 12345678
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col items-center justify-start text-white pb-10 border-b-2">
          <p className="desktop:text-5xl mobile:text-3xl font-osaka font-medium">
            Isekku
          </p> 
        </div>

        <div className="flex flex-1 flex-col items-center justify-start text-white pb-10 border-b-2 gap-2">
          <h1 className="text-3xl">Socials</h1>
          <ul className="flex flex-col items-start">
            <li>
              <a href="https://www.instagram.com/isekku/" target="_blank" className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center">
                <FaInstagram></FaInstagram>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCgmueJwQXSEFmaIpoE5i0-A" target="_blank" className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center">
                <FaYoutube></FaYoutube>
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/isekku" target="_blank" className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center">
                <FaTwitch></FaTwitch>
                Twitch
              </a>
            </li>
            <li>
              <a href="https://twitter.com/YTIsekku" target="_blank" className="transition ease-in-out duration-200 hover:text-black flex flex-1 flex-row gap-2 justify-center items-center">
                <FaTwitter></FaTwitter>
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col items-start justify-center text-white">
          <p>Rechtliches</p>
          <p>Impressum</p>
          <p>Datenschutzerklärung</p>
          <p>Blablabla rights reserved</p>
        </div>
      </div>


    </footer>
  )
}
