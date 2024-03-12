import styled from "styled-components"

const Opcao = styled.li`
font-size: 1rem;
min-width: 120px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
gap: 1.2rem;
height: 100%;
cursor: pointer;
`

const Opcoes = styled.ul`
display: flex;
` 

const textoopcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHAS ESTANTE']

function OpcoesHeader() {
    return(
      <Opcoes>
            { textoopcoes.map( (texto) => (
             <Opcao><p>{texto}</p></Opcao>
        ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader