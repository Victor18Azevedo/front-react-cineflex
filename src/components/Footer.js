import styled from "styled-components";

export default function Footer() {
  return (
    <ContainerFooter>
      <div className="movie-poster">
        <img src="" alt="" />
      </div>
      <div className="movie-text">
        <p>Nome Filme</p>
      </div>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.footer`
  width: 100vw;
  height: 117px;
  padding: 14px 10px;
  background-color: #9eadba;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  .movie-poster {
    width: 64px;
    height: 89px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    img {
      width: 48px;
      height: 72px;
      object-fit: cover;
    }
  }
  .movie-text {
    font-size: 26px;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
