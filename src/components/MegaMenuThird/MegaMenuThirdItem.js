
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './MegaMenuThird.module.scss';

const cx = classNames.bind(styles);

function MegaMenuThirdItem({data, onClick, key}) {
    const classes = cx('mega-menu-item')
    return ( 
        <NavLink className={classes} onClick={onClick} to={data.to}>
            {data.title}
        </NavLink>
     );
}

export default MegaMenuThirdItem;
