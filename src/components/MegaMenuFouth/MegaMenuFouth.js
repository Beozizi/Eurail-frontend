import {Wrapper as PopperWrapper} from '~/components/Popper';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './MegaMenuFouth.module.scss';
import { MenuHeaderItem } from '~/layouts/Header/Menu';
import MegaMenuFouthItem from './MegaMenuFouthItem';


const cx = classNames.bind(styles);

function MegaMenuFouth({items = []}) {
    

    const renderItems = () => {
        return(items.map((item, index) => 
             (<MegaMenuFouthItem
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
                    <MenuHeaderItem title="Help"/>
                </div>
            </Tippy>
     );
}

MegaMenuFouth.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
}



export default MegaMenuFouth;