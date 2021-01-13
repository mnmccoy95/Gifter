import React, { useContext, useState } from "react";
import { PostContext } from "./PostProvider";
import { Button } from "reactstrap";

const PostSearch = (props) => {
    const { searchPosts, getAllPosts } = useContext(PostContext);
    const [input, setInput] = useState("");

    const search = (evt) => {
        evt.preventDefault();
        const sort = true; //can add checkbox later to switch to not sorted
        if (input === "") {
            getAllPosts()
        } else {
            searchPosts(input, sort)
        }
    };

    return (
        <div>
            <h3>Find a Post</h3>  
            <form>
                <fieldset>
                    <div>
                        <input type="text" required
                            onChange={(event) => setInput(event.target.value)}
                            value={input}
                            placeholder="Search"/>
                    </div>
                    <div>
                        <Button onClick={search}>
                            Search Posts
                        </Button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default PostSearch;