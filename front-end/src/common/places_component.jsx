import React, { Component } from 'react';

import Planner from '../components/planner_component.jsx';
import Itinerary from '../components/itinerary_component.jsx';
import ChatConsole from '../components/chat_console_component.jsx';
import HttpRequest from '../components/utility/http_request_component.jsx'

/* PLACES */
import Sidebar from '../components/places/sidebar_component.jsx';
import Detailbar from '../components/places/detailbar_component.jsx';
import AddItem from '../components/places/add_item_component.jsx';

/* UI LIBRARIES */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import ChromeReaderModeSVG from 'material-ui/svg-icons/action/chrome-reader-mode';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Request from 'react-http-request';

import {
  SocketProvider,
  socketConnect,
} from 'socket.io-react';

import io from 'socket.io-client';

/* STYLES */
const rightBox = {
	padding: '0px'
}

const headerStyle = {
	background: 'rgba(254,254,254,1.0)',
	width: '100%',
	height: '64px',
	borderColor: 'rgba(240,240,240,1.0)',
	borderWidth: '2px',
	borderStyle: 'solid'
}

const optionStyle = {
	fontFamily: 'Roboto Bold',
	color: 'rgba(10,10,10,1.0)',
	fontSize: '18px',
	padding: '0px',
	margin: '0px',
	paddingLeft: '10px',
	paddingBottom: '2px'
}

const descStyle = {
	paddingLeft:'10px',
	margin: '0px',
	fontFamily: 'Roboto Light',
	fontSize: '14px'
}

class Places extends Component {
	constructor(props){
		super(props);
		this.state = {
			consoleClosed: true,
			dataDetailbar: {},
			items: [],
			rightBoxPlanner: true,
			itineraryItems: []
		};
	}

	toggleConsole(){
		this.setState({consoleClosed: !this.state.consoleClosed});
	}

	onAddItemHandler(obj){
		var arr = this.state.items;
		arr.push(obj);
		this.setState({items: arr});
		console.log("places");
		console.log(this.state.items);
	}

	onDetailsClickHandler(id){
		let cities = {};
		let landmarks = {};

		let cityJSON = require('../json/city.json').default;
	    let landmarkJSON = require('../json/landmark.json').default;

	    for(let i=0; i<cityJSON.length; i++){
	      cities[cityJSON[i]["id"]] = cityJSON[i];
	    }

	    for(let i=0; i<landmarkJSON.length; i++){
	      landmarks[landmarkJSON[i]["id"]] = landmarkJSON[i];
	    }

	    let dataDetailbar = {};

	    dataDetailbar["id"] = id;
	    if(cities.hasOwnProperty(id)){
	      dataDetailbar["title"] = cities[id]["city"];
	      dataDetailbar["imageUrl"] = cities[id]["cityImageUrl"];
	      dataDetailbar["desc"] = cities[id]["desc"];
	    } else{
	      dataDetailbar["title"] = landmarks[id]["landmark"];
	      dataDetailbar["imageUrl"] = landmarks[id]["landmarkImageUrl"];
	      dataDetailbar["desc"] = landmarks[id]["desc"];
	    }

		this.setState({dataDetailbar: dataDetailbar});
	}

	onPlannerClickHandler() {
		this.setState({rightBoxPlanner: true});
	}

	onItineraryClickHandler() {
		console.log("places: onItineraryClickHandler")
		this.setState({rightBoxPlanner: false});
	}

	onAddToItineraryHandler(id){
		console.log("add to itinerary: " + id);
		
	}

