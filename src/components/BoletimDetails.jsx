import styled from "styled-components"

const BoletimDetails = styled.div`
    min-height: 100vh;
    display: flex;
    gap: clamp(1rem, 2vw, 2.5rem);
    padding: clamp(1rem, 3vw, 3rem);
    position: relative;
    max-width: 1600px;
    margin: 0 auto;

    @media (min-width: 2200px) {
        max-width: 1900px;
    }

    @media (max-width: 960px) {
        flex-direction: column;
    }

    .background {
        background: url('/images/fundo3.jpg');
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        background-size: cover;
        background-position: center;
        opacity: 0.4;
    }

    .main {
        flex: 1;
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: 2rem;
        padding: clamp(1rem, 2vw, 2rem);
        background: rgba(255, 255, 255, 0.85);
        border-radius: 12px;
        box-shadow: 0 14px 40px rgba(0, 0, 0, 0.14);
        overflow-x: auto;

        table {
            width: 100%;
            min-width: 720px;
            border-collapse: collapse;
        }

        td {
            padding: 0.35rem;
        }

        hr {
            margin: 1rem 0;
            width: 100%;
        }

        .imgBirthday {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;

            img {
                width: min(480px, 100%);
                max-width: 100%;
                height: auto;
            }

            p {
                margin-top: 1rem;
            }
        }

        .imgBirthdaySmall {
            img {
                width: clamp(5rem, 8vw, 6rem);
                margin-left: 0;
            }
        }
    }
`;

export default BoletimDetails
