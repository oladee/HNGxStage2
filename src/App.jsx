import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import React from "react";
import MovieDetail from "./components/MovieDetail";


const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/movie/:id" element={<MovieDetail/>}/>
    </Routes>
    </>
  )
};

export default App;
