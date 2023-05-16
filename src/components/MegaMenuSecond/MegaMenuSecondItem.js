
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './MegaMenuSecond.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MegaMenuSecondItem({data, onClick}) {
  
    const classes = cx('mega-menu-item')
    return ( 
        <NavLink className={classes}  to={data.to}>
            <span>{data.title}</span>
            {!!data.children && (<button onClick={onClick}>
                <FontAwesomeIcon icon={faPlus}/> 
            </button>)}
        </NavLink>
     );
}

export default MegaMenuSecondItem;
