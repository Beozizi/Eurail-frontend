import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import {Wrapper as PopperWrapper} from '~/components/Popper';
import styles from './MegaMenu.module.scss';
import MegaMenuItem from './MegaMenuItem';
import { MenuHeaderItem } from '~/layouts/Header/Menu';
import MegaHeader from './MegaHeader';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {}

function MegaMenu({items , onChange = defaultFn}) {
    const [history, setHistory] = useState([{data: items}])

    const current = history[history.length - 1];
    console.log(current)


    const renderItems= () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
            <MegaMenuItem 
                key ={index} 
                data ={item}
                onClick={() => {
                    if(isParent) {
                        setHistory((prev) => [...prev, item.children])
                    } else {
                        onChange(item);
                    }
                }} 
            />

            )
        });
    };
    const handleBack = () => {
        setHistory((prev) => 
            prev.slice(0, prev.length - 1),
        )
    }

    const renderResult = (attrs) => (
        <div className={cx('mega-menu-container')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('mega-menu-list')}>
                {history.length > 1 && (
                    <MegaHeader 
                        title={current.title}
                        onBack={handleBack}
                    />)}
            <div className={cx('mega-menu-body')}>{renderItems()}</div>
            </PopperWrapper>
         </div>

    )

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1))
    }

    return (
            <Tippy
                interactive
                delay={[400, 200]}
                placement="bottom-end"
                onHide={handleResetToFirstPage}
                render={renderResult}
            >
                <div className={cx('parent')}>
                    <MenuHeaderItem title="Get inspired"/>
                </div>
            </Tippy>
     );
}

MegaMenu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
}


export default MegaMenu;