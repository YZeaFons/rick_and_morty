import { ADD_FAV, REMOVE_FAV } from "./actionType"

const initialstate = {
    myFavorites: [],
    itemId: 0

}
const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            const updateMyFavorites = state.myFavorites.filter(item => item.id !== action.payload)
            return {
                ...state,
                myFavorites: updateMyFavorites
            }
        default:
            return { ...state }
    }
}


export default reducer