import {Wrapper as PopperWrapper} from '~/components/Popper';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from './MegaMenu.module.scss';
import MegaMenuItem from './MegaMenuItem';
import { MenuHeaderItem } from '~/layouts/Header/Menu';

const cx = classNames.bind(styles);

function MegaMenu({firstItems = [], secondItems = [], thirdItems = [],}) {
    console.log(firstItems)
    const renderItemsFirstColum = () => {
        return(firstItems.map((item, index) => 
             (<MegaMenuItem 
                key ={index} 
                data ={item} 
            />)
        ))}

    
    const renderItemsSecondColum = () => {
        return(secondItems.map((item, index) => 
             (<MegaMenuItem 
                key ={index} 
                data ={item} 
            />)
        ))
    }   

    const renderItemsThirdColum = () => {
        return(thirdItems.map((item, index) => 
             (<MegaMenuItem 
                key ={index} 
                data ={item} 
            />)
        ))
    }
    return (
            <Tippy
            visible
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('mega-menu-container')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('mega-menu-list')}>
                            {renderItemsFirstColum()}
                        </PopperWrapper>
                        <PopperWrapper className={cx('mega-menu-list')}>
                            {renderItemsSecondColum()}
                        </PopperWrapper>
                        <PopperWrapper className={cx('mega-menu-list')}>
                            {renderItemsThirdColum()}
                        </PopperWrapper>
                        <PopperWrapper className={cx('mega-menu-list')}>
                        </PopperWrapper>
                    </div>
                    )
                }
            >
                <div className={cx('parent')}>
                    <MenuHeaderItem title="Get inspired"/>
                </div>
            </Tippy>
     );
}

MegaMenu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
}


export default MegaMenu;