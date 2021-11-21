import React from 'react' 
import { useHistory } from 'react-router'
import {C_Episodes, C_Princial, Green} from './styled'
import { goToEpisodes } from '../../routers/cordinator'

//componente responsável por renderizar os episodios na página inicial

const Episodes = (props) => {

    const history = useHistory()

    const onClickCardEpisodes = (id) => {
        goToEpisodes (history, id)
    }

    return (

        <C_Princial>

            <C_Episodes onClick={() => onClickCardEpisodes(props.index.episode_id)}>
                <div>
                <p>Episode: {props.index.episode}</p>
                <Green>{props.index.title}</Green>
                </div>
            </C_Episodes>

        </C_Princial>
    )
}

export default Episodes