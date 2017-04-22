import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';
import RaisedButton from 'material-ui/RaisedButton';
 
function SendMessage(props) {
  function send(message) {
    props.socket.emit('message', message);
  }
 
  return (
	 <RaisedButton
        backgroundColor="#a4c639"
        label={<span style={{padding:'0px', fontFamily: 'Roboto Regular', color: '#ffffff'}}>Send</span>}
        style={{}}
        onClick={sendprops.message)}
      />
  );
}
 
export default socketConnect(SendMessage);