import express from "express";
import http from 'http'
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./Routes/auth.routes.js";
import tasksRoutes from "./Routes/task.routes.js";
import {Server as SocketServer} from 'socket.io'

const app = express();
const Server = http.createServer(app)
const io = new SocketServer(Server)

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);



//routes
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);

// server socket.io


io.on('connection', socket => {
  console.log(socket.id)

  socket.on ('message',(body)=> {
    console.log(body)
    socket.broadcast.emit('message', {
      body, 
      from: socket.id.slice(6)

    })
  })
  
})

Server.listen(3000)
console.log('Servidor socket en puerto', 3000)
export default app;
