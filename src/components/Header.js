import styled from "styled-components";

export default function Header() {
  return <ContainerHeader>CINEFLEX</ContainerHeader>;
}

const ContainerHeader = styled.header`
  width: 100vw;
  height: 67px;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  line-height: 67px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
