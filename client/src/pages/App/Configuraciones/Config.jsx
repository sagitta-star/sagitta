import React from 'react'

import Alertas from './Alertas'
import ConfigProfile from './ConfigProfile'

function Config() {
  return (

<div class="grid grid-cols-2">
    <div class="grid h-screen justify-left ">
        <card> 
    <button onClick={<ConfigProfile />}> Datos Personales    </button>
<br />
 <button onClick={<Alertas/>}> Contraseña y Seguridad  </button> 
 <br />
 <button onClick={<Alertas/>}> Alertas   </button> 
 <button onClick={<Alertas/>}> Pagos  </button> 
 <button onClick={<Alertas/>}> Verificacion  </button> 
 </card></div>
    <div id="vistas" class="grid"> vistas </div>
    </div>

  )
}

export default Config