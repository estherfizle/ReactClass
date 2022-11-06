import React,{Component} from "react";
export class Fifth extends Component {
    constructor(){
        super()
        this.state ={greetings: 'Welcome', msg: 'we hope and believe  you are going to have a nice day with us'}
    }
    changemessage=()=>{
        this.setState({greetings: 'goodbye',msg:'to see you again'})
    }
    // changemessage(){
    //     this.setState({greetings: 'Goodbye',msg: 'to see you again'})
    // }
    render(){
        return(
            <div>
           <h1>{this.state.greetings} User,we hope{this.state.msg}</h1>
           <button onClick={this.changemessage}>Log Out</button>
            {/* <button onClick={this.changemessage.bind(this)}>Log Out</button> */}
           <button onClick={()=>{this.setState({greetings: 'Welcome', msg: 'we hope and believe  you are going to have a nice day with us'})}}>Log In</button>
        </div>
        )
        }
        
    }

export default Fifth