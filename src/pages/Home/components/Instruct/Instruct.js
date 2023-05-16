import classNames from 'classnames/bind';

import styles from './Instruct.module.scss'
import { InstructFirst, InstructSecond, InstructThird, InstructFord } from '~/assets/images';
import InstructItem from './InstructItem';

const cx = classNames.bind(styles)

function Instruct() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('instruct-container')}>
                <h2 className={cx('instruct-title')}>Build your Eurail adventure in 4 easy steps</h2>

                <div className={cx('instruct-content')}>
                    <InstructItem
                        className={cx('InstructFirst')} 
                        images={<InstructFirst/>}
                        numbers='1'
                        title='Plan your route'
                        content='Plan where you are going and which trains will take you there.'
                        link='Start planing'
                        />

                    <InstructItem 
                        className={cx('InstructSecond')}
                        images={<InstructSecond />}
                        numbers='2'
                        title='Find your Pass'
                        content='Travel with a Global Pass or a One Country Pass - It is is up to you.'
                        link='Explore Passes'
                    />

                    <InstructItem 
                        className={cx('InstructThird')}
                        images={<InstructThird/>}
                        numbers='3'
                        title='Reserve your seats'
                        content='Do your trains need seat revervations? Book them early'
                        link='Check reservations'
                    />

                    <InstructItem 
                        className={cx('InstructFord')}
                        images={<InstructFord/>}
                        numbers='4'
                        title='Active your Pass'
                        content='Add your Pass to the App, active it, and jump on train!'
                        link='Learn how'
                        
                    />
                </div>
            </div>
        </div>
     );
}

export default Instruct;