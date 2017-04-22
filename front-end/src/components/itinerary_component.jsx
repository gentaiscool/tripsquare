import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Scrollbars } from 'react-custom-scrollbars';
import Paper from 'material-ui/Paper';

import City from './itinerary/city_itinerary_component.jsx';
import Landmark from './itinerary/landmark_itinerary_component.jsx';
import Transport from './itinerary/transport_itinerary_component.jsx';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from 'material-ui/List';

class Itinerary extends Component {
  constructor(props){
    super(props);
  }

  onDetailsClickHandler(id){
    // console.log("Itinerary");
    this.props.onDetailsClickCallback(id);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid style={{padding:'0px'}}>
          <Row>
            <Col xs={12} style={{}}>
              <Scrollbars style={{height:'480px',paddingRight:'0px'}}>
                <div style={{marginTop:"10px"}}>
                  <City 
                  cityName="Shenzhen, China" 
                  imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shenzhen_Skyline_from_Nanshan.jpg/360px-Shenzhen_Skyline_from_Nanshan.jpg"
                  desc="One of China's wealthiest cities"
                  onDetailsClickCallback={this.onDetailsClickHandler.bind(this, "city_1")}
                  id="city_1"
                  />
                </div>
                <Transport
                  type="train"
                  details="via Huanzhong Line"
                  time="54 min."
                  />
                <div style={{marginTop:"10px"}}>
                  <Landmark 
                  cityName="Shenzhen, China" 
                  landmarkName="Shenzhen Safari Park" 
                  imageUrl="http://static.hk.groupon-content.net/07/82/1332308568207.jpg"
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

export default Itinerary