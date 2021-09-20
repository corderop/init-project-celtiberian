import { 
    CREATE_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    NEW_BOOKS,
    DELETE_ALL_BOOKS
} from "../src/actions/types";
import booksReducer from "../src/reducers/books"

// Test for the book reducer
describe("Books reducer", () => {

	const prevState = { 
		otherState: true,
		books: {
			"1": { id: "1", title: "Harry Potter", author: "J.K. Rowling", description: "A magician kid" },
			"2": { id: "2", title: "The Pillars of the Earth", author: "Ken Follet", description: "A really big book" },
		}
	}

	test("Undefined action", () => {
		const newState = booksReducer(prevState, "");
		
		expect(newState).toMatchObject(prevState);
	});

	test("New books", () => {
		const payload = {
			books: {
				"1": { id: "1", title: "Other book", author: "Pablo Cordero", description: "Programming book" },
				"3": { id: "3", title: "A new book", author: "Linus", description: "A Linux book" },
			}
		}

		const newState = booksReducer(prevState, { type: NEW_BOOKS, payload: payload });

		expect(newState.otherState).toBe(true); // Check that only changes books
		expect(newState.books).toMatchObject(payload.books);
	});

	test("Create book", () => {
		const payload = {
			id: "3", title: "Other book", author: "Pablo Cordero", description: "Programming book" 
		}

		const newState = booksReducer(prevState, { type: CREATE_BOOK, payload: payload });

		expect(newState.otherState).toBe(true);
		expect(newState.books["1"]).toMatchObject({ id: "1", title: "Harry Potter", author: "J.K. Rowling", description: "A magician kid" });
		expect(newState.books["2"]).toMatchObject({ id: "2", title: "The Pillars of the Earth", author: "Ken Follet", description: "A really big book" });
		expect(newState.books["3"]).toMatchObject(payload);
	});

	test("Update book", () => {
		const payload = {
			id: "2", title: "Other book", author: "Pablo Cordero", description: "Programming book" 
		}

		const newState = booksReducer(prevState, { type: UPDATE_BOOK, payload: payload });

		expect(newState.otherState).toBe(true);
		expect(newState.books["1"]).toMatchObject({ id: "1", title: "Harry Potter", author: "J.K. Rowling", description: "A magician kid" });
		expect(newState.books["2"]).toMatchObject(payload);
	});

	test("Delete book", () => {
		const newState = booksReducer(prevState, { type: DELETE_BOOK, payload: { id: "2" } });

		expect(newState.otherState).toBe(true);
		expect(newState.books["1"]).toBeDefined();
		expect(newState.books["2"]).toBeUndefined();
	});

	test("Delete all books", () => {
		const newState = booksReducer(prevState, { type: DELETE_ALL_BOOKS });

		expect(newState.otherState).toBe(true);
		expect(newState.books).toMatchObject({});
	});

})