import axios from "axios";

class BooksService {

    constructor(){ 
        this.PATH = "https://api.crossref.org/";
    }

    async getAllBooks() {

        try{

            const res = await axios({
                method: "get",
                url: this.PATH + "works?rows=20",
            });

            const data = res.data.message.items;

            // Conver data into an associative array with proper format
            let books = {};

            data.forEach( b => {

                books[b['DOI']] = {
                    id: b["DOI"],
                    description: b["type"],
                    title: b["container-title"].length ? b["container-title"][0] : undefined,
                    author: b["publisher"]
                }
            });

            return books;

        }
        catch (err) {

            console.log(err);
            return {};

        }

    }

    async getBook(id) {

        try{

            const res = await axios({
                method: "get",
                url: this.PATH + `works/${id}`
            });

            const data = res.data.message;

            return {
                id: data["DOI"],
                description: data["type"],
                title: data["container-title"].length ? data["container-title"][0] : undefined,
                author: data["publisher"]
            };

        }
        catch (err) {

            console.log(err);
            return {};

        }

    }
    
}

export default new BooksService();