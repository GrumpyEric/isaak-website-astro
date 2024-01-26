import React from "react";

export const MobileDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <React.Fragment>
      <button
        className="fixed z-10 desktop:hidden bottom-[7.5%] right-[7.5%] bg-white focus:opacity-75 w-[7.5svh] h-[7.5svh] rounded-[50%]"
        onClick={() => setOpenDrawer(true)}
      >
        Menu
      </button>
      {/* <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onOpen={() => setOpenDrawer(false)}
        onClose={() => setOpenDrawer(false)}
      >
        hello
      </SwipeableDrawer> */}
    </React.Fragment>
  );
};
