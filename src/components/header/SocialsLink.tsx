import CustomIcon from "../CustomIcon"

type Props = {
  href: string
  animateHeader: boolean
}

function SocialsLink({ href, animateHeader }: Props) {
  return (
    <a href={href} target="_blank">
      <CustomIcon
        src="/images/icons/instagram.svg"
        className={`transition ease-in-out duration-200 hover:-translate-y-1 text-[3vb] desktop-lg:text-[2.625vb]
          ${
            animateHeader 
              ? 'text-text hover:text-white'
              : 'text-white hover:text-text'
          }
        `}
      />
    </a>
  )
}

export default SocialsLink