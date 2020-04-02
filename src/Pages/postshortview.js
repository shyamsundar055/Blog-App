import React from 'react';
import {
    Link
} from "react-router-dom";

function PostShortView(props) {

    return (
        <div className="blog-post">
            <h4 className="blog-post-title">
                {props.postItem.title}
            </h4>
            <p className="blog-post-meta">
                January 1, 2014 by shyam sundar
            </p>
            <p>
                {props.postItem.body}
            </p>
            <Link to={"/posts/" + props.postItem.id}>Continue reading...</Link>
            <hr />
        </div>
    )
}

export default PostShortView