import { HiOutlineLocationMarker } from "react-icons/hi";
import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";


export default function RouteCard() {
    return(
        <div className="border-gray-200 border-[2px] p-2.5 overflow-x-hidden rounded-xl">
            <div className="flex justify-between h-24">
                <img src="../../placeholder.jpg" className="w-[60%] h-full border-none rounded-xl"/>
                <img src="../../routePlaceholder.jpg" className="w-[37%] h-full border-none rounded-xl"/>
            </div>
            <div className="flex justify-between mt-2 mx-1">
                <div>
                    <h3 className="font-bold text-[18px] m-0">Weekend in mountains</h3>
                    <p className="mt-[-4px]">Start-end date</p>
                    <p className="flex items-center"><HiOutlineLocationMarker className="ml-[-2px] mr-[2px]"/> Nepal, Lukla</p>
                </div>
                <p className="bg-sky-200 h-fit px-2 pb-1 border-none rounded-full">Planned</p>
            </div>
            <div className="flex justify-between mt-1 mr-1 items-center">
                <p className="bg-gray-200 px-2 pb-1 border-none rounded-full">2 stops</p>
                <div className="flex gap-2">
                    <button className="flex justify-center items-center bg-[#eceef0] w-7 h-7 border-none rounded-md hover:bg-blue-200 group"><TiPencil size={20} className="group-hover:text-blue-700"/></button>
                    <button className="flex justify-center items-center bg-[#eceef0] w-7 h-7 border-none rounded-md hover:bg-red-200 group"><FaRegTrashAlt size={17} className="group-hover:text-red-700"/></button>
                </div>
            </div>
        </div>
    )
}