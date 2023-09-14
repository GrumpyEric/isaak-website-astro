export enum IconsEnums {
  Instagram = "FaInstagram",
  Youtube = "FaYoutube",
  Twitch = "FaTwitch",
  Twitter = "FaTwitter",
  Calendar = "FaCalendarPlus",
}

export interface IconProps {
  icon: IconsEnums
  size: number
  animate: boolean,
  className?: string
}