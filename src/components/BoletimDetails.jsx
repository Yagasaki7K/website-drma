import styled from "styled-components"

const BoletimDetails = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 0.5rem 1rem 2rem;

    .background {
        background: url('/images/fundo3.jpg');
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .main {
        width: min(100%, 50rem);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        padding: 0 0.5rem;

        table {
            max-width: 100%;
        }

        hr {
            margin: 1rem 0;
        }

        .imgBirthday {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            img {
                width: 80%;
            }

            p {
                margin-top: 1rem;
            }
        }

        .imgBirthdaySmall {
            display: flex;
            justify-content: center;

            img {
                width: 6rem;
                margin-left: 0;
            }
        }
    }

    .tableWrapper {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 1366px) {
        .main {
            width: min(100%, 48rem);
        }
    }

    @media (max-width: 1024px) {
        padding: 0.5rem 0.75rem 1.5rem;

        .main {
            width: min(100%, 42rem);
            margin-top: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        padding: 0.25rem 0.5rem 1rem;

        .main {
            width: 100%;
            margin-top: 0;
            padding: 0;
        }
    }

    @media (max-width: 313px) {
        padding: 0.25rem;

        .main {
            font-size: 0.9rem;
        }
    }
`

export default BoletimDetails
