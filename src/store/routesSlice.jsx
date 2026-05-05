const initialState = {
    routes: []
}

export const createRoutesSlice = (set,get) => ({
    ...initialState,

    createRoute: (routeId) => set((state) => {
        const route = {
            id: routeId
        }

        state.routes.push(route)
    })
})