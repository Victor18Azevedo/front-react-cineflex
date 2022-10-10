import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import HomePage from "./HomePage";
import MoviePage from "./MoviePage";
import ShowtimePage from "./ShowtimePage";
import SuccessPage from "./Success.Page";
import { useState } from "react";

export default function App() {
  const [booking, setBooking] = useState([]);
  const [showtime, setShowtime] = useState(undefined);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filme/:idMovie" element={<MoviePage />} />
          <Route
            path="/sessao/:idShowtime"
            element={
              <ShowtimePage
                booking={booking}
                setBooking={setBooking}
                showtime={showtime}
                setShowtime={setShowtime}
              />
            }
          />
          <Route
            path="/sucesso"
            element={
              <SuccessPage
                booking={booking}
                setBooking={setBooking}
                showtime={showtime}
                setShowtime={setShowtime}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
