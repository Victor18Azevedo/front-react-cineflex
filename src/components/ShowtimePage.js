import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import Footer from "./Footer";

export default function ShowtimePage() {
  // const seats = Array.from({ length: 50 }, (_, i) => i + 1);
  const { idShowtime } = useParams();
  const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idShowtime}/seats`;

  const [showtime, setShowtime] = useState(undefined);
  const [seatsSelected, setSeatsSelected] = useState([]);
  const [form, setForm] = useState({ name: "", cpf: "" });

  useEffect(() => {
    const request = axios.get(URL);

    request.then((response) => {
      setShowtime(response.data);
    });

    request.catch((error) => {
      console.log(error.response.data);
    });
  }, []);

  const handleForm = function (event) {
    event.preventDefault();
    const { name, value } = event.target;
    if (value) setForm({ ...form, [name]: value });
  };

  // console.log(form);
  // console.log(showtime);
  console.log(seatsSelected);

  const selectSeat = function (seat) {
    if (seat.isAvailable) {
      if (!seatsSelected.includes(seat.id)) {
        setSeatsSelected([...seatsSelected, seat.id]);
      } else {
        setSeatsSelected(
          seatsSelected.filter((item) => {
            return item !== seat.id;
          })
        );
      }
    } else {
      alert("Esse assento não está disponível");
    }
  };

  const setBackColor = function (seat) {
    if (seatsSelected.includes(seat.id)) {
      return "#1AAE9E";
    } else {
      return seat.isAvailable ? "#C3CFD9" : "#FBE192";
    }
  };

  const setBorderColor = function (seat) {
    if (seatsSelected.includes(seat.id)) {
      return "#0E7D71";
    } else {
      return seat.isAvailable ? "#7B8B99" : "#F7C52B";
    }
  };

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

  if (!showtime) {
    return <div>Carregando</div>;
  }

  return (
    <ContainerShowtime>
      <h2>Selecione o(s) assento(s)</h2>
      <SeatsBox>
        {showtime.seats.map((seat) => (
          <Seat
            key={seat.id}
            onClick={() => selectSeat(seat)}
            backColor={setBackColor(seat)}
            borderColor={setBorderColor(seat)}
          >
            {seat.name}
          </Seat>
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

      <Form onSubmit={handleForm}>
        <label htmlFor="name">Nome do comprador:</label>
        <input
          type={"text"}
          id="name"
          name="name"
          value={form.name}
          onChange={handleForm}
          placeholder="Digite seu nome..."
          required
        ></input>
        <label htmlFor="cpf">CPF do comprador:</label>
        <input
          type={"number"}
          id="cpf"
          name="cpf"
          value={form.cpf}
          onChange={handleForm}
          placeholder="Digite seu CPF..."
          required
        ></input>
        <input
          className="btn"
          type={"submit"}
          placeholder="Reservar assento(s)"
        ></input>
      </Form>

      <Footer
        movieName={showtime.movie.title}
        moviePoster={showtime.movie.posterURL}
        showtime={`${showtime.day.weekday} - ${showtime.name}`}
      />
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
  label {
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
