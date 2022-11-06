import React from "react"
import './Tenth.css'
import estherImage from '../images/photo-1587620962725-abab7fe55159.avif'
import TenthProp from "./TenthProps"

const Tenth=(props)=>{
    return(<div>
       <div className="class-wrap">
        <TenthProp
        displayImg={estherImage}
        name='Esther okoh'
        sex= "female"
        title="full stack developer"
        />
       </div>
       <TenthProp
        displayImg={estherImage}
        name='Esther okoh'
        sex= "female"
        title="full stack developer"
        />
        <TenthProp
        displayImg={estherImage}
        name='Esther okoh'
        sex= "female"
        title="full stack developer"
        />






</div>)
}
export default Tenth