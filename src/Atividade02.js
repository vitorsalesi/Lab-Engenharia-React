import Contador from "./Components/Atividade02/Contador";
import { Link } from "react-router-dom";

export default function Atvidade02(){
    return (
        <>
          <Contador />
          <Link to="/">Voltar para página inicial</Link>
        </>
    );
}