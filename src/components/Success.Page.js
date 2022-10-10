import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage({
  booking,
  showtime,
  setBooking,
  setShowtime,
}) {
  const navigate = useNavigate();

  const backToHomPage = function () {
    setBooking([]);
    setShowtime(undefined);
    navigate("/");
  };

  const cpfToString = function (cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

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
        <p data-identifier="movie-session-infos-reserve-finished">
          {showtime.movie.title}
        </p>
        <p data-identifier="movie-session-infos-reserve-finished">
          {showtime.day.date} {showtime.name}
        </p>
      </InfoBox>
      <InfoBox>
        <h3>Ingressos</h3>
        <hr />

        {booking.map((buyer) => (
          <Ticket key={buyer.seat}>
            <p data-identifier="seat-infos-reserve-finished">
              Assento: {buyer.seat}
            </p>
            <p data-identifier="buyer-infos-reserve-finished">
              Nome: {buyer.name}
            </p>
            <p data-identifier="buyer-infos-reserve-finished">
              CPF: {cpfToString(buyer.cpf)}
            </p>
            <hr />
          </Ticket>
        ))}
      </InfoBox>
      <button
        onClick={backToHomPage}
        className="btn"
        data-identifier="back-to-home-btn"
      >
        Voltar para Home
      </button>
    </ContainerSuccess>
  );
}

const ContainerSuccess = styled.section`
  width: 100vw;
  padding: 0 30px;
  margin-top: 67px;
  .btn {
    display: block;
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
  hr {
    margin: 15px 0;
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
    text-transform: capitalize;
  }
`;

const Ticket = styled.div``;
