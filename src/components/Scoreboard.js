import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import AppContext from "../state/AppContext";

export default function Scoreboard() {
  return (
    <AppContext.Consumer>
      {context => {
        return (
          <div className="scoreboard">
            <Link to="/">
              <img src={logo} className="app-logo" alt="logo" />
            </Link>
            <div className="text-kelompok">
              <h3>Tugas Multimedia</h3>
              <p>Kelompok 6</p>
              <p>Anugrah Akbar P (10118969)</p>
              <p>Giwang Dwi Kintan (12118954)</p>
              <p>Octavianasya Hakim (15118493)</p>
            </div>
            <div className="score">
              <span className="score-title">Score</span>
              <span className="score-count">{context.state.score}</span>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
