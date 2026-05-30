import { HiOutlineLocationMarker } from "react-icons/hi";
import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import { useStore } from "../store/store";
import { useShallow } from "zustand/shallow";
import { useNavigate } from "react-router";

export default function RouteCard({id, name, startDate, endDate, cards}) {

    const navigate = useNavigate()

    const {deleteRoute, routes} = useStore(
        useShallow((state) => ({
            deleteRoute: state.deleteRoute,
            routes: state.routes
        }))
    )

    const startDayDate = new Date(startDate)

    const formattedStartDate = startDayDate.toLocaleDateString('en-GB', {
        timeZone: 'UTC',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })

    const endDayDate = new Date(endDate)

    const formattedEndDate = endDayDate.toLocaleDateString('en-GB', {
        timeZone: 'UTC',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })

    const today = new Date().toLocaleDateString('en-CA')

    const thisRoute = routes.find(route => route.id === id)

    return(
        <div className="border-gray-200 border-[2px] p-2.5 overflow-x-hidden rounded-xl">
            <div className="flex justify-between h-24">
                <img src={`https://loremflickr.com/800/600/travel,nature,landmark?lock=${thisRoute.randomIndex}`} className="w-[60%] h-full border-none rounded-xl"/>
                <img src={thisRoute.mapUrl ? thisRoute.mapUrl : "../../routePlaceholder.jpg"} className="w-[37%] h-full border-none rounded-xl"/>
            </div>
            <div className="flex justify-between mt-2 mx-1">
                <div>
                    <h3 className="font-bold text-[18px] m-0">{name}</h3>
                    <p className="mt-[-4px]">{formattedStartDate} - {formattedEndDate}</p>
                    <p className="flex items-center"><HiOutlineLocationMarker className="ml-[-2px] mr-[2px]"/>{cards.length > 0 ? `${cards[0].country}, ${cards[0].city}` : "Somewhere"}</p>
                </div>
                <p className={`${today > endDate ? "bg-gray-200" : "bg-sky-200"} h-fit px-2 pb-1 border-none rounded-full`}>{today > endDate ? "Finished" : "Planned"}</p>
            </div>
            <div className="flex justify-between mt-1 mr-1 items-center">
                <p className="bg-gray-200 px-2 pb-1 border-none rounded-full">{cards.length === 1 ? "1 stop" : cards.length === 0 ? "Non-stop" : `${cards.length} stops`}</p>
                <div className="flex gap-2">
                    <button onClick={() => navigate(`/routeDetails/${id}`)} className="flex justify-center items-center bg-[#eceef0] w-7 h-7 border-none rounded-md hover:bg-blue-200 group"><TiPencil size={20} className="group-hover:text-blue-700"/></button>
                    <button onClick={() => deleteRoute(id)} className="flex justify-center items-center bg-[#eceef0] w-7 h-7 border-none rounded-md hover:bg-red-200 group"><FaRegTrashAlt size={17} className="group-hover:text-red-700"/></button>
                </div>
            </div>
        </div>
    )
}