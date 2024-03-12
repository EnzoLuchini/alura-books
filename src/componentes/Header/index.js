import OpcoesHeader from '../OpcoesHeader';
import Logo from '../logo';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`

    background-color: #fff;
    display: flex;
    justify-content: center;

`

function Header(){

return(

    <HeaderContainer>

            <Logo></Logo>
            <OpcoesHeader> </OpcoesHeader>
    
            <IconesHeader> </IconesHeader>
    </HeaderContainer>

)

}

export default Header