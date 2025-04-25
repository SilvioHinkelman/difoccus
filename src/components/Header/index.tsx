import Link from "next/link";
import DivMaster from "../MasterDiv";
import Image from "next/image";
import Drawer from "../Drawer";
import { routes } from "@/constants/mockHeader";

export default function Header() {
  return (
    <DivMaster className="border-b-2 border-[#281c52]">
      <div className="flex gap-8 h-20 items-center justify-between ">
        <Image
          src="/big-logo.png"
          alt="Next.js logo"
          width={216}
          height={30}
          priority
          className="w-[180px] h-[26px]"
        />
        <div className="flex gap-4 flex-wrap">
          {routes.map((route) => {
            return (
              <div key={route.text} className="flex items-center gap-4">
                <Link
                  className="text-nowrap text-xs relative transform text-[#0bac20]
                              transition-all duration-300 rounded-full hover:scale-110 hover:text-[#79d483] 
                              hidden lg:block"
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
