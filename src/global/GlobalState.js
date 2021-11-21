import GlobalContext from "./GlobalContext";
import useRequestData from "../hooks/useRequestData"
import {BASE_URL} from "../constants/urls"


const GlobalState = (props) => {
    
    //requisições feitas com hook personalizadp
    const getAllCharacters = useRequestData ([], `${BASE_URL}/characters`)
    const getAllEpisodes = useRequestData ([], `${BASE_URL}/episodes`)

    //extração das requisições para usar no código
    const requests = {getAllCharacters, getAllEpisodes}

    return (

        <GlobalContext.Provider value = {{requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState