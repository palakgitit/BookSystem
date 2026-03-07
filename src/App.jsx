import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import BookForm from "./components/BookForm.jsx";
import BookList from "./components/BookList.jsx";
import BookViewTable from "./components/BookViewTable.jsx";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<BookList />} />
        <Route path="/form" element={<BookForm />} />
        <Route path="/table" element={<BookViewTable />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;