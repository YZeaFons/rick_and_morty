import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actionType"

const initialstate = {
    myFavorites: [],
    allCharacters: []

}
const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            const updateMyFavorites = state.myFavorites.filter(item => item.id !== action.payload)
            return {
                ...state,
                myFavorites: updateMyFavorites,
                allCharacters: updateMyFavorites
            }
        case FILTER:
            if (action.payload === 'All') {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters]
                }
            }
            const filteredChars = state.myFavorites.filter(item => item.gender === action.payload)
            return {
                ...state,
                myFavorites: filteredChars
            }
        case ORDER:
            const tempOrder = [...state.myFavorites]
            if (action.payload === 'A') tempOrder.sort((a, b) => a.id - b.id)
            if (action.payload === 'D') tempOrder.sort((a, b) => b.id - a.id)
            return {
                ...state,
                myFavorites: tempOrder
            }
        default:
            return { ...state }
    }
}


export default reducer