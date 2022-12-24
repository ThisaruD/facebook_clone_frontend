import React from 'react';
import Image from "next/image";
import {FiThumbsUp}  from "react-icons/fi";
import {RiShareForwardLine} from "react-icons/ri";
import {FaRegCommentAlt} from "react-icons/fa";


const Post = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-white mt-6 rounded-md p-4">
                <div className="flex items-center space-x-2">
                    <img className="rounded-full w-10 h-10"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
                        />
                        <div>
                            <p className="font-medium">Thisaru Dilshan</p>
                            <p className="text-xs text-gray-500">{new Date().toLocaleString()}</p>
                        </div>
                </div>
                <p className="py-4">Loren Ipsum</p>
            </div>
            {/*if any image*/}
            <div  className="relative h-60 md:h-96 bg-white">
                <Image layout="fill" objectFit="cover"
                    src="https://images.pexels.com/photos/14771128/pexels-photo-14771128.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                       alt="post"/>
            </div>

            {/*Footer*/}
            <div className="flex items-center justify-center bg-white p-2">
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <FiThumbsUp className="h-4"/>
                    <p className="text-xs sm:text-base">Like</p>
                </div>

                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <FaRegCommentAlt className="h-4"/>
                    <p className="text-xs sm:text-base">Comment</p>
                </div>

                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <RiShareForwardLine className="h-4"/>
                    <p className="text-xs sm:text-base">Share</p>
                </div>
            </div>
        </div>
    );
};

export default Post;