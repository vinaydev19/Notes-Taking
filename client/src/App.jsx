import "./App.css";
import Login from "./pages/Login";
import NotesForm from "./components/NotesForm";
import Register from "./pages/Register";
import Header from "./components/Header";
import Notes from "./components/Notes";
import { useState } from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = false;

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <>
              <Route path="/" element={<Landing />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
