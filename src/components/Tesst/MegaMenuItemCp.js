import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './MegaMenuCp.module.scss';

const cx = classNames.bind(styles);

function MegaMenuItemCp({data, onClick}) {
    
    console.log(data)

    const classes = cx('mega-menu-item')
    return ( 
        <NavLink className={classes} onClick={onClick} to={data.to}>
            {data.title}
        </NavLink>
     );
}

MegaMenuItemCp.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
}

export default MegaMenuItemCp;
