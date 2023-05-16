
import classNames from 'classnames/bind';
import styles from './Note.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function NoteItem({title}) {
    return ( 
        <span className={cx('note-item')} >
            <FontAwesomeIcon className={cx('note-item-icon')} icon={faCircleCheck}/>
            <span className={cx('note-item-title')}>{title}</span>

        </span>
     );
};


export default NoteItem;