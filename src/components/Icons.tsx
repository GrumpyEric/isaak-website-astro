"use client"

// import { FaAccessibleIcon } from 'react-icons/fa6'

export interface socialsIconProps {
  name: string
  size?: number
  animateHeader: boolean,
  className?: string
}

export default function Icon({ name = "", size = 30, animateHeader = true, className }: socialsIconProps) {
  return (
    <Icon
      size={size}
      animateHeader={animateHeader}
      className={className}
    ></Icon>
  )
}