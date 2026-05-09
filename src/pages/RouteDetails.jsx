import Header from "../components/Header";
import { useStore } from "../store/store";
import { useShallow } from "zustand/shallow";
import { useParams } from "react-router";
import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";

export default function RouteDetails() {
    const {routes} = useStore(
        useShallow((state) => ({
            routes: state.routes
        }))
    )

    const { id } = useParams()

    return(
        <>
            <Header />
            <div className="ml-12 mr-7 mt-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center border-gray-200 border-[2px] rounded-lg pr-2 pl-1">
                        <input type="text" placeholder="Enter route name" className="h-7 text-[18px] pr-2 pl-1 py-1"/>
                        <FaCheck />
                    </div>
                    <div>
                        <input type="date" />
                        <input type="date" />
                    </div>
                    <button className="flex items-center bg-[#03969b] text-white py-1 px-2 border-none rounded-xl"><FiPlus size={18} className="mr-1"/>Save this route</button>
                </div>
                <div className="mt-6 flex">
                    <div className="w-[25%] h-[80vh] border-gray-300 border-[2px] rounded-xl">
                        <p className="ml-2.5 mt-2 text-[20px] font-bold">Trip ideas</p>
                        <div className="flex items-center ml-2 border-gray-200 border-[2px] rounded-lg px-2 mr-3 my-1">
                            <VscSearch />
                            <input type="text" placeholder="Search for places and activities" className="h-7 w-[100%] text-[18px] px-2 py-1"/>
                        </div>
                        <p className="ml-2.5">Search to add ideas</p>
                    </div>
                    <div className="ml-8 w-[75%] h-[80vh] border-gray-200 border-[2px] rounded-lg flex">
                        <div className="ml-2.5 mt-2 w-[50%]">
                            added cards
                        </div>
                        <img src="../../routePlaceholder.jpg" className="w-[100%]"/>
                    </div>
                </div>
            </div>
        </>
    )
}