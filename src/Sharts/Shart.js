import React from 'react'
import ApexCharts from 'apexcharts';


function Shart() {


    const getChartOptions = () => {
        return {
            series: [35.1, 23.5],
            colors: ["#1C64F2", "#16BDCA"],
            chart: {
                height: 320,
                width: "100%",
                type: "donut",
            },
            stroke: {
                colors: ["transparent"],
                lineCap: "",
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontFamily: "Inter, sans-serif",
                                offsetY: 20,
                            },
                            total: {
                                showAlways: true,
                                show: true,
                                label: "Unique visitors",
                                fontFamily: "Inter, sans-serif",
                                formatter: function (w) {
                                    const sum = w.globals.seriesTotals.reduce((a, b) => {
                                        return a + b
                                    }, 0)
                                    return '$' + sum + 'k'
                                },
                            },
                            value: {
                                show: true,
                                fontFamily: "Inter, sans-serif",
                                offsetY: -20,
                                formatter: function (value) {
                                    return value + "k"
                                },
                            },
                        },
                        size: "80%",
                    },
                },
            },
            grid: {
                padding: {
                    top: -2,
                },
            },
            labels: ["Male", "Female"],
            dataLabels: {
                enabled: false,
            },
            legend: {
                position: "bottom",
                fontFamily: "Inter, sans-serif",
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "k"
                    },
                },
            },
            xaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "k"
                    },
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        }
    }

    if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("donut-chart"), getChartOptions());
        chart.render();

        // Get all the checkboxes by their class name
        const checkboxes = document.querySelectorAll('#devices input[type="checkbox"]');

        // Function to handle the checkbox change event
        function handleCheckboxChange(event, chart) {
            const checkbox = event.target;
            if (checkbox.checked) {
                switch (checkbox.value) {

                    case 'Male':
                        chart.updateSeries([25.1, 26.5]);
                        break;
                    case 'Female':
                        chart.updateSeries([45.1, 27.5]);
                        break;
                    default:
                        chart.updateSeries([55.1, 28.5]);
                }

            } else {
                chart.updateSeries([35.1, 23.5]);
            }
        }

        // Attach the event listener to each checkbox
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', (event) => handleCheckboxChange(event, chart));
        });
    }


    return (

        <div>
            <div className="w-[400px] h-[500px] md:right-[95px]  absolute right-[100px] mt-[90px] bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                <div className="flex justify-between mb-3">
                    <div className="flex justify-center items-center">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
                            Website traffic
                        </h5>
                        <svg
                            data-popover-target="chart-info"
                            data-popover-placement="bottom"
                            className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                        </svg>
                        <div
                            data-popover=""
                            id="chart-info"
                            role="tooltip"
                            className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                        >
                            <div className="p-3 space-y-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Activity growth - Incremental
                                </h3>
                                <p>
                                    Report helps navigate cumulative growth of community activities.
                                    Ideally, the chart should have a growing trend, as stagnating chart
                                    signifies a significant decrease of community activity.
                                </p>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Calculation
                                </h3>
                                <p>
                                    For each date bucket, the all-time volume of activities is
                                    calculated. This means that activities in period n contain all
                                    activities up to period n, plus the activities generated by your
                                    community in period.
                                </p>
                                <a
                                    href="#"
                                    className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                                >
                                    Read more{" "}
                                    <svg
                                        className="w-2 h-2 ms-1.5 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div data-popper-arrow="" />
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            data-tooltip-target="data-tooltip"
                            data-tooltip-placement="bottom"
                            className="hidden sm:inline-flex items-center justify-center text-gray-500 w-8 h-8 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
                        >
                            <svg
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                />
                            </svg>
                            <span className="sr-only">Download data</span>
                        </button>
                        <div
                            id="data-tooltip"
                            role="tooltip"
                            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                            Download CSV
                            <div className="tooltip-arrow" data-popper-arrow="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex  justify-center" id="devices">
                        {/* <div className="flex items-center me-4">
                        <input
                            id="desktop"
                            type="checkbox"
                            defaultValue="desktop"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="desktop"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Desktop
                        </label>
                    </div> */}
                        <div className="flex items-center me-4">
                            <input
                                id="tablet"
                                type="checkbox"
                                defaultValue="tablet"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="tablet"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Tablet
                            </label>
                        </div>
                        <div className="flex items-center me-4">
                            <input
                                id="mobile"
                                type="checkbox"
                                defaultValue="mobile"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="mobile"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Mobile
                            </label>
                        </div>
                    </div>
                </div>
                {/* Donut Chart */}
                <div className="py-6" id="donut-chart" />
                <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div className="flex justify-between items-center pt-5">
                        {/* Button */}
                        {/* <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="lastDaysdropdown"
                        data-dropdown-placement="bottom"
                        className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                        type="button"
                    >
                        Last 7 days
                        <svg
                            className="w-2.5 m-2.5 ms-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button> */}
                        <div
                            id="lastDaysdropdown"
                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Yesterday
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Today
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Last 7 days
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Last 30 days
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Last 90 days
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a
                            href="#"
                            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
                        >
                            Show Reports
                            <svg
                                className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class=" absolute right-[10px] w-[580px] mt-[610px]    overflow-x-auto shadow-md sm:rounded-lg">

                <table className=" w-[580px]    text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead style={{ backgroundColor: "#1C64F2" }} className="text-xs text-white  uppercase  dark:bg-gray-700 dark:text-gray-400">
                        <tr >
                            <th scope="col" className="px-6 py-3">Student Name</th>
                            <th scope="col" className="px-6 py-3">class</th>
                            <th scope="col" className="px-6 py-3">age</th>
                            <th scope="col" className="px-6 py-3">full name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4  font-medium flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=" flex items-center">
                                    <img className="w-8 h-8 p-1 absolute  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="favicon.png" alt="Bordered avatar" />
                                    <span className="ml-16">EL MEHDI OBID</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">100</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=" flex items-center">
                                    <img className="w-8 h-8 p-1 absolute  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="favicon.png" alt="Bordered avatar" />
                                    <span className="ml-16">EL MEHDI OBID</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">White</td>
                            <td className="px-6 py-4">Laptop PC</td>
                            <td className="px-6 py-4">$1999</td>

                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=" flex items-center">
                                    <img className="w-8 h-8 p-1 absolute  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="favicon.png" alt="Bordered avatar" />
                                    <span className="ml-16">EL MEHDI OBID</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">Black</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$99</td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="  w-[580px] mt-[610px]  absolute right-[10px]  h-[240px]  overflow-x-auto shadow-md sm:rounded-lg">

                <table className="  w-[580px]  h-[240px]   text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead style={{ backgroundColor: "#1C64F2" }} className="text-xs text-white  uppercase  dark:bg-gray-700 dark:text-gray-400">
                        <tr >
                            <th scope="col" className="px-6 py-3">Student Name</th>
                            <th scope="col" className="px-6 py-3">class</th>
                            <th scope="col" className="px-6 py-3">age</th>
                            <th scope="col" className="px-6 py-3">full name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4  font-medium flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=" flex items-center">
                                    <img className="w-8 h-8 p-1 absolute  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="favicon.png" alt="Bordered avatar" />
                                    <span className="ml-16">EL MEHDI OBID</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">100</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=" flex items-center">
                                    <img className="w-8 h-8 p-1 absolute  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="favicon.png" alt="Bordered avatar" />
                                    <span className="ml-16">EL MEHDI OBID</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">White</td>
                            <td className="px-6 py-4">Laptop PC</td>
                            <td className="px-6 py-4">$1999</td>

                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=" flex items-center">
                                    <img className="w-8 h-8 p-1 absolute  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="favicon.png" alt="Bordered avatar" />
                                    <span className="ml-16">EL MEHDI OBID</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">Black</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$99</td>

                        </tr>
                    </tbody>
                </table>
            </div>



        </div>

    )
}

export default Shart