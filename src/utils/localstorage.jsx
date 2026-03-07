const STORAGE_KEY = "books";

export const getBooks = () => {
    const books = localStorage.getItem(STORAGE_KEY);
    return books ? JSON.parse(books) : [];
};

export const saveBooks = (books) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
};

