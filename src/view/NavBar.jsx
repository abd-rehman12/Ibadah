``;

function NavBar() {
  return (
    <>
      <div className="px-3 h-20 min-w-screen xl:gap-7 bg-green xl:mx-24 flex justify-between items-center rounded-lg lg:mx-10 min-[320px]:max-sm:mx-0, px-0, ">
        <img className="xl:h-14 lg:h-12  " src="./assets/logo.png" />

        <ul className="flex justify-center items-center gap-7 text-white font-semibold h-full min-[320px]:max-sm:hidden ">
          <li className=" border-b-4 border-transparent  hover:border-b-4 hover:border-yellow h-full content-center">
            Home
          </li>
          <li className=" border-b-4 border-transparent hover:border-b-4 hover:border-yellow h-full content-center">
            About
          </li>
          <li className="relative group border-b-4 border-transparent  hover:border-b-4 hover:border-yellow  h-full content-center">
            Courses
            {/* Drop Down */}
            <ul className="absolute left-0 w-40 mt-8 bg-white text-black   opacity-0 invisible transform scale-y-0 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top  ">
              <li className="px-4 py-2  hover:bg-yellow hover:text-white   border-b-2 transition-colors">
                Our Courses
              </li>
              <li className="px-4 py-2 hover:bg-yellow hover:text-white   transition-colors">
                Course Details
              </li>
            </ul>
          </li>
          <li className="relative group  border-b-4 border-transparent hover:border-b-4 hover:border-yellow  h-full content-center">
            Campaigns
            {/* Drop Down */}
            <ul className="absolute left-0 w-52 mt-8 bg-white text-black   opacity-0 invisible transform scale-y-0 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top  ">
              <li className="px-4 py-2 hover:bg-yellow hover:text-white   border-b-2 transition-colors">
                Our Campaigns
              </li>
              <li className="px-4 py-2 hover:bg-yellow hover:text-white   transition-colors">
                Campaigns Details
              </li>
            </ul>
          </li>
          <li className=" relative group  border-b-4 border-transparent hover:border-b-4 hover:border-yellow  h-full content-center">
            Pages
            {/* Drop Down */}
            <ul className="absolute left-0 w-40 mt-8 bg-white text-black   opacity-0 invisible transform scale-y-0 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top  ">
              <li className="px-4 py-2 hover:bg-yellow hover:text-white   border-b-2 transition-colors">
                Our Scholars
              </li>
              <li className="px-4 py-2 hover:bg-yellow hover:text-white  border-b-2  transition-colors">
                Scholars Details
              </li>
              <li className="px-4 py-2 hover:bg-yellow hover:text-white   border-b-2 transition-colors">
                Our Events
              </li>
              <li className="px-4 py-2 hover:bg-yellow hover:text-white   border-b-2 transition-colors">
                Pricing Packages
              </li>
            </ul>
          </li>
          <li className="relative group  border-b-4 border-transparent hover:border-b-4 hover:border-yellow  h-full content-center">
            News
            {/* Drop Down */}
            <ul className="absolute left-0 w-40 mt-8 bg-white text-black   opacity-0 invisible transform scale-y-0 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top  ">
              <li className="px-4 py-2 hover:bg-yellow hover:text-white   border-b-2 transition-colors">
                Our Blogs
              </li>
              <li className="px-4 py-2 hover:bg-yellow hover:text-white   transition-colors">
                Blog Details
              </li>
            </ul>
          </li>
          <li className=" border-b-4 border-transparent hover:border-b-4 hover:border-yellow h-full content-center">
            Contact
          </li>
        </ul>
        {/* opener */}
        <div className="relative group border-b-4 border-transparent h-full content-center min-[640px]:max-2xl:hidden">
          <i
            className="fas fa-bars fa-xl text-white  mt-3 mx-2 "
            aria-hidden="true"
          ></i>{" "}
          {/* Drop Down */}
          <ul className="absolute right-0 top-0 w-64 h-[calc(100vw-65rem)] mt-20  m-2 font-semibold text-white opacity-0 invisible transform scale-x-0 group-hover:opacity-100 group-hover:visible group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-right z-50 min-[320px]:bg-white sm:bg-transparent ">
            <li className="px-4 py-2 text-green bg-white hover:text-brown font-bold text-lg transition-colors">
              Home
            </li>
            <li className="px-4 py-2 text-green bg-white hover:text-brown font-bold text-lg transition-colors">
              About
            </li>
            <li className="relative group px-4 py-2 bg-white text-green hover:text-brown font-bold text-lg transition-colors">
              Courses
              {/* Nested dropdown */}
              <ul className="absolute left-full top-0 w-40 mt-0 bg-white text-black opacity-0 invisible transform scale-y-0 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-left">
                <li className="px-4 py-2 hover:bg-yellow hover:text-white border-b-2 transition-colors">
                  Our Courses
                </li>
                <li className="px-4 py-2 hover:bg-yellow hover:text-white transition-colors">
                  Course Details
                </li>
              </ul>
            </li>
            <li className="px-4 py-2 text-green bg-white hover:text-brown font-bold text-lg transition-colors">
              Campaigns
            </li>
            <li className="px-4 py-2 text-green bg-white hover:text-brown font-bold text-lg transition-colors">
              Pages
            </li>
            <li className="px-4 py-2 text-green bg-white hover:text-brown font-bold text-lg transition-colors">
              News
            </li>
            <li className="px-4 py-2 text-green bg-white hover:text-brown font-bold text-lg transition-colors">
              Contact
            </li>
          </ul>
        </div>

        <ul className="flex justify-center items-center text-white font-semibold min-[320px]:max-sm:hidden ">
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
