import React, { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import APIService from '../Services/apiservice'
import Loading from '../Pages/loading'

function PostDetailView() {
    let { id } = useParams(); 
    const [postData, setPostData] = useState({});
    const [postComments, setPostComments] = useState([]);
    const [isLoading, setLoading] = useState(true); 

    useEffect(() => {
        function getPostDetails() {
            APIService.getPostData(id).then(data => {
                setPostData(data);
            });

        }
        function getPostCommentDetails() {
            APIService.getPostComments(id).then(data => {
                setLoading(false);
                setPostComments(data);
            })

        }


        const timer = setTimeout(() => {
            getPostDetails();
            getPostCommentDetails();
        }, 1000);

        return () => clearTimeout(timer);

    }, [id])

    return (
        <>
            <div className="container">
                <div className="blog-post">
                {!isLoading ? <>
                    <h4 className="blog-post-title">
                        {postData.title}
                    </h4>
                    <p className="blog-post-meta">
                        January 1, 2014 by shyam sundar
                    </p>
                    <p>
                        {postData.body}
                    </p>
                    <hr />
                    <h5>Comments: </h5>
                    <hr />
                    <ul>
                        {
                            postComments.map((comment) =>
                                <li key={comment.id}><h6>{comment.email}:</h6><p> {comment.body}</p></li>
                            )
                        }
                    </ul>
                    </>
                    : <Loading />
                }
                </div>
            </div>
        </>
    )
}

export default PostDetailView