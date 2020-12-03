import React, {Component, useState} from 'react';

import Intro_data from '../data/Intro_data'


function IntroComponent(){
    return(
        <>
        {/* Data deserializer */}
        {Intro_data.map((IntroDataObject,i) => (
            <IntroDisplayComponent key={i} {...IntroDataObject} />
        ))}
        </>
    )
}

function ShowDescription(){

}

// Intro display component
function IntroDisplayComponent({Name, Short_desc, Long_desc}){
  const [IntroState, setIntroState] = useState(false);
    return(
      <React.Fragment>
        <p>
        {Name, Short_desc, Long_desc}
        <h2>intro description</h2>
        </p>
      </React.Fragment>
    )
  }

export default IntroComponent;