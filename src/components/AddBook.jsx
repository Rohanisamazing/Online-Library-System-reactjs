// src/components/AddBook.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Action to add a new book
const addBook = (book) => ({
  type: "ADD_BOOK",
  payload: book,
});

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Form state
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState({});

  // Validate form fields
  const validateForm = () => {
    const formErrors = {};
    if (!title) formErrors.title = "Title is required";
    if (!author) formErrors.author = "Author is required";
    if (!description) formErrors.description = "Description is required";
    if (!category) formErrors.category = "Category is required";
    if (!rating || isNaN(rating) || rating < 1 || rating > 5)
      formErrors.rating = "Rating must be between 1 and 5";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Create new book object
      const newBook = {
        id: Date.now(), // Using timestamp for unique ID
        title,
        author,
        description,
        category,
        rating: parseFloat(rating),
      };

      // Dispatch the addBook action
      dispatch(addBook(newBook));

      // Redirect to Browse Books page
      navigate("/browse");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="border p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-600">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="author">
            Author:
          </label>
          <input
            type="text"
            id="author"
            className="border p-2 w-full"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && <p className="text-red-600">{errors.author}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            className="border p-2 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="text-red-600">{errors.description}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="category">
            Category:
          </label>
          <input
            type="text"
            id="category"
            className="border p-2 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && <p className="text-red-600">{errors.category}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="rating">
            Rating (1-5):
          </label>
          <input
            type="number"
            id="rating"
            className="border p-2 w-full"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
          />
          {errors.rating && <p className="text-red-600">{errors.rating}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;