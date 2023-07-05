import { Inter } from "next/font/google";
import { useState } from "react";

import DnDBoard from "@/components/DnDBoard";
import MobileApp from "@/components/MobileApp";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = useState<boolean>(true);
  const [mobile, setMobile] = useState<boolean>(false);
  return (
    <div className="w-screen h-screen overflow-y-scroll   flex relative  bg-default ">
      <div
        className={`hidden overflow-y-scroll overflow-x-hidden lg:inline-block  ${open ? "w-72" : "w-0 opacity-0"
          }  h-[100%] duration-500`}
      >
        <Sidebar
          open={open}
          setOpen={setOpen}
          mobile={mobile}
          setMobile={setMobile}
        />
      </div>
      {/* Mobile Sidebar-start */}
      <div
        className={`z-20  w-[100%] overflow-y-scroll overflow-x-hidden  absolute h-[100%]  ease-in-out duration-500 ${mobile
          ? "top-0 left-[0%] w-[80%] sm:w-[60%]  md:w-[40%]"
          : " top-0 -left-full"
          } `}
      >
        <Sidebar
          open={open}
          setOpen={setOpen}
          mobile={mobile}
          setMobile={setMobile}
        />
      </div>
      {mobile && (
        <div
          className="w-screen ease-in-out duration-500 h-screen z-10 absolute bg-opacity-70  bg-borderColor "
          onClick={() => setMobile(false)}
        ></div>
      )}
      {/* Mobile Sidebar-end */}
      <div className="w-[100%] h-[100%]   overflow-y-scroll overflow-x-hidden ">
        <Navbar
          open={open}
          setOpen={setOpen}
          mobile={mobile}
          setMobile={setMobile}
        />
        <MobileApp />
        <DnDBoard />
      </div>
    </div>
  );
}
