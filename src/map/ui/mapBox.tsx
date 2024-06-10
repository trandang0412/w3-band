import { useContext, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapContext } from '../context/mapContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const TOKEN = process.env.REACT_APP_TOKEN;

interface Props {
    mapData: any[];
    // latitudeLA: number
    // longitudeLT: number
}
interface MapRef {}

function MapBox({ mapData }: Props) {
    const { viewPort, setViewPort } = useContext(mapContext);

    const [showPopup, setShowPopup] = useState(null);

    return (
        <div>
            <ReactMapGL
                initialViewState={{
                    latitude: 10.8478761,
                    longitude: 106.6431419,
                    zoom: 6,
                }}
                {...viewPort}
                mapboxAccessToken={TOKEN}
                style={{ width: '40vw', height: '90vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onMove={(evt) => setViewPort(evt.viewState)}
            >
                {mapData.map((item) => {
                    return (
                        <div>
                            <Marker
                                longitude={item.longitude}
                                latitude={item.latitude}
                                anchor="bottom"
                                onClick={(e) => {
                                    e.originalEvent.stopPropagation();
                                    setShowPopup(item.source_code);
                                }}
                            >
                                <img className='w-[50%]' src="https://cdn2-staging.kidsplaza.store/assets/icons/marker.png" />
                            </Marker>

                            {showPopup === item.source_code && (
                                <Popup
                                    longitude={item.longitude}
                                    latitude={item.latitude}
                                    anchor="bottom"
                                    onClose={() => setShowPopup(null)}
                                    closeButton={false}
                                >
                                    <div className='flex flex-col'>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faCircleXmark}
                                                className="float-right text-[20px] cursor-pointer hover:text-gray-500"
                                                onClick={() => setShowPopup(null)}
                                            />
                                        </div>
                                        <div>
                                            <div className='py-1'><b>Địa chỉ: </b> {item.name}</div>
                                            <div className='py-1'><b>Mô tả: </b>{item.description}</div>
                                            <div className='py-1'><b>Số điện thoại: </b>{item.phone}</div>
                                        </div>
                                    </div>
                                </Popup>
                            )}
                        </div>
                    );
                })}
            </ReactMapGL>
        </div>
    );
}

export default MapBox;
