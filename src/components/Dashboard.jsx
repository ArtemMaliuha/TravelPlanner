import { FiPlus } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";

export default function Dashboard() {

    return (
        <div className="ml-12 mr-7 mt-3">
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-[30px] font-bold">Welcome back, User!👋</h1>
                    <p className="text-[20px]">Welcome to travel planner web application</p>
                </div>
                <button className="flex items-center bg-[#03969b] text-white py-1 px-3 border-none rounded-xl"><FiPlus size={18} className="mr-1"/>Create new root</button>
            </div>
            <div className="flex justify-between items-center mt-3">
                <h2 className="text-[26px] font-bold">Your Planned Journeys</h2>
                <div className="flex items-center">
                    <p>filters</p>
                    <div className="flex items-center ml-2 border-gray-200 border-[2px] rounded-lg px-2">
                        <VscSearch />
                        <input type="text" placeholder="Search" className="h-7 text-[18px] px-2 py-1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}