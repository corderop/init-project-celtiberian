import { 
    CREATE_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    NEW_BOOKS,
    DELETE_ALL_BOOKS
} from "../actions/types";

export default function reducer(state, action) {

    const { type, payload } = action; 

    switch (type) {

        case NEW_BOOKS:
            if(!state.books)
                return {
                    ...state,
                    books: {
                        ...state.books,
                        ...payload.books
                    }
                }
            
            return state;
            

        case CREATE_BOOK:
            return {
                ...state,
                books: {
                    ...state.books,
                    [payload.id]: payload
                }
            }

        case UPDATE_BOOK: 
            console.log(payload)
            return {
                ...state,
                books: {
                    ...state.books,
                    [payload.id]: payload
                }
            }

        case DELETE_BOOK:
            var cloneBooks = Object.assign({}, state.books);
            delete cloneBooks[payload.id];
            return {
                ...state,
                books: cloneBooks
            };

        case DELETE_ALL_BOOKS: 
            return{ 
                ...state,
                books: {}
            }

        default:
            return state;

    }

}