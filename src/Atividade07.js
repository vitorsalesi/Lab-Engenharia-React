import Memoria from "./Components/Atividade07/Memoria";
import { Link } from "react-router-dom";

export default function Atvidade07(){
    return (
        <>
          <h1> Atividade 07</h1>
          <Memoria /><br></br>
          <Link to="/">Voltar para Página Inicial</Link>
        </>
    );
}