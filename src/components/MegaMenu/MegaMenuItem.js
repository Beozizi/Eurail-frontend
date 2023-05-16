import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './MegaMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MegaMenuItem({data, onClick}) {
  
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

MegaMenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
}

export default MegaMenuItem;
