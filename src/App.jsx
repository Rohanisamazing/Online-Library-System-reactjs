// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import HomePage from "./components/HomePage.jsx";
// import BrowseBooks from "./components/BrowseBooks.jsx";
// import BookDetails from "./components/BookDetails.jsx"; // Import BookDetails
// import AddBook from "./components/AddBook.jsx";
// import NotFoundPage from "./components/NotFoundPage.jsx"; // Import NotFoundPage

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <nav className="bg-gray-800 p-4 text-white flex space-x-4">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>
//           <Link to="/browse" className="hover:underline">
//             Browse Books
//           </Link>
//           <Link to="/add" className="hover:underline">
//             Add Book
//           </Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/browse" element={<BrowseBooks />} />
//           <Route path="/browse/:category" element={<BrowseBooks />} />
//           <Route path="/books/:id" element={<BookDetails />} />{" "}
//           {/* Ensure this route is correctly set */}
//           <Route path="/add" element={<AddBook />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;

// fourth

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./components/HomePage.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import BookDetails from "./components/BookDetails.jsx"; // Import BookDetails
import AddBook from "./components/AddBook.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx"; // Import NotFoundPage

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav className="bg-gray-800 p-4 text-white flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/browse" className="hover:underline">
            Browse Books
          </Link>
          <Link to="/add" className="hover:underline">
            Add Book
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/browse/:category" element={<BrowseBooks />} />
          <Route path="/books/:id" element={<BookDetails />} />{" "}
          {/* Ensure this route is correctly set */}
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
