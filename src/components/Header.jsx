import { VscCompass, VscSearch } from "react-icons/vsc"
import { useState, useEffect } from "react"
import { auth, googleProvider } from "../firebase.js"
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)  
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Поточний користувач (onAuthStateChanged):", currentUser)
            setUser(currentUser)
        })
        return () => unsubscribe()
    },[])

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch {
            console.error(error.message)
        }
    }

    const handleLogout = () => signOut(auth)



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
            <div className="w-auto flex items-center mr-4">
                <div className="relative flex items-center mr-3">
                    <button onClick={() => setIsOpen(isOpen => !isOpen)} className="absolute left-1"><VscSearch /></button>
                    <input type="text" name="search" className={`h-7 text-[18px] border-gray-200 border-[2px] rounded-lg transition-all duration-500 ease-in-out ${isOpen ? "w-64 opacity-100 p-2 pl-6" : "w-0 opacity-0"}` }/>
                </div>
                <div className="ml-2 flex">
                    {
                        user ? (
                            <>
                                <img className="w-8 h-8 rounded-full mx-2" src={user.photoURL} />
                                <button onClick={() => handleLogout()} className="hover:bg-red-400 px-2 border-none rounded-lg">Log out</button>
                            </>
                        ) : (
                            <button className="bg-blue-300 px-2 py-1 border-none rounded-lg ml-2" onClick={() => handleLogin()}>Login</button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}