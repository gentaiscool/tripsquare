import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Scrollbars } from 'react-custom-scrollbars';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import ThumbUpSVG from 'material-ui/svg-icons/action/thumb-up';
import ThumbDownSVG from 'material-ui/svg-icons/action/thumb-down';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from 'material-ui/List';

const headerStyle = {
  background: 'rgba(254,254,254,1.0)',
  width: '100%',
  height: '100%',
  borderColor: 'rgba(230,230,230,1.0)',
  borderWidth: '1px',
  borderStyle: 'solid',
  padding: '0px'
}

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  alignItems:'center',
  justifyContent:'center',
  borderColor: 'rgba(230,230,230,0.8)',
  borderWidth: '2px',
  borderStyle: 'solid',
}

const memberStyle = {
  fontFamily: 'Roboto Bold',
  color: 'rgba(40,40,40,1.0)',
  fontSize: '15px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px'
}

class MessageBox extends Component {
	constructor(props) {
		super(props);
		//this.props = props;
	}
    render(){
       return (
       		<MuiThemeProvider>
				<Row
                  style={{margin:'10px', marginLeft:'20px', marginRight:'10px', display: 'inlineBlock', width:'auto', color: 'rgba(40,40,40,1.0)'}}>
                  <Col xs={12} style={{padding:"0px"}}>
                    <Row style={{padding:'0px', margin:'0px'}}>
                      <Col xs={2} style={{padding:'0px', display:'flex',alignItems:'center',justifyContent:'left'}}>
                        <Avatar
                          src="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F8a6af7a7-1381-47d8-a9b8-c070e14d69e5.jpg"
                          size={50}
                          style={imageStyle}
                        />
                      </Col>
                      <Col xs={10}>
                        <div style={{display:'inline-block', width: 'auto', minWidth:'30px', padding:'10px', borderRadius:'12px', background: 'rgba(250,250,250,1.0)'}}>
	                        <p style={{width:'auto', minWidth:'30px', margin:'0px', fontFamily:'Roboto Regular'}}>Hello</p>
	                        <p style={{width:'auto', minWidth:'30px', margin:'0px', fontSize:'10px', fontFamily:'Roboto Regular'}}>13.00</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
			</MuiThemeProvider>
       )
    }
}

export default MessageBox
