
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';


import styles from './Search.module.scss';
import DestinationItem from '~/components/DestinationItem/DestinationItem';
import { Wrapper as PopperWrapper} from '~/components/Popper' ;

const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    const handleHideResult = () => {
        setShowResult(false);
    }

    return ( 
        <div  className={cx('input-destination')}>
            <button className={cx('icon')}>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
            <Tippy
                    interactive
                    visible={showResult && searchValue.length > 0}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('input-destination-result')} tabIndex="-1" {...attrs}>
                            {/* <PopperWrapper  className={cx('result-list')}>
                                <DestinationItem />
                                <DestinationItem />
                                <DestinationItem />
                                <DestinationItem />
                                <DestinationItem />
                            </PopperWrapper> */}
                        </div>
                    )}
                    onClickOutside={handleHideResult}
                >
                    <div className={cx('input-container')} >
                        <input 
                            ref={inputRef}
                            title="text" 
                            placeholder="Search for a destination" 
                            value={searchValue}
                            spellCheck={false}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faXmark}/>
                            </button>)}
                    </div>
                    
                </Tippy>
        </div>
     );
}

export default Search;

