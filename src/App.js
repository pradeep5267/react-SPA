import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Project_data from './data/Project_data';

// Data deserializer
function ProjectComponentFunctionsDriver({title, category, technology_used, description, image}){
  // console.log({title, category, technology_used, description})
  return(
  // <div></div>
    ProjectObjectDisplayComponent(title, category, technology_used, description)
  )
  }

// Project object display component
  function ProjectObjectDisplayComponent(title, category, technology_used, description){
    return(
      <div>
      <p>absdjbsa</p>
      <p>{title, category, technology_used, description}</p>
    </div>
    )
  }

// state manager



// component driver
function App() {
  return(
  <React.Fragment>

  <h1>top text here</h1>

  {Project_data.map((project_object_data, i) => (
    <ProjectComponentFunctionsDriver key={i} {...project_object_data} />
  ))}

  <footer>
    <p>
      bottom text here 
    </p>
  </footer>

  </React.Fragment>)
}

export default App;



