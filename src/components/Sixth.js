import React,{Component} from "react";

export class Sixth extends Component{
    constructor(){
        super()
        this.state = {count: 0}
    }
    componentDidMount (){
        document.title = `You clicked ${this.state.count}`
    }
    componentDidUpdate (){
        document.title =  `You clicked ${this.state.count}`
    }

    increase=()=>{
        this.setState({count: this.state.count})
    }
    render(){
        return(
            <div>
                 <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count + 3})}}>Increment</button>
            </div>
        )
    }
}
export default Sixth