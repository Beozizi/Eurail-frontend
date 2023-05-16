import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Navigation.module.scss';
import Information from './Information/';
import Search from './Search';
import HideInformation from './HideInformation/HideInformation';

import { useJsApiLoader,  GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles)
function Navigation() {
    const [showInfor, setShowInfor] = useState(false)
    const [positon, setPositon] =useState(cx('before-position'))
    const [direction, setDirection] = useState(">")
    const handleOnclick = () => {
        if(showInfor == false){
            setPositon(cx('after-position'))
            setShowInfor(true)
            setDirection("<")
        }
        if(showInfor == true){
            setShowInfor(false)
            setPositon(cx('before-position'))
            setDirection(">")
            
        }
    }

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries: ["places"],
    })
    if (!isLoaded) {
        return <Skeleton />
    }


    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('information')}>
                {showInfor && ( <Information/>)}
                <button 
                    onClick={handleOnclick}
                    className={positon}>{direction}
                    </button>
                {showInfor || (<HideInformation/>)}
            </div>
        </div>
     );
}

export default Navigation;

