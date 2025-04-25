import Link from "next/link";
import DivMaster from "../MasterDiv";
import Image from "next/image";
import Drawer from "../Drawer";

type route = {
  text: string;
  route: string;
};

const routes: route[] = [
  {
    text: "INÍCIO",
    route: "/",
  },
  {
    text: "A DIFOCCUS",
    route: "/sobre-a-difoccus",
  },
  {
    text: "SERVIÇOS",
    route: "/",
  },
  {
    text: "MÍDIAS",
    route: "/",
  },
  {
    text: "PROTAL DO FORMANADO",
    route: "/",
  },
  {
    text: "TV DIFOCCUS",
    route: "/",
  },
  {
    text: "FALE CONOSCO",
    route: "/",
  },
  {
    text: "INSTAGRAM",
    route: "/",
  },
];

export default function Header() {
  return (
    <DivMaster>
      <div className="flex gap-10 h-20 items-center justify-between">
        <Image
          src="/big-logo.png"
          alt="Next.js logo"
          width={216}
          height={30}
          priority
        />
        <div className="flex gap-4 flex-wrap">
          {routes.map((route) => {
            return (
              <div key={route.text} className="flex items-center gap-4">
                <Link
                  className="text-nowrap text-xs relative transform
                              transition-all duration-300 rounded-full hover:bg-[#2e3257] hover:scale-110"
                  href={route.route}
                >
                  {route.text}
                </Link>
              </div>
            );
          })}
        </div>
        <Drawer />
      </div>
    </DivMaster>
  );
}
