/* eslint-disable react/jsx-no-comment-textnodes */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcAmazonPay, faCcAmex, faCcApplePay, 
    faCcJcb, faCcMastercard, faCcPaypal, faCcVisa, faFacebook, 
    faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss'
import Navigation from './Navigation/Navigation';
import { NavigationIcon, NavigationTitle } from './Navigation';
import Button from '~/components/Button';
import config from '~/config';
import images from '~/assets/images/images';
import PartnerLink from './PartnerLink/PartnerLink';

const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <footer className={cx('wrapper')}>

            <PartnerLink/>

            <div className={cx('footer')}>
                <div className={cx('footer-navigation')}>
                    <div className={cx('container')}>
                            <div className={cx('navigation')}>
                                <Navigation>
                                    <h3>OUR COMPANY</h3>
                                    <NavigationTitle title='About Us'/>
                                    <NavigationTitle title='News'/>
                                    <NavigationTitle title='Careers'/>
                                    <NavigationTitle title='Press & marketing inquiries'/>
                                    <NavigationTitle title='Become our partner'/>
                                    <NavigationTitle title='Sponsored & branded content'/>
                                </Navigation>
    
                                <Navigation>
                                    <h3>GET STARTED</h3>
                                    <NavigationTitle title='What is Eurail?'/>
                                    <NavigationTitle title='How to use your Pass'/>
                                    <NavigationTitle title='Magazine'/>
                                    <NavigationTitle title='Community'/>
                                    <NavigationTitle title='Download the app'/>
                                    <NavigationTitle title='Support'/>
                                </Navigation>
                  
    
                                <Navigation>
                                    <h3>TERMS & CONDITIONS</h3>
                                    <NavigationTitle title='Booking Conditions'/>
                                    <NavigationTitle title='Refunds & exchanges'/>
                                    <NavigationTitle title='Privacy & Cookie Statement'/>
                                    <NavigationTitle title='Rail Planner App Privacy Policy'/>
                                    <NavigationTitle title='Disclaimer'/>
                                    <NavigationTitle title='Eurail Pass Conditions of Use'/>
                                </Navigation>
                            </div>
            
                            <div className={cx('sub-sription')}>
                                <h3>STAY UPDATED!</h3>
                                <span className={cx('sub-sription-title')}>Join our Newsletter for exclusive discounts, inspirational travel content And a chance to <strong>win 2x Eurail Passes!</strong></span>
                                <div>
                                    <div className={cx('letter')}>
                                        <div><input className={cx('letter-email')} type='email' placeholder='Email address (required)'/></div>
                                        <div className={cx('letter-other')}>
                                            <input className={cx('letter-name')} type='text' placeholder='First Name' />
                                            <input className={cx('letter-country')} type='email' placeholder='Country'/>
                                        </div>
                                    </div>
                                    <div className={cx('option')}>
                                        <input className={cx('option-checkbox')} type='checkbox'/>
                                        <span className={cx('option-title')}>By signing up for our newsletter you agree to our terms and conditions.</span>
                                    </div>
                                    <Button primary>Sign me up</Button>
                                </div>
                            </div>
                </div>
    
                <div className={cx('footer-end')}>                
                    <div className={cx('footer-container')}>
                        <div className={cx('footer-link-logo')}>
                            <Link to={config.routes.home} className={cx('logo-link')}>
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <img src={images.logo}/>
                            </Link>
                        </div>
                        <div className={cx('footer-link-socials')}>
                                        <NavigationIcon href={'https://www.w3schools.com'} icon={<FontAwesomeIcon icon={faFacebook}/>}/>
                                        <NavigationIcon href={'https://www.w3schools.com'}  icon={<FontAwesomeIcon icon={faInstagram}/>}/>
                                        <NavigationIcon href={'https://www.w3schools.com'}  icon={<FontAwesomeIcon icon={faYoutube}/>}/>
                                        <NavigationIcon href={'https://www.w3schools.com'}  icon={<FontAwesomeIcon icon={faPinterest}/>}/>
                                        <NavigationIcon href={'https://www.w3schools.com'}  icon={<FontAwesomeIcon icon={faTwitter}/>}/>
                                 </div>
                        <div className={cx('footer-link-providers')}>
                                    <NavigationIcon to='' icon={<FontAwesomeIcon icon={faCcVisa}/>}/>
                                    <NavigationIcon icon={<FontAwesomeIcon icon={faCcMastercard}/>}/>
                                    <NavigationIcon icon={<FontAwesomeIcon icon={faCcPaypal}/>}/>
                                    <NavigationIcon icon={<FontAwesomeIcon icon={faCcJcb}/>}/>
                                    <NavigationIcon icon={<FontAwesomeIcon icon={faCcAmazonPay}/>}/>
                                    <NavigationIcon icon={<FontAwesomeIcon icon={faCcAmex}/>}/>
                                    <NavigationIcon icon={<FontAwesomeIcon icon={faCcApplePay}/>}/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;
