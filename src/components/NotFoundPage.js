import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container mt-3">
      <h1>Page Not Found</h1>
      <Link to="/" className="btn purple-gradient">
        Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
