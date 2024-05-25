import React from "react";
import MapView from "../../components/Mapas/MapView";

function Sucursales() {
  return (
    <div name="Encontrar surcursal" >

      <h1 className="text-black text-center font-bold mt-4 justify-center">
      <h1>Encuentra tu sucursal mas cercana</h1>
      </h1>
      <div className="grid grid-cols-2 span-2">
        <div class="p-10 m-10 mt-0 ml-0">
          <MapView />
        </div>
        <div class="justify-center ">

            <card class="bc-black"> 
          <h1> Reserva tu lugar</h1>

          <button> Selecciona tu ubicacion </button>

          <h2 > Selecciona tu ubicacion manualmente </h2>

          <input type="text" holderplace="Escribe tu ubicación" />

          <h1>Buscar amigos en el mapa</h1>
          <button>Rastrear amigos</button>

          </card>
        </div>
      </div>
      <div>
        

        
<div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
    <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4">  Caracteristicas
        </div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5">usuarios conectados</div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"> informacion actual y real de la sucursal</div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>


       
      </div>
      En esta pagina aqui se veran las sucursales cerca de los clientes y
      agendar segun las sucursal cerca en tiempo real, espacios vacios de la
      sucursal, oferta y demanda y renta de espacios y agenda de computadoras o
      consolas{" "}
    </div>
  );
}

export default Sucursales;
