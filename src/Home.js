import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div id="home-container" className="cont">
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atividade01">Atividade 01</Link>
          </li>
          <li>
            <Link to="/Atividade02">Atividade 02 - Contador de Pessoas</Link>
          </li>
          <li>
            <Link to="/Atividade03">Atividade 03</Link>
          </li>
          <li>
            <Link to="/Atividade04">Atividade 04</Link>
          </li>
          <li>
            <Link to="/Atividade05">Atividade 05</Link>
          </li>
          <li>
            <Link to="/Atividade06">Atividade 06 - Calculadora</Link>
          </li>
          <li>
            <Link to="/Atividade07">Atividade 07 - Jogo da Memória</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

