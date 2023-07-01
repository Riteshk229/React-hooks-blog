import { Link } from "react-router-dom";
import styled from 'styled-components';

// to style third party components pass it as a =n argument in styled
const StyledLink = styled(Link)`

    text-decoration: none;
    color: #9e9e9e;

    &:hover{
        text-decoration: underline;
      }

`;

function Navbar(){
    return (
        <div >
            <ul id="nav">
                <li>
                    <StyledLink to='/'>Home</StyledLink>
                </li>
                <li>
                    <StyledLink to='/post/create-post'>Create Post</StyledLink>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;