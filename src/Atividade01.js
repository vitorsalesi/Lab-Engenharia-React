import Relogio from "./Components/Atividade01/Relogio";
import Letreiro from "./Components/Atividade01/Letreiro";
import { Link } from "react-router-dom";

export default function Atvidade01(){
    return (
        <>
          <h1> Atividade 01</h1>
          <Relogio />
          <Letreiro />
          <Link to="/">Voltar para página inicial</Link>
        </>
    );
}