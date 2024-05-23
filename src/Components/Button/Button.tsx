import React, { FC } from 'react'

import { Text } from '../Text';

import styles from './Button.module.css';
import { SVG_ICONS } from '@/Consts/SvgIcons';

interface ButtonProps {
    color: string;
    text?: string;
    description?: string;
    className?: string;
    iconName?: string;
    error?: boolean;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = (props): React.JSX.Element => {
    const { color, text, description, className, iconName, error, onClick } = props;

    return (
        <button
            style={{ backgroundColor: color }}
            className={`${styles.button}${className ? ` ${className}` : ''}${error ? ` ${styles.error}` : ''}`}
            onClick={onClick}>
            <div className={styles.textWithIcon}>
                {iconName && SVG_ICONS[iconName]}
                {text && <Text tag='p' text={text} />}
            </div>
            {description && <Text tag='span' text={description} />}
        </button>
    )
}
