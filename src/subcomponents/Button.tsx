import { MouseEventHandler } from "react";

export default function Button(props:any){
  let fondo:string = props.fondo;
  let hover:string = props.hover;
  let tipo:any = props.tipo;
  let c_text:string = props.c_text;
  let evento:MouseEventHandler = props.click;
  return <button type={tipo} onClick={evento} className={`bg-${fondo} hover:bg-${hover} hover:duration-300 transition-colors p-2 rounded-md text-${c_text} font-bold`}>{props.texto}</button>
}