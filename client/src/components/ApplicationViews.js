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
      <Route render={() => {
        if (localStorage.getItem("userProfile")) {
          return (
            <Switch>
              <PostProvider>
                <Route path="/" exact>
                  <PostSearch />
                  <PostList />
                </Route>

                <Route path="/posts/add" exact>
                  <PostForm />
                </Route>
              </PostProvider>
            </Switch>
          )
        } else {
          return <Switch>
            <UserProfileProvider>
              <Route path="/login" exact>
                <Login />
              </Route>

              <Route path="/register" exact>
                <Register />
              </Route>
            </UserProfileProvider>
          </Switch>
        }
      }} />
    </main>
  );
};

export default ApplicationViews;