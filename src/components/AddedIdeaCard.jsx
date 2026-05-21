import { FaRegBuilding } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaRegTrashAlt } from "react-icons/fa";
import { useStore } from "../store/store";
import { useShallow } from "zustand/shallow";

export default function AddedIdeaCard({id, name, country, city, address, index, imageUrl, thisRoute}) {

    const {deleteAddedIdea} = useStore(
        useShallow((state) => ({
            deleteAddedIdea: state.deleteAddedIdea
        }))
    )

    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: id})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return(
        <div className="flex border-gray-200 border-[2px] rounded-lg p-2 mr-2 min-w-0 mb-2" ref={setNodeRef} {...attributes} {...listeners} style={style}>
            <img src={imageUrl ? imageUrl : `https://loremflickr.com/800/600/travel,nature,landmark?lock=${index}`} className="w-20 h-20 border-none rounded-xl"/>
            <div className="ml-2.5 flex flex-col justify-between flex-1 min-w-0">
                <h3 className="font-bold text-[18px] truncate w-55">{name}</h3>
                <div className="flex items-center">
                    <HiOutlineLocationMarker />
                    <p className="text-[18px] ml-[2px] truncate w-52">{city}, {country}</p>
                </div>
                <div className="flex items-center">
                    <FaRegBuilding />
                    <p className="text-[16px] ml-1 truncate w-46" title={address}>{address}</p>
                    <button onClick={() => deleteAddedIdea(id, thisRoute.id)} onPointerDown={(e) => e.stopPropagation()} className="flex justify-center items-center bg-[#eceef0] w-7 h-7 border-none rounded-md hover:bg-red-200 group"><FaRegTrashAlt size={17} className="group-hover:text-red-700"/></button>
                </div>
            </div>
        </div>
    )
}