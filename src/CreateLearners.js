import React, { useState } from "react";

function CreateLearners() {

    const [name, SetName] = useState("")
    const [employeeID, SetEmployeID] = useState("")
    const [CourseID, SetCourseID] = useState("")
    
    return(
        
        <div>
           <h1> This page to create Learner details.</h1>

            <input type= "text" name ="name" value={name} />
            <input type= "text" name ="name" value={employeeID} />
            <input type= "text" name ="name" value={CourseID} />

            <button> Create Learner Details</button>

            
        
        </div>


    )

}
export default CreateLearners;