import classNames from 'classnames/bind';

import styles from './MegaMenuSecond.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function MegaHeader({title, onBack}) {
    console.log(onBack)
    return ( 
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon className={cx('icon')} icon={faArrowLeft}/>
                <span>Back</span>
            </button>
            
            <h3 className={cx('header-title')}>{title}</h3>
        </header>
     );
}

export default MegaHeader;