/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';


import styles from './PlaceSearch.module.scss';
import {
    GoogleMap,
    useLoadScript,
    Marker,} from "@react-google-maps/api";
import { useCallback, useRef } from 'react';
import Search from './Search';
import Navigation from './Navagation/Navigation';

const cx = classNames.bind(styles)
const mapContainerStyle = {
        height: "100vh",
        width: "100vw",
      };
      const options = {
        disableDefaultUI: true,
        zoomControl: true,
      };
    const center = { lat: 14.0583, lng: 108.2772 }

    function PlaceSearch() {
      const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries: ["places"],
    })

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({lat, lng}) => {
      mapRef.current.panTo({lat, lng}),
      mapRef.current.setZoom(12);
    }, [])


    if (!isLoaded) {
        return <Skeleton />
    }
    if (loadError) {
        return "Error";
    }
  return (
    <div className={cx('wrapper')}>
        <GoogleMap
            id="map"
            center={center} 
            zoom={8} 
            mapContainerStyle={mapContainerStyle}
            options={options}
            onLoad={onMapLoad}
        >
          <Marker position={center}/>        
        </GoogleMap>
        <Search panTo={panTo} />
        <Navigation/>
    </div>
  );
}

export default PlaceSearch;