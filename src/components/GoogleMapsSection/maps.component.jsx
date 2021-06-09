import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Maps extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        );
    }
}