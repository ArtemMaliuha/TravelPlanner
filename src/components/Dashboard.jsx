import { FiPlus } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";
import { useStore } from "../store/store";
import { useShallow } from "zustand/shallow";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";


export default function Dashboard() {

    const navigate = useNavigate()

    const {userName, createRoute} = useStore(
        useShallow((state) => ({
            userName: state.userName,
            createRoute: state.createRoute
        }))
    )

    const handleActionClick = async () => {
        if(userName){
            const id = crypto.randomUUID()
            createRoute(id)
            navigate(`/routeDetails/${id}`)
        }else{
            try {
                await signInWithPopup(auth, googleProvider)
            } catch(error) {
                console.error(error.message)
            }
        }
    }

    return (
        <div className="ml-12 mr-7 mt-3">
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-[30px] font-bold">{userName ? `Welcome back, ${userName}!👋` : "Plan your dream trip! ✈️"}</h1>
                    <p className="text-[20px]">Welcome to travel planner web application</p>
                </div>
                <button className="flex items-center bg-[#03969b] text-white py-1 px-3 border-none rounded-xl" onClick={handleActionClick}><FiPlus size={18} className="mr-1"/>{userName ? "Create new route" : "Login to create routes"}</button>
            </div>
            <div className="flex justify-between items-center mt-3">
                <h2 className="text-[26px] font-bold">{userName ? "Your Planned Journeys" : "Start Planning Today"}</h2>
                <div className={userName ? "flex items-center" : "hidden"}>
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