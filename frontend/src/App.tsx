import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TableProvider } from "./contexts/TableContext";
import Author from "./pages/Author";
import Book from "./pages/Book";
import Library from "./pages/Library";

function App() {
  return (
    <TableProvider>
      <div className="app-container">
        <main className="app-main">
          <Routes>
            <Route path="/author" element={<Author />} />
            <Route path="/book" element={<Book />} />
            <Route path="/library" element={<Library />} />
            <Route path="/" element={<Navigate to="/author" replace />} />
            <Route path="*" element={<Navigate to="/author" replace />} />
          </Routes>
        </main>
      </div>
    </TableProvider>
  );
}
export default App;
