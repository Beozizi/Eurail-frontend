import {Wrapper as PopperWrapper} from '~/components/Popper';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './MegaMenuThird.module.scss';
import { MenuHeaderItem } from '~/layouts/Header/Menu';
import MegaMenuThirdItem from './MegaMenuThirdItem';


const cx = classNames.bind(styles);

function MegaMenuThird({items =[]}) {
    
    const renderItems = () => {
        return(items.map((item, index) => 
             (<MegaMenuThirdItem 
                key ={index} 
                data ={item} 
            />)
        ))}

   
    return (
            <Tippy
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('mega-menu-container')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('mega-menu-list')}>
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                    )
                }
            >
                <div className={cx('parent')}>
                    <MenuHeaderItem title="Eurail Passes"/>  
                </div>
            </Tippy>
     );
}

MegaMenuThird.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
}



export default MegaMenuThird;