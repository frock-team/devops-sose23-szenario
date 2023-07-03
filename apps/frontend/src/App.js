import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
