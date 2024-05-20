import React, { FC } from 'react'
import { TextType } from '@/Consts';

import { Text } from '../Text';

import styles from './Button.module.css';

interface ButtonProps {
    color: string;
    text?: string;
    textType: string;
    description?: string;
    className?: string;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = (props): React.JSX.Element => {
    const { color, text, description, textType, className, onClick } = props;

    return (
        <button
            className={`${styles.button}${className ? ` ${className}` : ''}`}
            style={{ backgroundColor: color }}
            onClick={onClick}>
            {text && <Text tag='p' type={textType} text={text} />}
            {description && <Text tag='span' type={TextType.BUTTON_DESCRIPTION} text={description} />}
        </button>
    )
}
