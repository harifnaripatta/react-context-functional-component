import React, { useContext, useState } from "react";
import { BookContext } from "../Context/BookContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { addBook } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault(), addBook(title, author), setTitle(""), setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Enter Book Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Author Name"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default BookForm;
