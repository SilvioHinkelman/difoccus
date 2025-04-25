"use client";
import { Button, Drawer as DawerComp } from "@mui/material";
import { useState } from "react";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  console.log("TCL: Drawer -> open", open);
  return (
    <div className="p-8">
      <Button variant="contained" onClick={() => setOpen(true)}>
        Abrir Drawer
      </Button>

      <DawerComp anchor="right" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: 250, padding: 20 }}>
          <h2>Conteúdo do Drawer</h2>
          <p>Algum texto aqui dentro.</p>
        </div>
      </DawerComp>
    </div>
  );
};
export default Drawer;
