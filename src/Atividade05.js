import FormQuiz from "./Components/Atividade05/FormQuiz";
import FormTicket from "./Components/Atividade05/FormTicket";
import Accordion from "./Components/Atividade05/Accordion";
import Messenger from "./Components/Atividade05/Messenger";
import { Link } from "react-router-dom";

export default function Atvidade05(){
    return (
        <>
          <h1> Atividade 05</h1>
          <FormQuiz />
          <FormTicket />
          <Accordion />
          <Messenger /><br></br>
          <Link to="/">Voltar para Página Inicial</Link>
        </>
    );
}