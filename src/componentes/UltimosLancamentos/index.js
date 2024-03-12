import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import CardRecomendacao from "../CardRecomendacao";
import imagemLivro from "../../imagens/Angular.svg"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 16px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos(){
    return(

    <UltimosLancamentosContainer>
        <Titulo 
            cor='#EB9B00' 
            tamanho='3rem'
        >ÚLTIMOS LANÇAMENTOS</Titulo>
        <NovosLivrosContainer>
            {livros.map(livros => (
                <img src={livros.src}/>
            ))}
        </NovosLivrosContainer>

        <CardRecomendacao
           titulo='Talvez você se interesse por'
           subtitulo='Angular 11'
           descricao='Construindo uma aplicação com angular'
           imagem={imagemLivro}
        />

   </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos;