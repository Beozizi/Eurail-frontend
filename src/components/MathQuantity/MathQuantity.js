import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './MathQuantity.module.scss';
import MathQuantityItem from './MathQuantityItem';
import Button from '../Button/Button';
import {Wrapper as PopperWrapper} from '~/components/Popper';

const cx = classNames.bind(styles)

function MathQuantity({children, totalResult}) {

    

    const [firstResult, setFirstResult] = useState(0)
    const [secondResult, setSecondResult] = useState(0)
    const [thirdResult, setThirdResult] = useState(0)
    const [fourthResult, setFourthResult] = useState(0)
    // 
    const handleFirstMinus = () => {
        if(firstResult> 0){
            setFirstResult((firstResult - 1))

        }
    }
    
    const handleFirstPlus = () => {
        if(total > 0)
        setFirstResult(firstResult + 1)
        
    }
    // 
    const handleSecondMinus = () => {
        if(secondResult > 0) {
            setSecondResult((secondResult-1))

        }
    }
    const handleSecondPlus = () => {
            setSecondResult((secondResult + 1))
    }
    //
    const handleThirdMinus = () => {
        if(thirdResult > 0) {
            setThirdResult((thirdResult-1))

        }
    }
    const handleThirdPlus = () => {
            setThirdResult((thirdResult + 1))


    }
    //
    const handleFourthMinus = () => {
        if(fourthResult > 0) {
            setFourthResult((fourthResult-1))
        }
    }
    const handleFourthPlus = () => {
            setFourthResult((fourthResult + 1))


    }
    const total = firstResult + secondResult + thirdResult + fourthResult
    totalResult(total)
    

    const [options, setOptions] = useState(false)
    const handleClick = () => {
        setOptions(true)
    }

    const handleHideResult = () => {
        setOptions(false)
    }

    console.log(options)

    const renderResult = (attrs) => (
        <div className={cx('math-quantity-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('math-quantity-list')}>
                            <MathQuantityItem
                            type = 'Youths'
                            range = '(12-27)'
                            handlePlus={handleThirdPlus}
                            count = {thirdResult}
                            handleMinus={handleThirdMinus}
                            
                            />
                            <MathQuantityItem
                                type = 'Adults'
                                range = '(28+)'
                                handlePlus={handleFourthPlus}
                                count = {fourthResult}
                                handleMinus={handleFourthMinus}
                            />
                            <MathQuantityItem
                                type = 'Children'
                                range = '(4-11)'
                                handlePlus={handleFirstPlus}
                                count = {firstResult}
                                handleMinus={handleFirstMinus}
                                
                                />
                            <MathQuantityItem
                                type = 'Seniors'
                                range = '(60+)'
                                handlePlus={handleSecondPlus}
                                count = {secondResult}
                                handleMinus={handleSecondMinus}
                                
                                />
                        </PopperWrapper>

                    <div className={cx('footer')}>
                        <span>Baby on board? Children under 3 travel free and don't need a Pass.</span>
                        <Button outline onClick={handleHideResult}>Done</Button>
                    </div>

                </div>

    )
    return ( 
            <Tippy
                interactive
                visible={options}
                placement="bottom-end"
                render={renderResult}
                onClickOutside={handleHideResult}
            >
                <div onClick={handleClick}>
                    {children}
                </div>
            </Tippy>
     );
}

export default MathQuantity;

 
