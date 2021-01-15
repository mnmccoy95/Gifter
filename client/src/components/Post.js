import React, { useContext } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { PostContext } from "./PostProvider"

const Post = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('userProfile'));
  const { deletePost } = useContext(PostContext);
  const deleteButton = () => {
    if (post.userProfileId === user.id) {
      return <button className="delete" onClick={
        () => {
          deletePost(post);
        }
      }>🗑️</button>
    }
  }

  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <strong>{post.title}</strong>
          {deleteButton()}
        </p>
        <p>{post.caption}</p>
        <div>{post.comment.map(c =>
          (<Card>{c.message}</Card>)
        )}
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;