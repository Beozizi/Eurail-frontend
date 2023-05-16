import classNames from 'classnames/bind';

import styles from './Flag.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faHouse} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles)
function Flag() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link to={config.routes.home} className={cx('home')}>
                    <FontAwesomeIcon  icon={faHouse}/>
                </Link>
                <FontAwesomeIcon className={cx('second-icon')} icon={faCaretRight}/>
                <span>Log in to your Eurail account</span>
            </div>
        </div>
     );
}

export default Flag;