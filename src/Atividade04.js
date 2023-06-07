import Toolbar from "./Components/Atividade04/Toolbar";
import Gallery from "./Components/Atividade04/Gallery";
import Counter from "./Components/Atividade04/Counter";
import Form from "./Components/Atividade04/Form";
import MovingDot from "./Components/Atividade04/MovingDot";
import Form2 from "./Components/Atividade04/Form2";
import Form3 from "./Components/Atividade04/Form3";
import List from "./Components/Atividade04/List";
import List2 from "./Components/Atividade04/List2";
import ShapeEditor from "./Components/Atividade04/ShapeEditor";
import CounterList from "./Components/Atividade04/CounterList";
import List3 from "./Components/Atividade04/List3";
import List4 from "./Components/Atividade04/List4";
import BucketList from "./Components/Atividade04/BucketList";
import { Link } from "react-router-dom";
import "./Components/Atividade04/styleAtividade04.css"

export default function Atvividade04(){
    return (
        <>
          <h1> Atividade 04</h1>
          <h2>Toolbar:</h2>
          <Toolbar />
          <h2>Gallery:</h2>
          <Gallery />
          <h2>Counter:</h2>
          <Counter />
          <h2>Form:</h2>
          <Form />
          <h2>MovingDot:</h2>
          <MovingDot />
          <h2>Form2:</h2>
          <Form2 />
          <h2>Form3:</h2>
          <Form3 />
          <h2>List:</h2>
          <List />
          <h2>List2:</h2>
          <List2 />
          <h2>ShapeEditor:</h2>
          <ShapeEditor />
          <h2>CounterList:</h2>
          <CounterList />
          <h2>List3:</h2>
          <List3 />
          <h2>List4:</h2>
          <List4 />
          <h2>BucketList:</h2>
          <BucketList /><br></br>
          <Link to="/">VOLTAR PARA PÁGINA INICIAL</Link>
        </>
    );
}