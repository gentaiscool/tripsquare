import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Scrollbars } from 'react-custom-scrollbars';
import Avatar from 'material-ui/Avatar';

import TrainSVG from 'material-ui/svg-icons/maps/train';

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
  justifyContent: 'center'
}

const sponsorIconStyle = {
  width: '45px',
  height: 'auto',
  marginRight: '5px'
}

const smallerRowStyle = {
  marginBottom:'-10px'
}

class Transport extends Component {
  constructor(props) {
    super(props);
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
            <p style={detailsText}><img src='http://i.imgur.com/yjcpE7N.png' 
            style={sponsorIconStyle}/> via Long Rd. to Safari Park</p>
          </Col>
          <Col xs={3}>
            {/* TIME TAKEN */}
            <p style={detailsText}>33 min.</p>
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
              <p style={detailsText}><TrainSVG style={{width:'20px', height: '20px', marginLeft:'5px'}} color="#969696"/>
              via Shenzhen North Station</p>
            </Row>
            <Row style={smallerRowStyle}>
              <p style={detailsText}><TrainSVG style={{width:'20px', height: '20px', marginLeft:'5px'}} color="#969696"/>
              via Huanzhong Line</p>
            </Row>
          </Col>
          <Col xs={3}>
            {/* TIME TAKEN */}
            <Row style={smallerRowStyle}>
              <p style={detailsText}>48 min.</p>
            </Row>
            <Row style={smallerRowStyle}>
              <p style={detailsText}>54 min.</p>
            </Row>
          </Col>
        </Row>
        </Col>
      </MuiThemeProvider>
    )
  }
}

export default Transport