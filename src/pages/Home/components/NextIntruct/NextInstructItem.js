import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NextInstruct.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles)

function NextInstructItem({ title, images, to, times, address, type}) {
    return ( 
        <NavLink className={cx('NextinstructItem-item')} to={to}  >
            <div className={cx('NextinstructItem-container')} >
               <div className={cx('NextinstructItem-images')}>
                    {images}
                </div>
                    <h4>{title}</h4>
                 <div className={cx('NextinstructItem-info')}>
                     <div className={cx('NextinstructItem-address')}>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{address}</span>
                    </div>
                    <div className={cx('NextinstructItem-times')}>
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <span>{times}</span>
                    </div>
                    <div className={cx('NextinstructItem-type')}>
                        <FontAwesomeIcon icon={faTicket}/>
                        <span>{type}</span>
                    </div>
                 </div>
            </div>
        </NavLink>
     );
};

NextInstructItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NextInstructItem;
