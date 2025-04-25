"use client";

import { useState } from "react";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  console.log("TCL: Drawer -> open", open);
  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Clique me
      </button>
      <div
        className={`${
          open ? "absolute top-0 right-0 bg-red-600 w-36" : "hidden"
        }`}
      >
        <h1>TEfa</h1>
      </div>
    </>
  );
};
export default Drawer;
