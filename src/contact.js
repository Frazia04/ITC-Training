import React, { useEffect, useState } from "react";
function Contact() {
   
  function test() {
    console.warn("click on ")
  }
   const testAerrow = () => {
    console.warn("click on from Aerrow Function ")
   }
   function textOnChange() {
    console.warn("click on  textOnChange")
  }
  const testAerrowValue = (e) => {
    console.warn("click on from Aerrow Function Value ", e.target.value)
   }


   const methodCalledonChangetoupdateValue = (e) => {
    console.warn("methodCalledonChangetoupdateValue called", e.target.value)
    setVal( e.target.value)
   }
 
const [val, setVal] = useState("Frazia Farheen")
    return (
      <div>
        <h1>contact us component </h1>
        <input type="text" onChange={testAerrowValue}/>
        <button onClick = {test}>click me </button>
        <button onClick = {testAerrow}>click me Aerrow </button>


        <p></p>



        <input type="text"   value = {val} onChange={methodCalledonChangetoupdateValue}/>
        <button onClick = { ()=> alert(val)   }>click me default </button>
      </div>
    )
}
export default Contact;