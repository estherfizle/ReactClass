import React,{ Component } from "react";
import './Third.css'
class Third extends Component{
    render(){
        return(<div>
            <div className="test">
                <div className="text-con">
                    <div className="img">
                        <img src="../../images/photo-1587620962725-abab7fe55159.avif" alt="" />
                    </div>
                    <div className="text">
                        <h3>{this.props.name}</h3>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.bio}</p>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
                <div className="desc">
                    <p></p>
                </div>
            </div>
        

</div> )
    }
}
export default Third;