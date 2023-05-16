/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';

import styles from './NextInstruct.module.scss'
// eslint-disable-next-line no-unused-vars
import { instructFirst, instructsecond, instructthird, instructford, instructfifth } from '~/assets/images';
import NextInstructItem from './NextInstructItem';
import images from '~/assets/images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Instruct() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('NextInstruct-container')}>

                <div className={cx('container-top')}>
                    <div className={cx('Nextinstruct-title')}>
                        <h2>Next Stop</h2>
                        <span>Get inspired by popular routes</span>
                    </div>
                    
                    <div className={cx('Nextinstruct-navigation')}>
                        <button><FontAwesomeIcon icon={faChevronLeft}/></button>
                        <button><FontAwesomeIcon icon={faChevronRight}/></button>
                    </div>
                </div>

                <div className={cx('Nextinstruct-content')}>
                    <NextInstructItem
                        className={cx('InstructFirst')} 
                        images={<img src={images.instructfirst}/>}

                        title='The best of Middle'
                        address='Ninh Thuan, Binh Thuan, Binh Dinh, Khanh Hoa'
                        times = '2 weeks or longer'
                        type= 'Eurail Spain Pass'
                        />

                        <NextInstructItem
                        className={cx('InstructFirst')} 
                        images={<img src={images.instructsecond}/>}
                        title='The best of North'
                        address='Ha Giang, Lai Chau, Dien Bien'
                        times = '2 weeks or longer'
                        type= 'Eurail Spain Pass'
                        />

                        <NextInstructItem
                        className={cx('InstructFirst')} 
                        images={<img src={images.instructthird}/>}
                        title='Ninh Binh Landscape'
                        address='Trang An, Dam Van Long, Cuc Phuong'
                        times = '10 days'
                        type= 'Eurail Spain Pass'
                        />

                        <NextInstructItem
                        className={cx('InstructFirst')} 
                        images={<img src={images.instructford}/>}
                        title='Big city'
                        address='Ha Noi, Ho Chi Minh, Da Nang'
                        times = '2 weeks'
                        type= 'Eurail Spain Pass'
                        />

                        {/* <NextInstructItem
                        className={cx('InstructFirst')} 
                        images={<img src={images.instructfifth}/>}
                        title='Biggest cave in the world '
                        address='Son Doong'
                        times = '2 weeks'
                        type= 'Spencial Pass'
                        /> */}
                </div>
            </div>
        </div>
     );
}

export default Instruct;