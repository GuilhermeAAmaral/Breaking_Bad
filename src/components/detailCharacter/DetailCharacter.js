import React from 'react'
import { useHistory } from 'react-router'
import {C_Principal, C_Characters, C_image, Green} from './styled'
import { goToHome } from '../../routers/cordinator'

//componente responsável por renderizar os detalhes do personagem selecionado na página inicial

const DetailCharacter = (props) => {

    const history = useHistory()


    return (

        <C_Principal>

            <C_image>
                <img src={props.index.img} />
            </C_image>

            <C_Characters>   
                <p><Green>Name: </Green>{props.index.name}</p>
                <p><Green>Nickname: </Green>{props.index.nickname}</p>
                <p><Green>Birthday: </Green>{props.index.birthday}</p>
                <p><Green>Occupation: </Green>{props.index.occupation}</p>
                <p><Green>Portrayed: </Green>{props.index.portrayed}</p>
                <p><Green>Status: </Green>{props.index.status}</p>
                <p><Green>Category: </Green>{props.index.category}</p> 
                <button onClick={()=> goToHome(history)}>Voltar</button>
            </C_Characters>

        </C_Principal>
    )
}

export default DetailCharacter