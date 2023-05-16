import {Wrapper as PopperWrapper} from '~/components/Popper';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from './SubMenu.module.scss';
import SubMenuItem from './SubMenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SubMenu({children, items = []}) {
    const [options, setOptions] = useState(false)

    const handleClick = () => {
        setOptions(true)
    }
    const handleHideResult = () => {
        setOptions(false)
    }
    const renderItems = () => {
        return(items.map((item, index) => 
             (<SubMenuItem 
                key ={index} 
                data ={item} 
            />)
        ))
    }   
    return (
        <Tippy
            interactive
            visible ={options}
            onClickOutside={handleHideResult}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('sub-menu-container')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('sub-menu-list')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            
        >
            <div onClick={handleClick}>
                {children}
            </div>
        </Tippy>
     );
}

SubMenu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
}


export default SubMenu;
