import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: "Shoe Dog",
      author: "Phil Knight",
      id: 1,
    },
    {
      title: "Atomic Habits",
      author: "James clear",
      id: 2,
    },
    {
      title: "Can't Hurt Me",
      author: "David Googins",
      id: 3,
    },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
