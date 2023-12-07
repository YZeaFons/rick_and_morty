import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actionType"
import axios from 'axios'
// ------ESTE ES MI ANTIGUO CODIG-----------------------------
// export const addFav = (character) => {
//     return {
//         type: ADD_FAV,
//         payload: character
//     }
// }
export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav';
            const { data } = await axios.post(endpoint, character)
            dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            alert(error.message)
        }
    };
};

// --------------ESTE ES MI ANTIGUO CODIGO-------------------
// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }



// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint).then(({ data }) => {
//             return dispatch({
//                 type: 'REMOVE_FAV',
//                 payload: data,
//             });
//         });
//     };
// };



export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        });
    };
};



export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}