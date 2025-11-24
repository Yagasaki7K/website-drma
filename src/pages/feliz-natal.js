import React from 'react'
import styled from 'styled-components'

const FelizNatal = () => {
    return (
        <FelizNatalDetails>
            <title>Um Feliz Natal para todos</title>

            <div className="background"></div>

            <div className="main">
                <img src="images/guirlanda.gif" />

                <div className="text green">
                    <p>QUISERA PODERMOS NESTE NATAL</p>
                    <p>CUMPRIMENTAR CADA UMA DAS PESSOAS QUE GOSTARÍAMOS,</p>
                    <p>NO ENTANTO, SENDO ISSO IMPOSSÍVEL,</p>
                    <p>TRANSMITO AQUI O QUE DIRIA PESSOALMENTE</p>
                    <p>ESPERANDO QUE ESSE DESEJO DE FELICIDADE</p>
                    <p>SE CONSOLIDE CADA VEZ MAIS.</p>
                </div>

                <h4>Feliz Natal ! </h4>
                <img src="images/santabells.gif" alt="" />

                <div className="text2">
                    <p>Que o Natal esteja vivo em cada dia do Ano que</p>
                    <p>se inicia para que possamos juntos viver  a PAZ!! </p>
                </div>

                <img src="images/img223.gif" alt="" />

                <div className="text3 green">
                    <p>E QUE O ANO DE 2005 SEJA REPLETO DE REALIZAÇÕES!!!</p>
                    <p>SÃO OS NOSSOS SINCEROS VOTOS!!!</p>
                    <p>MARCOS ALVES</p>
                </div>

                <audio controls autoPlay>
                    <source src="songs/celinedionhappychristmas5.mp3" type="audio/mpeg" autoPlay />
                </audio>

                <a href="/"><img src="images/bthome.gif" className="back" /></a>
            </div>
        </FelizNatalDetails>
    )
}

export default FelizNatal

const FelizNatalDetails = styled.div`
    min-height: 100vh;
    padding: clamp(1.5rem, 3vw, 3rem);

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("images/carousel1_firstbackground.gif");
        z-index: -1;
        background-size: cover;
        background-position: center;
        opacity: 0.4;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        margin: 2rem auto;
        gap: clamp(0.75rem, 1.5vw, 1.25rem);
        padding: clamp(1rem, 2vw, 2rem);
        max-width: 960px;
        background: rgba(255, 255, 255, 0.85);
        border-radius: 16px;
        box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
    }

    .green {
        font-family: "Arial Rounded MT Bold";
        color: rgb(0, 255, 0);
        font-weight: bold;
    }

    h4 {
        font-family: 'Arial';
        font-size: clamp(1.5rem, 2vw, 2.25rem);
    }

    .text {
        margin-top: 0.5rem;
        display: grid;
        gap: 0.5rem;
    }

    .text2 {
        font-weight: bold;
        color: red;
        font-size: clamp(1.1rem, 2vw, 1.3rem);
    }

    .text3 {
        font-weight: bold;
        color: rgb(0, 255, 0);
        font-size: clamp(1.2rem, 2vw, 1.6rem);

        p {
            margin: clamp(1rem, 2vw, 1.5rem) 0;
            font-weight: 200;

            &:first-child {
                font-weight: bold;
            }
        }
    }

    .back {
        margin-top: 1rem;
        align-self: center;
    }
    
    audio {
        width: min(320px, 100%);
    }
`;