import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Scrollbars } from 'react-custom-scrollbars';
import Paper from 'material-ui/Paper';

import City from './itinerary/city_itinerary_component.jsx';
import Landmark from './itinerary/landmark_itinerary_component.jsx';
import Transport from './itinerary/transport_itinerary_component.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import TimelineSVG from 'material-ui/svg-icons/action/timeline';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from 'material-ui/List';

var socket;

class Itinerary extends Component {
  constructor(props){
    super(props);

    socket = props.socket;
  }

  onDetailsClickHandler(id){
    // console.log("Itinerary");
    this.props.onDetailsClickCallback(id);
  }

  render() {
    let items = this.props.items;

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

    const content = [];
    const names = [];
    for(let i=0; i<items.length; i++){
      var id = items[i].id;
      var time = items[i].time;
      var date = items[i].date;

      if(cities.hasOwnProperty(id)){
        var cityName = cities[id]["city"];
        var imageUrl = cities[id]["cityImageUrl"];
        var desc = cities[id]["desc"];

        if(i > 0){
          content.push(
            [
              <Transport
                departure={names[i-1]}
                arrival={cityName}
                socket={socket}
                />
            ]
          )
        }

        content.push(
          [
          <div style={{marginTop:"10px"}}>
            <City 
            cityName={cityName}
            imageUrl={imageUrl}
            desc={desc}
            date={date}
            time={time}
            onDetailsClickCallback={this.onDetailsClickHandler.bind(this, id)}
            id={id}
            />
          </div>
          ]
        )
        names.push(cityName);
      } else{
        var cityName = landmarks[id]["cityName"];
        var landmarkName = landmarks[id]["landmark"];
        var imageUrl = landmarks[id]["landmarkImageUrl"];
        var desc = landmarks[id]["desc"];

        if(i > 0){
          content.push(
            [
              <Transport
                departure={names[i-1]}
                arrival={landmarkName}
                socket={socket}
                />
            ]
          )
        }

        content.push(
          [
          <div style={{marginTop:"10px"}}>
            <div style={{marginTop:"10px"}}>
              <Landmark 
              cityName={cityName}
              landmarkName={landmarkName}
              imageUrl={imageUrl}
              desc={desc}
              date={date}
              time={time}
              id={id}
              onDetailsClickCallback={this.onDetailsClickHandler.bind(this, id)}
              />
            </div>
          </div>
        ]
        )
        names.push(landmarkName);
      }
    }

    // // ADD AN OPTIMIZE BUTTON??
    // content.push(
    //   [
    //   <Col xs={12} >
    //   <Row style={{alignItems:'right', margin:'10px'}}>
    //     <RaisedButton
    //     backgroundColor="#a4c639"
    //     icon={<TimelineSVG color="rgba(240,240,240,1.0)" style={{marginBottom: '3px'}} />}
    //     align='right'
    //     label={<span style={{
    //       fontFamily: "Roboto Regular", 
    //       color:"rgba(240,240,240,1.0)", 
    //       padding:'0px', 
    //       margin:'0px', 
    //       marginLeft:'5px'}}>Optimize</span>}
    //     onClick={this.optimizeItinerary.bind(this)}
    //     />
    //   </Row>
    //   </Col>
    //   ]
    // )

    return (
      <MuiThemeProvider>
        <Grid fluid style={{padding:'0px'}}>
          <Row>
            <Col xs={12} style={{}}>
              <Scrollbars style={{height:'480px',paddingRight:'0px'}}>
                {content}
              </Scrollbars>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

export default Itinerary