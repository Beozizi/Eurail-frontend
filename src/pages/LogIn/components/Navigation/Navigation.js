/* eslint-disable jsx-a11y/alt-text */
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
                    <h2>Log in</h2>
                    <h4>Log in with your email and password.</h4>
                    <input 
                            title="Email" 
                            placeholder="Email" 
                            spellCheck={false}
                        />
                    <input 
                            title="Email" 
                            placeholder="Password" 
                            spellCheck={false}

                    />
                    <div className={cx('note')}>
                        <input type='checkbox'></input>
                        <p>Sign me up to receive discounts, deals, and travel inspiration by email.</p>
                    </div>
                    <Button primary>Log in</Button>
                    <Link to={config.routes.forgot}>Forgotten your password?</Link>
                    <span className={cx('line')}>Or</span>
                    <div className={cx('links')}>
                    <a href='facebook.com'>
                            <div className={cx('facebook')}>
                                <img src={images.facebooklink}/>
                                <span>Continue with FaceBook</span>
                            </div>
                        </a>
                        <a  href='google.com'>
                            <div className={cx('google')}>
                                <img src={images.googlelink}/>
                                <span>Continue with Google</span>
                            </div>
                        </a>
                    </div>
                    <div className={cx('sign-up')}>
                        <span>Don’t have an account?</span> <Link to={config.routes.signin}>Sign up now</Link>
                    </div>
                </div>
                    
            </div>
        </div>
     );
}

export default Navigation;