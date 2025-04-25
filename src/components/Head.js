import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }



  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg cursor-pointer">
      <div className="flex col-span-1">
        <img
        onClick={() => toggleMenuHandler()}
        className="h-8"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />

        <img
        className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <div className="col-span-10 px-10">
        <input type="text" 
        className="w-1/2 border border-gray-400 p-2  rounded-l-full"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
      </div>

      <div className="col-span-1">
        <img
        className="h-8"
        
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        />
      </div>
    </div>
  );
};

export default Head;
