import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect,useContext,useRef,useReducer,useCallback } from 'react';
import About from './About';
import Contact from './contact';
import form from './form';
import Learner from './Learner';
import {Link, Route, BrowserRouter as Router } from 'react-router-dom'
function App() {
  

  const [data,setData] = useState("Frazia")

  const[count,setCount] = useState(0)

//useeffect is read only it just helps to maintain lifecycle component
   const reducer = (state,action)   => {
         
    return state;

   }

   const InitialValue ={
    learnerName: "Frazia",

   }
  useEffect(()=> {
    console.warn("useEffect is working")
  })

  //Javascrit syntax extension

  return (
  

    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<h1>{data}</h1>
  <button onClick={()=> setData("Farheen")}>update</button>

  <h1>this is current state of count {count}</h1>
  <button onClick={()=> setCount(count+1)}>update count</button>
  <Router>
    <Link  to= "/Homepage"> Home</Link>
   <Link  to= "/about"> About</Link>
   <Link  to= "/Learners"> LearnerDetails</Link>
   <Link  to= "/contact"> Contact</Link>
</Router>
<About/>

<form/>

<Contact/>
<Learner/>

 

<form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  
  </form>
<div>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>


  key{InitialValue.learnerName}
</div>

    </div>

    
  );
}

export default App;
