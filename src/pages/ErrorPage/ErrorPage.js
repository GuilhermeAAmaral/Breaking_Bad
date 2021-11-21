import React from 'react'
import logo from '../../image/logo.png'
import { C_Principal } from './styled'

//página de erro 

const ErrorPage = () => {

    return (

        <C_Principal>
            <img src={logo} />
            <h1>Page not found :(</h1>
        </C_Principal>
    )
}

export default ErrorPage