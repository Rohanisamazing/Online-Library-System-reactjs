// src/components/BookDetails.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();
  const books = useSelector((state) => state.reducer.books);

  // Ensure that the ID is an integer and compare it properly
  const book = books.find((book) => book.id === parseInt(id));

  // If the book is not found, show an error message
  if (!book) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Book Not Found</h1>
        <p className="text-xl">Sorry, the book you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description || "No description available."}</p>
      <p><strong>Rating:</strong> {book.rating || "No rating available."}</p>

      <button
        onClick={() => navigate("/browse")}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Back to Browse
      </button>
    </div>
  );
};

export default BookDetails;
