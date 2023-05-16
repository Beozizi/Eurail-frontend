import classNames from 'classnames/bind';

import styles from './DestinationItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function DestinationItem() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <FontAwesomeIcon icon={faLocationDot}/> 
                <span>Son Doong, Quang Binh</span>
            </div>
        </div>
     );
}

export default DestinationItem;