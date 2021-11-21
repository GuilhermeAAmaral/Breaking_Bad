import React, { useContext } from 'react'
import GlobalContext from '../../global/GlobalContext'
import Characters from '../../components/characters/Characters'
import { C_Characters, C_Episodes, C_Principal } from './styled'
import logo from '../../image/logo.png'
import Episodes from '../../components/episodes/Episodes'

//página inicial do projeto 

const HomePage = () => {

    const {requests} = useContext (GlobalContext)

    const renderCharacters = requests.getAllCharacters.map ((index) => {
        return <Characters key={index.char_id} index={index} />
    })

    const renderEpisodes = requests.getAllEpisodes.map ((index) => {
        return <Episodes index={index}/>
    })

    return (

        <C_Principal>
            
            <img src={logo}/>

            <C_Characters>
                {renderCharacters}
            </C_Characters>    

            <C_Episodes>
                {renderEpisodes}
            </C_Episodes>
            
        </C_Principal>
    )
}

export default HomePage