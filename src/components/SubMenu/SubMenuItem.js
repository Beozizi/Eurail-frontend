import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SubMenu.module.scss';

const cx = classNames.bind(styles);

function SubMenuItem({data, onClick}) {
    const classes = cx('sub-menu-item')

    return ( 
        <div className={classes} onClick={onClick}>
            <span >
                {data.icon}
            </span>
            <span  className={cx('sub-menu-item-title')}>
                {data.title}
            </span>
        </div>
     );
}

SubMenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
}

export default SubMenuItem;
