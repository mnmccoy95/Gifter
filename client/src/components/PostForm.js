import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import { PostContext } from "./PostProvider"
import { useHistory } from "react-router-dom";

const PostForm = () => {
    const history = useHistory();
    const [post, setPost] = useState({})
    const { addPost } = useContext(PostContext);
    const user = JSON.parse(localStorage.getItem('userProfile'));
    const submit = (evt) => {
        const postToSend = {
            ImageUrl: post.imageUrl,
            Title: post.title,
            Caption: post.caption,
            UserProfileId: parseInt(user.id)
        };

        addPost(postToSend)
        history.push("/");
    };

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.name] = event.target.value
        setPost(newPost)
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