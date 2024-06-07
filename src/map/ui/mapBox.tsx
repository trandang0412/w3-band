import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = process.env.REACT_APP_TOKEN;

interface Props {
    mapData: any[];
    // latitudeLA: number
    // longitudeLT: number
}

function MapBox({ mapData }: Props) {
    const [viewPort, setViewPort] = useState({
        latitude: 10.8478761,
        longitude: 106.6431419,
        zoom: 15,
    });

    return (
        <div>
            <ReactMapGL
                initialViewState={{
                    latitude: 10.8478761,
                    longitude: 106.6431419,
                    zoom: 15,
                }}
                {...viewPort}
                mapboxAccessToken={TOKEN}
                style={{ width: '40vw', height: '100vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onMove={(viewPort) => setViewPort()}
            >
                {mapData.map((item) => {
                    console.log(item.longitude);
                    return (
                        <Marker longitude={item.longitude} latitude={item.latitude} anchor="bottom">
                            <img src="https://cdn2-staging.kidsplaza.store/assets/icons/marker.png" />
                        </Marker>
                    );
                })}
            </ReactMapGL>
        </div>
    );
}

export default MapBox;
