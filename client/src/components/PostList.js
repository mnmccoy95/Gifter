import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from './PostProvider';
import Post from './Post';
import { UserProfileContext } from "../providers/UserProfileProvider";


const PostList = () => {
    const { getToken } = useContext(UserProfileContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getToken().then((token) =>
            fetch(`/api/post`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(setPosts));
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;