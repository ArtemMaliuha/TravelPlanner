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
    }),

    deleteRoute: (routeId) => set((state) => {
        state.routes = state.routes.filter(route => route.id !== routeId)
    })
})