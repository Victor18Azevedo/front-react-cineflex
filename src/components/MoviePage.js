import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Footer from "./Footer";
import styled from "styled-components";

export default function MoviePage() {
  const { idMovie } = useParams();
  const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`;

  const [movie, setMovie] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const request = axios.get(URL);

    request.then((response) => {
      setMovie(response.data);
    });

    request.catch((error) => {
      console.log(error.response.data);
    });
  }, []);

  if (!movie) {
    return <div>Carregando</div>;
  }

  return (
    <ContainerMovie>
      <h2>Selecione o Horário</h2>
      {movie.days.map((day) => (
        <BoxShowtime key={day.id}>
          <p data-identifier="session-date">
            {day.weekday} - {day.date}
          </p>
          <div className="showtime-box">
            {day.showtimes.map((showtime) => (
              <button
                key={showtime.id}
                onClick={() => navigate(`/sessao/${showtime.id}`)}
                className="showtime btn"
                data-identifier="hour-minute-btn"
              >
                <span>{showtime.name}</span>
              </button>
            ))}
          </div>
        </BoxShowtime>
      ))}
      <Footer movieName={movie.title} moviePoster={movie.posterURL} />
    </ContainerMovie>
  );
}

const ContainerMovie = styled.section`
  width: 100vw;
  padding: 0 24px;
  margin-top: 67px;
  margin-bottom: 130px;
  h2 {
    font-size: 24px;
    line-height: 100px;
    text-align: center;
  }
`;
const BoxShowtime = styled.div`
  margin-bottom: 23px;
  p {
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 22px;
  }
  .showtime-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .showtime {
    width: 83px;
    height: 43px;
    background-color: #e8833a;
    color: #fff;
    font-size: 18px;
    line-height: 43px;
    text-align: center;
    border: none;
    border-radius: 3px;
  }
`;
