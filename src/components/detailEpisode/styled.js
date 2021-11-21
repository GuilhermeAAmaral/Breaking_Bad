import styled from 'styled-components'

export const C_Principal = styled.div`
margin-top: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

button {
    margin: 50px;
    background-color: #222;
    color: white;
    font-size: 15.5px;
    font-weight: 600;
    border: none;
    width: 250px;
    height: 50px;
}

button:hover {
    cursor: pointer;
    background-color: green;
}
`

export const C_DetailEpisodes = styled.div`
width: 800px;

p {
    font-size: 25px;
    text-align: justify;
    padding: 10px;
}
`

export const Green = styled.p`
display: inline;
color: green;
`
