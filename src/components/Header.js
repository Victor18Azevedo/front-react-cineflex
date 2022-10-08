import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/arrow-undo-circle-sharp.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <ContainerHeader>
      <div>
        {location.pathname !== "/" ? (
          <StyledBackIcon onClick={() => navigate(-1)} />
        ) : null}
        CINEFLEX
      </div>
    </ContainerHeader>
  );
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
  div {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

const StyledBackIcon = styled(BackIcon)`
  height: 34px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;
