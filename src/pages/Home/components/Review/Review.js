import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Review.module.scss';
import ReviewItem from './ReviewItem';
import { Album } from './ReviewAlbum';
import { useState } from 'react';

const cx = classNames.bind(styles)



function Review() {
    
    const [moveImages, setMoveImages] = useState(0)

    const [animation, setAnimation] = useState('')

    const handleMoveLeft = () => {
        if(moveImages == 0) {
            setMoveImages((moveImages + 1))
            setAnimation(cx('AnimationLeft'))
        }
        else {
            setMoveImages((moveImages - 1))
            setAnimation(cx('AnimationLeft'))
        }
    }
    const handleMoveRight = () => {
        if(moveImages == 0) {
            setMoveImages((moveImages + 1))
            setAnimation(cx('AnimationRight'))
        }
        else {
            setMoveImages((moveImages - 1))
            setAnimation(cx('AnimationRight'))
        }
    }      
    
    const showImages = Album.filter((images, index) => {
        return index == moveImages;
    });
    const renderItems = () => {
        return(showImages.map((item, index) => 
             (<ReviewItem 
                key ={index} 
                data ={item} 
            />)
        ))
    }   
     
    
    return ( 
        <div className={cx('wrapper')}>
                <div className={cx('Review-container')}>
                        <button onClick={
                                handleMoveLeft
                            }
                        >
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                    <div  className={cx('Review-content')} tabIndex="-1">
                            <div className={animation}>{renderItems()}</div>
                    </div>
                    <button onClick={
                            handleMoveRight 
                        }
                    >
                        <FontAwesomeIcon icon={faChevronRight}/></button>  
                </div>
                <div className={cx('navigation')}>

                    <button/>
                    <button/>
                </div>
        </div>
     );
    }
    
    export default Review;