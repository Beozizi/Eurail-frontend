import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles)

function MenuSubHeaderItem({title, icon, subIcon, to}) {
    return ( 
        <NavLink className={cx('menu-sub-header-item')} to={to}>
            <span className={cx('menu-sub-header-item-icon')}>{icon}</span>
            <span className={cx('menu-sub-header-item-title')}>{title}</span>
            <span className={cx('menu-sub-header-item-sub-icon')}>{subIcon}</span>
        </NavLink>
     );
};

MenuSubHeaderItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuSubHeaderItem;