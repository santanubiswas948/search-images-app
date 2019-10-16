import React from 'react';

const AngledBackground = (props)=>{
    return ( 
    <div className="bg"
        style={{
            backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(133,133,217,0.11528361344537819) 53%, rgba(0,212,255,1) 100%),url("+props.backgroundImage+")",
            backgrroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}>    
    </div>
    )
}
export default AngledBackground;