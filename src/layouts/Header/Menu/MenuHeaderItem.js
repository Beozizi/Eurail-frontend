import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles)

function MenuHeaderItem({title, icon, to}) {
    return ( 
        <NavLink className={cx('menu-header-item')} to={to}>
            <span className={cx('menu-header-item-title')}>{title}</span>
        </NavLink>
     );
};

MenuHeaderItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuHeaderItem