/* eslint-disable jsx-a11y/alt-text */
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping, faChevronDown, faCircleUser, faDollarSign, faGlobe, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {Inspired, LanguageItems, MoneyItems, Plan, Passes, Help} from './Menu/Options';

import styles from './Header.module.scss'
import {MenuHeaderItem} from './Menu';
import {MenuSubHeaderItem} from './Menu';
import config from "~/config";
import SubMenu from "~/components/SubMenu";
import images from "~/assets/images/images";
import MegaMenu from "~/components/MegaMenu/MegaMenu";


import MegaMenuSecond from "~/components/MegaMenuSecond/MegaMenuSecond";
import MegaMenuThird from "~/components/MegaMenuThird/MegaMenuThird";
import MegaMenuFouth from "~/components/MegaMenuFouth/MegaMenuFouth";


const cx = classNames.bind(styles);

function Header() {


    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('sub-header')}>
               <SubMenu items={LanguageItems}>
                   <MenuSubHeaderItem 
                        icon={<FontAwesomeIcon icon={faGlobe}/>} 
                        title="English"
                        subIcon={<FontAwesomeIcon icon={faChevronDown}/>}/>
               </SubMenu>

               <SubMenu items={MoneyItems}>
                   <MenuSubHeaderItem  
                        icon={<FontAwesomeIcon icon={faDollarSign}/>} 
                        title="USD" 
                        subIcon={<FontAwesomeIcon icon={faChevronDown}/>}/>
               </SubMenu>

               <SubMenu>
                   <MenuSubHeaderItem 
                        icon={<FontAwesomeIcon icon={faCircleUser}/>} 
                        title="Log In"
                        to={config.routes.login}
                        />
               </SubMenu>
            </div>

            <div className={cx('header')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo}/>
                </Link>
                <div className={cx('navigator')} >  
                    <div className={cx('navigator-info')}>
                                <MegaMenu items={Inspired}  />
                                <MegaMenuSecond items={Plan}/>
                                <MegaMenuThird items={Passes}/>
                                <MenuHeaderItem title="Seat reservations"/>
                                <MenuHeaderItem title="Deals"/>
                                <MegaMenuFouth items={Help}/>
                            </div >
                        
                            <div className={cx('navigator-icon')}>
                                <span className={cx('icon')}><FontAwesomeIcon icon={faSearch}/></span>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faCartShopping}/>
                                    <button className={cx('button')}>1</button>
                                </span>
                            </div>
                </div>
            </div>
        </header>
     );
}

export default Header;