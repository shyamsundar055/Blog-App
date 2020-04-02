import React from 'react';
import NavBar from '../Pages/navbar'
import { 
    useLocation
} from "react-router-dom";

function HeaderComponent (){
    let location = useLocation();
    let path = location.pathname.length > 1 ? location.pathname.replace("/posts/","Post ID:") : "";
    
    return(
        <NavBar path={path} />
    )
}

export default HeaderComponent