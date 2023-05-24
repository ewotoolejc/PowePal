import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {useState, useCallback} from 'react';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const zoom = 9.8;
  
export default function MapForTrails({resort}) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyA0ZcnOz5HgPqbRcAUtUwYWgeu8XOwOAjQ',
    });

    const center = {
        lat: resort.lat,
    lng: resort.long
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