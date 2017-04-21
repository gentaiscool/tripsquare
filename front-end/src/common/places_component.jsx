import React, { Component } from 'react';

import Planner from '../components/planner_component.jsx';
import ChatConsole from '../components/chat_console_component.jsx';

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
			dataDetailbar: {}
		};
	}

	toggleConsole(){
		this.setState({consoleClosed: !this.state.consoleClosed});
	}

	onDetailsClickHandler(id){
		var dataDetailbar = {};
		if(id == "city_1"){
			dataDetailbar = {
				id: id,
				title: "Shenzhen, China",
				desc: "One of China's wealthiest cities.",
				imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shenzhen_Skyline_from_Nanshan.jpg/360px-Shenzhen_Skyline_from_Nanshan.jpg"
			}
		} else{
			dataDetailbar = {
				id: id,
				title: "Shenzhen Safari Park",
				desc: "Shenzhen Safari Park is the first zoo in China to uncage animals. With green mountains to the north as its barrier, it is like a bright pearl in the bustling metropolis. Covering an area of 158 acres (640,000 square meters), there are more than 300 kinds of wild animals, in total 10,000 from all over the earth. Many of them are rare animals, such as giant pandas, south China tigers, golden monkeys, Siberian tigers, flamingos, giraffes, zebras, and Asian elephants. Visitors can not only take a close look of the animals, appreciating their amusing performances, but also enjoy the thrilling Motorcycle and Car Stunt Show at night.",
				imageUrl: "http://static.hk.groupon-content.net/07/82/1332308568207.jpg"
			}
		}

		this.setState({dataDetailbar: dataDetailbar});
	}

    render(){
    	const consoleClosed = this.state.consoleClosed;
    	const dataDetailbar = this.state.dataDetailbar;

        return (
        	<MuiThemeProvider>
				<Grid fluid style={{padding:'0px'}}>
					<Row style={{padding:'0px'}}>
						<Col xs={2} style={{}}>
							<Sidebar/>
						</Col>
						{!consoleClosed ? (
						<Col xs={10} style={{}}>
							<Row style={headerStyle}>
								<Col xs={4} style={{paddingTop:'7px',paddingBottom:'2px',margin:0}}>
									<p style={optionStyle}>PLACES</p>
									<p style={descStyle}>Add, manage, and vote places you want to visit</p>	
								</Col>
								<Col xs={3} style={{margin:0, padding:0}}>
									<AddItem />
								</Col>
								<Col xs={5} style={{paddingTop:'11px',paddingBottom:'2px',margin:0}}>
									<RaisedButton
								      backgroundColor="#aaaaaa"
								      icon={<ChromeReaderModeSVG color="rgba(240,240,240,1.0)" style={{marginBottom: '3px'}} />}
								      label={<span style={{fontFamily: "Roboto Regular", color:"rgba(70,70,70,1.0)", padding:'0px', margin:'0px', marginLeft:'5px'}}>Chat</span>}
								      onClick={this.toggleConsole.bind(this)}
								    />
								</Col>
							</Row>
							<Row>
								<Col xs={7} style={rightBox}>
									<Planner style={rightBox} onDetailClickCallback={this.onDetailsClickHandler.bind(this)}/>
								</Col>
								<Col xs={5} style={{paddingLeft:'0px'}}>
									<ChatConsole/>
								</Col>
							</Row>
						</Col>
							) : (
						<Col xs={10} style={{}}>
							<Row style={headerStyle}>
								<Col xs={4} style={{paddingTop:'7px',paddingBottom:'2px',margin:0}}>
									<p style={optionStyle}>PLACES</p>
									<p style={descStyle}>Add, manage, and vote places you want to visit</p>	
								</Col>
								<Col xs={3} style={{margin:0, padding:0}}>
									<AddItem />
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
								<Col xs={7} style={rightBox}>
									<Planner style={rightBox} onDetailClickCallback={this.onDetailsClickHandler.bind(this)}/>
								</Col>
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