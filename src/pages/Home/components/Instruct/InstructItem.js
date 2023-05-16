
import classNames from 'classnames/bind';
import styles from './Instruct.module.scss';

const cx = classNames.bind(styles)

function InstructItem({className, title, link, numbers, images, content, to}) {
    return ( 
       <div  className={className}>
            <div className={cx('instructItem-container')} to={to}  >
                    <div className={cx('instructItem-container-images')}>{images}</div>
                    <div className={cx('instructItem-container-title')}>
                        <button className={cx('instructItem-container-button')}>{numbers}</button>
                        <h4>{title}</h4>
                    </div>
                    <span className={cx('instructItem-container-content')}>{content}</span>
    
                    <p className={cx('instructItem-container-link')}>{link}</p>
            </div>
       </div>
     );
};


export default InstructItem;
