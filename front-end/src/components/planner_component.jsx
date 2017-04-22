import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Scrollbars } from 'react-custom-scrollbars';
import Paper from 'material-ui/Paper';

import City from './planner/city_component.jsx';
import Landmark from './planner/landmark_component.jsx';
import AddItem from './places/add_item_component.jsx';

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
  borderColor: 'rgba(70,70,70,1.0)',
  borderWidth: '2px',
  borderStyle: 'solid',
  marginRight: '10px',
  width: '100%'
}

const boxStyle = {
	background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))',
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
	padding:'10px',
	paddingBottom: '4px',
	margin: '0px',
	fontFamily: 'Roboto Light',
	fontSize: '14px'
}

class Planner extends Component {
	constructor(props){
		super(props);
	}

	/*clickHandler(id){
		if(typeof this.props.onDetailUpdateCallback === "function"){
			this.props.onDetailUpdateCallback(id);
		}
	}*/

	onDetailsClickHandler(id){
		//console.log("planner");
		this.props.onDetailsClickCallback(id);
	}

    render(){
       return (
       		<MuiThemeProvider>
				<Grid fluid style={{padding:'0px'}}>
					<Row>
						<Col xs={12} style={{}}>
							<Scrollbars style={{height:'480px',paddingRight:'0px'}}>
								<div style={{marginTop:"10px"}}>
									<City cityName="Shenzhen, China" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shenzhen_Skyline_from_Nanshan.jpg/360px-Shenzhen_Skyline_from_Nanshan.jpg"
									desc="One of China's wealthiest cities"
									onDetailsClickCallback={this.onDetailsClickHandler.bind(this, "city_1")}
									id="city_1"
									/>
								</div>
								<div style={{marginTop:"10px"}}>
									<Landmark cityName="Shenzhen, China" landmarkName="Shenzhen Safari Park" imageUrl="http://static.hk.groupon-content.net/07/82/1332308568207.jpg"
									desc="first zoo in China to uncage animals"
									id="landmark_2"
									onDetailsClickCallback={this.onDetailsClickHandler.bind(this, "landmark_2")}
									/>
								</div>
							</Scrollbars>
						</Col>
					</Row>
				</Grid>
			</MuiThemeProvider>
       )
    }
}

export default Planner
