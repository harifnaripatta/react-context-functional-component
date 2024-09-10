import React from "react";
import BookContextProvider from "./Context/BookContext";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";

const App = () => {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
    </BookContextProvider>
  );
};

export default App;
