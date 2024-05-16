import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: SigninErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)]  items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {SigninErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))}

        <h1 className="text-2xl font-bold text-white">Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.email && (
            <p className="text-red-500">El email es requerido</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="contraseña"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}
          <button className="text-white" type="submit">
            Iniciar Sesion
          </button>
        </form>

        <p className="flex gap-x-2 justify-between text-white">
          No tienes una cuenta aun,{" "}
          <Link to="/register" className="text-sky-500">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
