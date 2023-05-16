import classNames from 'classnames/bind';

import styles from './Information.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faCalendarAlt, faCirclePlus, faPencil,} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper} from '~/components/Popper' ;

import Search from '../Search'
import { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

const cx = classNames.bind(styles)

function Header() {

    const [showButton, setShowButton] = useState(false)

    const handleOnclick = () => {
        setShowButton(true)
    }
    const handleHideButton = () => {
        setShowButton(false)
    }
    return ( 
        <header className={cx('header')}>
            <div className={cx('title')}>
                <h3>Your itinerary</h3>
                <div>
                    <FontAwesomeIcon className={cx('icon')} icon={faArrowUpFromBracket}/>
                    <a>Share</a>
                </div>
            </div>

            <div className={cx('timeStones')}>
                    <div className={cx('date')}>
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <span>15 Jun to 30 Jun 2023</span>
                        <FontAwesomeIcon icon={faPencil}/>
                    </div>

                    <div className={cx('days')}>
                        <span>1 Travel Days</span>
                        <FontAwesomeIcon icon={faPencil}/>
                    </div>
            </div>

            <button onClick={handleOnclick} className={cx('input-next-destination')}>
                <Tippy
                    interactive
                    visible ={showButton}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('show-button-input')} tabIndex="-1" {...attrs}>
                                <Search/>
                        </div>
                    )}
                    onClickOutside={handleHideButton}
                >
                    <div>
                        {!!showButton || (<div className={cx('hide-button-input')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCirclePlus}/>
                            <span>Add your next destination or choose from the map</span>
                        </div>)}
                    </div>
                </Tippy>
                    
            </button>


        </header>
     );
}

export default Header;

                