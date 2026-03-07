import { useEffect, useState } from "react";
import { getBooks, saveBooks } from "../utils/localstorage";

function BookViewTable() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [editId, setEditId] = useState(null);
    const [editedBook, setEditedBook] = useState({});

    useEffect(() => {
        setBooks(getBooks());
    }, []);

    const deleteBook = (id) => {
        const updated = books.filter((book) => book.id !== id);
        setBooks(updated);
        saveBooks(updated);
    };

    const startEdit = (book) => {
        setEditId(book.id);
        setEditedBook(book);
    };

    const saveEdit = () => {
        const updated = books.map((book) =>
            book.id === editId ? editedBook : book
        );

        setBooks(updated);
        saveBooks(updated);
        setEditId(null);
    };

    const handleChange = (e) => {
        setEditedBook({
            ...editedBook,
            [e.target.name]: e.target.value,
        });
    };

    let filteredBooks = books.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrder === "az") {
        filteredBooks = [...filteredBooks].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sortOrder === "za") {
        filteredBooks = [...filteredBooks].sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    if (priceFilter === "low") {
        filteredBooks = filteredBooks.filter((book) => book.price <= 500);
    }

    if (priceFilter === "high") {
        filteredBooks = filteredBooks.filter((book) => book.price > 500);
    }

    return (
        <div>

            <h2 className="page-title">Book Table</h2>

            <div className="option">

                <input
                    placeholder="Search by title..."
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="">Sort Title</option>
                    <option value="az">A → Z</option>
                    <option value="za">Z → A</option>
                </select>

                <select onChange={(e) => setPriceFilter(e.target.value)}>
                    <option value="">Filter Price</option>
                    <option value="low">Price less than 500</option>
                    <option value="high">Price more than 500</option>
                </select>

            </div>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {filteredBooks.map((book) => (

                        <tr key={book.id}>

                            <td>{book.id}</td>

                            <td>
                                <img
                                    src={book.img || "https://via.placeholder.com/50"}
                                    alt={book.name}
                                    style={{ width: "50px", height: "70px", objectFit: "cover" }}
                                />
                            </td>

                            <td>
                                {editId === book.id ? (
                                    <input
                                        name="name"
                                        value={editedBook.name}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    book.name
                                )}
                            </td>

                            <td>
                                {editId === book.id ? (
                                    <input
                                        name="author"
                                        value={editedBook.author}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    book.author
                                )}
                            </td>

                            <td>
                                {editId === book.id ? (
                                    <input
                                        name="price"
                                        value={editedBook.price}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    book.price
                                )}
                            </td>

                            <td>{book.type}</td>

                            <td>

                                {editId === book.id ? (
                                    <button className="edit-btn" onClick={saveEdit}>
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className="edit-btn"
                                        onClick={() => startEdit(book)}
                                    >
                                        Edit
                                    </button>
                                )}

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteBook(book.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default BookViewTable;