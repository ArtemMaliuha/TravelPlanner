import { VscCompass, VscSearch } from "react-icons/vsc"

export default function Header() {
    return (
        <div className="flex w-full border-b-[2px] border-gray-200 h-[56px] items-center justify-between">
            <div className="w-auto ml-[48px] flex">
                <VscCompass className="mr-[6px]" style={{transform: 'scaleY(-1)'}} size={28}/>
                <h1 className="text-2xl font-medium">Travel Planner</h1>
            </div>
            <div className="w-auto flex">
                <h2 className="text-[20px] pt-[3px] ml-[24px] font-medium">My Trips</h2>
                <h2 className="text-[20px] pt-[3px] ml-[24px] font-medium">Something else</h2>
            </div>
            <div className="w-auto flex items-center mr-[48px]">
                <VscSearch />
                <p className="ml-[8px]">google account placeholder</p>
            </div>
        </div>
    )
}