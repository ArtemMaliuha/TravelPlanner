import { HiOutlineLocationMarker } from "react-icons/hi";

export default function TripIdeaCard() {
    return(
        <div className="flex border-gray-200 border-[2px] rounded-lg p-2 mx-2">
            <img src="https://loremflickr.com/800/600/travel,nature,landmark" className="w-15 h-15 border-none rounded-xl"/>
            <div className="ml-2.5 flex flex-col justify-between">
                <h3 className="font-bold text-[18px]">Eiffel Tower</h3>
                <div className="flex items-center">
                    <HiOutlineLocationMarker />
                    <p className="text-[18px]">Paris, France</p>
                </div>
            </div>
        </div>
    )
}