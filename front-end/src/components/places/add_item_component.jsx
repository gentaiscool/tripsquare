import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Scrollbars } from 'react-custom-scrollbars';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import ThumbUpSVG from 'material-ui/svg-icons/action/thumb-up';
import ThumbDownSVG from 'material-ui/svg-icons/action/thumb-down';

import TextField from 'material-ui/TextField';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from 'material-ui/List';

const containerStyle = {
	background: 'rgba(250,250,250,1.0)'
}

const headerStyle = {
  fontFamily: 'Roboto Bold',
  background: 'rgba(40, 40, 40, 1.0)',
  color: 'rgba(250, 250, 250, 1.0)',
  fontSize: '14px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft:'27px',
  paddingRight:'10px',
  borderColor: 'rgba(240,240,240,1.0)',
  borderWidth: '2px',
  borderStyle: 'solid',
  marginRight: '0px',
  width: '100%'
}

const boxStyle = {
	paddingTop: '15px',
	paddingBottom: '15px'
}

const imageBoxStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}

const imageStyle = {
	maxWidth: '100%',
	maxHeight: '100%',
	alignItems:'center',
    justifyContent:'center'
}

const durationStyle = {
	fontSize: '40px'
}

const cityNameStyle = {
	fontSize: '25px'
}

const descStyle = {
	fontSize: '12px'
}

class AddItem extends Component {
	constructor(props) {
		super(props);
		//this.props = props;
	}
    render(){
       return (
       		<MuiThemeProvider>
				<TextField
	                hintText="Add city, landmark"
	                style={{marginRight:'10px', width:'90%', color:'rgba(210,210,210,1.0)'}}
	              />
			</MuiThemeProvider>
       )
    }
}

export default AddItem
