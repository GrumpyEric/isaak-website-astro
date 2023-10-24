import { FaInstagram, FaYoutube, FaTwitch, FaTwitter, FaSpotify } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import BurgerMenu from './BurgerMenu'
import LinkDesktop from './LinkDesktop'
import HeaderTitle from './HeaderTitle'
import MakeAppointment from './MakeAppointment'
import CustomIcon from '../CustomIcon'
import SocialsLink from './SocialsLink'

export default function NavbarHeader() {
  const [animateHeader, setAnimateHeader] = useState(false)

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 1) {
        setAnimateHeader(true)
      
      } else {
        setAnimateHeader(false)
      }
    }

    window.addEventListener("scroll", listener)

    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [])

  return (
    <header className={`w-full z-40 bg-opacity-100 
     flex flex-row mobile:justify-center desktop:justify-between items-center desktop:px-[8vb] mobile:px-1/16 desktop:h-[8vb] mobile:h-[7.5vb] sticky top-0 backdrop-filter backdrop-blur-lg transition ease-in-out duration-200 ${
      animateHeader 
        ? 'shadow-2xl bg-accent bg-opacity-50'
        : 'bg-accent'
      }`}
    >

      <BurgerMenu animateHeader={animateHeader}/>

      <div className='relative flex flex-row gap-5 desktop:w-1/3 mobile:hidden justify-start'>
        <LinkDesktop animateHeader={animateHeader} href='/' title='Home'/>
        <LinkDesktop animateHeader={animateHeader} href='/blog' title='Blog'/>
        <LinkDesktop animateHeader={animateHeader} href='/shop' title='Shop'/>
      </div>

      <div className='flex mobile:w-1/3 justify-center'>
        <HeaderTitle animateHeader={animateHeader}/>
      </div>

      <div className='flex flex-row items-center desktop:w-1/3 gap-[5vb] mobile:hidden justify-end'>
        <div className='flex flex-row gap-[2.5vb]'>

          {/* <SocialsLink href='https://www.instagram.com/isekku/' animateHeader={animateHeader}/> */}
          <a href='https://open.spotify.com/intl-de/artist/3L8Rwqoo75Sx8LtX4QPyxz?si=REGwxvCpRt6OlwuGCn3zNw' target="_blank">
            <FaSpotify 
              className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
                ${
                  animateHeader 
                    ? 'text-text hover:text-white'
                    : 'text-white hover:text-text'
                }
              `}
            ></FaSpotify>
          </a>
          <a href='https://www.instagram.com/isekku/' target="_blank">
            <FaInstagram 
              className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
                ${
                  animateHeader 
                    ? 'text-text hover:text-white'
                    : 'text-white hover:text-text'
                }
              `}
            ></FaInstagram>
          </a>

          <a href='https://www.youtube.com/channel/UCgmueJwQXSEFmaIpoE5i0-A' target="_blank">
            <FaYoutube 
              className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
              ${
                animateHeader 
                  ? 'text-text hover:text-white'
                  : 'text-white hover:text-text'
              }
            `}
            ></FaYoutube>
          </a>

          <a href='https://www.twitch.tv/isekku' target="_blank">
            <FaTwitch 
              className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
                ${
                  animateHeader 
                    ? 'text-text hover:text-white'
                    : 'text-white hover:text-text'
                }
              `}
            ></FaTwitch>
          </a>

          <a href='https://twitter.com/YTIsekku' target="_blank">
            <FaTwitter 
              className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
                ${
                  animateHeader 
                    ? 'text-text hover:text-white'
                    : 'text-white hover:text-text'
                }
              `}
            ></FaTwitter>
          </a>
        </div>

        <MakeAppointment animateHeader={animateHeader}/>

      </div>

      <div className='mobile:visible desktop:hidden mobile:w-1/3'></div>

    </header>
  )
}
