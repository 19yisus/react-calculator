export default function ButtonCalculadora(props:any){
  return(
    <>
    <button type="button" onClick={props.event} data-text={props.text} className={`bg-slate-700 hover:bg-slate-600 active:bg-slate-800 transition-colors hover:duration-300 rounded-3xl font-bold align-middle text-center ${props.clase}`}>{props.text}</button>
    </>
  )
}