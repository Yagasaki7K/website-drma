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
            </div>
        </FelizNatalDetails>
    )
}

export default FelizNatal

const FelizNatalDetails = styled.div`
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("images/carousel1_firstbackground.gif");
        z-index: -1;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        margin: 2rem 0;
    }

    .green {
        font-family: "Arial Rounded MT Bold";
        color: rgb(0, 255, 0);
        font-weight: bold;
    }

    h4 {
        font-family: 'Arial';
        font-size: 2rem;
    }

    .text {
        margin-top: 1rem;
    }

    .text2 {
        font-weight: bold;
        color: red;
        font-size: 1.2rem;
    }

    .text3 {
        font-weight: bold;
        color: rgb(0, 255, 0);
        font-size: 1.5rem;

        p {
            margin: 2rem 0;
            font-weight: 200;

            &:first-child {
                font-weight: bold;
            }
        }
    }
`