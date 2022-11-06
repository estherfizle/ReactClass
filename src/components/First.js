import React from "react";
const esther={
    textAlign: 'justify', 
    color: 'red',
    padding: '20px'
}
const First=()=>{
    return( <div>
        <div className="wrapper" style={{border: 'solid',borderRadius: '15px 0 15px 0',width : '50%'}}>
            <div className="wrap" style={esther}>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, illo!</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates quibusdam eius necessitatibus doloribus dolorum animi aspernatur, voluptas, ex tempora soluta iste odit ut minima fuga beatae voluptate nulla corrupti veniam deleniti blanditiis ullam laborum quod illum! Id, blanditiis molestias!</p>
            </div>
        </div>
</div> )
}
export default First