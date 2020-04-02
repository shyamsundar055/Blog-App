import React from 'react';
import logo from '../logo.svg';
import { 
    Link    
  } from "react-router-dom";

function NavBar(props) { 
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} width="36" height="36" alt=""/> Blog
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={`${process.env.PUBLIC_URL}/`}>Home</Link> 
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link" to={`${process.env.PUBLIC_URL}/about`}>About</Link> 
                    </li> 
                </ul> 
            </div>
            </div>
        </nav>
        <div className="container">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            {
                props.path.length > 0 ?
                <li className={props.path.length > 0 ? "breadcrumb-item" :"breadcrumb-item active"} >
                    <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link> 
                </li>:""
            }
            {
                props.path.length > 0 ?
                <li className="breadcrumb-item active" aria-current="page">{props.path}</li>
                : ""
            }
            </ol> 
            </nav>
      </div>
      </>
    )
}

export default NavBar