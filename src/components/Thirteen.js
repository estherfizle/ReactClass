import React from "react";
import Button from "./Button";

const Thirteen = ()=>{
    return(
        <div>
            <form action="">
                <div className="group">
                    <div className="group1">
                        <div className="form-group">
                            <input type="text"  placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text"  placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input type="text"  placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text"  placeholder="password"/>
                        </div>
                    </div>
                        <div className="group2">
                            <div className="form-group">
                                <input type="text"  placeholder="password"/>
                            </div>
                            <div className="form-group">
                                <input type="text"  placeholder="Age"/>
                            </div>
                            <div className="form-group">
                                <input type="text"  placeholder="Address"/>
                            </div>
                            <div className="form-group">
                                <input type="text"  placeholder="Name"/>
                            </div>
                        </div>
                        <div className="btn-group">
                        </div>
                    
                </div>
                <Button btnName ='Submit'  ></Button>
            </form>
            <h1>{}</h1>
            <h1>{}</h1>
            <h1>{}</h1>
        </div>

        
    );
}
export default Thirteen