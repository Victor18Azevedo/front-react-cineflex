import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HomePage() {
  const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const request = axios.get(URL);

    request.then((response) => {
      setMoviesList(response.data);
      // console.log(response.data);
    });

    request.catch((error) => {
      console.log(error.response.data);
    });
  }, []);

  if (!moviesList) {
    return;
  }

  return (
    <ContainerHome>
      <h2>Selecione o filme</h2>
      <ContainerMovies>
        {moviesList.map((movie) => (
          <div key={movie.id}>
            <Link to={`/filme/${movie.id}`}>
              <img
                src={movie.posterURL}
                alt={`Poster do filme ${movie.title}`}
              />
            </Link>
          </div>
        ))}
      </ContainerMovies>
    </ContainerHome>
  );
}

const ContainerHome = styled.section`
  width: 100vw;
  padding: 0 30px;
  margin-top: 67px;
  h2 {
    font-size: 24px;
    line-height: 100px;
    text-align: center;
  }
`;

const ContainerMovies = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  div {
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 129px;
    height: 193px;
    object-fit: cover;
  }
`;
