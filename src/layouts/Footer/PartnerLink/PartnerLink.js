import classNames from 'classnames/bind';

import styles from './PartnerLink.module.scss';
import {Advertising, AdvertisingSecond, AdvertisingThird, AdvertisingFourth, AdvertisingFifth, AdvertisingSixth, AdvertisingSeventh, AdvertisingEighth, AdvertisingNineth, AdvertisingTenth} from '~/assets/images/advertising';

const cx = classNames.bind(styles)

function PartnerLink() {
    return ( 
        <div className={cx('partner-links')}>
                <h2>Our partners include</h2>
                <div className={cx('partner-logo')}>
                   <div className={cx('logo')}><Advertising/></div>
                    <div className={cx('logo')} ><AdvertisingSecond /></div>
                    <div className={cx('logo')} ><AdvertisingThird /></div>
                    <div className={cx('logo')} ><AdvertisingFourth /></div>
                    <div className={cx('logo')} ><AdvertisingFifth /></div>
                    <div className={cx('logo')} ><AdvertisingSixth /></div>
                    <div className={cx('logo')} ><AdvertisingSeventh /></div>
                    <div className={cx('logo')} ><AdvertisingEighth /></div>
                    <div className={cx('logo')} ><AdvertisingNineth /></div>
                    <div className={cx('logo')} ><AdvertisingTenth /></div>
                </div>       
        </div>
     );
}

export default PartnerLink;