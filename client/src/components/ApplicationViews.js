import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import Login from "./Login";
import Register from "./Register";
import { PostProvider } from "./PostProvider"
import PostSearch from "./PostSearch";
import { UserProfileProvider } from "../providers/UserProfileProvider"

const ApplicationViews = (props) => {
  return (
    <main>
      <Switch>
        <PostProvider>
          <Route path="/" exact>
            <PostSearch />
            <PostList />
          </Route>


          <UserProfileProvider>
            <Route path="/login" exact>
              <Login />
            </Route>

            <Route path="/register" exact>
              <Register />
            </Route>
          </UserProfileProvider>



          <Route path="/posts/add" exact>
            <PostForm />
          </Route>
        </PostProvider>
      </Switch>
    </main>
  );
};

export default ApplicationViews;