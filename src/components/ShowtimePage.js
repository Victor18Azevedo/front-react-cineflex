import styled from "styled-components";
import Footer from "./Footer";

export default function ShowtimePage() {
  const seats = Array.from({ length: 50 }, (_, i) => i + 1);
  const seatsLabel = [
    {
      text: "Selecionado",
      color: "#1AAE9E",
      borderColor: "#0E7D71",
    },
    {
      text: "Disponível",
      color: "#C3CFD9",
      borderColor: "#7B8B99",
    },
    {
      text: "Indisponível",
      color: "#FBE192",
      borderColor: "#F7C52B",
    },
  ];

  const setBackColor = function (color) {};

  return (
    <ContainerShowtime>
      <h2>Selecione o(s) assento(s)</h2>
      <SeatsBox>
        {seats.map((seat) => (
          <Seat key={seat}>{seat}</Seat>
        ))}
      </SeatsBox>
      <SeatsLabelBox>
        {seatsLabel.map((seatLabel) => (
          <div key={seatLabel.text}>
            <Seat
              backColor={() => {
                return seatLabel.color;
              }}
              borderColor={() => {
                return seatLabel.borderColor;
              }}
            />
            <span>{seatLabel.text}</span>
          </div>
        ))}
      </SeatsLabelBox>

      <Form>
        <span>Nome do comprador:</span>
        <input type={"text"} value="Digite seu nome..."></input>
        <span>CPF do comprador:</span>
        <input type={"text"} value="Digite seu CPF..."></input>
        <input
          className="btn"
          type={"submit"}
          value="Reservar assento(s)"
        ></input>
      </Form>

      <Footer />
    </ContainerShowtime>
  );
}

const ContainerShowtime = styled.section`
  width: 100vw;
  padding: 0 24px;
  margin-top: 67px;
  h2 {
    font-size: 24px;
    line-height: 100px;
    text-align: center;
  }
`;

const SeatsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px 8px;
  flex-wrap: wrap;
`;

const Seat = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${(props) =>
    props.backColor ? props.backColor : "#c3cfd9"};
  font-size: 11px;
  text-align: center;
  line-height: 26px;
  border-radius: 26px;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : "#808f9d")};
`;

const SeatsLabelBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #4e5a65;
  font-size: 13px;
  line-height: 15px;
  margin-top: 12px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Form = styled.form`
  width: 100%;
  margin-top: 20px;
  span {
    display: inline-block;
    font-size: 18px;
    line-height: 21px;
    margin: 10px 0 5px;
  }
  input {
    display: block;
    width: 100%;
    max-width: 420px;
    height: 51px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    color: #afafaf;
    font-size: 18px;
    font-style: italic;
    padding: 0 10px;
  }
  .btn {
    width: 225px;
    height: 42px;
    margin: 0 auto;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    margin-top: 20px;
  }
`;
