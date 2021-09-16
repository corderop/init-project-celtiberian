import { 
    CREATE_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK
} from "../actions/types";

export default function reducer(state, action) {

    switch (action.type) {

        case CREATE_BOOK:
            return {
                ...state,
                books: {
                    ...state.books,
                    [action.payload.id]: action.payload
                }
            }

        case UPDATE_BOOK: 
            return {
                ...state,
                books: {
                    ...state.books,
                    [action.payload.id]: action.payload
                }
            }

        case DELETE_BOOK:
            delete state.books[action.payload.id];
            return state;

        default:
            return state;

    }

}