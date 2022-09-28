import React from "react";
import { useState } from "react";
function Learner() {

const [Learner, updateLearnerslist] = useState(

    [
        {name: 'Frazia' , age:"23"},
        {name: 'Farheen' , age:"23"},
       {name: 'Pragya' , age:"23"} ,

    
]
)


  return (
    <div>
        <h1> list of Learners</h1>

        {
            Learner.map((item, i) =>
            
            <div 
            key={i}> {item.name},{item.age}

             
            </div>)

           
        }
        {Learner.length ===4? <div> Yes,we can print </div> : <div> this is not correct</div>}
        

        <div>

        </div>

    </div>
  )
}

export default Learner;