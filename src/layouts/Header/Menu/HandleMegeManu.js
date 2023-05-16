// import {Wrapper as PopperWrapper} from '~/components/Popper';
// import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
// import Tippy from '@tippyjs/react/headless';

// import styles from './Menu.module.scss';
// import SubMenuItem from './SubMenuItem';
// import { useState } from 'react';
// import MenuHeaderItem from './MenuHeaderItem';

// const cx = classNames.bind(styles);

// function HandleMegaMenu({items = []}) {
//     const [options, setOptions] = useState(false)

//     const handleClick = () => {
//         setOptions(true)
//     }
//     const handleHideResult = () => {
//         setOptions(false)
//     }
//     const renderItems = () => {
//         return(items.map((item, index) => 
//              (<SubMenuItem 
//                 key ={index} 
//                 data ={item} 
//             />)
//         ))
//     }   
//     return (
//         <Tippy
//             interactive
//             visible ={options}
//             placement="bottom-end"
//             render={(attrs) => (
//                 <div className={cx('sub-menu-list')} tabIndex="-1" {...attrs}>
//                     <PopperWrapper>
//                         {renderItems()}
//                     </PopperWrapper>
//                 </div>
//             )}
//             onClickOutside={handleHideResult}
//         >
//             <div onClick={handleClick}>
//                 <MenuHeaderItem title='a'/>
//             </div>
//         </Tippy>
//      );
// }

// HandleMegaMenu.propTypes = {
//     children: PropTypes.node.isRequired,
//     items: PropTypes.array,
// }


// export default HandleMegaMenu;
