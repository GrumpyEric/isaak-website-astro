import { FaInstagram, FaYoutube, FaTwitch, FaTwitter, FaCalendarPlus } from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
import { useState, useEffect } from 'react'

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
     flex flex-row mobile:justify-center desktop:justify-between items-center desktop:px-20 mobile:px-1/16 sticky top-0 backdrop-filter backdrop-blur-lg transition ease-in-out duration-200 ${
      animateHeader 
        ? 'shadow-2xl bg-accent bg-opacity-50'
        : 'bg-accent'
      }`}
    >
      <div className='mobile:visible desktop:hidden mobile:w-1/3 mobile:flex'>
        <FiMenu 
          size={'4vb'}
          className={`transition ease-in-out duration-200 cursor-pointer
          ${
            animateHeader 
              ? 'text-text hover:text-white'
              : 'text-white hover:text-text'
          }
        `}
        ></FiMenu>
      </div>

      <div className='relative flex flex-row gap-5 desktop:w-1/3 mobile:hidden justify-start'>
        <a 
          className={`text-[2vb] desktop-lg:text-[1.75vb] transition ease-in-out duration-200
            ${
              animateHeader 
                ? 'text-text hover:text-white'
                : 'text-white hover:text-text'
            }
          `} 
          href='/'>Home
        </a>
        <a 
          className={`text-[2vb] desktop-lg:text-[1.75vb] transition ease-in-out duration-200
            ${
              animateHeader 
                ? 'text-text hover:text-white'
                : 'text-white hover:text-text'
            }
          `} 
          href='/blog'>Blog
        </a>
        <a 
          className={`text-[2vb] desktop-lg:text-[1.75vb] transition ease-in-out duration-200
            ${
              animateHeader 
                ? 'text-text hover:text-white'
                : 'text-white hover:text-text'
            }
          `} 
          href='/shop'>Shop
        </a>
      </div>

      <div className='flex mobile:w-1/3 justify-center'>
        <a 
          className={`text-[6vb] desktop-lg:text-[5.25vb] font-osaka font-medium transition ease-linear duration-200
            ${
              animateHeader 
                ? 'text-text hover:text-white'
                : 'text-white hover:text-text'
            }
          `}
          href=''>Isekku
        </a>
      </div>

      <div className='flex flex-row items-center desktop:w-1/3 gap-[5vb] mobile:hidden justify-end'>
        <div className='flex flex-row gap-[2.5vb]'>
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

        <a
          id='appointment' 
          className={`text-text text-[2vb] desktop-lg:text-[1.75vb] whitespace-nowrap flex flex-row items-center gap-2 border-[0.2vb] rounded-[0.6vb] p-[1vb] transition ease-in-out duration-200
            ${
              animateHeader 
                ? 'text-text hover:text-white border-text hover:bg-text'
                : 'text-white hover:text-text border-white hover:bg-white'
            }
          `}
          href=''
        >
          <FaCalendarPlus
            className='text-[3vb] desktop-lg:text-[2.625vb]'
          ></FaCalendarPlus>
          Schedule appointment
        </a>

      </div>

      <div className='mobile:visible desktop:hidden mobile:w-1/3'></div>

    </header>
  )
}
