import { useEffect, useState } from "react";
import "./Contador.css";
import Avatar1 from "./assets/avatar_homem.png";
import Avatar2 from "./assets/avatar_mulher.png";

function Botao({ status, onClick }) {
  return (
    <button className={`counter-button ${status}`} onClick={onClick}>
      {status === "add" ? "+" : "-"}
    </button>
  );
}

function Contador() {
  const [quantidades, setQuantidades] = useState({
    homem: 0,
    mulher: 0,
  });

  const { homem, mulher } = quantidades;
  const total = homem + mulher;

  useEffect(() => {
    document.title = `Total: ${total}`;
  }, [total]);

  function Reset() {
    setQuantidades({ homem: 0, mulher: 0 });
  }

  function atualizarQuantidade(genero, quantidade) {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [genero]: Math.max(0, prevQuantidades[genero] + quantidade),
    }));
  }

  return (
    <div className="container">
      <h1> Atividade 02</h1>
      <div className="total-container">
        <h2 className="total-header">Total:</h2>
        <span className="total-number">{total}</span>
      </div>
      <div className="avatars-container">
        <div className="avatar">
          <img src={Avatar1} alt="Avatar Homem" />
          <p>Homens</p>
          <div className="counter">
            <Botao status="add" onClick={() => atualizarQuantidade("homem", 1)} />
            <p className="count">{homem}</p>
            <Botao status="decrementar" onClick={() => atualizarQuantidade("homem", -1)} />
          </div>
        </div>
        <div className="avatar">
          <img src={Avatar2} alt="Avatar Mulher" />
          <p>Mulheres</p>
          <div className="counter">
            <Botao status="add" onClick={() => atualizarQuantidade("mulher", 1)} />
            <p className="count">{mulher}</p>
            <Botao status="decrementar" onClick={() => atualizarQuantidade("mulher", -1)} />
          </div>
        </div>
      </div>
      <button className="reset-button" onClick={Reset}>
        Resetar
      </button>
    </div>
  );
}

export default Contador;






