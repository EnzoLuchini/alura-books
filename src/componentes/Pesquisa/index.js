import styled from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { livros } from "./dadosPesquisa"

const Containerpesquisa = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 1.2rem;
`


const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
    color: #FFF;
`

const Resultado = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 1.2rem;
    cursor: pointer;
    font-size: 2rem;
    color: #FFF;
`

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <Containerpesquisa>
        <Titulo> Já sabe por onde começar? </Titulo>
        <Subtitulo> Encontre seu livro em nossa estante </Subtitulo>
        <Input 
            placeholder="Escreva sua proxima leitura"
            onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter( livros => livros.nome.includes(textoDigitado) )
                setLivrosPesquisados(resultadoPesquisa)
            }}
        />

        {livrosPesquisados.map( livros => (
            <Resultado>
            <img src="livros.src"></img>
            <p>{livros.nome}</p>
            </Resultado>
        ))}

        </Containerpesquisa>
    )
}

export default Pesquisa 