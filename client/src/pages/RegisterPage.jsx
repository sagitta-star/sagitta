import { useForm } from "react-hook-form";
import {useAuth} from '../context/AuthContext'
import { useEffect } from "react";
import { useNavigate, Link} from "react-router-dom";



function RegisterPage() {
  const { register, handleSubmit, formState:{
    errors
  }} = useForm();
  const {signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate= useNavigate();

  useEffect(()=> {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
signup(values);
  });
  
  return (
    <div className=" flex h-[calc(100vh-100px)]  items-center justify-center">
<div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
{

 RegisterErrors.map ((error, i) => (
  <div className="bg-red-500 p-2" key={i}>
    {error}
    </div >
 ))
}
<h1 className="text-2xl font-bold text-white">Registrarse</h1>
      <form onSubmit={onSubmit}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="usuario"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.username && 
            <p className="text-red-500">El usuario es requerido</p>
          }
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="email"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
         {errors.email && 
           <p className="text-red-500">El email es requerido</p>
          }
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="contraseña"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
         {errors.password && 
            <p className="text-red-500">La contraseña es requerida</p>
          }
        <button type="submit" >Registrar</button>
      </form>
      
      <p className="flex gap-x-2 justify-between">
        ya cuentas con una cuenta, <Link to="/login" className="text-sky-500">Inicia Sesión</Link>
      </p>
      </div>
    </div>
  );
}

export default RegisterPage;
