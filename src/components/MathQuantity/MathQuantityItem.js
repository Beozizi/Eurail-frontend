import classNames from 'classnames/bind';

import styles from './MathQuantity.module.scss';

const cx = classNames.bind(styles)

function MathQuantityItem({type, range, count, handlePlus, handleMinus}) {
    return ( 
        <div className={cx('container')}>
            <div className={cx('info')}> 
                <span>{type}</span>
                <p>{range}</p>
            </div>

            <div className={cx('math')}>
                <button onClick={handleMinus}>-</button>
                    <span>{count}</span>
                <button onClick={handlePlus}>+</button>
            </div>

        </div>
     );
}

export default MathQuantityItem;