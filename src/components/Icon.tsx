"use client"

// import { FaAccessibleIcon } from 'react-icons/fa6'

export interface socialsIconProps {
  icon: string
  size: number
  animateHeader: boolean,
  className?: string
}

export default function Icon({ icon = "", size = 30, animateHeader = true, className }: socialsIconProps) {
  return (
    <Icon
      icon={icon}
      size={size}
      animateHeader={animateHeader}
      className={className}
    ></Icon>
  )
}