import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const categories = useSelector((state) => state.reducer.categories);
  const popularBooks = useSelector((state) => state.reducer.books);

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
        Welcome to the Online Library
      </h1>

      {/* Categories Section */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Categories</h2>
      <ul className="flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg "
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Popular Books Section */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
        Popular Books
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-medium text-gray-800">{book.title}</h3>
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
  );
};

export default HomePage;
