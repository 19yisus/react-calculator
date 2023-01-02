import React, {useState} from 'react';
import Button from '../subcomponents/Button';
import { FormControlCampText, FormControlCampNumber, FormControlCampRadio, FormControlCampEmail, FormControlCampSelect } from './FormControlCamp';

function Formulario(){
  const evento = () => {
    console.log("fsdf");
  }

  const validaFormulario = () => {
    console.log("Valida formulario")
  }

  const resetFormulario = () => setForm({...form,cedula:'',nombre: '',apellido:'',sexo:'',email:'',nacionalidad:''});

  const setDatos = (e:any) => {
    e.preventDefault()
    console.log("Enviando datos")
  }

  const keyup = (e:any) => {
    let valor:string = e.target.value;
    let name:string = e.target.name;
    let maxlen:string = e.target.dataset.max;
    setForm({...form,cedula_error: 'fasd'})
    if(valor.length <= parseInt(maxlen)) setForm({...form,[name]: valor}); else return false;
  }

  const saveChange = (e:any) => {
    let valor:string = e.target.value;
    let name:string = e.target.name;
    setForm({...form,[name]: valor});
  }

  const [form, setForm] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    sexo: '',
    email: '',
    telefono: '',
    nacionalidad:'',
    //
    radios_options:[
      {radio_v: 'F', radio_t:'F'},
      {radio_v: 'M', radio_t:'M'},
    ],
    select_options:[
      {sel_v: "V", sel_t: "Venezuela"}
    ],
    // 
    cedula_error: '',
    nombre_error: '',
    apellido_error: '',
  });
  
  return(
    <div className='flex flex-row w-full justify-center'>
      <div className="flex flex-col w-full">
        <div className="w-3/6 m-auto my-2">
          <h1>hola Formulario</h1>
          <a href="/">De vuelta hacia App</a>
          <Button fondo="red-500" hover="red-600" c_text="white" texto="boton" tipo="button" click={evento}/>
        </div>

        <form id="card" onSubmit={setDatos} className="m-auto bg-slate-600 p-2 rounded-sm w-5/6" autoComplete='none'>
          <h4 className='text-center text-white font-bold'>Formulario</h4>
          <div className="grid grid-cols-3 gap-2 place-items-center w-full">
            <FormControlCampNumber obligatorio="si" name="cedula" sms_error={form.cedula_error} max="8" keyup={keyup} value={form.cedula} label="Cédula"/>
            <FormControlCampText obligatorio="si" name="nombre" sms_error={form.nombre_error} max="30" keyup={keyup} value={form.nombre} label="Nombre"/>
            <FormControlCampText obligatorio="si" name="apellido" sms_error={form.apellido_error} max="30" keyup={keyup} value={form.apellido} label="Apellido"/>
            <FormControlCampRadio label="Sexo" obligatorio="si" change={saveChange} radios={form.radios_options} name="sexo" value={form.sexo} radio="F"/>
            <FormControlCampEmail obligatorio="si" name="email" max="120" keyup={keyup} value={form.email} label="Correo electronico"/>
            <FormControlCampNumber obligatorio="si" name="telefono" max="11" keyup={keyup} value={form.telefono} label="Teléfono"/>
            <FormControlCampSelect name="nacionalidad" obligatorio="si" change={saveChange} label="Nacionalidad" value={form.nacionalidad} options={form.select_options}/>
          </div>
          <div className="p-2 mt-2 flex flex-row justify-end space-x-2 mr-5">
            <Button fondo="green-700" hover="green-500" c_text="white" texto="Guardar" tipo="submit" click={validaFormulario}/>
            <Button fondo="red-700" hover="red-500" c_text="white" texto="Limpiar" tipo="button" click={resetFormulario}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;