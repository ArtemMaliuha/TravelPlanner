import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegBuilding } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useStore } from "../store/store";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

const fetchPlacePhoto = async ({queryKey}) => {
    const [_key, city, country, name] = queryKey
    const searchQuery = [name, city, country].filter(Boolean).join(" ")

    const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`)

    return await response.json()
}

export default function TripIdeaCard({id, name, country, city, address, index}) {

    const {addIdea, addImageUrl} = useStore(
        useShallow((state) => ({
            addIdea: state.addIdea,
            addImageUrl: state.addImageUrl
        }))
    )

    const currentIdea = {
        name,
        country,
        city,
        address,
        id,
        index,
        imageUrl: ""
    }

    addIdea(currentIdea)
    
    const { data } = useQuery({
        queryKey: ['images', city, country, name],
        queryFn: fetchPlacePhoto,
        refetchOnWindowFocus: false
    })

    useEffect(() => {
        const url = data?.results?.[0]?.urls?.small
        if(url){
            addImageUrl(id, url)
        }
    }, [data])

    const {attributes, listeners, setNodeRef, isDragging} = useDraggable({
        id: id
    })

    const style = {
        opacity: isDragging ? 0 : 1,
    }

    return(
        <div className="flex border-gray-200 border-[2px] rounded-lg p-2 mx-2 min-w-0 mb-2" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <img src={data?.results?.[0]?.urls ? data.results[0].urls.small : `https://loremflickr.com/800/600/travel,nature,landmark?lock=${index}`} className="w-20 h-20 border-none rounded-xl"/>
            <div className="ml-2.5 flex flex-col justify-between flex-1 min-w-0">
                <h3 className="font-bold text-[18px] truncate w-55">{name}</h3>
                <div className="flex items-center">
                    <HiOutlineLocationMarker />
                    <p className="text-[18px] ml-[2px] truncate w-52">{city}, {country}</p>
                </div>
                <div className="flex items-center">
                    <FaRegBuilding />
                    <p className="text-[16px] ml-1 truncate w-52">{address}</p>
                </div>
            </div>
        </div>
    )
}