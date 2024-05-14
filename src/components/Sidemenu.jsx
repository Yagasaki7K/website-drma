import React from 'react'
import styled from 'styled-components'

const SideMenu = () => {
    return (
        <SideMenuDetails>
            <p>Boletins</p>

            <button>Exemplo</button>
            <button>Exemplo</button>
            <button>Exemplo</button>
            <button>Exemplo</button>

            <p>Páginas</p>
            <button>Exemplo</button>
            <button>Exemplo</button>
            <button>Exemplo</button>
        </SideMenuDetails>
    )
}

export default SideMenu

const SideMenuDetails = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;

    p {
        font-weight: bold;
        font-size: 0.8rem;
    }

    button {
        background: rgb(196,147,25);
        background: linear-gradient(0deg, rgba(196,147,25,1) 0%, rgba(255,255,255,1) 50%, rgba(196,147,25,1) 100%);
        cursor: pointer;
        padding: 0.4rem 1rem;
        border-radius: 5px;
        font-size: 0.7rem;
        width: 10rem;
        border: 2px solid #0f2d51;
        font-weight: bold;
        margin-bottom: 1rem;

        &:hover {
            background: rgb(255,255,255);
            background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(196,147,25,1) 50%, rgba(255,255,255,1) 100%);
            color: #fff;
        }
    }
`