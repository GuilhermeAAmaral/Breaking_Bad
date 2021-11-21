import styled from 'styled-components'

export const C_Principal = styled.div`
display: inline-block;
margin: 35px 80px;
`

export const C_Characters = styled.div`
align-items: center;

img {
    width: 510px;
    height: 550px;
    transform: scale(0.9);
    transition: ease 0.2s;
    cursor: pointer;
}


img:hover {
    transform: scale(1);
    border-bottom: solid 5px green;
    opacity: 0.5;
}

p {
    font-size: 35px;
    padding: 5px;
    text-align: center;
    margin: 5px 10px; 
    
}
`