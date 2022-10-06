import Footer from "./Footer";

import styled from "styled-components";

export default function MoviePage() {
  return (
    <ContainerMovie>
      <h2>Selecione o Horário</h2>
      <BoxShowtime>
        <p>Quinta-feira - 24/06/2021</p>
        <div className="showtime-box">
          <div className="showtime">
            <span>15:00</span>
          </div>
          <div className="showtime">19:00</div>
        </div>
      </BoxShowtime>
      <BoxShowtime>
        <p>Quinta-feira - 24/06/2021</p>
        <div className="showtime-box">
          <div className="showtime">
            <span>15:00</span>
          </div>
          <div className="showtime">19:00</div>
        </div>
      </BoxShowtime>
      <BoxShowtime>
        <p>Quinta-feira - 24/06/2021</p>
        <div className="showtime-box">
          <div className="showtime">
            <span>15:00</span>
          </div>
          <div className="showtime">19:00</div>
        </div>
      </BoxShowtime>
      <Footer />
    </ContainerMovie>
  );
}

const ContainerMovie = styled.section`
  width: 100vw;
  padding: 0 24px;
  margin-top: 67px;
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
    border-radius: 3px;
  }
`;
