type Props = {
  animateHeader: boolean;
  href: string;
  title: string;
};

export function LinkDesktop({ animateHeader, href, title }: Props) {
  return (
    <a
      className={`text-[2vb] desktop-lg:text-[1.75vb] transition ease-in-out duration-200
        ${
          animateHeader
            ? "text-text hover:text-white"
            : "text-white hover:text-text"
        }
      `}
      href={href}
    >
      {title}
    </a>
  );
}
