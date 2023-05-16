import classNames from 'classnames/bind';

import styles from './Information.module.scss';
import Header from './Header';

const cx = classNames.bind(styles)

function Information() {
    return ( 
        <div className={cx('information')}>
            <Header/>
        </div>
     );
}

export default Information;