import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import {Link} from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Button( {
    to,
    href,
    primary = false, 
    small = false, 
    normal = false,
    disabled = false,
    checkbox = false,
    outline =false,
    onClick,
    children,
    className,
    }) 
    {
        let Comp = 'button';
        const props = {
            onClick,
        };

        //Remove Event Listener When Button is Disabled

        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            })
        }

        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href
            Comp = 'a';
        }

        const classes = cx('wrapper',  {
            [className] : className,
            primary,
            small,
            normal,
            disabled,
            checkbox,
            outline,
        })
    return ( 
        <Comp className={classes} {...props}>
            <span className={cx('title')} >{children}</span>
        </Comp>
     );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,  
    disabled: PropTypes.bool,   
    small: PropTypes.bool,  
    large: PropTypes.bool,  
    children: PropTypes.node.isRequired, 
    className: PropTypes.string
}

export default Button;