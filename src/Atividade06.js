import Calculadora from "./Components/Atividade06/Calculadora";
import { Link } from "react-router-dom";

export default function Atvidade06(){
    return (
        <>
          <h1> Atividade 06 - Calculadora</h1>
          <Calculadora /><br></br>
          <Link to="/">Voltar para Página Inicial</Link>
        </>
    );
}