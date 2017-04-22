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

const usernameStyle = {
  fontFamily: 'Roboto Regular',
  fontSize: '14px',
  color: 'rgba(240,240,240,1.0)',
  textAlign: 'left',
  paddingLeft: '7px',
  paddingRight: '4px'
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

const onlineIconStyle = {
  width:'10px', height: '10px', marginTop:'6px'
}

const notifIconStyle = {
  display: 'flex',
  justifyContent: 'right',
  width:'20px', 
  height: '20px', 
  alignItems: 'right', 
  flexDirection: 'row',
  paddingTop: '5px',
  paddingRight: '20px',
  paddingLeft: '15px',
  marginRight: '10px'
}

const notifTextStyle = {
  position: 'absolute',
  fontFamily: 'Roboto Bold',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '12px',
  marginLeft: '21px',
  marginTop: '2px'
}

const memberStyle = {
  justifyContent: 'center',
  display: 'flex',
  fontFamily: 'Roboto Regular',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '12px',
  margin: '0px',
  paddingBottom: '10px',
  flexDirection: 'row'
}

const tripNameStyle = {
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'Roboto Light',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '14px',
  margin: '0px',
  paddingBottom: '5px',
  paddingTop: '4px',
  paddingLeft: '15px',
  paddingRight: '4px'
}

const memberNameStyle = {
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'Roboto Light',
  color: 'rgba(240,240,240,1.0)',
  fontSize: '14px',
  margin: '0px',
  paddingLeft: '7px'
}

class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hover_flag_plan: false, 
        hover_flag_itinerary: false
      };
    }

    getDefaultProps(){
      return {
          isSelected: false
      };
    }

    getInitialState(){
      return {
          hover_flag_plan: false,
          hover_flag_itinerary: false
      };
    }

    hoverPlanEvent(){
      this.setState({hover_flag_plan: !this.state.hover_flag_plan});
    }

    hoverItineraryEvent(){
      this.setState({hover_flag_itinerary: !this.state.hover_flag_itinerary});
    }

    onItineraryClickHandler(){
      console.log("sidebar: onItineraryClickHandler")
      this.props.onItineraryClickCallback();
    }

    onPlannerClickHandler(){
      this.props.onPlannerClickCallback();
    }

    render(){
      var planStyle = {
        background: 'rgba(0,0,0,0)',
        paddingLeft: '10px'
      };
      
      if (this.state.hover_flag_plan) {
        planStyle['background'] = '#880000';
      }

      var itiStyle = {
        background: 'rgba(0,0,0,0)',
        paddingLeft: '10px'
      };
      
      if (this.state.hover_flag_itinerary) {
        itiStyle['background'] = '#880000';
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
              <Row style={{paddingLeft:'15px'}}>
                <img src='https://img.clipartfest.com/7fbf9e3baf7de5640dbbc57f5e373374_clip-art-green-trademark-clip-clipart-green-circle_600-600.png' 
                      style={onlineIconStyle} 
                />
                <p style={usernameStyle}>@kharisds</p>
              </Row>

              {/* PLAN LIST ITEM */}
              <Row
                onMouseEnter={this.hoverPlanEvent.bind(this)}
                onMouseLeave={this.hoverPlanEvent.bind(this)}
                style={planStyle}
                onClick={this.onPlannerClickHandler.bind(this)}>
                <ViewQuiltSVG style={{marginTop:'5px',marginRight:'10px'}} color="white"/>
                <p style={optionStyle}>PLAN</p>
              </Row>

              {/* ITINERARY LIST ITEM */}
              <Row
                onMouseEnter={this.hoverItineraryEvent.bind(this)}
                onMouseLeave={this.hoverItineraryEvent.bind(this)}
                style={itiStyle}
                onClick={this.onItineraryClickHandler.bind(this)}>
                <ListSVG style={{marginTop:'5px',marginRight:'10px'}} color="white"/>
                <p style={optionStyle}>ITENERARY</p>
              </Row>

              {/* TRIPS TITLE */}
              <Row
                style={{paddingLeft: '10px', marginTop: "15px"}}>
                <p style={optionStyle}>TRIPS</p>
              </Row>
              {/* TRIP 1 */}
              <Row style={{justifyContent:'center', alignItems: 'left'}}>
                <Col xs={9}>
                  <p style={tripNameStyle}>Bali Trip</p>
                </Col>
                <Col xs={3}>
                  <p style={notifTextStyle}>1</p>
                  <img src='http://www.iconsdb.com/icons/preview/persian-red/circle-xxl.png' 
                      style={notifIconStyle} 
                  />
                </Col>
              </Row>
              {/* TRIP 2 */}
              <Row style={{justifyContent:'center', alignItems: 'left'}}>
                <Col xs={9}>
                  <p style={tripNameStyle}>Trip to Hong Kong</p>
                </Col>
                <Col xs={3}>
                  <p style={notifTextStyle}>4</p>
                  <img src='http://www.iconsdb.com/icons/preview/persian-red/circle-xxl.png' 
                      style={notifIconStyle} 
                  />
                </Col>
              </Row>
              {/* TRIP 3 */}
              <Row style={{justifyContent:'center', alignItems: 'left'}}>
                <Col xs={9}>
                  <p style={tripNameStyle}>Bangkok Trip</p>
                </Col>
                <Col xs={3}>
                </Col>
              </Row>

              {/* MEMBERS TITLE */}
              <Row
                style={{paddingLeft: '10px', marginTop: "15px"}}>
                <p style={optionStyle}>MEMBERS</p>
              </Row>
              {/* MEMBER 1 */}
              <Row style={{paddingLeft:'15px'}}>
                <img src='https://img.clipartfest.com/7fbf9e3baf7de5640dbbc57f5e373374_clip-art-green-trademark-clip-clipart-green-circle_600-600.png' 
                      style={onlineIconStyle} 
                />
                <p style={memberNameStyle}>Genta</p>
              </Row>
              {/* MEMBER 2 */}
              <Row style={{paddingLeft:'15px'}}>
                <img src='http://i.imgur.com/5JqJyJy.png' 
                      style={onlineIconStyle} 
                />
                <p style={memberNameStyle}>Felicia</p>
              </Row>
              {/* MEMBER 3 */}
              <Row style={{paddingLeft:'15px'}}>
                <img src='http://i.imgur.com/5JqJyJy.png' 
                      style={onlineIconStyle} 
                />
                <p style={memberNameStyle}>Jane</p>
              </Row>
              {/* MEMBER 4 */}
              <Row style={{paddingLeft:'15px'}}>
                <img src='http://i.imgur.com/5JqJyJy.png' 
                      style={onlineIconStyle} 
                />
                <p style={memberNameStyle}>Johnny</p>
    					</Row>

            {/* INVITE PEOPLE */}
            <Row style={{paddingLeft:'15px'}}>
              <p style={optionStyle}>+ Invite people</p>
            </Row>
    				</Grid>
    			</MuiThemeProvider>
       )
    }
}

export default Sidebar
