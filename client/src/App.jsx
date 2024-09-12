import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
