import styled from "styled-components";

export default function Home() {
    return (
        <HomeDetails>
            <title>Dr. Marcos Alves</title>
            <div className="background"></div>
            <p>"Existe muita coisa a ser feita, porém, o dia para que tudo termine ainda chegará". <br />Marcos</p>

            <div className="links">
                <a href="/feliz-natal">Tenha um feliz natal!!!</a>
                <a href="/leka-eventos">Leka Eventos</a>
            </div>

            <hr />

            <div className="imgs">
                <a href="/marcos"><img src="images/index.1.gif" /></a>
                <a href="/lena"><img src="images/mvc1.jpg" /></a>
            </div>

            <hr />

            <p>Essa página foi modificada na Terça-feira, 31 de Maio de 2005</p>
            <p>E restaurada na Terça-feira, 14 de Maio de 2024</p>
        </HomeDetails>
    );
}

const HomeDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: clamp(1.5rem, 3vw, 3.5rem);
    margin: 0 auto;
    max-width: 1200px;
    gap: clamp(1.5rem, 3vw, 3rem);
    text-align: center;

    @media (min-width: 1800px) {
        max-width: 1400px;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("images/fundo1.gif");
        z-index: -1;
        background-size: cover;
        background-position: center;
        opacity: 0.4;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.25rem);
        line-height: 1.6;
    }

    .links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;

        a {
            margin: 0;
            padding: 0.65rem 1.25rem;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.85);
            border: 1px solid #0f2d51;
            font-weight: 700;
            transition: transform 0.2s ease, box-shadow 0.2s ease;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
            }
        }

    }

    hr {
        margin: 0.5rem 0;
        width: 100%;
        border: 1px solid #ccc;
        opacity: 0.7;
    }

    .imgs {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: clamp(1rem, 3vw, 3rem);

        a {
            margin: 0;

            img {
                width: clamp(10rem, 22vw, 20rem);
                border-radius: 10px;
                box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
            }
        }
    }
`;