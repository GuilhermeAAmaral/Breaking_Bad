import React, { useContext } from 'react'
import { useParams } from 'react-router'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import DetailCharacter from '../../components/detailCharacter/DetailCharacter'

//página responsavel pelos detalhes dos personagens 

const DetailPage = () => {

    const params = useParams()

    const getDetailCharacters = useRequestData ([], `${BASE_URL}/characters/${params.id}`)

    const renderDetailCharacter = getDetailCharacters.map ((index) => {
        return <DetailCharacter key={index.char_id} index={index}/>
    })

    return (

        <div>
            {renderDetailCharacter}
        </div>
    )
}

export default DetailPage