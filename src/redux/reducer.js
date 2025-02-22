// src/redux/reducer.js
const initialState = {
  categories: ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Biography"],
  books: [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", description: "A classic novel", rating: 4.5 },
    { id: 2, title: "1984", author: "George Orwell", category: "Fiction", description: "A dystopian novel", rating: 4.8 },
    { id: 3, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", description: "A science fiction epic", rating: 4.7 },
    { id: 4, title: "The Silent Patient", author: "Alex Michaelides", category: "Mystery", description: "A psychological thriller", rating: 4.6 },
    { id: 5, title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction", description: "A history of humanity", rating: 4.9 }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;