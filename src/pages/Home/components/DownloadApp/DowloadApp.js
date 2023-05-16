import classNames from 'classnames/bind';
import styles from './DownloadApp.module.scss';
import images from '~/assets/images/images';
import { AndroidApp, AppleApp } from '~/assets/images';

const cx = classNames.bind(styles)

function DownloadApp() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container-images')}>
                    <img src={images.downloadapp}/>
                </div>
                <div className={cx('content')}>
                    <span>Ready to travel?</span>
                    <h1>Download out Rail Planner app</h1>
                    <p>Plan your trip and show your Pass as you go.</p>
                    <div className={cx('advertising')}>
                        <a href='https://apps.apple.com/'> 
                            <AppleApp/>
                        </a>
                        <a href='https://play.google.com/'> 
                            <AndroidApp/>
                        </a>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default DownloadApp;