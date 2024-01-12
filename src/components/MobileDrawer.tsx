import React from "react";
import { Fab, SwipeableDrawer } from "@mui/material";

export const MobileDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <>
      <Fab
        size="large"
        className="fixed desktop:hidden bottom-[5%] right-[5%] bg-white border-2 border-white"
        onClick={() => setOpenDrawer(true)}
      >
        Menu
      </Fab>
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        Drawer
      </SwipeableDrawer>
    </>
  );
};
