// import {Wrapper as PopperWrapper} from '~/components/Popper';
// import classNames from 'classnames/bind';
// import PropTypes  from 'prop-types';
// import Tippy from '@tippyjs/react/headless';

// import styles from './MegaMenuCp.module.scss';
// import MegaMenuItemCp from './MegaMenuItemCp';
// import { MenuHeaderItem } from '~/layouts/Header/Menu';


// const cx = classNames.bind(styles);

// function MegaMenuCp({ firstItems =[]}) {
    
//     // console.log(items)
//     console.log(firstItems)


//     const showImages = items.filter((item, index) => {
//         return index == 0
//     });


//     const renderItems = () => {
//         showImages.map((elem) => {
//             return elem.map((item, index) => 
//                 (<MegaMenuItemCp 
//                     key ={index} 
//                     data ={item} 
//                 />)
//         )
//        })
//     }

   

//     const renderItemsFirstColum = () => {
//         return(firstItems.map((item, index) => 
//              (<MegaMenuItemCp 
//                 key ={index} 
//                 data ={item} 
//             />)
//         ))}

    
//     return (
//             <Tippy
//                 interactive
//                 placement="bottom-end"
//                 render={(attrs) => (
//                     <div className={cx('mega-menu-container')} tabIndex="-1" {...attrs}>
//                         <PopperWrapper className={cx('mega-menu-list')}>
//                             {/* {renderItems()} */}
//                         </PopperWrapper>
//                         <PopperWrapper className={cx('mega-menu-list')}>
//                             {renderItemsFirstColum ()}
//                         </PopperWrapper>
//                     </div>
//                     )
//                 }
//             >
//                 <div className={cx('parent')}>
//                     <MenuHeaderItem title="Plan your trip"/>
//                 </div>
//             </Tippy>
//      );
// }

// MegaMenuCp.propTypes = {
//     children: PropTypes.node.isRequired,
//     items: PropTypes.array,
// }


// export default MegaMenuCp;
