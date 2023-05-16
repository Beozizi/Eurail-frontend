import classNames from 'classnames/bind';

import styles from './Note.module.scss';
import NoteItem from './NoteItem';

const cx = classNames.bind(styles)

function Note() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('note' ,'note-left')}>
                <h1>Discover Europe at your own place</h1>
                    <NoteItem title='Create your very own route and build your itinerary'/>
                    <NoteItem title='Start traveling up to 11 months after purchase'/>
                    <NoteItem title='Free, instant delivery - add it straight to the app'/>
            </div>
            <div className={cx('note','note-right')}>
                <h1>Don't forget about seat revervations</h1>
                <NoteItem title='Check your trains on our timetable and make any mandatory seat reservations,'/>
                <NoteItem title='To make your trip more comfortable, consider booking reservations even if they are just recommended'/>
            </div>
        </div> 
    );
}

export default Note;