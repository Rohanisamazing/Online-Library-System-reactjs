import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">404 Page Not Found</h1>
      <p className="text-xl mb-4">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
