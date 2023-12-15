type Props = {
  animateHeader: boolean;
};

export function HeaderTitle({ animateHeader }: Props) {
  return (
    <a
      className={`text-[6vb] desktop-lg:text-[5.25vb] font-osaka font-medium transition ease-linear duration-200
        ${
          animateHeader
            ? "text-text hover:text-white"
            : "text-white hover:text-text"
        }
      `}
      href="/"
    >
      Isekku
    </a>
  );
}
