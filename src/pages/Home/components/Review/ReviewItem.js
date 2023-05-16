import classNames from 'classnames/bind';

import styles from './Review.module.scss';

const cx = classNames.bind(styles)

function ReviewItem({data, onClick}) {

    const classes = cx('ReviewItem-container')
    return ( 
        <div className={classes} onClick={onClick} >
                 <div className={cx('ReviewItem-content')}>
                    <div className={cx('text-content')}>
                        <span>{data.content}</span>
                        <p>{data.sign}</p>
                    </div>
                    <div className={cx('images-content')}>
                        {data.images}
                    </div>
                 </div>     
        </div>
     );
}

export default ReviewItem;
