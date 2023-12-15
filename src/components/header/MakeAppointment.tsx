import { FaCalendarPlus } from "react-icons/fa6";

type Props = {
  animateHeader: boolean;
};

export function MakeAppointment({ animateHeader }: Props) {
  return (
    <a
      id="appointment"
      className={`text-text text-[2vb] desktop-lg:text-[1.75vb] whitespace-nowrap flex flex-row items-center gap-2 border-[0.2vb] rounded-[0.6vb] p-[1vb] transition ease-in-out duration-200
        ${
          animateHeader
            ? "text-text hover:text-white border-text hover:bg-text"
            : "text-white hover:text-text border-white hover:bg-white"
        }
      `}
      href=""
    >
      <FaCalendarPlus className="text-[3vb] desktop-lg:text-[2.625vb]"></FaCalendarPlus>
      Schedule appointment
    </a>
  );
}
