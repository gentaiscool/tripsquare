import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AccountBoxSVG from 'material-ui/svg-icons/action/account-box';
import ListSVG from 'material-ui/svg-icons/action/list';
import ViewQuiltSVG from 'material-ui/svg-icons/action/view-quilt';

import { Scrollbars } from 'react-custom-scrollbars';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from 'material-ui/List';

const titleStyle = {
  fontFamily: 'Roboto Light',
  fontSize: '30px',
  color: 'rgba(240,240,240,1.0)',
  textAlign: 'center',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '15px'
}

const descStyle = {
  fontFamily: 'Roboto Light',
  fontSize: '14px',
  color: 'rgba(240,240,240,1.0)',
  textAlign: 'center',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '5px',
  lineHeight: '18px'
}

const dateStyle = {
  fontFamily: 'Roboto Regular',
  fontSize: '15px',
  color: 'rgba(240,240,240,1.0)',
  textAlign: 'center',
  paddingLeft: '20px',
  paddingRight: '20px'
}

const headerStyle = {
  fontFamily: 'Roboto Regular',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '14px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px'
}

const optionStyle = {
  fontFamily: 'Roboto Bold',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '14px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px'
}

const memberStyle = {
  fontFamily: 'Roboto Regular',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '12px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px'
}

const nameStyle = {
  fontFamily: 'Roboto Light',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '14px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '20px'
}

class Detailbar extends Component {
	constructor(props) {
		super(props);
		this.state = {hover_flag: false};
	}

	getDefaultProps(){
		return {
		    isSelected: false
		};
	}

	getInitialState(){
		return {
		    hover_flag: false
		};
	}

	hoverEvent(){
		this.setState({hover_flag: !this.state.hover_flag});
	}

	render(){
		var liStyle = {
			background: 'rgba(0,0,0,0)',
			paddingLeft: '10px'
		};

		if (this.state.hover_flag) {
			liStyle['background'] = '#880000';
		}

		return (
			<MuiThemeProvider>
				<Scrollbars style={{margin:'0px', height:'500px', padding:'0px'}}>
					<Grid fluid style={{background:'rgba(62,50,50,1.0)',paddingLeft:'9px',paddingRight:'9px',paddingTop:'20px',height:'100%'}}>
						<Row style={{padding:'0px', margin:'0px', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
							<img src={this.props.imageUrl} style={{width:'70%', height:'auto',paddingLeft:'10px',paddingRight:'10px'}} />
						</Row>
						<Row style={{padding:'0px', margin:'0px',alignItems: 'center', justifyContent: 'center'}}>
							<p style={titleStyle}>{this.props.title}</p>
						</Row>
						<Row style={{padding:'0px', margin:'0px',alignItems: 'center', justifyContent: 'center'}}>
							<p style={descStyle}>{this.props.desc}</p>
						</Row>
					</Grid>
				</Scrollbars>
			</MuiThemeProvider>
       )
    }
}

export default Detailbar
