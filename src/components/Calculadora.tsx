import { useState } from "react";
import ButtonCalculadora from "../subcomponents/ButtonCalculadora";

export default function Calculadora(){
  const [valueCal, setValueCal] = useState({
    numeros1: "",
    numeros2: "",
    total: "",
    operacion: ""
  })
  const click = (e:any) => {
    let text:string = e.target.dataset.text;
    if(text === "DEL"){
      if(valueCal.total !== ""){
        setValueCal({numeros1:'',numeros2:'',operacion:'',total:''});
        return false;
      }

      let numeros:string = (valueCal.numeros2 !== "") ? valueCal.numeros2 : valueCal.numeros1;
      let newValue:string = (numeros.length > 1) ? numeros.slice(0,-1) : numeros.slice(0,0);
      if(valueCal.numeros2 === "" && valueCal.operacion !== ""){
        setValueCal({...valueCal,operacion: ""});
        return false;
      }
      if(valueCal.numeros2 !== "") setValueCal({...valueCal, numeros2: newValue}); else setValueCal({...valueCal, numeros1: newValue});
    }

    if(text === "AC"){
      setValueCal({numeros1:'',numeros2:'',operacion:'',total:''});
      return false;
    }

    if(text === "="){
      let numero1:number = 0;
      let numero2:number = 0;

      if((valueCal.numeros1.search(".")) === -1) numero1 = parseInt(valueCal.numeros1);
      else numero1 = parseFloat(valueCal.numeros1);
      
      if((valueCal.numeros2.search(".")) === -1) numero2 = parseInt(valueCal.numeros2);
      else numero2 = parseFloat(valueCal.numeros2);

      let total:number = 0;
      switch(valueCal.operacion){
        case 'X': total = (numero1 * numero2); break;
        case '-': total = (numero1 - numero2); break;
        case '+': total = (numero1 + numero2); break;
        case '/': total = (numero1 / numero2); break;
      }

      setValueCal({...valueCal, total: `= ${total}`})
    }
  }

  const write = (e:any) => {
    if(valueCal.total !== ""){
      setValueCal({numeros1:'',numeros2:'',operacion:'',total:''});
      return false;      
    }

    let text:string = e.target.dataset.text;
    if(text === "X" || text === "+" || text === "-" || text === "/"){
      setValueCal({...valueCal, operacion: text});
      return false;
    }
    let newValue:string = (valueCal.operacion === "") ? valueCal.numeros1+""+text : valueCal.numeros2+""+text;    
    if(valueCal.operacion === "") setValueCal({...valueCal, numeros1: newValue}); else setValueCal({...valueCal, numeros2: newValue});
  }

  return(
    <div className="h-screen w-full bg-slate-500 fixed">
      <div id="content" className="bg-slate-800 rounded-md p-2 text-white w-2/6 my-5 mx-auto flex flex-col flex-wrap">
        <div className="bg-slate-500 p-1 rounded-md w-full h-10">
          <strong className="flex flex-row justify-end">
            {valueCal.numeros1} {valueCal.operacion} {valueCal.numeros2} {valueCal.total}
          </strong>
        </div>
        <div className="grid grid-cols-4 gap-4 p-1 mt-2">
          <ButtonCalculadora event={click} clase="col-span-3" text="AC"/>
          {/* <ButtonCalculadora event={write} text="()"/>
          <ButtonCalculadora event={write} text="%"/> */}
          <ButtonCalculadora event={write} text="X"/>
          <ButtonCalculadora event={write} text="7"/>
          <ButtonCalculadora event={write} text="8"/>
          <ButtonCalculadora event={write} text="9"/>
          <ButtonCalculadora event={write} text="-"/>
          <ButtonCalculadora event={write} text="4"/>
          <ButtonCalculadora event={write} text="5"/>
          <ButtonCalculadora event={write} text="3"/>
          <ButtonCalculadora event={write} text="+"/>
          <ButtonCalculadora event={write} text="1"/>
          <ButtonCalculadora event={write} text="2"/>
          <ButtonCalculadora event={write} text="3"/>
          <ButtonCalculadora event={write} text="/"/>
          <ButtonCalculadora event={write} text="0"/>
          <ButtonCalculadora event={click} text="DEL"/>
          <ButtonCalculadora event={write} text="."/>
          <ButtonCalculadora event={click} text="="/>
        </div>
      </div>
    </div>
  )
}