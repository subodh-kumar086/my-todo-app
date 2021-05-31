import {link} from "react-router-dom";
export default function Navbar()
{
    return(
        <ul>
            <li>
                <link to="/">Home</link>
            </li>
            <li>
                <link to="/Products">Products</link>
            </li>
            <li>
                <link to="/Post">Post</link>
            </li>
            <li>
                <link to="/Admin">Admin</link>
            </li>
        </ul>
        

    );
}