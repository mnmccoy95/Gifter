import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostSearch from "./components/PostSearch"
import { PostProvider } from "./components/PostProvider"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <PostSearch />
          <PostForm />
          <PostList />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;