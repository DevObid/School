import React from 'react'

function Students() {
    return (
        <div>

            <form className="flex items-center top-[180px] absolute right-[500px] max-w-sm mx-auto">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Student name..."
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>



            <div class=" absolute right-[10px] w-[81%] mt-[250px] h-[240px]  overflow-x-auto shadow-md sm:rounded-lg">

                <table className=" w-[100%] h-[240px]   text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead style={{ backgroundColor: "#1C64F2" }} className="text-xs text-white  uppercase  dark:bg-gray-700 dark:text-gray-400">
                        <tr >
                            <th scope="col" className="px-6 py-3">Students Name</th>
                            <th scope="col" className="px-6 py-3">classes</th>
                            <th scope="col" className="px-6 py-3">age</th>
                            <th scope="col" className="px-6 py-3">full name</th>
                            <th scope="col" className="px-6 py-3">Courses</th>
                            <th scope="col" className="px-6 py-3">Study hours</th>
                            <th scope="col" className="px-6 py-3">Mo3adal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=" flex items-center">
                                    <img className="w-8 h-8 p-1 absolute  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="favicon.png" alt="Bordered avatar" />
                                    <span className="ml-16">EL MEHDI OBID</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">100</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">$2999</td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=" flex items-center">
                                    <img className="w-8 h-8 p-1 absolute  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="favicon.png" alt="Bordered avatar" />
                                    <span className="ml-16">EL MEHDI OBID</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">100</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">$2999</td>

                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=" flex items-center">
                                    <img className="w-8 h-8 p-1 absolute  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="favicon.png" alt="Bordered avatar" />
                                    <span className="ml-16">EL MEHDI OBID</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">100</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">$2999</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Students