import { AiOutlineClose, HiMenuAlt3, Icons } from "@/utils";
import { menus, myProjects } from "@/utils/data";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
interface SidebarProps {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    mobile: boolean;
    setMobile: React.Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ mobile, open, setMobile, setOpen }) => {
    const [isActiveProject, setActiveProject] = useState<string>("mobile");

    return (
        <div
            className={` min-h-screen  overflow-y-scroll overflow-x-hidden border-r border-borderColor lg:overflow-auto bg-white w-[100%]  text-gray-900 `}
        >
            {/* sidebar top */}
            <div className="w-full flex  justify-between border-borderColor border-b px-5 py-7">
                <div className="flex  items-center gap-2">
                    <Image width={24} height={24} src={Icons.LOGO_M} alt="Logo" />
                    <p className="font-bold  text-lg   "> Project M.</p>
                </div>
                <Image
                    width={24}
                    height={24}
                    className="cursor-pointer hidden lg:flex"
                    src={Icons.ARROW_BACK}
                    alt="ARROW_BACK"
                    onClick={() => setOpen(false)}
                />
                <AiOutlineClose
                    size={28}
                    className="   lg:hidden cursor-pointer  
            duration-75 hover:scale-95"
                    onClick={() => setMobile(false)}
                />
            </div>
            <div className="mx-3 py-6 border-b border-borderColor">
                <ul className="flex flex-col gap-2">
                    {menus?.map((item, index) => {
                        return (
                            <li
                                key={`${item.name}-${index}`}
                                className="flex hover:bg-[#5030E5] transition-all ease-in-out duration-300 hover:bg-opacity-10  px-2 py-2 cursor-pointer  rounded-md  items-center gap-3"
                            >
                                <Image
                                    className=" "
                                    width={24}
                                    height={24}
                                    src={item.icon}
                                    alt={item.name}
                                />
                                <p className="text-md font-medium  text-Typography ">
                                    {item.name}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="mx-3 py-6 flex flex-col gap-3">
                <div className="flex   items-center justify-between ">
                    <p className="text-xs mx-2  font-bold  text-Typography">
                        MY PROJECTS
                    </p>
                    <Image className="w-4 h-4" src={Icons.ADD_SQUARE} alt="ADD_SQUARE" />
                </div>
                <ul className="flex flex-col gap-2">
                    {myProjects?.map((item, index) => {
                        return (
                            <li
                                key={`${item.name}-${index}`}
                                className={` transition-all ease-in-out duration-300 ${isActiveProject === item.link
                                    ? "bg-hoverBg bg-opacity-10 text-Heading "
                                    : "text-Typography"
                                    } flex hover:bg-hoverBg hover:bg-opacity-10 hover:text-Heading hover:font-semibold relative   px-2 py-2 cursor-pointer  rounded-md  items-center gap-3`}
                            >
                                <p
                                    className={`w-2 h-2 rounded-full `}
                                    style={{ backgroundColor: `#${item.color}` }}
                                ></p>
                                <p
                                    className={`${isActiveProject === item.link
                                        ? " font-semibold "
                                        : " font-medium "
                                        }text-md     `}
                                >
                                    {item.name}
                                </p>
                                {isActiveProject === item.link && (
                                    <Image
                                        src={Icons.THREE_DOT}
                                        className="w-4 h-1 absolute right-3  "
                                        alt="three dots"
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div
                className="mx-3 p-6 my-12 flex flex-col gap-3 items-center relative rounded-xl bg-blubBgColor
       "
            >
                {/* radical bg color  */}
                <div className=" w-16 h-16 bg-blubBgColor flex items-center justify-center absolute -top-[15%]   rounded-full ">
                    <div className=" w-full h-full flex items-center justify-center bg-gradient-to-br from-bulbGradient to-transparent rounded-full  bg-opacity-5   ">
                        <Image src={Icons.LAMP_ON} alt="LAMP_ON" className=" " />
                    </div>
                </div>
                <h1 className="text-Heading font-medium mt-3">Thoughts Time</h1>
                <p className="text-xs text-Typography text-center">
                    We don’t have any notice for you, till then you can share your
                    thoughts with your peers.
                </p>
                <button className="w-full py-2 outline-none rounded-md border-none hover:bg-[#5030E5] transition-all ease-in-out duration-300 hover:bg-opacity-10  bg-white text-Heading text-md font-medium">
                    Write a message
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
