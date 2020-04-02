import React from 'react';


function Loading() {
    return (
        <div style={{minHeight:"780px",paddingTop:"250px"}}>
            <div className="cssload-triangles">
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri"></div>
                <div className="cssload-tri cssload-invert"></div>
            </div>
        </div>
    )
}

export default Loading