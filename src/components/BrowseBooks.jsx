import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.reducer.books);
  const [searchQuery, setSearchQuery] = useState("");

  if (!books) {
    return <div className="p-6 text-center text-lg">Loading...</div>;
  }

  const filteredBooks = books.filter(
    (book) =>
      (!category || book.category.toLowerCase() === category.toLowerCase()) &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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

      {/* Display Books */}
      <div className="mt-6">
        {filteredBooks.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredBooks.map((book) => (
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
          <p className="text-gray-500 text-center mt-4">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
