import io from "socket.io-client";
import { useState, useEffect } from "react";
import { list } from "postcss";

const socket = io("/");
function Friends() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      body: message,
      from: 'Me'
    }
    setMessages([... messages, newMessage]);
    socket.emit("message", message);

  };
  useEffect(() => {
socket.on("message", receiveMessage);
return () =>{
  socket.off("message", receiveMessage); 
};
  },[]); 



  const receiveMessage = (message) =>
     setMessages((state) => [... state, message]);

  return (
    <div>
      Aqui podras encontrar un listado de tus amigos y un chat general global,
      chat global para tu equipo chat amigo 1 a 1 Ver quien esta conectado Darle
      click a su perfil Ver publicaciones de tus amigos
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Enviar</button>
      </form>


      <ul> 
        {
            messages.map((message, i)  =>( <li key={i}>
                {message.from}:{message.body}
            </li>))
        }
      
      </ul>
    </div>
  );
}

export default Friends;
