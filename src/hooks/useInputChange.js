import { useMemo } from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/shallow";

export default function useInputChange(input){

    const {routes} = useStore(
        useShallow((state) => ({
            routes: state.routes
        }))
    )

    const filteredArray = useMemo(() => {
        if(input){
            return routes.filter(route => route.name.toLowerCase().includes(input.toLowerCase()))
        }else{
            return routes
        }
    }, [input, routes])
    

    return filteredArray
}