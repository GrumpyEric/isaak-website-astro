import { Drawer } from "@mui/material";
import React from "react";

export const MobileDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <>
      {!openDrawer ? (
        <button
          className="fixed z-10 bottom-[7.5%] right-[7.5%] bg-white focus:opacity-75 w-[7.5svh] h-[7.5svh] rounded-[50%]"
          onClick={() => setOpenDrawer(true)}
        >
          Menu
        </button>
      ) : null}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        my drawer
      </Drawer>
    </>
  );
};
