import { Link } from "react-router-dom";
import styled from 'styled-components';


const StyledLink = styled(Link)``;

function Navbar(){
    return (
        <div >
            <ul id="nav">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/post/create-post'>Create Post</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;