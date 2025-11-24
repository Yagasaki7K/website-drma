import React from 'react'
import styled from 'styled-components'

const SideMenu = () => {
    return (
        <SideMenuDetails>
            <p>Menu</p>
            <button onClick={() => window.location.href = '/'}>Home</button>
            <button onClick={() => window.location.href = '/feliz-natal'}>Feliz Natal</button>
            <button onClick={() => window.location.href = '/leka-eventos'}>Leka Eventos</button>

            <p>Boletins</p>
            <button onClick={() => window.location.href = '/boletim-0105'}>Janeiro 2005</button>
            <button>Fevereiro 2005</button>
            <button>Março 2005</button>
            <button>Abril 2005</button>
            <button>Maio 2005</button>
            <button onClick={() => window.location.href = '/boletim-0605'}>Junho 2005</button>
            <button>Julho 2005</button>

            <p>Páginas</p>
            <button onClick={() => window.location.href = '/marcos'}>Marcos</button>
            <button onClick={() => window.location.href = '/lena'}>Lena</button>
            <button onClick={() => window.location.href = '/marlon'}>Marlon</button>
            <button onClick={() => window.location.href = '/marcelo'}>Marcelo</button>
            <button onClick={() => window.location.href = '/marcelo'}>Thamires</button>
            <button onClick={() => window.location.href = '/marcelo'}>Karol</button>
            <button onClick={() => window.location.href = '/marcelo'}>Talita</button>
            <button onClick={() => window.location.href = '/marcelo'}>Jota</button>
        </SideMenuDetails>
    )
}

export default SideMenu

const SideMenuDetails = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    width: clamp(12rem, 18vw, 14rem);
    align-self: flex-start;

    @media (min-width: 1800px) {
        width: 16rem;
    }

    @media (max-width: 960px) {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem 1rem;
        margin-top: 0;
    }

    p {
        font-weight: bold;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #0f2d51;
        margin-bottom: 0.35rem;
    }

    button {
        background: rgb(196,147,25);
        background: linear-gradient(0deg, rgba(196,147,25,1) 0%, rgba(255,255,255,1) 50%, rgba(196,147,25,1) 100%);
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.7rem;
        width: 100%;
        border: 2px solid #0f2d51;
        font-weight: bold;
        margin-bottom: 0.8rem;
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
            background: rgb(255,255,255);
            background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(196,147,25,1) 50%, rgba(255,255,255,1) 100%);
            color: #fff;
            transform: translateY(-1px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
        }
    }
    
    @media (max-width: 960px) {
        button {
            flex: 1 1 9.5rem;
            width: auto;
        }
    }
`;