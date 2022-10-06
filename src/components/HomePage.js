import styled from "styled-components";

export default function HomePage() {
  return (
    <ContainerHome>
      <h2>Selecione o filme</h2>
      <ContainerMovies>
        <div>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
            alt="Poster Zack Snyder Justice League"
          />
        </div>
        <div>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
            alt="Poster Zack Snyder Justice League"
          />
        </div>
        <div>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
            alt="Poster Zack Snyder Justice League"
          />
        </div>
        <div>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
            alt="Poster Zack Snyder Justice League"
          />
        </div>
        <div>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
            alt="Poster Zack Snyder Justice League"
          />
        </div>
        <div>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
            alt="Poster Zack Snyder Justice League"
          />
        </div>
        <div>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
            alt="Poster Zack Snyder Justice League"
          />
        </div>
        <div>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
            alt="Poster Zack Snyder Justice League"
          />
        </div>
        <div>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
            alt="Poster Zack Snyder Justice League"
          />
        </div>
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
