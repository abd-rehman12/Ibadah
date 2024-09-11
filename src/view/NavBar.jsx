import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="px-3 h-20 min-w-screen xl:gap-7 bg-green xl:mx-24 flex justify-between items-center rounded-lg lg:mx-10 ">
        <img className="xl:h-14 lg:h-10 " src="./assets/logo.png" />

        <ul className="flex justify-center items-center gap-7 text-white font-semibold">
          <li className=" hover:text-yellow hover:text-xl hover:underline-offset-8">
            Home
          </li>
          <li className=" hover:text-yellow hover:underline hover:underline-offset-8">
            About
          </li>
          <li className="relative group  hover:text-yellow  ">
            Courses
            {/* Drop Down 1 */}
            <ul class="absolute left-0 hidden mt-2  w-40 bg-white  text-black group-hover:block">
              <li class="px-4 py-2 hover:bg-yellow-400 hover:text-white">
                Our Courses
              </li>
              <li class="px-4 py-2 hover:bg-yellow-400 hover:text-white">
                <a href="#">Option 2</a>
              </li>
              <li class="px-4 py-2 hover:bg-yellow-400 hover:text-white">
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li className=" hover:text-yellow hover:underline hover:underline-offset-8">
            Campaigns
          </li>
          <li className=" hover:text-yellow hover:underline hover:underline-offset-8">
            Pages
          </li>
          <li className=" hover:text-yellow hover:underline hover:underline-offset-8">
            News
          </li>
          <li className=" hover:text-yellow hover:underline hover:underline-offset-8">
            Contact
          </li>
        </ul>

        <ul className="flex justify-center items-center text-white font-semibold">
          <i
            className="fa fa-headphones fa-lg text-center mr-2 "
            aria-hidden="true"
          ></i>
          <span>+ (00) 123-345-11</span>

          <i
            className="fa fa-search fa-md ml-10 border-l-2 pl-2 "
            aria-hidden="true"
          ></i>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
