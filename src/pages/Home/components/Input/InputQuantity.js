import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faUsers} from '@fortawesome/free-solid-svg-icons';

import styles from './Input.module.scss';
import MathQuantity from '~/components/MathQuantity/MathQuantity';

const cx = classNames.bind(styles)

function InputQuantity({onClick}) {
    const [showResult, setShowResult] = useState('')

    return ( 
            <div className={cx('input-quantity')}>
                <MathQuantity totalResult={setShowResult} onClick={onClick}>
                    <div className={cx('quantiy-container')}>
                        <button className={cx('icon')}>
                            <FontAwesomeIcon icon={faUsers}/>
                        </button>
                        <div className={cx('input-container')}>
                            <button className={cx('button-container')}>
                                {!!showResult ||(<span>Add Travellers</span>)}
                                {showResult === 0 || (<h4>{showResult} Travellers</h4>)}
                                    <span></span>
                                    <FontAwesomeIcon icon={faChevronDown}/>
                            </button>
                        </div>
                    </div>
                </MathQuantity>
            </div>
     );
}

export default InputQuantity;



