import classNames from 'classnames/bind';

import styles from './HideInformation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { useState } from 'react';
import Search from '../Search/Search';

const cx = classNames.bind(styles)

function HideInformation() {
    const [showButton, setShowButton] = useState(false)

    const handleOnclick = () => {
        setShowButton(true)
    }
    const handleHideButton = () => {
        setShowButton(false)
    }

    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span>My trip</span>
                <Tippy
                    interactive
                    visible={showButton}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('show-button-input')} tabIndex="-1" {...attrs}>
                            <Search/>
                        </div>
                    )}
                    onClickOutside={handleHideButton}
                    >
                    <div 
                        onClick={handleOnclick}
                        className={cx('hide-button-input')}>
                        {!!showButton || (<FontAwesomeIcon className={cx('icon')} icon={faCirclePlus}/>)}
                    </div>
                    </Tippy>
                <span>Add</span>
            </header>
            
        </div>
     );
}

export default HideInformation;

