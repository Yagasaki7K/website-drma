import styled from "styled-components";

export default function Home() {
    return (
        <HomeDetails>
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
    margin-top: 20rem;
    
    .background {
        position: absolute;
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
    
        a {
            margin-right: 2rem;
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

        a {
            margin-right: 5rem;

            img {
                width: 20rem;
            }
        }
    }
`