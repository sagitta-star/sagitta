import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { useEffect, useState } from 'react'

function Navbar() {
 
  const [theme, setTheme]= useState(() => {
    if (window.matchMedia("(prefers--color-scheme: dark)").matches){
      return "dark";
    }
        return "light";
      })
    
      const { isAuthenticated, logout } = useAuth();
    
    useEffect(() => {
    if (theme == "dark" ){
      document.querySelector('html').classList.add('dark');
    } else{
      
      document.querySelector('html').classList.remove('dark');
    }
    }, [ theme])
      const HandleChangeTheme =() => {
     setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
      }
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">

      <Link to="/">
        <h2 className="text-2xl font-blod">sagitta</h2>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/Dashboard"> Dashboard </Link>
            </li>
            <Link to="/Sucursales"> Sucursales </Link>
            <li>
              <Link to="/Amigos"> Amigos</Link>
            </li>
            <li>
              <Link to="/profile"> Perfil </Link>
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
          </>
        ) : (
          <>
            <li>
              <Link to="/register"> registrarse </Link>
            </li>
            <li>
              <Link to="/login"> iniciar sesion </Link>
            </li>
          </>
        )}


<li>
              <button to="" className=" rounded" onClick={HandleChangeTheme}>Modo Dark</button>
            </li>
      </ul>
    </nav>
  );
}

export default Navbar;
