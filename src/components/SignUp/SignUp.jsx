import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {console.log('hello world')}
                <Link to="/Home">
                    <button className="btn">Home</button>
                </Link>
            </div>
        )
    }
}

export default SignUp;