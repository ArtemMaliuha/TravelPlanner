const initialState = {
    routes: [],
    foundIdeas: []
}

export const createRoutesSlice = (set,get) => ({
    ...initialState,

    createRoute: (routeId) => set((state) => {
        const route = {
            id: routeId,
            name: "",
            startDate: "",
            endDate: ""
        }

        state.routes.push(route)
    }),

    deleteRoute: (routeId) => set((state) => {
        state.routes = state.routes.filter(route => route.id !== routeId)
    }),

    changeRouteName: (routeId, routeName) => set((state) => {
        state.routes = state.routes.map(route => route.id === routeId ? {...route, name: routeName} : route)
    }),

    changeStartDate: (routeId, startDate) => set((state) => {
        state.routes = state.routes.map(route => route.id === routeId ? {...route, startDate: startDate} : route)
    }),

    changeEndDate: (routeId, endDate) => set((state) => {
        state.routes = state.routes.map(route => route.id === routeId ? {...route, endDate: endDate} : route)
    }),

    addIdea: (currentIdea) => set((state) => {
        state.foundIdeas.push(currentIdea)
    }),

    addImageUrl: (id, imageUrl) => set((state) => {
        const idea = state.foundIdeas.find(idea => idea.id === id)
        if(idea){
            idea.imageUrl = imageUrl
        }
    }),

    clearFoundIdeas: () => set((state) => {
        state.foundIdeas = []
    })
})