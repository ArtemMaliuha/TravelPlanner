const initialState = {
    userName: "",
    userPhoto: ""
}

export const createUserSlice = (set, get) => ({
    ...initialState,

    setUser: (currentUser) => set((state) => {
        if(currentUser){
            state.userName = currentUser.displayName,
            state.userPhoto = currentUser.photoURL
        }else{
            state.userName = "",
            state.userPhoto = ""
        }
    })

})