import BoletimDetails from '@/components/BoletimDetails';
import SideMenu from '@/components/Sidemenu';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Benguiat Bk BT';
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-family: 'Times New Roman';
`;

const Message = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MessageText = styled.p`
  font-size: 1rem;
`;

const MessageSender = styled.a`
  font-size: 1rem;
  color: #0000FF;
`;

const Image = styled.img`
  width: 72px;
  height: 67px;
`;

const AniversariantesTitle = styled.h2`
  font-size: 2rem;
`;

const PassadoTitle = styled.h2`
  font-size: 2rem;
`;

const Boletim0605 = () => {
  return (
    <BoletimDetails>
      <SideMenu />

      <div className="background"></div>
      <div className="main">
        <Title>
          <img src="../images/leka.gif" alt="Logo" /> Boletim Informativo Mensal
        </Title>
        <Subtitle>Hortolândia – SP</Subtitle>
        <Subtitle><i>BI nº 13 Julho 2005</i></Subtitle>

        <Message>
          <MessageText>
            Mensagens recebidas pela passagem do aniversário do Boletim Informativo: Obrigado a todos !!!
          </MessageText>
          <MessageText>
            <Image src="/images/right_corner_anim.gif" alt="Corner" /> "Parabéns pelo aniversário do boletim. Pouco participo e muitas vezes não tenho tempo de ler, mas acho que cumpre a função de informação. Um abraço." enviada por <MessageSender href="mailto:de_alves@yahoo.com.br">Débora</MessageSender> em 02.06.2005.
          </MessageText>
        </Message>

        <AniversariantesTitle>Aniversariantes do mês</AniversariantesTitle>

        <PassadoTitle>Relembrando o passado</PassadoTitle>
        <img src="/images/anivesario.jpg" alt="Foto" />
        <Subtitle>Esta foto mostra a última festa de aniversário do avô Odilon e da Raquel, comemorado sempre nos meses de novembro. A maioria dos familiares presentes são da parte do Pompilio.</Subtitle>
      </div>
    </BoletimDetails>
  );
};

export default Boletim0605;
