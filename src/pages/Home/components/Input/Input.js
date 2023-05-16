import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import Button from '~/components/Button/Button';
import InputDestination from './InputDestination';
import InputQuantity from './InputQuantity';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles)

function Input() {
    
    return (
        
        <div className={cx('wrapper')}>
            <div className={cx('input-info')}>
                <InputDestination/>
                <InputQuantity/>
                <Link to={config.routes.placeSearch} className={cx('button-link')}>
                    <Button small>Let's go</Button>
                </Link>
            </div>
        </div>
     );
}

export default Input;

