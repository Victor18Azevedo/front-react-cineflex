import styled from "styled-components";

export default function SuccessPage() {
  return (
    <ContainerSuccess>
      <TitleSuccess>
        <h2>
          Pedido feito
          <br />
          com sucesso!
        </h2>
      </TitleSuccess>
      <InfoBox>
        <h3>Filme e sessão</h3>
        <p>Enola Holmes </p>
        <p>24/06/2021 15:00</p>
      </InfoBox>
      <InfoBox>
        <h3>Ingressos</h3>
        <p>Assento 15</p>
        <p>Assento 16</p>
      </InfoBox>
      <InfoBox>
        <h3>Comprador</h3>
        <p>Nome: João da Silva </p>
        <p>CPF: 123.456.789-10</p>
      </InfoBox>
      <div className="btn">Voltar para Home</div>
    </ContainerSuccess>
  );
}

const ContainerSuccess = styled.section`
  width: 100vw;
  padding: 0 30px;
  margin-top: 67px;
  .btn {
    width: 225px;
    height: 42px;
    margin: 0 auto;
    color: #fff;
    font-size: 18px;
    line-height: 42px;
    text-align: center;
    font-style: normal;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    margin-top: 80px;
  }
`;
const TitleSuccess = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: #247a6b;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1rem;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  margin-top: 30px;
  h3 {
    color: #293845;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  }
  p {
    font-size: 22px;
    line-height: 28px;
  }
`;
