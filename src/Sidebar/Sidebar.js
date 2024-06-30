import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCalendar, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { FaGraduationCap, FaChalkboardTeacher, FaChevronRight } from 'react-icons/fa';
import { LuLayoutDashboard } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';











function Sidebar() {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
    const refsid1 = useRef()
    const refsid2 = useRef()
    const Convertsidbar = () => {

        if (isMobile) {

            refsid1.current.className = "visible bg-white h-screen";
            refsid2.current.className = "hidden";


        } else {
            refsid1.current.className = "hidden ";
            refsid2.current.className = "visible bg-white h-screen";
        }

    }
    Convertsidbar()
    return (
        <div>



            {<aside ref={refsid1} className="w-[80px] hidden bg-white text-black h-screen shadow-lg flex flex-col items-center">
                <div className="flex items-center justify-between p-4 w-[100px]    ">
                    <a href="./index.html" className="flex justify-center  ">
                        <img src="./dark-logo.svg" className="w-[100px]    " alt="Logo" />
                    </a>
                    {<div className="xl:hidden block cursor-pointer" id="sidebarCollapse">
                        <i className="ti ti-x text-2xl"></i>
                    </div>}
                </div>
                <nav className="px-4 mt-4" data-simplebar="">
                    <ul className="p-0 text-gray-600">
                        <li className="mb-4 flex flex-col items-center">
                            <div className="flex items-center justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded">
                                <LuLayoutDashboard className="text-blue-600 text-xl" />

                            </div>
                        </li>
                        <li className="mb-2 flex flex-col items-center">
                            <div className="flex items-center justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded">
                                <FaChalkboardTeacher className="text-blue-600 text-xl" />
                            </div>
                        </li>
                        <li className="mb-2 flex flex-col items-center">
                            <div className="flex items-center justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded">
                                <IoBookSharp className="text-blue-600 text-xl" />
                            </div>
                        </li>
                        <li className="mb-2 flex flex-col items-center">
                            <div className="flex items-center justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded">
                                <PiStudentBold className="text-blue-600 text-xl" />
                            </div>
                        </li>
                        <li className="mb-2 flex flex-col items-center">
                            <div className="flex items-center justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded">
                                <CiBoxList className="text-blue-600 text-xl" />
                            </div>
                        </li>
                        <li className="mb-2 flex flex-col items-center">
                            <div className="flex items-center justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded">
                                <FaGraduationCap className="text-blue-600 text-xl" />
                            </div>
                        </li>
                    </ul>
                </nav>
            </aside >}


            < aside ref={refsid2} className="w-[250px]  bg-white text-black h-screen shadow-lg" >
                <div className="flex items-center justify-between p-4">
                    <a href="./index.html" className="text-nowrap">
                        <img src="./dark-logo.svg" className="w-[180px]" alt="Logo" />
                    </a>
                    <div className="xl:hidden block cursor-pointer" id="sidebarCollapse">
                        <i className="ti ti-x text-2xl"></i>
                    </div>
                </div>
                <nav className="px-4" data-simplebar="">
                    <ul className="p-0 text-gray-600">
                        <li className="mb-2">
                            <div className="flex items-center text-xs text-gray-500 uppercase font-bold mb-2">
                                <span className="ml-2">Home</span>
                            </div>
                        </li>
                        <li className="mb-4 flex gap-4">
                            <div className="bg-blue-600 w-3 h-11 rounded"></div>
                            <div className="flex items-center justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded">
                                <LuLayoutDashboard className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-blue-600 font-medium">Dashboard</span>
                                <FaChevronRight className="text-gray-500" />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex items-center text-xs text-gray-500 uppercase font-bold mb-2">
                                <i className="ti ti-dots text-lg"></i>
                                <span className="ml-2">UI COMPONENTS</span>
                            </div>
                        </li>
                        <li className="mb-2 flex">
                            <div className="flex items-center gap-4 justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded h-11">
                                <FaChalkboardTeacher className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium">Teachers</span>
                                <FaChevronRight className="text-gray-500" />
                            </div>
                        </li>
                        <li className="mb-2 flex">
                            <div className="flex items-center gap-4 justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded h-11">
                                <IoBookSharp className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium">Courses</span>
                                <FaChevronRight className="text-gray-500" />
                            </div>
                        </li>
                        <li className="mb-2 flex">
                            <div className="flex items-center gap-4 justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded h-11">
                                <PiStudentBold className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium">Students</span>
                                <FaChevronRight className="text-gray-500" />
                            </div>
                        </li>
                        <li className="mb-2 flex">
                            <div className="flex items-center gap-4 justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded h-11">
                                <CiBoxList className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium">Classes</span>
                                <FaChevronRight className="text-gray-500" />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex items-center text-xs text-gray-500 uppercase font-bold mb-2">
                                <i className="ti ti-dots text-lg"></i>
                                <span className="ml-2">AUTH</span>
                            </div>
                        </li>
                        <li className="mb-2 flex">
                            <div className="flex items-center gap-4 justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded h-11">
                                <FaChalkboardTeacher className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium">Teachers</span>
                                <FaChevronRight className="text-gray-500" />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex items-center text-xs text-gray-500 uppercase font-bold mb-2">
                                <i className="ti ti-dots text-lg"></i>
                                <span className="ml-2">EXTRA</span>
                            </div>
                        </li>
                        <li className="mb-2 flex">
                            <div className="flex items-center gap-4 justify-center w-full p-2 cursor-pointer hover:bg-gray-100 rounded h-11">
                                <FaGraduationCap className="text-blue-600 mr-2 text-xl" />
                                <span className="flex-grow text-gray-500 font-medium">Courses</span>
                                <FaChevronRight className="text-gray-500" />
                            </div>
                        </li>
                    </ul>
                </nav>
            </aside >


        </div >
    )
}

export default Sidebar