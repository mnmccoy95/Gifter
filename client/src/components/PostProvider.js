import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = () => {
        return fetch("/api/post")
            .then((res) => res.json())
            .then(setPosts);
    };

    const searchPosts = (searchValue, sort) => {
        return fetch(`/api/post/search?q=${searchValue}&sortDesc=${sort}`)
        .then((res) => res.json())
        .then(setPosts);
    }

    return (
        <PostContext.Provider value={{ posts, getAllPosts, searchPosts }}>
            {props.children}
        </PostContext.Provider>
    );
};