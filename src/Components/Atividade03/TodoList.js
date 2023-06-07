const person = {
    name: "Gregorio Y. Zara",
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}

export default function ToDoList() {
    return (
    <div style={person.theme}>
        <h1>Hey {person.name}'s Todos</h1>
        <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara"/>
        <ul>
            <li>Improve the video phone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on alcohol-fuelled engine</li>
        </ul>
    </div>
    );
}