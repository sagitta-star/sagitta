import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/App/ProfilePage";
import Dashboard from "./pages/App/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";

import Landingpage from "./pages/landingPage";
import Sucursales from "./pages/App/sucursales";
import Tienda from "./pages/App/Tienda";
import Misiones from "./pages/App/Misiones";
import Torneos from "./pages/App/Torneos";
import Contacto from "./pages/Compañia/contacto";
import ConfigProfile from "./pages/App/Configuraciones/ConfigProfile";
import Acercade from "./pages/Compañia/Acercade";
import Social from "./pages/App/friends";
import Config from "./pages/App/Configuraciones/Config";
import Blog from "./pages/Blog/Blog";
import Eventos from "./pages/App/Eventos";
import Informacion from "./components/Cards/informacion";
import Page404 from "./pages/Page404";


function app() {
  return (
    <div className=" dark:bg-neutral-900">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/Acercade" element={<Acercade />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Eventos" element={<Eventos />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />}>
                <Route path="Información" element={<Informacion />} />
              </Route>

              <Route path="/configuraciones" element={<Config />} />
              <Route path="/Editar-Perfil" element={<ConfigProfile />} />

              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/social" element={<Social />} />
              <Route path="/Sucursales" element={<Sucursales />} />
              <Route path="/Tienda" element={<Tienda />} />
              <Route path="/Misiones" element={<Misiones />} />
              <Route path="/Torneos" element={<Torneos />} />
            </Route>

            <Route path="*" element={<Page404 />} />
            
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default app;
