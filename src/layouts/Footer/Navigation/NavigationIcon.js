import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles)

function NavigationIcon({icon, href}) {
    return ( 
        <NavLink className={cx('navigationIcon')} href={href}>
            <span className={cx('navigationIcon-icon')}>{icon}</span>
        </NavLink>
     );
};

NavigationIcon.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default NavigationIcon