import { useState } from "react";
import { getBooks, saveBooks } from "../utils/localstorage.jsx";

function BookForm() {

    const [book, setBook] = useState({
        id: "",
        name: "",
        author: "",
        publisher: "",
        description: "",
        img: "",
        price: "",
        type: ""
    });

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const books = getBooks();
        books.push(book);
        saveBooks(books);

        alert("Book Added!");

        setBook({
            id: "",
            name: "",
            author: "",
            publisher: "",
            description: "",
            img: "",
            price: "",
            type: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            <input name="id" placeholder="Book ID" value={book.id} onChange={handleChange} />

            <input name="name" placeholder="Book Name" value={book.name} onChange={handleChange} />

            <input name="author" placeholder="Author" value={book.author} onChange={handleChange} />

            <input name="publisher" placeholder="Publisher" value={book.publisher} onChange={handleChange} />

            <textarea name="description" placeholder="Description" value={book.description} onChange={handleChange} />

            <input name="img" placeholder="Image URL" value={book.img} onChange={handleChange} />

            <input name="price" placeholder="Price" value={book.price} onChange={handleChange} />

            <input name="type" placeholder="Book Type" value={book.type} onChange={handleChange} />

            <button type="submit">Add Book</button>

        </form>
    );
}

export default BookForm;