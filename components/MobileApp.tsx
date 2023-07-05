import { Icons, Images } from "@/utils";
import Image from "next/image";
import React from "react";

const MobileApp = () => {
    return (
        <div className="px-4 md:px-6 lg:px-9 py-6 md:py-6 lg:py-9 flex flex-col gap-6 md:gap-9  ">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 ">
                {/* MobileApp section */}
                <div className="flex flex-1  items-center gap-4 ">
                    <h1 className="text-Heading text-3xl  sm:text-3xl md:text-5xl   font-semibold ">
                        Mobile App
                    </h1>
                    <div className="flex gap-2 items-center ">
                        <Image src={Icons.EDIT_ICON} className=" w-6 h-6" alt="edit_icon" />
                        <Image src={Icons.LINK} className=" w-6 h-6  " alt="link_icon" />
                    </div>
                </div>
                <div className="flex   gap-2 items-center">
                    <div className="flex gap-2 items-center">
                        <Image
                            src={Icons.BLUE_ADD_SQUARE}
                            className="w-4 h-4"
                            alt="BLUE_ADD_SQUARE"
                        />
                        <span className="text-hoverBg text-sm font-medium">Invite</span>
                    </div>
                    <div className="flex ">
                        <Image
                            src={Images.BOY1_IMAGE}
                            className="-mr-2 "
                            alt="BOY1_IMAGE"
                        />
                        <Image
                            src={Images.GIRL2_IMAGE}
                            className="-mr-2"
                            alt="BOY1_IMAGE"
                        />
                        <Image src={Images.BOY2_IMAGE} className="-mr-2" alt="BOY1_IMAGE" />
                        <Image src={Images.BOY3_IMAGE} className="-mr-2" alt="BOY1_IMAGE" />
                        <div className="bg-PLUS2IMAGE_BG w-10 h-10 flex items-center justify-center rounded-full">
                            <span className="text-PLUS2IMAGE_TEXT">+2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-2">
                {/* filter section */}

                <div className="flex gap-3">
                    {/* filter button  */}

                    <button className="outline-none px-1 md:px-4  md:py-1.5 flex items-center gap-2 border border-Typography rounded-md">
                        <Image src={Icons.FILTER} className="" alt="filter " />
                        <span
                            className="text-md hidden md:flex font-medium text-Typography
            "
                        >
                            Filter
                        </span>
                        <Image
                            src={Icons.ARROW_DOWN}
                            className="text-Typography  opacity-70"
                            alt="filter "
                        />
                    </button>
                    <button className="outline-none px-1 md:px-4 py-1.5 flex items-center gap-2 border border-Typography rounded-md">
                        <Image src={Icons.FILTER_CALENDER} className="" alt="filter " />
                        <span
                            className="text-md hidden md:flex font-medium text-Typography
            "
                        >
                            Today
                        </span>
                        <Image
                            src={Icons.ARROW_DOWN}
                            className="text-Typography opacity-70 "
                            alt="filter "
                        />
                    </button>
                </div>

                {/* right container */}
                <div className="flex items-center gap-4">
                    <button className="outline-none px-4 py-1.5 flex items-center gap-2 border border-Typography rounded-md">
                        <Image src={Icons.MEMBERS} className="" alt="filter " />
                        <span
                            className="text-md hidden md:flex font-medium text-Typography
            "
                        >
                            Share
                        </span>
                    </button>
                    <span className="w-0.5 h-6 bg-Typography"></span>
                    <Image
                        src={Icons.FILTER_BLUEBTN}
                        alt="FILTER_BLUEBTN"
                        className="h-9 w-9"
                    />
                    <Image
                        src={Icons.FILTER_MENU}
                        alt="FILTER_MENU"
                        className="h-6 w-6"
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;
