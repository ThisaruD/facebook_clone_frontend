import React from 'react';
import Image from "next/image";
import {ImUsers} from "react-icons/im";
import SidebarItems from "./SidebarItems";
import {MdGroups,MdOutlineOndemandVideo,MdOutlineExpandMore} from "react-icons/md";
import {AiOutlineShop} from "react-icons/ai";
import {BsStopwatch} from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
           <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
               <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
                      height={40}
                      width={40}
                      className="rounded-full cursor-pointer"
               />
               <p className="hidded sm:inline-flex font-medium">Thisaru Dilshan</p>
           </div>
                <SidebarItems Icon={ImUsers} value="Friends"/>
                <SidebarItems Icon={MdGroups} value="Groups"/>
                <SidebarItems Icon={AiOutlineShop} value="Marketplace"/>
            <SidebarItems Icon={MdOutlineOndemandVideo} value="Watch"/>
            <SidebarItems Icon={BsStopwatch} value="Memories"/>
            <SidebarItems Icon={MdOutlineExpandMore} value="See More"/>
        </div>
    );
};

export default Sidebar;