import classNames from 'classnames/bind';
import styles from './LogIn.module.scss'
import Flag from './components/Flag/Flag';
import Navigation from './components/Navigation/Navigation';
import PartnerLink from '~/layouts/Footer/PartnerLink/PartnerLink';

const cx = classNames.bind(styles);

function LogIn() {
    return ( 
        <div className={cx('wrapper')}>
                <Flag/>
                <Navigation/>
        </div> 
        );
}

export default LogIn;