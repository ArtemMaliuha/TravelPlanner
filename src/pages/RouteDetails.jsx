import Header from "../components/Header";
import { useStore } from "../store/store";
import { useShallow } from "zustand/shallow";
import { useParams } from "react-router";
import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { useRef, useState, useMemo } from "react";
import { IoIosSave } from "react-icons/io";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {v4 as uuidv4} from 'uuid'

const fetchPlacesData = async ({queryKey}) => {
    const [_key, query, sessionToken] = queryKey

    if (!query) return null

    const response = await fetch(`https://api.mapbox.com/search/searchbox/v1/suggest?q=${encodeURIComponent(query)}&session_token=${sessionToken}&limit=10&types=poi%2Cplace%2Caddress%2Clocality&poi_category=museum%2Ctourist_attraction%2Cmonument%2Cpark%2Chistoric_site%2Ccafe%2Crestaurant%2Chotel%2Chostel&access_token=${import.meta.env.VITE_MAPBOX_API_KEY}`)

    return await response.json()
}

export default function RouteDetails() {
    const {routes, changeRouteName, changeStartDate, changeEndDate} = useStore(
        useShallow((state) => ({
            routes: state.routes,
            changeRouteName: state.changeRouteName,
            changeStartDate: state.changeStartDate,
            changeEndDate: state.changeEndDate
        }))
    )

    const [searchQuery, setSearchQuery] = useState("")

    const sessionToken = useMemo(() => uuidv4(), [])

    const {data} = useQuery({
        queryKey: ['places', searchQuery, sessionToken],
        queryFn: fetchPlacesData,
        enabled: !!searchQuery,
        refetchOnWindowFocus: false
    })

    console.log(data)

    const navigate = useNavigate()
    const inputNameRef = useRef(null)
    const timerRef = useRef(null)
    const { id } = useParams()
    const thisRoute = routes.find(route => route.id === id)

    const handleSaveNameClick = () => {
        const newName = inputNameRef.current.value

        if(newName.trim() === ""){
            alert("Please enter a route name")
            return
        }else {
            changeRouteName(id, newName)
        }
    }

    const handleStartDateChange = (e) => {
        if(e.target.value && thisRoute.endDate){
            const startDate = new Date(e.target.value)
            const endDate = new Date(thisRoute.endDate)
            console.log(startDate)
            console.log(endDate)

            if(startDate > endDate){
                alert("Start date cannot be after the end date")
                e.target.value = thisRoute.startDate || ""
            }else{
                changeStartDate(id, e.target.value)
            }
        }else if(e.target.value && !thisRoute.endDate){
            changeStartDate(id, e.target.value)
        }
    }

    const handleEndDateChange = (e) => {
        if(e.target.value && thisRoute.startDate){
            const startDate = new Date(thisRoute.startDate)
            const endDate = new Date(e.target.value)

            if(startDate > endDate){
                alert("End date cannot be before the start date")
                e.target.value = thisRoute.endDate || ""
            }else{
                changeEndDate(id, e.target.value)
            }
        }else if(e.target.value && !thisRoute.startDate){
            changeEndDate(id, e.target.value)
        }
    }

    const handleSaveRouteClick = () => {
        const fields = [
            {val: thisRoute.name.trim(), label: "name"},
            {val: thisRoute.startDate, label: "start date"},
            {val: thisRoute.endDate, label: "end date"}
        ]

        const missingFields = fields.filter(f => !f.val).map(f => f.label)

        if(missingFields.length > 0){
            alert(`The following fields are empty: ${missingFields.join(",")}`)
        }else{
            navigate("/")
        }
    }

    const handleIdeaSearchChange = (e) => {
        const value = e.target.value 

        if(timerRef.current){
            clearTimeout(timerRef.current)
        }

        if(value ?? value !== searchQuery){
            timerRef.current = setTimeout(() => {
                setSearchQuery(value)
            }, 1500)
        }
    }

    return(
        <>
            <Header />
            <div className="ml-12 mr-7 mt-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center border-gray-200 border-[2px] rounded-lg pr-2 pl-1">
                        <input type="text" placeholder="Enter route name" className="h-7 text-[18px] pr-2 pl-1 py-1" ref={inputNameRef} defaultValue={thisRoute.name}/>
                        <FaCheck onClick={handleSaveNameClick}/>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-[18px]">Start date:</p>
                        <input className="w-29 text-[18px]" type="date" onChange={(e) => handleStartDateChange(e)} value={thisRoute.startDate ? thisRoute.startDate : ""}/>
                        <p className="ml-3 mr-1 text-[18px]">End date:</p>
                        <input className="w-29 text-[18px]" type="date" onChange={(e) => handleEndDateChange(e)} value={thisRoute.endDate ? thisRoute.endDate : ""}/>
                    </div>
                    <button className="flex items-center bg-[#03969b] text-white py-1 px-2 border-none rounded-xl" onClick={handleSaveRouteClick}><IoIosSave size={18} className="mr-1"/>Save this route</button>
                </div>
                <div className="mt-6 flex">
                    <div className="w-[25%] h-[80vh] border-gray-300 border-[2px] rounded-xl">
                        <p className="ml-2.5 mt-2 text-[20px] font-bold">Trip ideas</p>
                        <div className="flex items-center ml-2 border-gray-200 border-[2px] rounded-lg px-2 mr-3 my-1">
                            <VscSearch />
                            <input type="text" placeholder="Search for places and activities" className="h-7 w-[100%] text-[18px] px-2 py-1" onChange={(e) => handleIdeaSearchChange(e)}/>
                        </div>
                        <p className="ml-2.5">Search to add ideas</p>
                    </div>
                    <div className="ml-8 w-[75%] h-[80vh] border-gray-300 border-[2px] rounded-xl flex">
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