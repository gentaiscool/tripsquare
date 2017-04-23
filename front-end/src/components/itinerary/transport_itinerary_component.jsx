import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Scrollbars } from 'react-custom-scrollbars';
import Avatar from 'material-ui/Avatar';

import TrainSVG from 'material-ui/svg-icons/maps/train';
import DriveEtaSVG from 'material-ui/svg-icons/notification/drive-eta';
import DirectionsWalkSVG from 'material-ui/svg-icons/maps/directions-walk';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from 'material-ui/List';

const transportBox = {
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft:'17px',
  borderRadius: '10px', 
  paddingRight:'12px', 
  borderColor: 'rgb(255, 173, 42)',
  background: 'rgb(255, 240, 127)',
  borderWidth: '2px',
  borderStyle: 'solid',
  marginLeft: '10px',
  marginRight: '18px',
  paddingBottom: '6px',
  marginTop: '3px'
}

const recommendText = {
  fontFamily: 'Roboto Bold',
  fontSize: '14px',
  fontStyle: 'italic',
  color: 'rgb(219, 116, 0)',
  alignItems: 'right',
  justifyContent: 'center'
}

const otherText = {
  fontFamily: 'Roboto Regular',
  fontSize: '14px',
  fontStyle: 'italic',
  color: 'rgb(219, 116, 0)',
  alignItems: 'right',
  justifyContent: 'center'
}

const detailsText = {
  fontFamily: 'Roboto Regular',
  fontSize: '12px',
  color: 'rgb(3, 3, 3)',
  alignItems: 'right',
  justifyContent: 'center',
  padding:'0px'
}

const carpoolText = {
  fontFamily: 'Roboto Light',
  fontSize: '10px',
  color: 'rgb(3, 3, 3)',
  alignItems: 'right',
  justifyContent: 'center',
  marginTop: '-10px',
  padding:'0px'
}

const sponsorIconStyle = {
  width: '45px',
  height: 'auto',
  marginRight: '5px'
}

const smallerRowStyle = {
  fontFamily: 'Roboto Light',
  marginBottom:'-10px',
  padding:'0px'
}

var socket;

class Transport extends Component {
  receiver(data){
    console.log(data);
    this.setState({walkingTime: data.walkingTime, transitTime: data.transitTime, drivingTime: data.drivingTime});
  }

  constructor(props) {
    super(props);

    this.state = {
      departure: this.props.departure,
      arrival: this.props.arrival,
    }

    socket = this.props.socket;
    socket.on(this.state.departure + "_" + this.state.arrival, this.receiver.bind(this));

    var obj = {};
    obj.departure = this.props.departure;
    obj.arrival = this.props.arrival;

    console.log("haha>>directions_api");
    socket.emit("directions_api", obj);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Col xs={12} style={transportBox}>
        <Row style={smallerRowStyle}>
          <Col xs={3}>
            {/* "RECOMMENDED ROUTE" */}
            <p style={recommendText}>Recommended</p>
          </Col>
          <Col xs={6}>
            {/* ROUTE DETAILS */}
            <div style={detailsText}><img src='http://i.imgur.com/yjcpE7N.png' 
            style={sponsorIconStyle}/> via Long Rd. to Safari Park</div>
            <div style={carpoolText}><i>
            Another group is also going here from your area. <u>Carpool</u> for a cheaper price!
            </i></div>
          </Col>
          <Col xs={3} style={smallerRowStyle}>
            {/* TIME TAKEN */}
            <p style={detailsText}>17 mins</p>
          </Col>
        </Row>
        <Row style={smallerRowStyle}>
          <Col xs={3}>
            {/* "OTHER ROUTE" */}
            <p style={otherText}>Other routes</p>
          </Col>
          <Col xs={6}>
            {/* ROUTE DETAILS */}
            <Row style={smallerRowStyle}>
              <p style={detailsText}><DriveEtaSVG style={{width:'20px', height: '20px', marginLeft:'5px'}} color="#969696"/>
              Drive</p>
            </Row>
            <Row style={smallerRowStyle}>
              <p style={detailsText}><TrainSVG style={{width:'20px', height: '20px', marginLeft:'5px'}} color="#969696"/>
              Transit</p>
            </Row>
            <Row style={smallerRowStyle}>
              <p style={detailsText}><DirectionsWalkSVG style={{width:'20px', height: '20px', marginLeft:'5px'}} color="#969696"/>
              Walk</p>
            </Row>
          </Col>
          <Col xs={3}>
            {/* TIME TAKEN */}
            <Row style={smallerRowStyle}>
              <p style={detailsText}>{this.state.drivingTime}</p>
            </Row>
            <Row style={smallerRowStyle}>
              <p style={detailsText}>{this.state.transitTime}</p>
            </Row>
            <Row style={smallerRowStyle}>
              <p style={detailsText}>{this.state.walkingTime}</p>
            </Row>
          </Col>
        </Row>
        </Col>
      </MuiThemeProvider>
    )
  }
}

export default Transport

/*

<Row style={smallerRowStyle}>
    <p style={detailsText}><TrainSVG style={{width:'20px', height: '20px', marginLeft:'5px'}} color="#969696"/>
    via Shenzhen North Station</p>
  </Row>
  <Row style={smallerRowStyle}>
    <p style={detailsText}><TrainSVG style={{width:'20px', height: '20px', marginLeft:'5px'}} color="#969696"/>
    via Huanzhong Line</p>
  </Row>

  */