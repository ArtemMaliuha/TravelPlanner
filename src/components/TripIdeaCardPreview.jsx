import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegBuilding } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "../store/store";
import { useShallow } from "zustand/shallow";

export default function TripIdeaCardPreview({id}) {
    const {foundIdeas} = useStore(
        useShallow((state) => ({
            foundIdeas: state.foundIdeas
        }))
    )

    const currentIdea = foundIdeas.find(idea => idea.id === id)

    return (
        <div className="flex border-gray-300 border-[2px] rounded-lg p-2 bg-white shadow-2xl scale-105 cursor-grabbing min-w-[300px]">
            <img 
                src={currentIdea.imageUrl ? currentIdea.imageUrl : `https://loremflickr.com/800/600/travel,nature,landmark?lock=${currentIdea.index}`}
                className="w-20 h-20 border-none rounded-xl object-cover"
                alt={name}
            />
            <div className="ml-2.5 flex flex-col justify-between flex-1 min-w-0">
                <h3 className="font-bold text-[18px] truncate">{currentIdea.name}</h3>
                <div className="flex items-center">
                    <HiOutlineLocationMarker />
                    <p className="text-[18px] ml-[2px] truncate">{currentIdea.city}, {currentIdea.country}</p>
                </div>
                <div className="flex items-center">
                    <FaRegBuilding />
                    <p className="text-[16px] ml-1 truncate">{currentIdea.address}</p>
                </div>
            </div>
        </div>
    );
}