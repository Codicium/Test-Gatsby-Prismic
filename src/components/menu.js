import { Link } from "gatsby"
import React from "react"

const Menu = () => {
    return(
        <div
        style={{
            background: "lightgrey",
            paddingTop: '15px', 
        }}
        >
            <ul style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",              
            }}
            >
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="/about">About</Link> 
                </li>
                <li>
                    <Link to="/blog">Blog</Link> 
                </li>
            </ul>

       </div>
    )
}

export default Menu