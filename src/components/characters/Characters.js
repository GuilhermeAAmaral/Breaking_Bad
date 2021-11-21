import React from 'react' 
import { useHistory } from 'react-router'
import { C_Principal, C_Characters } from './styled'
import { goToDetail } from '../../routers/cordinator'

//componente para renderização dos personagens na tela inicial

const Characters = (props) => {

    const history = useHistory()

    const onClickCard = (id) => {
        goToDetail (history, id)
    }
    
    return (

        <C_Principal>

        <C_Characters onClick={() => onClickCard(props.index.char_id)}>
            <img src={props.index.img} />
            <p><strong>{props.index.name}</strong></p>
        </C_Characters>

        </C_Principal>
    )
}

export default Characters
