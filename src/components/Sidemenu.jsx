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
    gap: 0.4rem;
    flex-shrink: 0;

    p {
        font-weight: bold;
        font-size: 0.8rem;
        margin-top: 0.6rem;
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
        margin-bottom: 0.35rem;

        &:hover {
            background: rgb(255,255,255);
            background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(196,147,25,1) 50%, rgba(255,255,255,1) 100%);
            color: #fff;
        }
    }

    @media (max-width: 1024px) {
        padding: 1rem 0.75rem;

        button {
            width: 9rem;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 0.75rem;
        padding: 0.5rem 1rem;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        p {
            width: 100%;
            text-align: center;
            margin-top: 0.5rem;
        }

        button {
            margin-bottom: 0;
            width: min(10rem, 46%);
        }
    }

    @media (max-width: 313px) {
        padding: 0.5rem;
        button {
            width: 100%;
        }
    }
`
