import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';


const AppContainer = styled.div`

      height: 100vh;
      background-image: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
`

function Home() {
  return (
     <AppContainer>

     <Pesquisa />

     </AppContainer>


  );
}

export default Home;

