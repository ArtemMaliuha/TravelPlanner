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
            endDate: "",
            cards: [],
            mapUrl: "",
            randomIndex: Math.ceil(Math.random() * 2000)
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
    }),

    addSavedIdea: (currentIdea, routeId) => set((state) => {
        const currentRoute = state.routes.find(route => route.id === routeId)
        currentRoute.cards.push(currentIdea)
    }),

    updateRouteCards: (id, newCardsArray) => set((state) => {
        const currentRoute = state.routes.find(route => route.id === id)
        currentRoute.cards = newCardsArray
    }),

    deleteAddedIdea: (ideaId, routeId) => set((state) => {
        const currentRoute = state.routes.find(route => route.id === routeId)
        currentRoute.cards = currentRoute.cards.filter(card => card.id !== ideaId)
    }),

    updateRouteMapUrl: (routeId, mapUrl) => set((state) => {
        const currentRoute = state.routes.find(route => route.id === routeId)
        currentRoute.mapUrl = mapUrl
    })
})