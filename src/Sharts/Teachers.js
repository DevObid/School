import React, { useRef } from 'react'
import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

function Teachers() {






    useEffect(() => {
        const options = {
            chart: {
                height: "100%",
                maxWidth: "100%",
                type: "area",
                fontFamily: "Inter, sans-serif",
                dropShadow: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            tooltip: {
                enabled: true,
                x: {
                    show: false,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.55,
                    opacityTo: 0,
                    shade: "#1C64F2",
                    gradientToColors: ["#1C64F2"],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 6,
            },
            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 2,
                    right: 2,
                    top: 0,
                },
            },
            series: [
                {
                    name: "New users",
                    data: [6500, 6418, 6456, 6526, 6356, 6456],
                    color: "#1A56DB",
                },
            ],
            xaxis: {
                categories: [
                    '01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'
                ],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
            },
        };

        const chartElement = document.getElementById('area-chart');
        let chart;

        if (chartElement && typeof ApexCharts !== 'undefined') {
            chart = new ApexCharts(chartElement, options);
            chart.render();
        }

        // Cleanup function to destroy the chart on component unmount
        // return () => {
        //     if (chart) {
        //         chart.destroy();
        //     }
        // };
    }, []);

    const refmonths = useRef()
    const showmonth = () => {

        if (refmonths.current.className.includes('hidden')) {
            refmonths.current.className = 'visible';
        } else {
            refmonths.current.className = 'hidden';
        }

    }






    return (
        <div>

            <div className=" absolute w-[60%] top-[100px] right-[200px] bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                <div className="flex justify-between">
                    <div>
                        <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
                    </div>
                    <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                        12%
                        <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg>
                    </div>
                </div>
                <div id="area-chart"></div>
                <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div className="flex justify-between items-center pt-5">
                        {/* Button */}
                        <button
                            onClick={showmonth}
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="lastDaysdropdown"
                            data-dropdown-placement="bottom"
                            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                            type="button"
                        >
                            Last 7 days
                            <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        {/* Dropdown menu */}
                        <div id="lastDaysdropdown" className="z-10 visible bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul ref={refmonths} className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                                </li>
                            </ul>
                        </div>
                        <a
                            href="#"
                            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
                        >
                            Users Report
                            <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>



            {/* <div class=" absolute right-[10px] w-[81%] mt-[650px] h-[240px]  overflow-x-auto shadow-md sm:rounded-lg">

                <table className=" w-[100%] h-[240px]   text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead style={{ backgroundColor: "#1C64F2" }} className="text-xs text-white  uppercase  dark:bg-gray-700 dark:text-gray-400">
                        <tr >
                            <th scope="col" className="px-6 py-3">Teachers Name</th>
                            <th scope="col" className="px-6 py-3">classes</th>
                            <th scope="col" className="px-6 py-3">age</th>
                            <th scope="col" className="px-6 py-3">full name</th>
                            <th scope="col" className="px-6 py-3">Courses</th>
                            <th scope="col" className="px-6 py-3">Work hours</th>
                            <th scope="col" className="px-6 py-3">RATE</th>
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
            </div> */}
        </div>
    )
}

export default Teachers