import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import HomePage from "./HomePage";
import MoviePage from "./MoviePage";
import ShowtimePage from "./ShowtimePage";
import SuccessPage from "./Success.Page";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filme/:idMovie" element={<MoviePage />} />
          <Route path="/sessao/:idShowtime" element={<ShowtimePage />} />
          <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
