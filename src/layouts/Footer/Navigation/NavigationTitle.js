import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles)

function NavigationTitle({title, to}) {
    return ( 
        <NavLink className={cx('navigationnTitle')}>
            <span className={cx('navigationnTitle-title')}>{title}</span>
        </NavLink>
     );
};

NavigationTitle.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default NavigationTitle