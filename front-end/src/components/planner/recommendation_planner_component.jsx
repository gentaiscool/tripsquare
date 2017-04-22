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

const boxStyle = {
	background: '#f2d182',
}

const imageBoxStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderColor: 'rgba(230,230,230,1.0)',
	background: '#f4bf42',
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

const headerStyle = {
	fontFamily: 'Roboto Light',
	fontSize: '12px',
	margin: '0px',
	marginTop: '0px',
	padding: '0px',
	lineHeight: '14px'
}

const descStyle = {
	fontFamily: 'Roboto Light',
	fontSize: '12px',
	margin: '0px',
	marginTop: '5px',
	padding: '0px',
	lineHeight: '14px'
}

class RecommendationPlanner extends Component {
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

    render(){
       return (
       		<MuiThemeProvider>
				<Row style={{width:'100%', paddingLeft:'17px',borderRadius: '10px', paddingRight:'12px'}}>
					<Col xs={2} style={imageBoxStyle}>
						<Avatar
				          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sleeping_Beauty_Castle_Disneyland_Anaheim_2013.jpg/250px-Sleeping_Beauty_Castle_Disneyland_Anaheim_2013.jpg"
				          size={60}
				          style={imageStyle}
				        />
					</Col>
					<Col xs={10} style={boxStyle}>
						<Row style={{padding:'10px', marginLeft: '-10px', borderTopRightRadius: '10px', borderStyle:'solid', borderWidth:'2px', borderColor:'rgba(230,230,230,0.8)'}}>
							<Col xs={12}>
								<Row>
									<Col xs={9} style={{padding:'0px', margin:'0px'}}>
										<p style={headerStyle}>Don't miss this</p> 
										<p style={cityNameStyle}>"HK Disneyland"</p>
									</Col>
									<Col xs={1}>
									</Col>
									<Col xs={2} style={{padding:'0px', margin:'0px'}}>
										<p style={{fontFamily:'Roboto Bold', padding:'0px', margin:'0px', display:"flex", justifyContent:"right"}}>Recommendation</p>
									</Col>
						       	</Row>
						       	<Row>
						       		<Col xs={9} style={{padding:'0px', margin:'0px'}}>
										<p style={descStyle}>Enjoy the best holiday in Hong Kong</p>
									</Col>
									<Col xs={3} style={{padding:'0px', margin:'0px'}}>
										
									</Col>
						       	</Row>
					       	</Col>
				       	</Row>
					</Col>
				</Row>
			</MuiThemeProvider>
       )
    }
}

export default RecommendationPlanner
