import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {

    const [posts, setPosts] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    const getAllPosts = () => {
        getToken().then((token) => fetch("/api/post", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then(setPosts));
    };

    const searchPosts = (searchValue, sort) => {
        getToken().then((token) => fetch(`/api/post/search?q=${searchValue}&sortDesc=${sort}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then(setPosts));
    }

    const addPost = (post) => {
        getToken().then((token) => fetch("/api/post", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post),
        }));
    };

    const deletePost = (post) => {
        getToken().then((token) => fetch(`/api/post/${post.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }))
            .then(getAllPosts);
    };

    return (
        <PostContext.Provider value={{ posts, getAllPosts, searchPosts, addPost, deletePost }}>
            {props.children}
        </PostContext.Provider>
    );
};