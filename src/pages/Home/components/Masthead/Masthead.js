/* eslint-disable react/jsx-no-comment-textnodes */
import classNames from "classnames/bind";

import styles from './Masthead.module.scss';
import images from "~/assets/images/images";
import Button from "~/components/Button/Button";
import Input from "~/pages/Home/components/Input";
const cx = classNames.bind(styles);

function Masthead() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('background')}>
                <img src={images.background}/>
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h1>33 countries with 1 Pass</h1>
                    <span >Want to explore all that Europe has to offer? Travel to over 30,000 destinations by train with one of our rail Passes!</span> 
                    <Button normal>Find your pass</Button>
                </div>

                <div className={cx('container-info')}>
                    <div className={cx('info')}>
                        <span className={cx('info-title')}>Start planning your trip</span>
                        <Input />
                    </div>
                </div>
            </div>
    </div> 
    );
}

export default Masthead;