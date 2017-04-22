import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Scrollbars } from 'react-custom-scrollbars';
import Paper from 'material-ui/Paper';

import City from './planner/city_component.jsx';
import Landmark from './planner/landmark_component.jsx';
import RecommendationPlanner from './planner/recommendation_planner_component.jsx';
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

		this.state = {
			ups: {},
			downs: {}
		}
	}

	onDetailsClickHandler(id){
		//console.log("planner");
		this.props.onDetailsClickCallback(id);
	}

	onUpClickHandler(id){
		var ups = this.state.ups;
		if(!ups.hasOwnProperty(id))
			ups[id] = 0;
		ups[id] = this.state.ups[id]+1;
		this.setState({ups: ups});
		console.log("up>" + ups[id] + " " + id);
	}

	onDownClickHandler(id){
		var downs = this.state.downs;
		if(!downs.hasOwnProperty(id))
			downs[id] = 0;
		downs[id] = this.state.downs[id]+1;
		this.setState({downs: downs});
		console.log("down>" + downs[id] + " " + id);
	}

	onAddToItineraryHandler(id){
		this.props.onAddToItineraryCallback(id);
	}

    render(){
      function compare(a, b) {
      	return (a["up"]-a["down"] < b["up"]-b["down"]);
	  }

      //sort items
      var data = this.props.items;

      for(let i=0; i<data.length; i++){
      	var itemId = data[i]["id"];

      	if(this.state.ups.hasOwnProperty(itemId))
	      	data[i]["up"] = this.state.ups[itemId];
	     else
	     	data[i]["up"] = 0;


      	if(this.state.downs.hasOwnProperty(itemId))
	      	data[i]["down"] = this.state.downs[itemId];
	     else
	     	data[i]["down"] = 0;

      	console.log(">>" + itemId + " " + this.state.ups[itemId] + " " + data[i]["up"]);
      }

      // /let cloneData = data;
      //console.log("pret");
      data.sort(compare);
      //console.log(data);

      var items = data.map(function(item){
      	if(item["type"] == "city"){
      		return  <div style={{marginTop:"10px"}}>
				<City cityName={item["city"]} 
				imageUrl={item["cityImageUrl"]}
				desc={item["desc"]}
				onDetailsClickCallback={this.onDetailsClickHandler.bind(this, item["id"])}
				onUpClickCallback={this.onUpClickHandler.bind(this, item["id"])}
				onDownClickCallback={this.onDownClickHandler.bind(this, item["id"])}
				onAddToItineraryCallback={this.onAddToItineraryHandler.bind(this, item["id"])}
				id={item["id"]}
				up={item["up"]}
				down={item["down"]}
				/>
			</div>
      	} else{
      		return <Landmark cityName={item["city"]} 
				landmarkName={item["landmark"]} 
				imageUrl={item["landmarkImageUrl"]}
				desc={item["desc"]}
				onDetailsClickCallback={this.onDetailsClickHandler.bind(this, item["id"])}
				onUpClickCallback={this.onUpClickHandler.bind(this, item["id"])}
				onDownClickCallback={this.onDownClickHandler.bind(this, item["id"])}
				onAddToItineraryCallback={this.onAddToItineraryHandler.bind(this, item["id"])}
				id={item["id"]}
				up={item["up"]}
				down={item["down"]}
				/>
      	}
      	count += 1;
      }.bind(this));
       return (
       		<MuiThemeProvider>
				<Grid fluid style={{padding:'0px'}}>
					<Row style={{marginTop:'7px'}}>
						<Col xs={12}>
							<RecommendationPlanner/>
							<Scrollbars style={{height:'400px',paddingRight:'0px'}}>
								{items}
							</Scrollbars>
						</Col>
					</Row>
				</Grid>
			</MuiThemeProvider>
       )
    }
}

export default Planner
