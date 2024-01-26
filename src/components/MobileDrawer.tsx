import React from "react";

export const MobileDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <button
      className="fixed z-10 desktop:hidden bottom-[5%] right-[5%] bg-white focus:opacity-75 w-[7.5svh] h-[7.5svh] rounded-[50%]"
      onClick={() => console.log("hehehe")}
    >
      Menu
    </button>
  );
};
