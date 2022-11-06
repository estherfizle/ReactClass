import React, { Component} from"react";
import Afternoon from './Afternoon';
import Evening from './Evening';
import Morning from './Morning';

export class Message extends Component{
    render(){
        let msg;
        const time = new Date().getHours();
        if(time < 12){
            msg=<Morning />
        }else if(time >=12 && time < 16){
            msg=<Afternoon />
        }else{
            msg=<Evening />
        }
        return(
            <div>
                {msg}
            </div>
        )
    }
}
export default Message

