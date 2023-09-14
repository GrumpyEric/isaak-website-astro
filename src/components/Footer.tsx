export default function Footer() {
  return (
    <footer className="bg-accent w-full desktop:py-10 mobile:py-1/16 desktop:px-20 mobile:px-1/16 bottom-0">
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="flex flex-1 flex-col items-center justify-start text-white pb-10 border-b-2 gap-2">
          <h1 className="text-3xl">Contact</h1>
          <ul>
            <li>isekku@gmail.com</li>
            <li>+49 176 12345678</li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-white pb-10 border-b-2">
          <img
            alt="Isekku sketch"
            src="/images/wow.gif"
            class="w-[7.5vb] object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col items-center justify-start text-white pb-10 border-b-2 gap-2">
          <h1 className="text-3xl">Socials</h1>
          <ul>
            <li>
              <a href="https://www.instagram.com/isekku/">Instagram</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCgmueJwQXSEFmaIpoE5i0-A">Youtube</a>
            </li>
            <li>
              <a href="https://www.twitch.tv/isekku">Twitch</a>
            </li>
            <li>
              <a href="https://twitter.com/YTIsekku">Twitter</a>
            </li>
          </ul>
        </div>


        <div className="flex flex-1 items-center justify-start text-white text-3xl">
          legal mumbo jumbo
        </div>
      </div>


    </footer>
  )
}
