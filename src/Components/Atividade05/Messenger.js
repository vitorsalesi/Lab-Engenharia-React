import { useState } from "react";
import Chat from "./Chat.js";
import ContactList from "./ContactList.js";

export default function Messenger(){
    const  [to, setTo] = useState(contacts[0]);

    return (
        <div className="limite">
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat key={to.email} contact={to} />
        </div>
    )
}

const contacts = [
    {name: "Taylor", email: "taylor@gmail.com" },
    {name: "Alice", email: "alicer@gmail.com" },
    {name: "Bob", email: "bob@gmail.com" }
];