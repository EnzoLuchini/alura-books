import OpcoesHeader from '../OpcoesHeader';
import Logo from '../logo';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`

    background-color: #fff;
    display: flex;
    justify-content: center;

`

function Header(){

return(

    <HeaderContainer>
        <Link to="/"> 
            <Logo>
            </Logo> 
        </Link> 
        <OpcoesHeader> </OpcoesHeader>
        <IconesHeader> </IconesHeader>
    </HeaderContainer>

)

}

export default Header