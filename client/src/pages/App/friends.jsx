import io from "socket.io-client";
import { useState, useEffect } from "react";
import CardAddamigo from "../../components/Chat/CardAddamigo";

const socket = io("/");
function Social() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([...messages, newMessage]);
    socket.emit("message", message);
  };
  useEffect(() => {
    socket.on("message", receiveMessage);
    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);

  return (
    <div>
        Aqui podras encontrar un listado de tus amigos y un chat general global,
        chat global para tu equipo chat amigo 1 a 1 Ver quien esta conectado
        Darle click a su perfil Ver publicaciones de tus amigos

<div class="justify-center"> Buscar amigos </div>
<div class="grid grid-cols-3">


  <div class="grid "> <CardAddamigo/></div>
  <div class="grid "> <CardAddamigo/></div>
  <div class="grid "> <CardAddamigo/></div>

  
   </div>
    
        
        
      <div class="grid grid-cols-3">


        <div class="grid ">
          
          <title> 
Chats

          </title>
          <card> 
           <p class="">inicio</p> 
           <li>Publicaciones 
           </li>
           <li>Agregar amigos</li>
<li>Chat Global</li>
<li>Chat Amigos</li>
<li>Chat Clanes</li>


          </card>
          
           </div>
      
        <div class="grid">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              onChange={(e) => setMessage(e.target.value)}
            />
            <button>Enviar</button>
          </form>

          <ul>
            {messages.map((message, i) => (
              <li key={i}>
                {message.from}:{message.body}
              </li>
            ))}
          </ul>
        </div>

        <div class="grid py-10"> sdfs</div>
      </div>
    </div>
  );
}

export default Social;
