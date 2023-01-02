export function FormControlCampText(props:any) {
  return (
    <div className="flex flex-col text-white font-bold">
      <label htmlFor="">
        {props.label}
        { (props.obligatorio === "si") ? <sup className="text-red-500">(*)</sup> : ''}
      </label>
      <input type="text" required={(props.obligatorio === "si")} name={props.name} data-max={props.max} onChange={props.keyup} value={props.value} id="" className='w-auto rounded-sm text-black font-semibold outline-none p-1'/>
      <small className="text-red-500 font-semibold">{props.sms_error}</small>
    </div>
  )
}

export function FormControlCampEmail(props:any) {
  return (
    <div className="flex flex-col text-white font-bold">
      <label htmlFor="">
        {props.label}
        { (props.obligatorio === "si") ? <sup className="text-red-500">(*)</sup> : ''}
      </label>
      <input type="email" required={(props.obligatorio === "si")} name={props.name} data-max={props.max} onChange={props.keyup} value={props.value} id="" className='w-auto rounded-sm text-black font-semibold outline-none p-1'/>
      <small className="text-red-500 font-semibold">{props.sms_error}</small>
    </div>
  )
}

export function FormControlCampNumber(props:any){
  return (
    <div className="flex flex-col text-white font-bold relative">
      <label htmlFor="">
        {props.label}
        { (props.obligatorio === "si") ? <sup className="text-red-500">(*)</sup> : ''}
      </label>
      <input type="number" required={(props.obligatorio === "si")} name={props.name} data-max={props.max} onChange={props.keyup} value={props.value} id="" className='w-auto rounded-sm text-black font-semibold outline-none p-1'/>
      <small className="text-red-500 font-semibold absolute -bottom-4 transition duration-300">{props.sms_error}</small>
    </div>
  );
}

export function FormControlCampRadio(props:any){
  return (
    <div className="flex flex-col text-white font-bold w-9/12">
      <div className="flex flex-row items-start">
        <label htmlFor="">
          {props.label}
          { (props.obligatorio === "si") ? <sup className="text-red-500">(*)</sup> : ''}
        </label>
      </div>
      <div className="flex flex-row space-x-2">
        {props.radios.map( (element:any) => {
          return(
            <div className="flex items-center" key={element.radio_v}>
              <input type="radio" required={(props.obligatorio === "si")} onChange={props.change} name={props.name} id="" value={element.radio_v} checked={(props.value === element.radio_v)}/>
              <small>{element.radio_t}</small>
            </div>
          )
        })}
      </div>
      <small className="text-red-500 font-semibold">{props.sms_error}</small>
    </div>
  )
}

export function FormControlCampSelect(props:any){
  return(
    <div className="flex flex-col text-white w-9/12">
      <label htmlFor="" className="font-bold">
        {props.label}
        { (props.obligatorio === "si") ? <sup className="text-red-500">(*)</sup> : ''}
      </label>
      <select name={props.name} id="" value={props.value} onChange={props.change} required={(props.obligatorio === "si")} className="rounded-md p-1 text-black outline-none">
        <option value="" className="rounded-sm">Seleccione una opción</option>
        {props.options.map( (element:any)=>{
          return <option key={element.sel_v} value={element.sel_v} className="rounded-sm">{element.sel_t}</option>
        })}
      </select>
      <small className="text-red-500 font-semibold">{props.sms_error}</small>
    </div>
  )
}