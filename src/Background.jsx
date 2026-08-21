import { useState } from 'react'
  export default function Background() {
    const[color,changeColor]=useState("white")
    function click(clr) {
      changeColor(clr)
    }
return(
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-white">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>click("red")}>Red</button>
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>click("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}} onClick={()=>click("purple")}>Purple</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}} onClick={()=>click("pink")}>pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}} onClick={()=>click("olive")}>olive</button>
            </div>
    </div>
    </>
)
}