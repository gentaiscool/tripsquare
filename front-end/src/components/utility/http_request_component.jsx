import React, { Component } from 'react';
import Request from 'react-http-request';
 
class HttpRequest extends Component {
  render() {
    var origin = "Toronto";
    var destination = "Montreal";
    var key = "AIzaSyDqLv6-xuJb3MU2d5hN4G42qAqNbeZ6SRM";
    var url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&key=' + key;

    return (
      <Request
        url={url}
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{ JSON.stringify(result) }</div>;
            }
          }
        }
      </Request>
    );
  }
}

export default HttpRequest