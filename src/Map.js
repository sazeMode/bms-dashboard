import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import {fromJS} from 'immutable';

class Map extends Component {
    state = {
        viewport: {
            // Width is 100 % of viewport
            width: "100vw",
            height: 500,
            latitude: 45.4211,
            longitude: -75.6903,
            zoom: 10
        }
    };

    render() {
        return (
            <ReactMapGL mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    }
}

export default Map;