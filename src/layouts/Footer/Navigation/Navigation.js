import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Navigation.module.scss'

const cx = classNames.bind(styles)

function Navigation({children}) {
    return ( 
        <div className={cx('wrapper')}>
            {children}
        </div>
     );
}

Navigation.propTypes = {
    children: PropTypes.node.isRequired
}

export default Navigation;