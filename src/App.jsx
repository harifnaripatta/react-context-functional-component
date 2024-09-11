import React from "react";
import BookContextProvider from "./Context/BookContext";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";

const App = () => {
  return (
    <BookContextProvider>
      <Navbar />
      <BookForm />
      <BookList />
    </BookContextProvider>
  );
};

export default App;
