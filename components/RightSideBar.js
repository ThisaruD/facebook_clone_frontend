import React from 'react';
import {RiVideoAddFill} from "react-icons/ri";
import {BiSearch} from "react-icons/bi";
import {CgMoreAlt} from "react-icons/cg";
import Contacts from "./Contacts";

const RightSideBar = () => {
    return (
        <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
            <div className="flex items-center text-gray-500">
                <p className="flex text-lg font-semibold flex-grow">Contacts</p>
                <div className="flex space-x-1 px-2">
                    <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                        <RiVideoAddFill/>
                    </div>

                    <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                        <BiSearch/>
                    </div>

                    <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                        <CgMoreAlt/>
                    </div>
                </div>
            </div>

            <Contacts src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name="Thisaru Dilshan" status="Online"/>

            <Contacts src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name="Rumesh Naleen"  status="Online"/>

            <Contacts src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name="Anuja Nimesh"  status="Offline"/>
        </div>
    );
};

export default RightSideBar;