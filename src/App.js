import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Error from "./Component/Error";
import SingleMovie from "./Component/SingleMovie";
import Movie from "./Component/Movie";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
           
          </Route>
          <Route path="/movie/:id" element={<SingleMovie />}>
           
          </Route>
          <Route path="*" element={<Error />}>
         
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
