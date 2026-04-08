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
    margin: 14rem auto 2rem;
    width: min(100%, 72rem);
    padding: 0 2rem;
    text-align: center;
    gap: 0.5rem;

    @media (max-width: 1366px) {
        margin-top: 8rem;
    }

    @media (max-width: 1024px) {
        margin-top: 6rem;
        padding: 0 1.5rem;
    }

    @media (max-width: 768px) {
        margin-top: 3.5rem;
        padding: 0 1rem;
    }

    @media (max-width: 313px) {
        margin-top: 2rem;
        padding: 0 0.625rem;
    }
    
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("images/fundo1.gif");
        z-index: -1;
    }

    .links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.75rem 2rem;
    
        a {
            margin-right: 0;
        }
    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 100%;
        border: 1px solid var #ccc;
    }

    .imgs {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 3rem;
        justify-content: center;

        a {
            margin-right: 0;

            img {
                width: 20rem;
            }
        }
    }

    @media (max-width: 768px) {
        .imgs a img {
            width: min(18rem, 90vw);
        }
    }
`
