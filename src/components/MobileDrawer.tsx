import React from "react";

export const MobileDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <button
      className="fixed z-10 desktop:hidden bottom-[5%] right-[5%] bg-white border-2 border-white"
      onClick={() => console.log("hehehe")}
    >
      Menu
    </button>
  );
};
