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
                <Route path="/posts/:id" children={<PostDetailView />} />
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <PostListComponent />
                </Route>
                <Route component={PageNotFound} />
            </Switch>
        </>
    )
}

export default MasterComponent