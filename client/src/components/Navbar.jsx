import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers--color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const { isAuthenticated, logout, user } = useAuth();

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  const HandleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  return (
    <nav className="bg-zinc-900  flex justify-between py-5 px-10 p-0 m-0">
      <Link to="/">
        <h2 className="text-2xl font-blod">sagitta</h2>
      </Link>
      <Link to="/Eventos">
        <p>Eventos</p>
      </Link>
      <Link to="/Blog">
        <p>Blog</p>
      </Link>

      <div className=" flex justify-start items-center relative">
              <input
                className="text-sm leading-none text-left text-gray-600 px-4 py-2 w-full border rounded border-gray-300  outline-none"
                type="text"
                placeholder="Search"
              />
              </div>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/Dashboard"> Dashboard </Link>
            </li>
            <li>
              <Link to="/Torneos"> Torneos </Link>
            </li>
            <Link to="/Sucursales"> Sucursales </Link>
            <li>
              <Link to="/social">social</Link>
            </li>
            <li>
              <Link to="/Tienda">Tienda </Link>
            </li>
            <li>
              <Link to="/Misiones"> Misiones</Link>
            </li>
            <li>
              <Link to="/profile"> {user.username} </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Cerrar Sesion
              </Link>
            </li>
            <ul class="space-y-1">
              <li>
                <li>
                  <button
                    to=""
                    className=" rounded"
                    onClick={HandleChangeTheme}
                  >
                    Modo Dark
                  </button>
                  
                </li>
   
              </li>
              
            </ul>
            <li><Link to="/Configuraciones"> Configuracion</Link>
     
    </li>
   
          
          </>
        ) : (
          <>
            <li>
              <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm"> registrarse </Link>
            </li>
            <li>
              <Link to="/login"  className="bg-indigo-500  px-4 py-1 rounded-sm"> iniciar sesion </Link>
            </li>
          </>
        )}
        
      </ul>
    </nav>
  );
}

export default Navbar;
