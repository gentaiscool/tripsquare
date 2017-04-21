import React, {Component} from 'react';
import { Link } from 'react-router';

const contentStyle = {
	padding: '0px',
	width: '100%',
	height: '100%'
}

class Main extends Component {
    render(){
        return(
            <div>
                <div className="container" style={contentStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main