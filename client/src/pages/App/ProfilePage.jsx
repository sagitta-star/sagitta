import { Link } from "react-router-dom";
import Perfil from "../../components/Fotos/Perfil";
import { useAuth } from "../../context/AuthContext";

{
  Link;
}

function ProfilePage() {
  const { user } = useAuth();
  return (
    <div>
      <div class="py-0  m-0 w-screen bg-black">
        <div class="grid p-20 pb-3 m-20 mt-0 mb-0 bg-[url('../img/riven.jpg')] bg-slate-600 ">
          <div class="display-center mt-11 py-0 grid place-content-center justify-center">
            <Perfil />
            <form class="max-w-lg mx-auto">
  
  <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
  
</form>
          </div>
        </div>

        <div class="mt-0">
          Cambiar modo Perfil real de usuario / Perfil incognito (Personaje)
          <p class="font-bold"> {user.username} </p>
          <li> Nivel  </li>
        </div>

        <div class="grid mt-0 place-content-center justify-center items-center">
          <nav class=" justify-beetwen grid-cols-5 bg-zinc-900 py-5 px-10 flex">
            <Link to="Informacion"> Informacion</Link>
           
            <li>Publicaciones</li>
            <li>Amigos </li>
            <li>fotos</li>
            <li>Videos</li>
            <li> Cartera</li>
            <li>Clanes </li>
            <li>Logros / Misiones </li>
            <li> Historial </li>
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div class="grid  m-0 p-0">
          <div class=" mt-0 ">
            <div class="mt-2 ">
              <card class=" justify-center px-9 py-5 m-2  p-3">
                <a
                  href="#"
                  class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Datos Personales
                  </h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">
                    {" "}
                    
                    
                    <div> Nombre {user.nombre} </div>
                    <div> { user.email} </div>
                    <div>8,000</div>
                    <div>Seguidores</div>
                    <div>1,000</div>
                    <div>Seguidos</div>
                    <div> Amigos </div>{" "}
                  </p>
                </a>

              
              </card>
              <card class=" justify-center px-9 py-5 m-2  p-3">
               
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   fotos
                  </h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">
                    <div> <img src="" alt="" /> </div>
                    <div><img src="" alt="" />  </div>
                    <div><img src="" alt="" /> </div>
                    <div><img src="" alt="" /> </div>
                    <div><img src="" alt="" /> </div>
                    <div><img src="" alt="" /> </div>
                    <div> <img src="" alt="" /> </div>{" "}
                  </p>
           
<video class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4"/>
  
</video>
              
              </card>


              <div class="border-hidden">
                {" "}
                si el usuario desea mostrar su escuela, empleo y colonia donde
                vive si el usuario desea crear un grupo sobre su "colonia" /
                "escuela" / "empleo" condiciones para grupo de conocer gente
                cerca sobre esas tematicas. mas de 10 personas deben realizar
                cambios debe existir en google maps se crea un chat grupal sobre
                esto
              </div>
              <li>Colonia </li>
              <li>Escuela </li>
              <li>Empleo</li>
              <li>Edad </li>
              <li>Pais </li>
              <li>Estado </li>
              <li>Municipio </li>
              <li>telefono</li>
            </div>
          </div>
        </div>
        <div>





          <div  id="#" className="">
            

           
          </div>
        </div>

        <div class="grid span-2   bg-black">
          <card>
            {" "}
            <h1> Estatus Actual </h1>
            Estado: conectado Sucursal: insurgentes Consola: xbox Tiempo de uso:
            1 hora Tiempo actual: 20 minutos
          </card>
          <card>
            {" "}
            <h1> Cartera</h1>
            Tus aureas: 20 aureas
          </card>
          <card>
            {" "}
            <h1> Misiones </h1>
            Misiones completadas Progreso de misiones 1 mision 2 mision
          </card>

          <card> </card>
        </div>
      </div>
      <div> </div>
    </div>
  );
}

export default ProfilePage;
