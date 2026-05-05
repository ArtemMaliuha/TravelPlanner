import Header from "../components/Header";
import { useStore } from "../store/store";
import { useShallow } from "zustand/shallow";
import { useParams } from "react-router";

export default function RouteDetails() {
    const {routes} = useStore(
        useShallow((state) => ({
            routes: state.routes
        }))
    )

    const { id } = useParams()

    return(
        <>
            <Header />
            <p>route id: {id}</p>
        </>
    )
}