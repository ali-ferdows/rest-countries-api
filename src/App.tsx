import './App.css'
import {Col, Container, Row} from "react-bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header, Main} from "./layuot";
import {CountryInfo} from "./page";

function App() {

  return (
    <>
        <BrowserRouter>
            <Container>

                <Header />

                <Routes>
                    <Route path={'/'} element={<Main />} />
                    <Route path={'/country/:countryName'} element={<CountryInfo />} />
                </Routes>
            </Container>
        </BrowserRouter>
    </>
  )
}

export default App
