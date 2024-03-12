import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';

const AppContainer = styled.div`

      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
`

function App() {
  return (
     <AppContainer>
           
     <Header />

     <Pesquisa />

     <UltimosLancamentos />

     </AppContainer>


  );
}

export default App;

