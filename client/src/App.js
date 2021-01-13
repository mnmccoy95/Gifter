import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <PostForm />
        <PostList />
      </Router>
    </div>
  );
}

export default App;