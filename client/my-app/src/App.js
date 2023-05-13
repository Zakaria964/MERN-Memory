import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Container } from "@mui/material";
import Auth from "./Components/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import "./App.scss";
/* -------------------------------------------------------------------------- */

function App() {
  return (
    <GoogleOAuthProvider clientId="760511398776-7eehfoecrs20ch4m8fels4jcs71mbgno.apps.googleusercontent.com">
      <Router>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
