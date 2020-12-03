import React, { Component } from 'react';
import Social_data from '../data/Social_data';



function SocialFooterComponent(){
    return(
        <>
            <p>Open for remote work and freelancing</p>
            <p>contact: +91 7738515268; +91 9892418481</p>
        
        {/* <div className="SocialFooterComponent"> */}
            {Social_data.map((social_data_object) => (
                <SocialFooterDisplay key={social_data_object.id} {...social_data_object} />
            ))}
        {/* </div> */}
        </>
    )
}

function SocialFooterDisplay({link, image}){
        // const {link, image} = this.props.SocialFooterComponents; 
        return(
            <>
               <a href={link} target="_blank">
                   <img src={image} alt='' style = {{width:35, height:35, margin:5, padding:5}}/>
                </a> 
            </>
        )
}

export default SocialFooterComponent;