import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCalendar, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { FaGraduationCap, FaChalkboardTeacher, FaChevronRight } from 'react-icons/fa';
import { LuLayoutDashboard } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";










function Sidebar() {
    return (
        <div>



            <aside className="w-64 bg-white text-black h-screen">
                <div className="flex items-center justify-between p-4">
                    <a href="./index.html" className="text-nowrap">
                        <img src="./dark-logo.svg" className="w-[180px]" alt="Logo" />

                    </a>
                    <div className="xl:hidden block cursor-pointer" id="sidebarCollapse">
                        <i className="ti ti-x text-2xl"></i>
                    </div>
                </div>
                <nav className="overflow-y-auto" data-simplebar="">
                    <ul className="p-0 text-gray-600">
                        <li className="mb-2">
                            <div className="flex items-center text-xs text-gray-500 uppercase font-bold mb-2">

                                <span className="ml-2">Home</span>
                            </div>
                        </li>
                        <li className="mb-4 flex gap-4">
                            <div className="bg-blue-600 w-3 h-11 rounded p-0 m-0"></div>

                            <div className="flex  items-center justify-center w-full p-1 cursor-pointer hover:bg-gray-100">
                                <LuLayoutDashboard className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-blue-600 font-medium">Dashboard</span>
                                <FaChevronRight className="text-gray-500 " />

                            </div>
                        </li>

                        <li className="mb-2">
                            <div className="flex items-center text-xs text-gray-500 uppercase font-bold mb-2">
                                <i className="ti ti-dots text-lg"></i>
                                <span className="ml-2">UI COMPONENTS</span>
                            </div>
                        </li>
                        <li className="mb-2 flex   ">
                            <div className="flex items-center gap-4  justify-center w-full p-1 cursor-pointer hover:bg-gray-100  rounded h-11">

                                <FaChalkboardTeacher className=" text-blue-600 mr-2 text-xl  " />
                                <span className="flex-grow text-gray-500 font-medium  ">Teachers</span>
                                <FaChevronRight className=" " />
                            </div>
                        </li>
                        <li className="mb-2  flex   ">
                            <div className="flex  items-center gap-4 justify-center w-full p-1 cursor-pointer hover:bg-gray-100  rounded h-11">

                                <IoBookSharp className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium   ">Courses</span>
                                <FaChevronRight className=" " />
                            </div>
                        </li>

                        <li className="mb-2  flex   ">
                            <div className="flex  items-center gap-4 justify-center w-full p-1 cursor-pointer hover:bg-gray-100  rounded h-11">

                                <PiStudentBold className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium   ">Students</span>
                                <FaChevronRight className=" " />
                            </div>
                        </li>

                        <li className="mb-2  flex   ">
                            <div className="flex  items-center gap-4 justify-center w-full p-1 cursor-pointer hover:bg-gray-100  rounded h-11">

                                <CiBoxList className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium   ">Classes</span>
                                <FaChevronRight className=" " />
                            </div>
                        </li>




                        <li className="mb-2">
                            <div className="flex items-center text-xs text-gray-500 uppercase font-bold mb-2">
                                <i className="ti ti-dots text-lg"></i>
                                <span className="ml-2">AUTH</span>
                            </div>
                        </li>
                        <li className="mb-2 flex   ">
                            <div className="flex items-center gap-4  justify-center w-full p-1 cursor-pointer hover:bg-gray-100  rounded h-11">

                                <FaChalkboardTeacher className=" text-blue-600 mr-2 text-xl  " />
                                <span className="flex-grow text-gray-500 font-medium  ">Teachers</span>
                                <FaChevronRight className=" " />
                            </div>
                        </li>

                        <li className="mb-2">
                            <div className="flex items-center text-xs text-gray-500 uppercase font-bold mb-2">
                                <i className="ti ti-dots text-lg"></i>
                                <span className="ml-2">EXTRA</span>
                            </div>
                        </li>
                        <li className="mb-2  flex   ">
                            <div className="flex  items-center gap-4 justify-center w-full p-1 cursor-pointer hover:bg-gray-100  rounded h-11">

                                <FaGraduationCap className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium   ">Courses</span>
                                <FaChevronRight className=" " />
                            </div>
                        </li>
                    </ul>

                </nav>
            </aside>



        </div>
    )
}

export default Sidebar