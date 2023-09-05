"use client"

import Icon from './Icons'
import { socialsIconsEnums } from './constants/enums/iconEnums'

type socialsIconProps = {
  icon: socialsIconsEnums
  link: string
}

export default function SocialsIcon({ icon, link }: socialsIconProps) {
  return (
    <a href={link} target="_blank">
      <Icon
        icon={icon}
        size={30}
        animateHeader={true}
      />
    </a>
  )
}