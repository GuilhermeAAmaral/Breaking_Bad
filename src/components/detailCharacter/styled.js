import styled from 'styled-components'

export const C_Principal = styled.div`
display: flex;
flex-direction: row;
`

export const C_Characters = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 150px;
width: 600px;


p {
    font-size: 25px;
    padding-bottom: 20px;  
    padding-top: 5px;
    
}

button {
    margin-top: 30px;
    margin-left: 100px;
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

export const Green = styled.p`
display: inline;
color: green;
`

export const C_image = styled.div`

img {
    width: 550px;
    height: 580px;
    margin: 30px;
    border-bottom: solid 5px green;
   
}
`