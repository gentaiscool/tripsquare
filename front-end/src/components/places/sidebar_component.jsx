import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AccountBoxSVG from 'material-ui/svg-icons/action/account-box';
import ListSVG from 'material-ui/svg-icons/action/list';
import ViewQuiltSVG from 'material-ui/svg-icons/action/view-quilt';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from 'material-ui/List';

const titleStyle = {
  fontFamily: 'Roboto Bold',
  fontSize: '17px',
  color: 'rgba(240,240,240,1.0)',
  textAlign: 'center',
  paddingLeft: '20px',
  paddingRight: '20px'
}

const dateStyle = {
  fontFamily: 'Roboto Regular',
  fontSize: '15px',
  color: 'rgba(240,240,240,1.0)',
  textAlign: 'center',
  paddingLeft: '20px',
  paddingRight: '20px'
}

const headerStyle = {
  fontFamily: 'Roboto Regular',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '14px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px'
}

const optionStyle = {
  fontFamily: 'Roboto Bold',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '14px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px'
}

const memberStyle = {
  fontFamily: 'Roboto Regular',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '12px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px'
}

const nameStyle = {
  fontFamily: 'Roboto Light',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '14px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '20px'
}

class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state = {hover_flag: false};
    }

    getDefaultProps(){
        return {
            isSelected: false
        };
    }

    getInitialState(){
        return {
            hover_flag: false
        };
    }

    hoverEvent(){
        this.setState({hover_flag: !this.state.hover_flag});
    }

    render(){
      var liStyle = {
        background: 'rgba(0,0,0,0)',
        paddingLeft: '10px'
      };
      
      if (this.state.hover_flag) {
        liStyle['background'] = '#880000';
      }

       return (
       		<MuiThemeProvider>
    				<Grid fluid style={{background:'rgba(62,50,50,1.0)',paddingLeft:'9px',paddingRight:'9px',paddingTop:'20px',height:'100%'}}>
    					<Row style={{}}>
                <div style={{marginBottom:'10px'}}>
      						<p style={titleStyle}>Journey to the West</p>
      						<p style={dateStyle}>10 April - 15 June</p>
                </div>
              </Row>
              <Row
                onMouseEnter={this.hoverEvent.bind(this)}
                onMouseLeave={this.hoverEvent.bind(this)}
                style={liStyle}>
                <ViewQuiltSVG style={{marginTop:'5px',marginRight:'10px'}} color="white"/>
                <p style={optionStyle}>PLAN</p>
              </Row>
              <Row
                style={{paddingLeft: '10px'}}>
                <ListSVG style={{marginTop:'5px',marginRight:'10px'}} color="white"/>
                <p style={optionStyle}>ITENERARY</p>
              </Row>
              <Row
                style={{paddingLeft: '10px', marginTop: "15px"}}>
                <p style={memberStyle}>MEMBERS</p>
              </Row>
              <Row>
                <p style={nameStyle}>Gentaman</p>
              </Row>
              <Row>
                <p style={nameStyle}>Gentaman1</p>
              </Row>
              <Row>
                <p style={nameStyle}>Gentaman2</p>
              </Row>
              <Row>
                <p style={nameStyle}>Gentaman3</p>
    					</Row>
    				</Grid>
    			</MuiThemeProvider>
       )
    }
}

export default Sidebar
