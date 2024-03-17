import logo from '../../imagens/Logo.svg'
import styled from 'styled-components';

const Logoo = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.4rem;
`

  function Logo(){
    return(
        <Logoo>
            <img
            src={logo}
             alt='Logo da Alura' 
             className='logo-img'>
             </img>
            <p>  <strong> Alura </strong> Books</p>
        </Logoo>
    )
}

export default Logo;