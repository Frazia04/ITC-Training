import React from "react";

class About extends React.Component{

    constructor(){
        super();
        console.warn("Constructor has been called");

        this.state ={
            name:"Frazia",
            courseid:"2",
        }
    }

    componentDidMount(){
        
        console.warn("didMount has been called");
        alert("did mount has been called");
    }

    componentDidUpdate(){
        console.warn("didupdate has been called");
    }

    
    render (){
        return(
        <div>
            test div
        

        <h1> text from About.js</h1>
        <h2> {this.state.name}</h2>
        <h2> {this.state.name.courseid}</h2>
        
        <button onClick={()=>(this.setState({name : 'abc'}))}>update state inside about.js</button> 
    </div>
    )
        }
}

export default About;