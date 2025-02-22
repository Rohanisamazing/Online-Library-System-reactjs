
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BrowseBooks = () => {
  const { category } = useParams(); 
  const books = useSelector((state) => state.reducer.books);
  const [searchQuery, setSearchQuery] = useState("");

  // First, filter books by search query
  const searchFilteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If a category parameter is provided, filter books for that category only.
  if (category) {
    const categoryFilteredBooks = searchFilteredBooks.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );

    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Browse Books in {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="mt-6">
          {categoryFilteredBooks.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {categoryFilteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-gray-600">by {book.author}</p>
                  <Link
                    to={`/books/${book.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold block mt-2"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-4">
              No books found in {category}.
            </p>
          )}
        </div>
      </div>
    );
  }

  // If no category parameter is provided, group books by category
  const groupedBooks = searchFilteredBooks.reduce((acc, book) => {
    const cat = book.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(book);
    return acc;
  }, {});

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Browse Books
      </h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="mt-6 space-y-8">
        {Object.keys(groupedBooks).map((cat) => (
          <div key={cat}>
            <h2 className="text-2xl font-bold mb-4">{cat}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {groupedBooks[cat].map((book) => (
                <div
                  key={book.id}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-gray-600">by {book.author}</p>
                  <Link
                    to={`/books/${book.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold block mt-2"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
