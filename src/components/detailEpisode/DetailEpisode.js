import React from 'react'
import { C_DetailEpisodes, C_Principal, Green } from './styled'
import { goToHome } from '../../routers/cordinator'
import { useHistory } from 'react-router'

//componente responsavel por renderizar os detalhes do episodio selecionado na página inicial

const DetailEpisodes = (props) => {

    const history = useHistory()

    return (

        <C_Principal> 

            <C_DetailEpisodes>
                <p>Serie: <Green>{props.index.series}</Green></p>
                <p>Season: <Green>{props.index.season}</Green></p>
                <p>Episode: <Green>{props.index.episode}</Green></p>
                <p>Title: <Green>{props.index.title}</Green></p>
                <p>Air Date: <Green>{props.index.air_date}</Green></p>
                <p>Characters: <Green>{props.index.characters}</Green></p>
            </C_DetailEpisodes>

            <button onClick={() => goToHome(history)}>Voltar</button>
            
        </C_Principal>

    )
}

export default DetailEpisodes