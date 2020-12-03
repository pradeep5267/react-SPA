import React, {Component, useState} from 'react';


import './ProjectComponent.css';
import Project_data from '../data/Project_data';

// Data deserializer
function ProjectComponentDataDriver({title, category, technology_used, description, image}){
  return( ProjectObjectDisplayComponent(title, category, technology_used, description))
  }

// Project description display component
function ProjectDescriptionDisplayComponent({data}){
  return(
    <React.Fragment>
      <p>
        {data}
      </p>
    </React.Fragment>
  )
}

// Project object display component
  function ProjectObjectDisplayComponent(title, category, technology_used, description){
    // state variable using useState [state_var, callbackFunc]
    const [isToggled, setToggled] = useState(false);
    return(
    <>
      {/* <div className="CardBig"> */}
      <p>{title}</p>
      <p>{category, technology_used}</p>

      {isToggled ?<>
       <ProjectDescriptionDisplayComponent data={description}/> 
       <button onClick={() => setToggled(!isToggled)} className='button'>click to hide description</button>
        </>: 
        <button onClick={() => setToggled(!isToggled)} >click to show description</button>
      }      
      {/* </div> */}
    </>
    )
  }


// component driver
function ProjectComponent() {
  return(
  <React.Fragment>
  {/* <div className="ProjectComponent"> */}
  {Project_data.map((project_object_data, i) => (
    <ProjectComponentDataDriver key={i} {...project_object_data} />
  ))}
  {/* </div> */}

  </React.Fragment>)
}

export default ProjectComponent;



