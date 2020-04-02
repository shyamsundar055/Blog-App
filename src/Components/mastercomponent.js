import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import PostListComponent from './postlistcomponent';
import PostDetailView from '../Pages/postdetailview';
import About from '../Pages/about';
import PageNotFound from '../Pages/pagenotfound'

function MasterComponent() {

    return (
        <>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/posts/:id`}children={<PostDetailView />} />
                <Route path={`${process.env.PUBLIC_URL}/about`}>
                    <About />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/`}>
                    <PostListComponent />
                </Route>
                <Route component={PageNotFound} />
            </Switch>
        </>
    )
}

export default MasterComponent