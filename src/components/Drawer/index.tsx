"use client";
import { routes } from "@/constants/mockHeader";
import {
  Box,
  Drawer as DawerComp,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { HamburgerMenu } from "iconsax-reactjs";
import Link from "next/link";
import { useState } from "react";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  console.log("TCL: Drawer -> open", open);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {routes.map((route, index: number) => (
          <Link
            href={route.route}
            key={index}
            className="text-nowrap relative transform text-[#0bac20]
                       transition-all duration-300 rounded-full hover:scale-110 hover:text-[#79d483]"
          >
            <ListItem disablePadding>
              <ListItemButton component={Link} href={route.route}>
                {route.text}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen(true)} className="">
        <HamburgerMenu size="32" color="#0bac20" />
      </button>

      <DawerComp
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        className="bg-[#000000570]"
      >
        <div className="bg-[#131524] min-h-dvh p-0">
          <div className="flex gap-4 flex-wrap">{DrawerList}</div>
        </div>
      </DawerComp>
    </div>
  );
};
export default Drawer;
