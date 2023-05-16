import classNames from 'classnames/bind';

import styles from './Navigation.module.scss'
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';
import images from '~/assets/images/images';
import config from '~/config';

const cx = classNames.bind(styles)

function Navigation() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <div className={cx('container')}>
                    <h2>Eurail.com Terms and Conditions</h2>                    
                    <div className={cx('content')}>
                            <p>Our Terms & Conditions explain the rules and guidelines that help define our website, and the services we offer our customers. Please be sure you are familiar with these guidelines while you’re using our site, and before you buy your Eurail pass.</p>
                            <p>Read more about our:</p>
                            <ul>
                                <li>
                                    <Link>Booking Terms</Link><br/>
                                    General Policies, Age Limits, Country of Residence and Refund & Exchange
                                </li>
                                <li>
                                    <Link>Eurail Pass Conditions of Use</Link><br/>
                                    The Special Conditions of International Carriage (SCIC)
                                </li>
                                <li>
                                    <Link>Terms of Use</Link><br/>
                                    Website usage conditions
                                </li>
                                <li>
                                    <Link>Privacy and Cookie Policy</Link><br/>
                                    Our efforts to ensure your privacy
                                </li>
                            </ul>
                        </div>
                </div>
                    
            </div>
        </div>
     );
}

export default Navigation;