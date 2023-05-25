import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {useState, useCallback} from 'react';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const zoom = 9.8;


export default function TrailDetailMap({trail}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GMAP_API,
    });
    
    const center = {
        lat: trail.lat,
    lng: trail.long
    };

    const [map, setMap] = useState(null);
        

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <></>
        </GoogleMap>
    ) : <></>
}