    render(){
    	const consoleClosed = this.state.consoleClosed;
    	const dataDetailbar = this.state.dataDetailbar;
    	const rightBoxPlanner = this.state.rightBoxPlanner;

        return (
        	<MuiThemeProvider>
				<Grid fluid style={{padding:'0px'}}>
					<Row style={{padding:'0px'}}>
						<Col xs={2} style={{}}>
							<Sidebar 
								onPlannerClickCallback={this.onPlannerClickHandler.bind(this)}
								onItineraryClickCallback={this.onItineraryClickHandler.bind(this)}
							/>
						</Col>
						{!consoleClosed ? ( /* IF CHATBOX IS CLOSED */
						<Col xs={10} style={{}}>
							{/* HEADER */}
							<Row style={headerStyle}>
								<Col xs={4} style={{paddingTop:'7px',paddingBottom:'2px',margin:0}}>
									<p style={optionStyle}>PLACES</p>
									<p style={descStyle}>Add, manage, and vote places you want to visit</p>	
								</Col>
								<Col xs={3} style={{margin:0, padding:0}}>
									<AddItem onAddItemCallback={this.onAddItemHandler.bind(this)}/>
								</Col>
								<Col xs={5} style={{paddingTop:'11px',paddingBottom:'2px',margin:0}}>
									<RaisedButton
								      backgroundColor="#aaaaaa"
								      icon={<ChromeReaderModeSVG color="rgba(240,240,240,1.0)" style={{marginBottom: '3px'}} />}
								      label={<span style={{
								      	fontFamily: "Roboto Regular", 
								      	color:"rgba(70,70,70,1.0)", 
								      	padding:'0px', 
								      	margin:'0px', 
								      	marginLeft:'5px'
								      }}>Chat</span>}
								      onClick={this.toggleConsole.bind(this)}
								    />
								</Col>
							</Row>


							<Row>
								<Col xs={7} style={rightBox}>
									{rightBoxPlanner ? (
											<Planner onAddToItineraryCallback={this.onAddToItineraryHandler.bind(this)} items={this.state.items}  style={rightBox} onDetailsClickCallback={this.onDetailsClickHandler.bind(this)}/>
										) : (
											<Itinerary style={rightBox} onDetailsClickCallback={this.onDetailsClickHandler.bind(this)}/>
										)
									}
								</Col>

								{/* RIGHT BOX */}
								<Col xs={5} style={{paddingLeft:'0px'}}>
									<ChatConsole/>
								</Col>
							</Row>


						</Col>
							) : ( /* IF CHATBOX IS OPENED */
						<Col xs={10} style={{}}>
							<Row style={headerStyle}>
								<Col xs={4} style={{paddingTop:'7px',paddingBottom:'2px',margin:0}}>
									<p style={optionStyle}>PLACES</p>
									<p style={descStyle}>Add, manage, and vote places you want to visit</p>	
								</Col>
								<Col xs={3} style={{margin:0, padding:0}}>
									<AddItem onAddItemCallback={this.onAddItemHandler.bind(this)}/>
								</Col>
								<Col xs={5} style={{paddingTop:'11px',paddingBottom:'2px',margin:0}}>
									<RaisedButton
								      backgroundColor="#a4c639"
								      icon={<ChromeReaderModeSVG color="rgba(240,240,240,1.0)" style={{marginBottom: '3px'}} />}
								      label={<span style={{fontFamily: "Roboto Regular", color:"rgba(240,240,240,1.0)", padding:'0px', margin:'0px', marginLeft:'5px'}}>Chat</span>}
								      onClick={this.toggleConsole.bind(this)}
								    />
								</Col>
							</Row>
							<Row>
								{/* LEFT BOX */}
								<Col xs={7} style={rightBox}>
								{rightBoxPlanner ? (
											<Planner onAddToItineraryCallback={this.onAddToItineraryHandler.bind(this)} items={this.state.items} style={rightBox} onDetailsClickCallback={this.onDetailsClickHandler.bind(this)}/>
										) : (
											<Itinerary style={rightBox} onDetailsClickCallback={this.onDetailsClickHandler.bind(this)}/>
										)
									}
								</Col>

								{/* RIGHT BOX */}
								<Col xs={5} style={{paddingLeft:'0px'}}>
									<Detailbar title={dataDetailbar.title} desc={dataDetailbar.desc} imageUrl={dataDetailbar.imageUrl} />
								</Col>

							</Row>
						</Col>
						)}
					</Row>
				</Grid>
        	</MuiThemeProvider>
        );
    }
}

export default Places