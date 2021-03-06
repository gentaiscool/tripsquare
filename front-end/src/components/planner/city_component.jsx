import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Scrollbars } from 'react-custom-scrollbars';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import ThumbUpSVG from 'material-ui/svg-icons/action/thumb-up';
import ThumbDownSVG from 'material-ui/svg-icons/action/thumb-down';
import ScheduleSVG from 'material-ui/svg-icons/action/schedule';
import InsertInvitationSVG from 'material-ui/svg-icons/editor/insert-invitation';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
	background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))',
}

const imageBoxStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderColor: 'rgba(230,230,230,1.0)',
	background: 'rgba(250,250,250,1.0)',
	borderWidth: '2px',
	borderStyle: 'solid',
	borderTopLeftRadius: '10px',
	borderBottomLeftRadius: '10px'
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

const dateStyle = {
	fontFamily: 'Roboto Light',
	fontSize: '12px',
	padding: '0px',
	margin: '0px'
}

const timeStyle = {
	fontFamily: 'Roboto Light',
	fontSize: '12px',
	padding: '0px',
	margin: '0px',
	marginLeft: '10px'
}

const cityNameStyle = {
	fontFamily: 'Roboto Light',
	fontSize: '22px',
	margin: '0px',
	padding: '0px'
}

const descStyle = {
	fontFamily: 'Roboto Light',
	fontSize: '12px',
	margin: '0px',
	marginTop: '5px',
	padding: '0px',
	lineHeight: '14px'
}

class City extends Component {
	constructor(props) {
		super(props);
	}

	onDetailsClickHandler(id) {
		//console.log("city");
		this.props.onDetailsClickCallback(id);
	}

	onClickUpHandler(id) {
		this.props.onUpClickCallback(id);
	}

	onClickDownHandler(id) {
		this.props.onDownClickCallback(id);
	}

	onAddToItineraryHandler(id){
		console.log("add");
		this.props.onAddToItineraryCallback(id);
	}

    render(){
       return (
       		<MuiThemeProvider>
				<Row style={{width:'100%', paddingLeft:'17px',borderRadius: '10px', paddingRight:'12px'}}>
					<Col xs={2} style={imageBoxStyle} onClick={this.onDetailsClickHandler.bind(this, this.props.id)}>
						<Avatar
				          src={this.props.imageUrl}
				          size={80}
				          style={imageStyle}
				        />
					</Col>
					<Col xs={10} style={boxStyle}>
						<Row style={{padding:'10px', marginLeft: '-10px', borderTopRightRadius: '10px', borderStyle:'solid', borderWidth:'2px', borderColor:'rgba(230,230,230,0.8)'}}>
							<Col xs={12}>
								<Row>
									<Col xs={9} style={{padding:'0px', margin:'0px'}} onClick={this.onDetailsClickHandler.bind(this, this.props.id)}>
										<p style={cityNameStyle}>{this.props.cityName}</p>
									</Col>
									<Col xs={1} onClick={this.onDetailsClickHandler.bind(this, this.props.id)}>
									</Col>
									<Col xs={2} style={{padding:'0px', margin:'0px'}} onClick={this.onAddToItineraryHandler.bind(this, this.props.id)}>
										<FloatingActionButton mini={true} secondary={true} style={{marginLeft:'40px'}}>
											<ContentAdd />
										</FloatingActionButton>
									</Col>
						       	</Row>
						       	<Row>
						       		<Col xs={9} style={{padding:'0px', margin:'0px'}} onClick={this.onDetailsClickHandler.bind(this, this.props.id)}>
										<p style={descStyle}>{this.props.desc}</p>
									</Col>
									<Col xs={3} style={{padding:'0px', margin:'0px'}} onClick={this.onDetailsClickHandler.bind(this, this.props.id)}>
										
									</Col>
						       	</Row>
					       	</Col>
				       	</Row>
				       	<Row style={{marginTop:'-1px', marginLeft: '-10px', padding:'7px', borderBottomRightRadius: '10px', borderStyle:'solid', borderWidth:'2px', borderColor:'rgba(230,230,230,0.8)'}}>
							<Col xs={7}>
								<ThumbUpSVG style={{marginRight:"10px", width:'20px', height:'20px'}} color="#feb24c"
								onClick={this.onClickUpHandler.bind(this, this.props.id)}/>
								<span style={{marginRight:"10px", fontSize:"15px", fontFamily:"Roboto Light"}}>{this.props.up}</span>
								<ThumbDownSVG style={{width:'20px', height:'20px'}} color="#969696"
								onClick={this.onClickDownHandler.bind(this, this.props.id)}/>
								<span style={{marginLeft:"10px", fontSize:"15px", fontFamily:"Roboto Light"}}>{this.props.down}</span>
							</Col>
							<Col xs={5} style={{display:"flex"}}>
								
							</Col>
				       	</Row>
					</Col>
				</Row>
			</MuiThemeProvider>
       )
    }
}

export default City
