import { useEffect, useState } from "react";
import { getBooks } from "../utils/localstorage";

function BookList() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(getBooks());
    }, []);

    return (
        <div>

            <h2 className="page-title">Book List</h2>

            <div className="book-container">

                {books.map((book) => (
                    <div key={book.id} className="book-card">

                        <img src={book.img} alt={book.name} />

                        <h3 className="book-title">{book.name}</h3>

                        <p className="book-author">{book.author}</p>

                        <p className="book-price">${book.price}</p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default BookList;