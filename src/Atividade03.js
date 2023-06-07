import Gallery from "./Components/Atividade03/Gallery";
import ToDoList from "./Components/Atividade03/TodoList";
import { Link } from "react-router-dom";

export default function Atvidade03(){
    return (
        <>
          <h1> Atividade 03</h1>
          <Gallery />
          <ToDoList />
          <Link to="/">Voltar para página inicial</Link>
        </>
    );
}