import React,{useState} from "react";
import Button from "./Button"

const Eleventh = ()=>{
const [greetings, setGreetings]=useState('Welcome')
const [message,setMessage]= useState('Enjoy your self')

    return (


        <div>
            <h1>{greetings} user. {message}</h1>
            <Button btnName="Log Out" onClick={()=>{
                    setGreetings('Goodbye')
                    setMessage("See you next time")
                }}/>
            
            {/* classwork1 */}
            <Button btnName="Log in" onClick={()=>{
                    setGreetings('Welcome')
                    setMessage("Enjoy your self")
                }}/>
        </div>

    )
}
export default Eleventh