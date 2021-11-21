import React from 'react'
import { useParams } from 'react-router'
import DetailEpisodes from '../../components/detailEpisode/DetailEpisode'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'

//página responsável pelos detalhes dos episodios 

const EpisodesPage = () => {

    const params = useParams()

    const getDetailEpisode = useRequestData ([], `${BASE_URL}/episodes/${params.id}`)

    console.log ('deu certo requisição', getDetailEpisode)

    const renderEpisodes = getDetailEpisode.map ((index) => {
        return <DetailEpisodes index={index}/>
    })

    return (

        <div>
            {renderEpisodes}
        </div>
    )
}

export default EpisodesPage