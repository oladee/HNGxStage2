import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import React from "react";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="*" />
      </Routes>
    </>
  );
};

export default App;
