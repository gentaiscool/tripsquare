/* REACT LIBRARIES */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Scrollbars } from 'react-custom-scrollbars';
import { instanceOf } from 'prop-types';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

/* MATERIAL UI */
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import { List, ListItemText, ListItemIcon } from 'material-ui/List';

/* COMPONENT */
import MessageBox from './chat_console/message_box_component.jsx';

import {
  SocketProvider,
  socketConnect,
} from 'socket.io-react';

import io from 'socket.io-client';

/* STYLE */
const headerStyle = {
  background: 'rgba(254,254,254,1.0)',
  width: '100%',
  height: '100%',
  borderColor: 'rgba(230,230,230,1.0)',
  borderWidth: '1px',
  borderStyle: 'solid',
  padding: '0px'
}

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  alignItems:'center',
  justifyContent:'center',
  borderColor: 'rgba(230,230,230,0.8)',
  borderWidth: '2px',
  borderStyle: 'solid',
  marginRight: '20px'
}

const titleStyle = {
  fontFamily: 'Roboto Bold',
  color: 'rgba(40,40,40,1.0)',
  fontSize: '15px',
  padding: '0px',
  margin: '0px',
  paddingTop: '5px',
  paddingBottom: '5px'
}

var socket;

class ChatConsole extends Component {
    constructor(props){
      super(props);

      socket = props.socket;
      const { cookies } = instanceOf(Cookies).isRequired;
      console.log(">>");
      console.log(Cookies);

      socket.on("send_back", this.sendBack.bind(this));

      this.state = {
        message: "",
        chatMessages: [],
        id: "id",
        name: "Genta",
        imageUrl: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAhtAAAAJDZlNmJkNTFhLTdhMzEtNGFjZi1iMjU3LTNkNWE3NjY5YjYzZQ.jpg",
        email: "gentaindrawinata@gmail.com"
        /*id: cookies.get('id'),
        name: cookies.get('name'),
        imageUrl: cookies.get('imageUrl'),
        email: cookies.get('email')*/
      }
    }

  sendBack(data){
      var object = {
        'name': "Emma Watson",
        'imageUrl': "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F8a6af7a7-1381-47d8-a9b8-c070e14d69e5.jpg",
        'email': "emma@google.com",
        'message': data,
        'channelId': "id"
      }

      var arr = this.state.chatMessages;
      arr.push(object);
      this.setState({message: ''});
      this.setState({chatMessages: arr});
      console.log("send_back");
  }

  changeMessage(event){
      //console.log("change: " + message);   
      this.setState({message: event.target.value});
  }

  sendMessage(){
      var object = {
        'name': this.state.name,
        'imageUrl': this.state.imageUrl,
        'email': this.state.email,
        'message': this.state.message,
        'channelId': this.state.channelId
      }

      var arr = this.state.chatMessages;
      arr.push(object);
      this.setState({message: ''});
      this.setState({chatMessages: arr});

      console.log(this.state.chatMessages[this.state.chatMessages.length-1]['str']);
      console.log(this.state.chatMessages.length);

      socket.emit("message", object);

      //this.setState({message: ""});
    }

    render(){
      return (
       		<MuiThemeProvider>
    				<Grid fluid style={headerStyle}>
              <Row style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor:'rgba(70,70,70,0.3)', paddingLeft: '10px', height:'60px', margin:'0px', background:'rgba(238,238,238,1.0)',alignItems:'center',justifyContent:'left'}}>
                <Col xs={6} style={{margin:'0px', padding:'0px'}}>
                  <p style={titleStyle}>Group Chat</p>
                </Col>
                <Col xs={6} style={{margin:'0px', padding:'0px', display:'flex', justifyContent:'right'}}>
                  <Avatar
                    src="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F8a6af7a7-1381-47d8-a9b8-c070e14d69e5.jpg"
                    size={40}
                    style={imageStyle}
                  />
                </Col>
              </Row>
              <Row style={{height:'350px', background: 'rgba(235,235,235,1.0)', padding: '0px', margin: '0px'}}>
                <Col xs={12} style={{padding:'0px', paddingLeft:'-10px', margin:'0px'}}>
                  <Scrollbars style={{margin:'0px', marginTop:'5px', height:'350px', padding:'0px'}}>
                    {
                      this.state.chatMessages.map((message) =>
                        <MessageBox imageUrl={message.imageUrl} message={message.message} />
                      )
                    }
                  </Scrollbars>
                </Col>
              </Row>
              <Row style={{margin:'0px', padding:'0px', height:'50px', background: 'rgba(225,225,225,0.8)'}}>
                <Col xs={9}>
                  <TextField hintText="Message" style={{marginLeft:'20px', marginRight:'10px', width:'90%'}}
                    value={this.state.message} onChange={this.changeMessage.bind(this)}
                  />
                </Col>
                <Col xs={3} style={{padding:'10px'}}>
                    <RaisedButton
                      backgroundColor="#a4c639"
                      label={<span style={{padding:'0px', fontFamily: 'Roboto Regular', color: '#ffffff'}}>Send</span>}
                      style={{}}
                      onClick={this.sendMessage.bind(this)}
                    />
                </Col>
              </Row>
    				</Grid>
    			</MuiThemeProvider>
       )
    }
}

export default ChatConsole
