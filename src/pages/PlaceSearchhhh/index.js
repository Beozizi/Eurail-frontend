/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';


import styles from './PlaceSearch.module.scss';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow, } from "@react-google-maps/api";

import {
        Combobox,
        ComboboxInput,
        ComboboxPopover,
        ComboboxList,
        ComboboxOption,
      } from "@reach/combobox";
import "@reach/combobox/styles.css";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";


import { useCallback, useRef, useState } from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core';
import images from '~/assets/images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

export default function PlaceSearchh() {
    
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
        mapRef.current.setZoom(8);
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
    </div>
  );
}

