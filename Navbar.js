
import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
                <nav className="nav-wrapper">
                    <div className="container">
                        <Link to="/" className="brand-logo">DASHBOARD</Link>
                        
                        <ul className="right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/help">Help</Link></li>
                        </ul>
                    </div>
                </nav>  
        );
    }
}