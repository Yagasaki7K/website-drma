import styled from "styled-components"

const BoletimDetails = styled.div`
    display: flex;

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
        width: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;

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
            img {
                width: 6rem;
                margin-left: 8rem;
            }
        }
    }
`

export default BoletimDetails