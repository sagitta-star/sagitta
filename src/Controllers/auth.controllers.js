import User from '../Models/user.model.js'
import bcrypt from 'bcryptjs'
import { createaccesstoken} from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'


export const register = async (req, res) => {

const {email, password, username} = req.body;

try {

const userFound = await User.findOne({email})
if (userFound) return res.status(400).json ( ['El correo ya existe']);


const passwordhash = await bcrypt.hash(password, 10 )

    const newuser = new User({
        username,
        email,
        password: passwordhash,
        nombre, 
        Colonia,
Escuela,
Empleo,
Edad,
Pais,
Estado,
Municipio
    
    })
    console.log(newuser)
    const userSaved = await newuser.save();
    const token = await createaccesstoken ({id: userSaved. _id});
     res.cookie("token", token
    );
     
   res.json( {
      id: userSaved. _id,
  username: userSaved.username,
       email: userSaved.email,
        createdAt: userSaved.createdAt,
          updatedAt: userSaved.updatedAt,
          nombre: userSaved.nombre, 
          Colonia: userSaved.colonia, 
          Escuela: userSaved.Escuela,
          Empleo: userSaved.Empleo,
          Edad: userSaved.Edad,
          Pais: userSaved.Pais,
          Estado: userSaved.Estado,
          Municipio: userSaved.Municipio 
         } );
   


} catch (error) {
    res.status(500).json ({message : Error.message});
    }
};

export const login = async (req, res) => {

    const {email, password} = req.body;
    


    try {

const userfound = await User.findOne({email});

if (!userfound) return res.status(400).json({ message:"usuario no encontrado"});


    const  isMatch = await bcrypt.compare(password, userfound.password )
    

    if (!isMatch) return res.status(400).json({message: "Contraseña incorrecta"});
       
     
        const token = await createaccesstoken({id: userfound._id});
         res.cookie("token", token);
         
       res.json( {
          id: userfound. _id,
      username: userfound.username,
           email: userfound.email,
            createdAt: userfound.createdAt,
              updatedAt: userfound.updatedAt,
             } );
       
    
    
    } catch (error) {
        res.status(500).json ({message : Error.message});
        }
    };


export const logout = (req, res) => {
    res.cookie('token',"",{
        expires: new Date (0)
    })
    return res.sendStatus(200);
}
 
export const profile  = async (req, res) => {
   
     const userfound = await User.findById(req.user.id)
     if (!userfound) return res.status(400).json( { message: "usuario no encontrado" });
    
     return res.json({
        id: userfound._id,
        username: userfound.username,
        email: userfound.email,
        createdAt: userfound.createdAt,
     updatedAt: userfound.updatedAt,
     Colonia: userfound.colonia, 
     nombre: userfound.nombre, 
          Escuela: userfound.Escuela,
          Empleo: userfound.Empleo,
          Edad: userfound.Edad,
          Pais: userfound.Pais,
          Estado: userfound.Estado,
          Municipio: userfound.Municipio 
    })
}
    

export const verifyToken = async (req, res) => {
    const {token }= req.cookies

    if (!token)  return res.status(401).json ({ message: "no Autorizado"});

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json ({ message: "no Autorizado"});


       const userFound= await User.findById(user.id)
       if (!userFound) return res.status(401).json ({ message: "no Autorizado"});

       return res.json ({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
       })
    })
}