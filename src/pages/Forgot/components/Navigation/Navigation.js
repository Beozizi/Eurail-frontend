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
                    <h2>Reset your password</h2>
                    <h4>Enter the email address you registered with; we'll send you an email with a link to reset your password. Registered with a social account? Log in to it before accessing your Eurail account.</h4>
                    <input 
                            title="Email" 
                            placeholder="Email *" 
                            spellCheck={false}
                    />
                    <Button primary>Send reset link</Button>
                    <div className={cx('sign-up')}>
                        <span>Back to</span> <Link to={config.routes.login}>Log in</Link>
                    </div>
                </div>
                    
            </div>
        </div>
     );
}

export default Navigation;