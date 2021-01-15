import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";

const PostForm = () => {
    const [post, setPost] = useState({})
    const { getToken } = useContext(UserProfileContext);
    const user = JSON.parse(localStorage.getItem('userProfile'));
    const submit = (evt) => {
        const postToSend = {
            ImageUrl: post.imageUrl,
            Title: post.title,
            Caption: post.caption,
            UserProfileId: parseInt(user.id)
        };

        addPost(postToSend).then(() => {
            window.location.reload();
        }
        );
    };

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.name] = event.target.value
        setPost(newPost)
    };

    const addPost = (post) => {
        return getToken().then((token) =>
            fetch("/api/post", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`, // The token gets added to the Authorization header
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post),
            }));
    };


    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="imageUrl">Gif URL</Label>
                                <Input id="imageUrl"
                                    name="imageUrl"
                                    onChange={handleControlledInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input id="title"
                                    name="title"
                                    onChange={handleControlledInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="caption">Caption</Label>
                                <Input id="caption"
                                    name="caption"
                                    onChange={handleControlledInputChange} />
                            </FormGroup>
                        </Form>
                        <Button color="info" onClick={submit}>
                            SUBMIT
                    </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default PostForm;