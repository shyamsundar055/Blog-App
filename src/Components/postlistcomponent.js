import React, { useState, useEffect } from 'react';
import PostShortView from '../Pages/postshortview'
import APIService from '../Services/apiservice'
import Loading from '../Pages/loading'

function PostListComponent(props) {
    const [postItemsData, setPostItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        function getPostDetails() {
            APIService.getPostData(props.userId).then(data => {
                setLoading(false);
                setPostItems(data)

            });

        }
        const timer = setTimeout(() => {
            getPostDetails()
        }, 1000);

        return () => clearTimeout(timer);
    }, [props.userId])

    return (
        <>
            <div className="container">
                <main role="main" className="container">
                    <div className="row">
                        <div className="col-md-12 blog-main">
                            {
                                !isLoading ?
                                    postItemsData.map((postItem) =>

                                        <PostShortView key={postItem.id} postItem={postItem} />
                                    )
                                    : <Loading />

                            }
                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}

export default PostListComponent