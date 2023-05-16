import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';
import classNames from 'classnames';

import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';

const cx = classNames.bind(styles);

function MainLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            
            <div className={cx('content')}>
                {children}
            </div>

            <Footer/>
        </div>
     );
}

MainLayout.propTyep = {
    children: PropTypes.node.isRequired,
}
export default MainLayout